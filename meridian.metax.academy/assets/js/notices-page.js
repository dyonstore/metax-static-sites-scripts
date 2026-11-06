/* Renders the full notice list and the Part H Statement on notices.html.

   Both are generated from window.METAX — the same source the inline notices on
   every article read — so this page cannot drift from what readers are shown in
   place. That is deliberate: a governance page maintained separately from the
   thing it describes stops being true within a release or two. */
(function () {
  "use strict";

  var M = window.METAX;
  if (!M) { return; }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var LABEL = {
    error: "Open defect",
    warn: "Known limitation",
    info: "Standing disclosure",
    fixed: "Fixed"
  };

  /* ---- full notice list, grouped by kind so the worst is first ---- */
  var host = document.getElementById("notices-full");
  if (host) {
    var order = ["error", "warn", "info", "fixed"];
    var html = "";

    order.forEach(function (kind) {
      var group = (M.notices || []).filter(function (n) { return n.kind === kind; });
      if (!group.length) { return; }

      html += '<section class="notices" id="notices-' + kind + '">' +
        "<h2>" + esc(LABEL[kind]) + " <span style=\"font-weight:400;color:var(--ink-soft)\">· " +
        group.length + "</span></h2>" +
        '<ul class="notice-list">';

      group.forEach(function (n) {
        html += '<li class="notice notice-' + n.kind + '" id="' + esc(n.id) + '">' +
          '<p class="notice-head">' +
            '<span class="notice-kind">' + esc(n.id) + "</span>" +
            '<span class="notice-harm" title="' + esc(n.harmName || "") + '">' +
              esc(n.harm) + " · " + esc(n.harmName || "") + "</span>" +
          "</p>" +
          "<p class=\"notice-title\"><strong>" + esc(n.title) + "</strong></p>" +
          "<p class=\"notice-body\">" + n.body + "</p>" +
          '<p class="notice-status"><em>' + esc(n.status) + "</em></p>" +
        "</li>";
      });

      html += "</ul></section>";
    });

    host.innerHTML = html;
  }

  /* ---- Part H Statement (§H.16) ---- */
  var ph = M.partHStatement;
  var pHost = document.getElementById("parth-statement");
  if (pHost && ph) {
    var rows = (ph.applicable || []).map(function (a) {
      return "<tr><td><strong>" + esc(a.harm) + "</strong></td><td>" + esc(a.name) +
        "</td><td>" + esc(a.state) + "</td><td>" + esc(a.note) + "</td></tr>";
    }).join("");

    pHost.innerHTML =
      '<section class="notices" id="part-h-statement" style="background:#f4f6f9;border-color:#ccd6e2">' +
        "<h2>Part H Statement</h2>" +
        "<p><strong>Roles.</strong> " + esc(ph.roles) + "</p>" +
        "<p><strong>Scale.</strong> " + esc(ph.tier) + "</p>" +
        "<p>Under the Scale Gate this deployment owes the seven absolutes in full, and its remaining duties reduce " +
          "to publishing this one-page statement. The statement names harms we judge <strong>applicable and " +
          "unremedied</strong>, not only those we have dealt with — which is the requirement that makes it capable " +
          "of failing.</p>" +
        '<div class="table-wrap"><table class="cmp"><thead><tr>' +
          "<th>Harm</th><th>Name</th><th>Our state</th><th>Note</th>" +
        "</tr></thead><tbody>" + rows + "</tbody></table></div>" +
        '<p class="notice-status" style="margin-top:14px"><em>' + esc(ph.caveat) + "</em></p>" +
      "</section>";
  }
})();
