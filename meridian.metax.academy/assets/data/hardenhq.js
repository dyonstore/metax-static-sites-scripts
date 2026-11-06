/* HardenHQ — SMB cybersecurity. Content model. */
window.SITE_DATA = {
  slug: "hardenhq",
  brand: "HardenHQ",
  mark: "HQ",
  color: "#1f4d7a",
  tagline: "Security that fits a company without a security team",
  description: "Practical cybersecurity guidance for small and mid-sized businesses: baseline controls, MFA, backups, email security, compliance and incident response.",
  topicLong: "cybersecurity controls, compliance and incident response for small and mid-sized businesses",
  ymylLabel: "Security and compliance",
  reviewObject: "security tools, managed providers and control frameworks",
  updated: "24 July 2026",
  defaultAuthor: "Jonas Feld",
  defaultReviewer: "Ivy Chandrasekaran, CISSP",
  contactEmail: "hardenhq@metax.academy",
  disclaimer: "HardenHQ publishes general security guidance, not a security assessment of your environment. Controls must be adapted to your systems, contracts and regulatory obligations. Engage a qualified professional before relying on any configuration described here.",
  disclosureText: "Some links to security vendors and managed providers are affiliate links. They never affect scoring, ordering or inclusion.",
  legalLine: "HardenHQ is a publisher, not a managed security provider, and performs no monitoring or assessment.",
  footerAbout: "Baseline security controls, tool comparisons and incident playbooks for companies that have real risk but no dedicated security staff.",
  aboutDek: "Security guidance sized for companies with 5 to 500 people and no CISO.",
  aboutWhat: "Control-by-control baselines mapped to recognised frameworks; tool comparisons scored against a public rubric; incident response playbooks written to be used at 2am; and tools that turn a security posture into a prioritised list.",
  aboutDiff: [
    "Every recommendation is mapped to a named control in CIS or NIST, not invented.",
    "We rank by risk reduction per hour of effort, because your time is the real budget.",
    "We say when a control is theatre — several popular purchases are.",
    "A CISSP reviews technical guidance before publication."
  ],
  cannotDo: "We cannot assess your environment, respond to your incident, configure your systems, or certify your compliance. Those need an engaged professional with access to your infrastructure.",
  sourceStandards: [
    "CISA, NIST and NSA published guidance for control recommendations.",
    "CIS Critical Security Controls v8.1 for baseline mapping.",
    "Vendor documentation and configuration guides, with the version and date noted.",
    "Published incident data such as the FBI IC3 report and Verizon DBIR for prevalence claims."
  ],
  methodLimits: "We cannot test detection efficacy at enterprise scale, so tools are scored on documented capability, deployment friction and transparency rather than laboratory detection rates.",
  rubric: [
    { name: "Risk reduction", weight: "30%", what: "How much real-world attack surface the control or tool removes, weighted by attack prevalence." },
    { name: "Deployment friction", weight: "20%", what: "Hours to deploy, disruption to users, and how much ongoing administration it creates." },
    { name: "Total cost", weight: "20%", what: "Per-seat pricing at small scale, minimums, and what is gated behind an enterprise tier." },
    { name: "Visibility and evidence", weight: "15%", what: "Whether it produces the logs and reports an auditor, insurer or customer will ask for." },
    { name: "Failure behaviour", weight: "10%", what: "What happens when it breaks: fail-open, fail-closed, and lockout recovery." },
    { name: "Exit", weight: "5%", what: "Data export, uninstall cleanliness and contract exit terms." }
  ],
  evidence: [
    "Deploying tools in a representative 20-seat test environment.",
    "Timing the actual rollout, including user support load.",
    "Reading vendor documentation for what the marketing tier does not include.",
    "Interviews with MSPs and IT leads who administer these products daily."
  ],
  disqualifiers: [
    "Security claims that cannot be verified in documentation.",
    "Pricing available only after a sales call, at small-business scale.",
    "Products that require disabling other protections to function.",
    "Vendors who penalise disclosure of vulnerabilities in their own product."
  ],
  team: [
    { name: "Jonas Feld", role: "Editor-in-chief", bio: "Former IT manager who ran security for a 300-person distributed company. Writes baseline and rollout guidance.", focus: "Baselines, identity, endpoint" },
    { name: "Ana Sørlie", role: "Compliance editor", bio: "Ex-auditor covering SOC 2 and ISO 27001 readiness for small vendors.", focus: "SOC 2, questionnaires, policy" },
    { name: "Ray Okonkwo", role: "Incident response writer", bio: "Worked incident response at an MSP; writes the playbooks and tabletop material.", focus: "Ransomware, BEC, recovery" }
  ],
  reviewers: [
    { name: "Ivy Chandrasekaran, CISSP", credential: "CISSP, 15 years in security architecture and consulting", bio: "Reviews technical control guidance for accuracy and for realistic small-company applicability." },
    { name: "Peter Amadi", credential: "Lead auditor, ISO 27001", bio: "Reviews compliance and evidence guidance against how audits actually run." }
  ],
  newsletter: {
    name: "The Control Set",
    pitch: "Monthly: one control worth deploying, one threat actually hitting small companies, and one thing you can safely stop paying for.",
    cadence: "monthly",
    cta: "Get the monthly control",
    magnet: "The 20-control SMB security baseline (mapped to CIS v8.1)"
  },
  nav: [
    { label: "Start here", page: "security-baseline-smb" },
    { label: "Identity", page: "mfa-rollout-guide" },
    { label: "Resilience", page: "backup-strategy-smb" },
    { label: "Compliance", page: "soc2-readiness-guide" },
    { label: "Compare", page: "best-endpoint-protection" },
    { label: "Score tool", page: "security-score-calculator" }
  ],
  toolLinks: [
    { page: "security-score-calculator", label: "Security posture scorer", desc: "Answer twelve questions, get a weighted posture score and the three controls worth doing next." },
    { page: "security-baseline-checklist", label: "Baseline control checklist", desc: "The 30 controls that stop most small-business incidents — tick as you go, progress saves." }
  ],
  popular: ["cyber-insurance-requirements", "soc2-audit-cost", "managed-security-cost", "best-endpoint-protection"],
  featured: ["security-baseline-smb", "mfa-rollout-guide", "ransomware-playbook"],
  partners: [
    { slug: "shieldwise", why: "the cyber policy these controls unlock" },
    { slug: "stacksift", why: "vetting the SaaS tools you are securing" },
    { slug: "clausecraft", why: "the privacy and contract obligations behind the controls" }
  ],
  clusters: [
    { kicker: "Cluster 1", name: "Baseline and identity", desc: "The controls that stop most attacks, in the order worth doing them.", pages: ["security-baseline-smb", "mfa-rollout-guide", "password-manager-rollout", "phishing-training"] },
    { kicker: "Cluster 2", name: "Resilience", desc: "Surviving the incident you did not prevent.", pages: ["backup-strategy-smb", "ransomware-playbook", "incident-response-plan"] },
    { kicker: "Cluster 3", name: "Compliance and proof", desc: "Evidence for auditors, insurers and enterprise customers.", pages: ["soc2-readiness-guide", "security-questionnaires", "soc2-audit-cost", "cyber-insurance-requirements"] },
    { kicker: "Cluster 4", name: "Tools and spend", desc: "What to buy, what to skip, and what it should cost.", pages: ["best-endpoint-protection", "best-mfa-solutions", "managed-security-cost", "email-security-guide"] }
  ],

  pages: {
    index: {
      title: "HardenHQ — practical cybersecurity for small and mid-sized business",
      hero: {
        h1: "Security controls that fit a company without a security team",
        lead: "Baseline controls mapped to CIS, rollout guides written for real users, incident playbooks you can follow at 2am, and honest pricing on what security actually costs.",
        primary: { page: "security-baseline-smb", label: "Start with the baseline" },
        secondary: { page: "security-score-calculator", label: "Score your posture" },
        trust: ["CISSP-reviewed", "Mapped to CIS v8.1", "Ranked by risk per hour", "We name the theatre"],
        stats: [
          { v: "20", l: "Controls in the small-business baseline" },
          { v: "CIS", l: "Every recommendation mapped to a named control" },
          { v: "2 tools", l: "Posture scorer and baseline checklist" },
          { v: "0", l: "Vendor-written content, ever" }
        ]
      },
      why: "<p>Small companies get enterprise security advice and enterprise security pricing, then buy neither and end up with an antivirus subscription and hope.</p>" +
        "<p>HardenHQ ranks controls by risk reduction per hour of work. MFA on email beats almost everything else you could do this month. Tested backups beat almost everything after that. Most of the rest can wait, and some of it should never be bought at all.</p>" +
        "<p>We are a publisher, not a provider. We do not monitor anything, sell any tool, or benefit from you buying more than you need.</p>"
    },

    "security-baseline-smb": {
      title: "The small business security baseline: 20 controls that matter",
      h1: "A security baseline for companies without a security team",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "The controls that stop most real attacks, ordered by risk reduction per hour of effort and mapped to CIS v8.1.",
      disclosure: true,
      answer: "Do these five first: <strong>MFA on email and remote access</strong>, <strong>tested offline backups</strong>, <strong>managed endpoint detection</strong>, <strong>patching within 14 days</strong>, and <strong>a written payment-verification rule</strong>. They address the overwhelming majority of incidents that actually hit small companies.",
      table: {
        caption: "Baseline controls ranked by risk reduction per hour of effort.",
        headers: ["Control", "CIS mapping", "Effort", "Risk reduction", "Do it when"],
        rows: [
          { best: true, cells: ["MFA on email + remote access", "6.3, 6.4", "4–8 hours", "Very high", "This week"] },
          { best: true, cells: ["Tested offline/immutable backups", "11.1–11.4", "1–2 days", "Very high", "This month"] },
          { cells: ["Managed EDR on all endpoints", "10.1, 10.7", "1 day", "High", "This month"] },
          { cells: ["Patch within 14 days", "7.3, 7.4", "Ongoing", "High", "Now, as policy"] },
          { cells: ["Payment verification callback rule", "14.1", "1 hour", "High", "Today"] },
          { cells: ["Password manager for all staff", "5.2", "1 day", "Moderate", "This quarter"] },
          { cells: ["Remove local admin rights", "5.4", "2–5 days", "Moderate–high", "This quarter"] },
          { cells: ["Central log retention (90 days)", "8.1–8.3", "1 day", "Moderate", "Before an audit"] }
        ],
        note: "Effort estimates for a 25-person company on mainstream cloud identity, July 2026."
      },
      body:
        "<h2>Why this order</h2>" +
        "<p>Attack prevalence, not sophistication, should drive spending. Business email compromise and credential theft dominate real small-business losses; sophisticated intrusions are rarer than the marketing suggests. Fix identity and recovery first.</p>" +
        "<!--FIG:Risk reduction per hour of effort, control by control-->" +
        "<h2>The five that matter most</h2>" +
        "<ol><li><strong>MFA on email and remote access.</strong> Phishing-resistant where possible. See the <a href='mfa-rollout-guide.html'>rollout guide</a>.</li>" +
        "<li><strong>Backups you have restored from.</strong> Untested backups are a belief, not a control — see <a href='backup-strategy-smb.html'>backup strategy</a>.</li>" +
        "<li><strong>Managed endpoint detection.</strong> Consumer antivirus does not produce the telemetry you need after an incident.</li>" +
        "<li><strong>Patching cadence.</strong> Fourteen days for internet-facing systems, sooner for actively exploited flaws.</li>" +
        "<li><strong>Payment verification.</strong> A written rule that any change of bank details requires a callback to a known number. Free, and it stops the most expensive common loss.</li></ol>" +
        "<!--AD-->" +
        "<h2>What can wait</h2>" +
        "<p>SIEM platforms, deception technology, dark web monitoring, and most 'AI-powered' add-ons. They are not useless, but at 25 people they consume the budget and attention that the baseline needs first.</p>" +
        "<h2>Proving it later</h2>" +
        "<p>Insurers and enterprise customers will ask about exactly these controls. Getting them right also shortens <a href='security-questionnaires.html'>security questionnaires</a> and unlocks better <a href='cyber-insurance-requirements.html'>cyber cover</a>.</p>",
      faq: [
        { q: "How much should a 25-person company spend on security?", a: "<p>Typically $40–$90 per user per month all-in, including identity, endpoint, email security and backup. The baseline is achievable near the bottom of that range.</p>" },
        { q: "Do we need a security person?", a: "<p>Not usually under 100 people if you have competent IT and a defined baseline. Beyond that, someone needs to own it explicitly.</p>" },
        { q: "Is CIS or NIST better for a small company?", a: "<p>CIS Implementation Group 1 is the more practical starting point; NIST CSF is the better language for talking to enterprise customers.</p>" }
      ],
      sources: [
        { name: "CISA — Cyber Essentials", url: "https://www.cisa.gov/cyber-essentials" },
        { name: "CIS Critical Security Controls v8.1", url: "https://www.cisecurity.org/controls" }
      ],
      related: ["mfa-rollout-guide", "backup-strategy-smb", "security-baseline-checklist"],
      crossRefs: [{ slug: "shieldwise", page: "cyber-insurance-small-business", label: "Cyber insurance for small business", why: "These are the controls underwriters ask about before quoting." }]
    },

    "mfa-rollout-guide": {
      title: "Rolling out MFA across a small team without a revolt",
      h1: "MFA rollout, done properly",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Factor types ranked by real resistance, the rollout sequence that avoids lockouts, and recovery that is not a backdoor.",
      disclosure: true,
      answer: "Use <strong>phishing-resistant factors</strong> (passkeys or hardware keys) for admins and finance, an <strong>authenticator app</strong> for everyone else, and <strong>never SMS</strong> for privileged accounts. Roll out to IT first, then a pilot group, then the company, with break-glass accounts documented before you start.",
      table: {
        caption: "MFA factor types by phishing resistance and friction.",
        headers: ["Factor", "Phishing resistant", "User friction", "Cost", "Use for"],
        rows: [
          { best: true, cells: ["Passkeys / FIDO2 keys", "Yes", "Low once enrolled", "$25–60 per key", "Admins, finance, executives"] },
          { cells: ["Authenticator app (push + number match)", "Partially", "Low", "Free", "All standard staff"] },
          { cells: ["TOTP codes", "No", "Moderate", "Free", "Legacy systems only"] },
          { cells: ["SMS codes", "No", "Low", "Low", "Last resort, never for admins"] }
        ]
      },
      body:
        "<h2>The rollout sequence</h2>" +
        "<ol><li><strong>Document break-glass.</strong> Two emergency admin accounts, hardware keys, credentials in a sealed offline location, excluded from conditional access. Do this first.</li>" +
        "<li><strong>Enrol IT.</strong> Break the process on yourselves before users see it.</li>" +
        "<li><strong>Pilot group of ten</strong>, mixed technical ability, for one week.</li>" +
        "<li><strong>Company rollout</strong> with a two-week enrolment window and enforcement date.</li>" +
        "<li><strong>Enforce and clean up</strong> legacy authentication protocols, which bypass MFA entirely.</li></ol>" +
        "<!--AD-->" +
        "<h2>The step everyone forgets</h2>" +
        "<p>Legacy authentication. If IMAP, POP or legacy SMTP remain enabled, an attacker with valid credentials simply avoids MFA. Disabling legacy auth is what actually completes the rollout.</p>" +
        "<!--FIG:MFA coverage gaps: legacy protocols, service accounts, shared mailboxes-->" +
        "<h2>Recovery without a backdoor</h2>" +
        "<p>Help-desk resets are the standard attack path — an attacker calls, claims a lost phone, and gets a factor reset. Require identity verification through a second channel, and log every reset for review.</p>" +
        "<h2>Service and shared accounts</h2>" +
        "<p>Enumerate them before enforcement. Move them to managed identities or key-based authentication; do not leave a permanent exception because an old integration breaks.</p>",
      edge: {
        intro: "MFA guidance splits between vendor documentation, which explains enrolment, and awareness content, which explains why MFA matters. Neither covers the rollout as an operational project, so the two things that actually determine whether it worked go unaddressed: the authentication paths that continue to bypass it after enforcement, and the help-desk reset process that becomes the new front door. A rollout can reach 100% enrolment and leave the account takeover risk substantially intact.",
        gaps: [
          {
            claim: "Factor types are ranked by phishing resistance, with passkeys at the top and SMS at the bottom.",
            problem: "The ranking is right and it is presented as a property of the factor, when for the strongest factors it is a property of how they are registered and bound. A passkey or hardware key resists credential phishing because the assertion is cryptographically tied to the origin \u2014 but an attacker who can get a <em>new</em> factor registered has no need to phish the existing one, and the registration ceremony is usually protected by whatever weaker factor was in place at the time. This is the practical hole: enrolling everyone in a strong factor while leaving self-service registration open, or leaving a weak fallback available, gives the attacker a downgrade path. The other under-stated distinction is that SMS is weak for two independent reasons \u2014 interception and SIM takeover \u2014 and the second is not fixable by any configuration on your side, which is why it fails as an account-recovery channel even where it is tolerable as a routine factor.",
            ours: "We treat factor registration and account recovery as part of the factor's strength, close self-service enrolment paths and weak fallbacks, and reject SMS for recovery specifically rather than only for privileged sign-in."
          },
          {
            claim: "&lsquo;Disable legacy authentication protocols \u2014 IMAP, POP, legacy SMTP \u2014 and the rollout is complete.&rsquo;",
            problem: "Correct and incomplete, because legacy protocols are only the best-known bypass. Several others survive a clean enforcement. Application passwords and app-specific credentials, issued to make an old client work, authenticate without a second factor by design. OAuth tokens already granted to third-party applications continue to hold access independently of the user's sign-in, so a consent-phishing attack that never touches a password is unaffected by MFA \u2014 which is why third-party app consent is properly part of an MFA project. Long-lived refresh tokens and existing sessions mean enforcement applies at next authentication rather than immediately, so an attacker already inside stays inside until sessions are revoked. And conditional-access exclusions created during rollout, including for the break-glass accounts, are permanent holes unless someone owns their review. Enforcement is a state to be verified by testing, not a switch.",
            ours: "We enumerate every bypass class \u2014 legacy protocols, app passwords, existing OAuth grants, live sessions and policy exclusions \u2014 and verify enforcement by attempting authentication rather than by reading the admin console."
          },
          {
            claim: "&lsquo;Require identity verification through a second channel for help-desk resets, and log every reset.&rsquo;",
            problem: "The right instinct, stated too loosely to survive contact with a competent social engineer. Verification via a second channel is only meaningful if the channel and its contact details were held before the request, because an attacker who has already compromised the mailbox controls the obvious second channel, and one who has performed a SIM swap controls the phone. Verification questions drawn from information an attacker can obtain \u2014 employee ID, manager's name, start date, recent activity visible in a mailbox \u2014 provide no assurance. The strong pattern is out-of-band confirmation by a person who knows the requester, or in-person or video verification against a record held in advance, with a mandatory delay for anything privileged. There is also a rarely-mentioned asymmetry: the reset process for the accounts that matter most should be deliberately slower and harder than for ordinary staff, whereas most organisations run one process tuned for convenience across everyone. Attackers target the help desk because it is the one control designed to be bypassed on request.",
            ours: "We specify pre-held verification channels, exclude anything an attacker can read from a mailbox, and run a deliberately slower privileged-reset path with out-of-band human confirmation."
          },
          {
            claim: "Break-glass accounts: two emergency admins with hardware keys, credentials sealed offline, excluded from conditional access.",
            problem: "Standard advice, and as written it creates an unmonitored permanent administrator excluded from your strongest control, which is a serious risk if the rest is left implicit. What makes the pattern safe is the operational wrapper nobody documents: alerting on any use of those accounts, because legitimate use is rare enough that every sign-in should generate an immediate notification; periodic verified testing, because a break-glass credential that has never been tried is likely to fail at the moment it is needed, having been invalidated by a password policy or a licence change; split knowledge or sealed storage with tamper evidence rather than a shared secret one person can retrieve quietly; and rotation after any use. The dependency trap is the subtle one \u2014 emergency access must not rely on the system that has failed, so a recovery path requiring a code sent to a mail service that is itself down, or a key held only in the password manager you cannot reach, is not a recovery path at all.",
            ours: "We wrap break-glass with alert-on-use, scheduled verification, tamper-evident split storage and post-use rotation, and check the recovery path does not depend on the system it is meant to recover."
          }
        ],
        only: [
          "Factor strength as a function of registration and recovery, not just the factor — and the downgrade path left by open self-service enrolment.",
          "The full bypass inventory beyond legacy protocols: app passwords, existing OAuth grants, live sessions, and rollout exclusions nobody reviews.",
          "Why enforcement must be verified by attempting authentication rather than by reading the console.",
          "Help-desk reset hardened properly: pre-held channels, no mailbox-readable questions, and a deliberately slower privileged path.",
          "The break-glass wrapper that makes the standard advice safe: alert-on-use, scheduled testing, tamper-evident storage, rotation, and no circular dependency."
        ]
      },
      faq: [
        { q: "Will MFA stop phishing?", a: "<p>Push and TOTP reduce it substantially but can be defeated by real-time proxy phishing. Passkeys and hardware keys are resistant to that attack.</p>" },
        { q: "How long does a 50-person rollout take?", a: "<p>Two to three weeks calendar time; roughly 8–16 hours of actual admin work plus support load.</p>" },
        { q: "What about MFA fatigue attacks?", a: "<p>Enable number matching and limit push attempts. Better still, move privileged users to passkeys.</p>" },
        { q: "Everyone is enrolled. Are we done?", a: "<p>Test it. Check for app passwords, OAuth grants already issued to third-party apps, live sessions that predate enforcement, and any conditional-access exclusions created during rollout. Each authenticates without your second factor.</p>" }
      ],
      sources: [
        { name: "CISA — implementing phishing-resistant MFA", url: "https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf", note: "Factor ranking and the registration/recovery weaknesses behind it" },
        { name: "NIST SP 800-63B — digital identity guidelines, authentication", url: "https://pages.nist.gov/800-63-3/sp800-63b.html", note: "Authenticator binding, restricted authenticators and account recovery requirements" },
        { name: "CISA — mobile communications best practice (SIM swap risk)", url: "https://www.cisa.gov/resources-tools/resources/mobile-communications-best-practice-guidance", note: "Why SMS fails as a recovery channel independently of interception" }
      ],
      related: ["password-manager-rollout", "phishing-training", "best-mfa-solutions"]
    },

    "ransomware-playbook": {
      title: "Ransomware playbook for small business: the first 24 hours",
      h1: "Ransomware: what to do in the first 24 hours",
      section: "Pillar guide",
      eyebrow: "Incident playbook",
      dek: "Containment, evidence, notification and recovery decisions — written to be followed under pressure, not read in advance.",
      disclosure: true,
      answer: "<strong>Isolate, do not power off.</strong> Disconnect affected machines from the network but leave them running to preserve memory evidence. Then call your insurer's incident hotline before your IT provider — the policy usually requires it and the panel firm is faster than anyone you can hire at 3am.",
      body:
        "<h2>Hour 0–1: contain</h2>" +
        "<ol><li>Disconnect affected systems from the network. Do not shut them down.</li>" +
        "<li>Disable the compromised accounts and revoke active sessions and tokens.</li>" +
        "<li>Isolate backups immediately — attackers target them before encrypting.</li>" +
        "<li>Stop the automated backup rotation so clean copies are not overwritten.</li></ol>" +
        "<h2>Hour 1–3: mobilise</h2>" +
        "<ol><li>Call the cyber insurance incident hotline. Using a non-panel firm may void cover.</li>" +
        "<li>Start a written timeline: what, when, who, from which device.</li>" +
        "<li>Move internal communications off the affected systems.</li>" +
        "<li>Notify leadership and identify a single decision maker.</li></ol>" +
        "<!--AD-->" +
        "<h2>Hour 3–24: assess and decide</h2>" +
        "<p>Determine scope, whether data was exfiltrated (almost always claimed, often true), and whether backups are viable. Only then does the ransom question arise — and it is a legal and insurance decision involving sanctions screening, not an IT one.</p>" +
        "<!--FIG:Ransomware first-24-hours decision tree-->" +
        "<h2>The notification clock</h2>" +
        "<p>State breach laws, contractual obligations and sector regulators all have deadlines, some as short as 72 hours. Counsel — usually engaged through your insurer — should drive this. Do not notify customers before legal review.</p>" +
        "<h2>Recovery order</h2>" +
        "<p>Rebuild identity infrastructure first, then core business systems, then endpoints. Restoring into an environment where the attacker still has credentials is the most common second incident. Full detail in the <a href='incident-response-plan.html'>response plan guide</a>.</p>",
      edge: {
        intro: "Ransomware guidance for small business is mostly written by security vendors, and it is written to be read calmly in advance \u2014 long explanations of attack vectors, then generic advice to have backups and call an expert. It is the wrong artefact for the moment it is needed. Under pressure at three in the morning nobody reads a primer, and the first three decisions a small company makes are usually the ones that destroy evidence, void the insurance policy, or invite a second incident.",
        gaps: [
          {
            claim: "\"Immediately shut down and disconnect all affected systems.\"",
            problem: "Half right, and the wrong half is expensive. Isolating from the network is correct and urgent. Powering off destroys volatile memory \u2014 which is where encryption keys, running processes, injected code and the attacker's live session frequently reside \u2014 and that evidence is what a forensic investigator uses to determine scope and, occasionally, to recover data without paying. It is also what determines whether you can later demonstrate that data was <em>not</em> exfiltrated, which is the difference between a contained incident and mandatory notification to every customer. The advice persists because &lsquo;shut it down&rsquo; is intuitive and because the pages giving it are not written by anyone who has had to reconstruct scope afterwards.",
            ours: "We say isolate, do not power off \u2014 disconnect from the network and leave systems running \u2014 and we explain that the memory image is what determines scope and exfiltration."
          },
          {
            claim: "\"Call your IT provider or a forensics firm immediately.\"",
            problem: "Correct instinct, wrong order, and the mistake has a specific price. Cyber policies almost universally require notification through the carrier's incident hotline and the use of panel vendors; engaging your own IT provider or a forensic firm first can reduce or void coverage for those costs, and it is done routinely because calling your own IT provider is the natural human response. The panel firm is also usually faster than anything a small company can source overnight, and the carrier's counsel is who should drive the notification analysis. There is a second-order problem the vendor pages never mention: your IT provider may be the party whose access was compromised, in which case they are inside the investigation rather than running it.",
            ours: "We put the insurer's hotline before the IT provider, state that non-panel vendors may void that cover, and flag the case where the provider is part of the incident."
          },
          {
            claim: "\"Restore from backup and you're fine\" \u2014 backups presented as the answer.",
            problem: "Three things routinely go wrong with that sentence and none is about whether backups exist. First, backups are targeted before encryption \u2014 so the immediate action is to isolate them and <em>halt automated rotation</em>, because a scheduled job will otherwise overwrite the last clean copy while you are still assessing. Second, restoring into an environment where the attacker retains valid credentials produces a second encryption event within days; identity infrastructure has to be rebuilt before business systems, which is the reverse of the order under pressure, when everyone wants the file server back. Third, backups address availability only \u2014 they do nothing about exfiltrated data, so a company that restores perfectly may still face extortion, notification duties and contractual liability. Recovery time also decides the business-interruption loss: a tested backup that takes nine days to restore has not prevented the loss that dominates the claim.",
            ours: "We give the sequencing \u2014 halt rotation, isolate backups, rebuild identity first \u2014 and separate the availability problem from the exfiltration problem, which restoration does not solve."
          },
          {
            claim: "\"Never pay the ransom\" \u2014 or, from vendors selling negotiation, \"payment is a valid business option.\"",
            problem: "Both are stated as maxims where the real content is procedural. Payment is a legal, insurance and sanctions question before it is a business one: sending funds to a sanctioned entity or jurisdiction carries its own liability irrespective of duress, which is why screening runs through counsel and the carrier rather than through the IT team resolving the outage. Nor does payment reliably deliver what people assume \u2014 decryptors are often partial or slow, and paying does not retract data already taken. Framing it as a yes/no moral question obscures the operational point: the decision belongs to a named decision-maker acting on counsel, not to whoever is awake, and the notification clock \u2014 as short as seventy-two hours in some regimes, and driven by state law, contract and sector regulators simultaneously \u2014 is running the whole time.",
            ours: "We route the ransom question through counsel and sanctions screening with a single named decision-maker, and run the notification clock as a parallel track rather than a later step."
          }
        ],
        only: [
          "Isolate without powering off \u2014 and why the memory image decides scope, exfiltration and your notification duty.",
          "Insurer hotline before IT provider, including how non-panel vendors can void that cover.",
          "Halt backup rotation as an immediate action, and rebuild identity before business systems.",
          "Availability separated from exfiltration \u2014 a perfect restore does not end the incident.",
          "The ransom question as a sanctions and counsel process with one named decision-maker, not a maxim."
        ]
      },
      faq: [
        { q: "Should we ever pay?", a: "<p>It is a legal, insurance and business decision with sanctions implications. Payment does not guarantee usable decryption or prevent publication of stolen data.</p>" },
        { q: "Do we have to tell customers?", a: "<p>Often yes, under state law and contract. Timing and wording should be led by counsel.</p>" },
        { q: "How long is recovery?", a: "<p>With tested immutable backups, days. Without, commonly two to six weeks — which is why backups sit second in the <a href='security-baseline-smb.html'>baseline</a>.</p>" }
      ],
      sources: [
        { name: "CISA — StopRansomware guide", url: "https://www.cisa.gov/stopransomware" },
        { name: "FBI IC3 — reporting", url: "https://www.ic3.gov/" }
      ],
      related: ["backup-strategy-smb", "incident-response-plan", "cyber-insurance-requirements"]
    },

    "backup-strategy-smb": {
      title: "Backup strategy for small business: 3-2-1-1-0 in practice",
      h1: "Backups that survive ransomware",
      section: "Resilience",
      eyebrow: "Explainer",
      dek: "Immutability, offline copies, restore testing, and why SaaS data is not backed up by the SaaS vendor.",
      answer: "Follow <strong>3-2-1-1-0</strong>: three copies, two media types, one offsite, <strong>one immutable or offline</strong>, and <strong>zero errors in a tested restore</strong>. The immutable copy and the test are the parts that matter and the parts usually missing.",
      body:
        "<h2>Why the extra 1 and 0</h2>" +
        "<p>Modern ransomware finds and encrypts backups first, using the same credentials that reached your file server. An immutable or genuinely offline copy is the only reliable defence. And a backup nobody has restored from is an assumption.</p>" +
        "<!--AD-->" +
        "<h2>Your SaaS data is your problem</h2>" +
        "<p>Cloud suites replicate for availability, not for your mistakes. Retention after deletion is typically weeks, and a compromised admin can purge mailboxes. Back up email, files, and your CRM independently of the platform.</p>" +
        "<!--FIG:3-2-1-1-0 backup topology for a small company-->" +
        "<h2>Restore testing that counts</h2>" +
        "<ol><li>Quarterly: restore a random file and a full mailbox.</li>" +
        "<li>Twice yearly: restore a full server or workstation image to spare hardware or a VM.</li>" +
        "<li>Annually: run a tabletop assuming identity systems are compromised.</li>" +
        "<li>Record every test with date, duration and result — insurers and auditors ask.</li></ol>" +
        "<h2>Know your RTO and RPO</h2>" +
        "<p>How long can you be down, and how much data can you lose? Answer those two, then buy backup capability to match, not the other way round.</p>",
      faq: [
        { q: "Is cloud sync a backup?", a: "<p>No. Sync propagates encryption and deletion. Versioning helps briefly; it is not a backup.</p>" },
        { q: "How long should we retain?", a: "<p>30–90 days for operational recovery, longer where contracts or regulation require. Dwell time before detection is often weeks.</p>" }
      ],
      related: ["ransomware-playbook", "security-baseline-smb"]
    },

    "incident-response-plan": {
      title: "Writing an incident response plan a small company will actually use",
      h1: "An incident response plan that fits on two pages",
      section: "Resilience",
      eyebrow: "Explainer",
      dek: "Roles, contact trees, decision authority and the tabletop exercise that finds the gaps before an attacker does.",
      answer: "A usable plan names <strong>who decides</strong>, <strong>who calls whom</strong>, and <strong>what gets isolated first</strong> — on two printed pages stored offline. Fifty-page plans exist to satisfy auditors and are never opened during an incident.",
      body:
        "<h2>What the two pages contain</h2>" +
        "<ol><li>Incident commander and deputy, by name and mobile number.</li>" +
        "<li>Contact tree: insurer hotline, IT provider, counsel, key customers, regulator.</li>" +
        "<li>Severity definitions and who can declare each level.</li>" +
        "<li>First five containment actions.</li>" +
        "<li>Where credentials and clean copies of the plan live offline.</li></ol>" +
        "<!--AD-->" +
        "<h2>Decision authority in advance</h2>" +
        "<p>Decide now who can take systems offline during business hours and who can authorise emergency spend. Escalating that question mid-incident costs hours you do not have.</p>" +
        "<h2>Tabletop it twice a year</h2>" +
        "<p>Ninety minutes, one scenario, no laptops. Ransomware in year one; business email compromise with a fraudulent payment in year two. Track the gaps found and fix them — see the <a href='ransomware-playbook.html'>playbook</a> for the scenario script.</p>",
      faq: [
        { q: "Who should be incident commander?", a: "<p>Someone with authority to stop operations — usually an owner or operations lead, not the most technical person, who will be busy.</p>" },
        { q: "Does our insurer need to approve the plan?", a: "<p>Not usually, but policies require prompt notification and often panel vendors. Build those into the plan.</p>" }
      ],
      related: ["ransomware-playbook", "cyber-insurance-requirements"]
    },

    "password-manager-rollout": {
      title: "Rolling out a password manager across a small company",
      h1: "Password managers, deployed properly",
      section: "Identity",
      eyebrow: "Explainer",
      dek: "Shared vaults, offboarding, browser autofill risk, and the recovery model that decides whether it is safe.",
      answer: "Deploy a business password manager with <strong>shared vaults by team</strong>, <strong>SSO where available</strong>, and a documented <strong>recovery model</strong>. The largest wins are eliminating shared credentials in spreadsheets and making offboarding a single action.",
      body:
        "<h2>Why it beats a policy</h2>" +
        "<p>Complexity rules produce predictable passwords and reuse. A manager makes unique credentials the path of least resistance — the only password policy that survives contact with users.</p>" +
        "<!--AD-->" +
        "<h2>Structure before rollout</h2>" +
        "<ul><li>Vaults by team, not by person, for anything shared.</li>" +
        "<li>Break-glass credentials in a separate, restricted vault.</li>" +
        "<li>Admin access limited and logged.</li>" +
        "<li>Offboarding removes vault access before the laptop comes back.</li></ul>" +
        "<h2>The recovery question</h2>" +
        "<p>Ask the vendor exactly how a locked-out user is recovered. If an administrator can silently read a user's vault, understand and document that; if nobody can recover it, ensure users know their data is genuinely unrecoverable.</p>",
      faq: [
        { q: "Browser password managers — good enough?", a: "<p>Better than reuse, weaker on shared vaults, offboarding and audit. Fine for a five-person company, not for fifty.</p>" },
        { q: "Do we still need MFA?", a: "<p>Yes. A manager protects credentials; MFA protects the login. See the <a href='mfa-rollout-guide.html'>MFA guide</a>.</p>" }
      ],
      related: ["mfa-rollout-guide", "security-baseline-smb"]
    },

    "phishing-training": {
      title: "Phishing training that changes behaviour instead of blaming staff",
      h1: "Phishing training worth running",
      section: "Identity",
      eyebrow: "Explainer",
      dek: "Simulation done ethically, the reporting culture that matters more than click rates, and the process controls that beat training entirely.",
      answer: "Measure <strong>report rate</strong>, not click rate. A workforce that reports suspicious email within minutes gives you detection; a workforce afraid of being caught clicking gives you silence. And a payment-verification rule prevents more loss than any training programme.",
      body:
        "<h2>Process beats awareness</h2>" +
        "<p>The expensive incident is usually a fraudulent payment, not malware. A written rule — <em>any change of bank details is verified by callback to a previously known number</em> — costs nothing and stops it. Train the process, not just the vigilance.</p>" +
        "<!--AD-->" +
        "<h2>Running simulations ethically</h2>" +
        "<ul><li>Announce the programme exists; do not announce dates.</li>" +
        "<li>Never use bonuses, redundancies or bereavement as lures.</li>" +
        "<li>No naming and shaming. Ever.</li>" +
        "<li>Make the report button one click and thank every report, false positives included.</li></ul>" +
        "<h2>What good looks like</h2>" +
        "<p>Report rate above 40% and rising; median report time under 10 minutes; finance staff reporting payment-change requests every time. Click rate is a vanity metric that mostly measures how cruel your lure was.</p>",
      faq: [
        { q: "How often should we simulate?", a: "<p>Monthly is enough. Weekly produces fatigue and resentment.</p>" },
        { q: "Should clicking have consequences?", a: "<p>No, except for repeated wilful policy breaches. Punishment destroys reporting, which is the thing you actually need.</p>" }
      ],
      related: ["email-security-guide", "mfa-rollout-guide"]
    },

    "email-security-guide": {
      title: "Email security for small business: SPF, DKIM, DMARC and BEC",
      h1: "Securing email, the highest-value target",
      section: "Tools & spend",
      eyebrow: "Explainer",
      dek: "Authentication records that actually work, quarantine tuning, and the controls that stop business email compromise.",
      answer: "Publish <strong>SPF, DKIM and DMARC</strong> and move DMARC to <code>p=reject</code> once monitoring is clean. Add impersonation protection for executives and finance, and enforce the payment-verification callback rule. BEC costs small companies more than ransomware.",
      body:
        "<h2>The three records, in order</h2>" +
        "<ol><li><strong>SPF</strong> — list every service that sends as your domain; watch the 10-lookup limit.</li>" +
        "<li><strong>DKIM</strong> — enable signing on every sender, including marketing and invoicing tools.</li>" +
        "<li><strong>DMARC</strong> — start at <code>p=none</code> with reporting, fix what breaks, then move to quarantine, then reject.</li></ol>" +
        "<!--AD-->" +
        "<h2>Beyond authentication</h2>" +
        "<ul><li>External sender banners, tuned so they are not ignored.</li>" +
        "<li>Impersonation protection on display names of executives and finance.</li>" +
        "<li>Auto-forwarding to external addresses disabled, with alerts on rule creation.</li>" +
        "<li>Mailbox rule alerts — attackers create hidden rules to conceal replies.</li></ul>" +
        "<!--FIG:How a business email compromise actually unfolds-->" +
        "<h2>The control that saves the money</h2>" +
        "<p>Callback verification on any bank-detail change, to a number you already held. Written, mandatory, no exceptions for urgency. Urgency is the attack.</p>",
      edge: {
        intro: "Email security content is written by gateway vendors and by DNS tooling companies, and both have the same commercial reason to make authentication the whole story: SPF, DKIM and DMARC are configurable, checkable and sellable. So the genre treats reaching <code>p=reject</code> as the finish line. It is worth reaching, and it defends a narrower thing than almost every article implies — which is why companies with perfect authentication records still lose money to email fraud.",
        gaps: [
          {
            claim: "&lsquo;Publish SPF, DKIM and DMARC, get to p=reject, and you are protected from phishing and business email compromise.&rsquo;",
            problem: "DMARC validates alignment with the domain in the <em>From</em> header, and that is all it does. It cannot help against the two techniques that carry most real losses. A lookalike domain — a transposed character, a different suffix, a hyphenated variant — passes its own authentication perfectly, because the attacker publishes valid records for a domain they legitimately control; your <code>p=reject</code> is irrelevant to mail that never claimed to be you. And a compromised mailbox at a supplier sends genuinely authenticated mail from the real domain, which is the most expensive pattern in this category precisely because every technical check passes and the thread history is real. So authentication raises the cost of one specific attack, direct domain spoofing, while the invoice-redirection fraud that actually empties accounts is untouched. The lesson is not to skip DMARC but to stop treating it as the control that prevents fraud.",
            ours: "We scope DMARC honestly to exact-domain spoofing, then treat lookalike domains and compromised-supplier mail as separate problems needing separate controls, because no DNS record addresses either."
          },
          {
            claim: "&lsquo;Start at p=none, fix what breaks, move to quarantine, then reject.&rsquo;",
            problem: "Correct sequence, and it omits the mechanism that makes the final step fail. SPF has a hard limit of ten DNS lookups during evaluation; exceed it and the result is a permanent error, which under a reject policy means legitimate mail is discarded rather than merely flagged. Include mechanisms nest, so a single vendor's include can consume several lookups on its own and vendors change their records without telling you — meaning a domain that validated cleanly last quarter can silently cross the limit. This is why the standard advice to &lsquo;list every service that sends as your domain&rsquo; is a trap at scale: adding senders is exactly what breaks it. Related and equally under-covered: SPF alone does not survive forwarding, because the envelope sender changes, which is why DKIM matters more than the ordering suggests, and why alignment can fail on mailing lists that are otherwise legitimate. Subdomains also need their own policy, and an unused domain you own should carry a null record so it cannot be abused.",
            ours: "We monitor the ten-lookup ceiling as an ongoing condition rather than a one-time check, prefer DKIM for survivability through forwarding, and publish explicit policies for subdomains and parked domains."
          },
          {
            claim: "External sender banners, impersonation protection and mailbox-rule alerts are listed as hardening steps.",
            problem: "All three are worth enabling and the list conceals a ranking problem. Banners are subject to habituation: applied to all external mail they are ignored within weeks, which makes them worse than absent because they create a false sense that warning exists. The controls that matter after account compromise are the ones addressing persistence and detection, and they are quieter. Attackers create inbox rules that move or delete replies so the real owner never sees a thread, they add mail-forwarding to an outside address, and increasingly they register their own authenticator so access survives a password reset — meaning a compromise remediated by password change alone is not remediated. Retention and audit logging matter here too: log availability differs by licence tier, and companies discover during an incident that the evidence window needed to answer &lsquo;what else was accessed&rsquo; was never enabled.",
            ours: "We rank persistence controls above banners, treat MFA re-enrolment and session revocation as mandatory parts of remediation rather than a password reset, and check the audit-log retention your licence actually provides before you need it."
          },
          {
            claim: "Callback verification on bank-detail changes is the control that saves the money.",
            problem: "It is the right control and it fails in predictable ways that no page specifies, because it is described as a rule rather than as a process. The callback has to go to a number obtained from a record you held before the request arrived — never a number in the request, its signature block or the attached invoice, which is where attackers place theirs. It has to be verified by someone other than the person who received the instruction, because the recipient is the one already inside the attacker's framing. It has to survive urgency, seniority and plausibility, so it needs to be a documented policy that protects a junior employee for enforcing it against an executive, which is the actual failure point in most losses. And it needs a time dimension: fraud is frequently timed to a Friday afternoon, a holiday or a known absence. There is a recovery window too \u2014 a wire reported quickly can sometimes be recalled, and the reporting route is a law-enforcement one, so knowing it in advance is part of the control.",
            ours: "We specify the callback as a process with a pre-held number, an independent verifier, written authority to refuse an executive, and a same-day reporting route \u2014 because the rule without those four fails exactly when it is tested."
          }
        ],
        only: [
          "What DMARC actually defends — exact-domain spoofing — and why lookalike domains and compromised-supplier mail pass every check you have.",
          "The SPF ten-lookup ceiling as an ongoing failure risk under p=reject, plus forwarding, subdomains and parked domains.",
          "Persistence controls ranked above sender banners, including attacker-registered MFA that survives a password reset.",
          "Audit-log retention checked by licence tier before an incident, not during one.",
          "The callback rule specified as a process: pre-held number, independent verifier, written authority to refuse urgency, and the fast-recall reporting route."
        ]
      },
      faq: [
        { q: "Does DMARC reject break newsletters?", a: "<p>Only if senders are not authorised. That is why you spend 4–8 weeks at p=none reading reports first — and watch the SPF ten-lookup limit, which is what usually breaks mail once reject is live.</p>" },
        { q: "Is a third-party email gateway needed?", a: "<p>Often not — mainstream cloud suites at their higher tier are adequate for most small companies. Compare against your current spend.</p>" },
        { q: "We have p=reject. Why are staff still getting convincing fake invoices?", a: "<p>Because those almost certainly come from a lookalike domain or a genuinely compromised supplier mailbox. Both authenticate correctly. DMARC was never the control for either — the payment callback rule is.</p>" },
        { q: "We reset the password after a mailbox compromise. Is that enough?", a: "<p>No. Check for inbox rules, external forwarding and any authenticator the attacker registered, then revoke active sessions. An attacker-enrolled MFA method survives a password change.</p>" }
      ],
      sources: [
        { name: "CISA — email security and phishing guidance", url: "https://www.cisa.gov/topics/cyber-threats-and-advisories/types-threats/phishing", note: "Federal guidance on email-borne threats and BEC" },
        { name: "RFC 7208 — Sender Policy Framework, § 4.6.4 DNS lookup limits", url: "https://www.rfc-editor.org/rfc/rfc7208#section-4.6.4", note: "The ten-lookup ceiling and permanent-error behaviour" },
        { name: "RFC 7489 — DMARC", url: "https://www.rfc-editor.org/rfc/rfc7489", note: "Identifier alignment: what DMARC validates and what it does not" },
        { name: "FBI IC3 — business email compromise", url: "https://www.ic3.gov/", note: "Reporting route and the recall window for fraudulent wires" }
      ],
      related: ["phishing-training", "security-baseline-smb"]
    },

    "soc2-readiness-guide": {
      title: "SOC 2 readiness for small vendors: what it actually involves",
      h1: "Getting SOC 2 ready without stopping the business",
      section: "Compliance",
      eyebrow: "Explainer",
      dek: "Type I versus Type II, scope decisions that halve the cost, evidence collection, and a realistic 16-week timeline.",
      disclosure: true,
      answer: "Scope narrowly to the product and its supporting systems, run <strong>Type I</strong> first if a customer needs proof quickly, then a <strong>Type II</strong> over a 3–6 month window. Scope discipline is the single biggest cost lever.",
      body:
        "<h2>Type I or Type II</h2>" +
        "<p>Type I attests that controls are designed properly at a point in time. Type II attests they operated over a period. Enterprise buyers eventually want Type II; Type I unblocks a deal now and shortens the second audit.</p>" +
        "<!--AD-->" +
        "<h2>The 16-week path</h2>" +
        "<ol><li>Weeks 1–2: scope, choose trust criteria, pick an auditor.</li>" +
        "<li>Weeks 3–6: gap assessment against the baseline.</li>" +
        "<li>Weeks 7–12: remediate — access reviews, logging, onboarding/offboarding, vendor management, policies.</li>" +
        "<li>Weeks 13–14: evidence collection and dry run.</li>" +
        "<li>Weeks 15–16: audit fieldwork.</li></ol>" +
        "<h2>Where the cost actually goes</h2>" +
        "<p>Not the audit fee — the engineering time spent retrofitting access reviews and logging. Deploy the <a href='security-baseline-smb.html'>baseline</a> first and most of the work is already done. Pricing detail in <a href='soc2-audit-cost.html'>SOC 2 audit cost</a>.</p>",
      edge: {
        intro: "The high-ranking pages on SOC 2 readiness are written almost entirely by compliance-automation vendors, whose product is the evidence-collection layer, and by audit firms, whose product is the opinion. Both are useful. But the two of them together have produced a shared vocabulary that is wrong in a way that misleads buyers: SOC 2 is described as a certification you pass in a number of weeks, when it is an attestation report covering a period that has already elapsed. Almost every planning error we see downstream follows from that one misdescription.",
        gaps: [
          {
            claim: "\u201cGet SOC 2 certified in weeks.\u201d Readiness content is framed as a sprint with a finish line.",
            problem: "There is no SOC 2 certification and no certificate, because SOC 2 is not a certification scheme. It is an attestation engagement performed under AICPA standards, and what you receive is a report containing an independent practitioner's opinion, a description of your system, and a list of any exceptions the auditor found. Two consequences are routinely missed. First, a Type II opinion covers a defined observation window in the past, so the calendar cannot be compressed below that window no matter how fast remediation goes: the evidence has to accrue in real time, and a three-month window means three months of it. What the \u2018weeks\u2019 claim usually measures is time to readiness or to a Type I, not time to the report an enterprise buyer asked for. Second, a report with exceptions is still a delivered report, not a failure \u2014 but buyers and sellers alike treat SOC 2 as binary pass/fail, so nobody plans for the far more common outcome of a qualified or exception-bearing opinion.",
            ours: "We describe the deliverable accurately \u2014 an opinion plus exceptions covering an elapsed period \u2014 and plan backwards from the observation window, which is the only part of the timeline that cannot be bought or accelerated."
          },
          {
            claim: "Trust services criteria are presented as a menu, with availability, confidentiality, processing integrity and privacy shown alongside security as equal options.",
            problem: "They are not equal, and only one is mandatory. The security criteria \u2014 the common criteria \u2014 are in scope for every SOC 2 engagement; the other four are elective and each adds its own testable control population, its own evidence burden and its own audit hours. Privacy is the expensive one by a wide margin, because it reaches into notice, consent, data subject requests and disposal across the whole data lifecycle, which is organisational work rather than infrastructure work. Availability sounds free and is not: it commits you to evidencing capacity monitoring and tested recovery against a stated objective, so a company that has never actually restored from backup acquires a real project. The pattern we see is a company adding criteria at kickoff because a vendor checklist listed all five, then discovering mid-engagement that two of them are driving most of the remediation.",
            ours: "We treat added criteria as scope purchases with a named price in hours, add them only against a specific customer contract requirement, and flag availability and privacy as the two that quietly become projects."
          },
          {
            claim: "A green compliance-automation dashboard is treated as equivalent to audit readiness.",
            problem: "The dashboard tests what an API can see: configuration states, agent presence, MFA enrolment, ticket existence. Auditors test control operation, which includes a category of things no integration can observe. Whether an access review involved judgment or was clicked through in ninety seconds. Whether the person who approved a change was independent of the person who made it. Whether onboarding and offboarding actually happened in the order the policy claims, for the contractor who was never in the HR system. Whether your vendor risk process produced a decision rather than a folder. There is also a scope question no dashboard surfaces: your report has to state how subservice organisations \u2014 your cloud provider, your payroll platform \u2014 are handled, using either the inclusive or the carve-out method, and sophisticated buyers read that section and ask what it excludes. A tool at one hundred per cent is a necessary condition and a weak predictor.",
            ours: "We separate machine-evidenced controls from judgment-evidenced ones and dry-run the second set against an auditor's sampling method, including how subservice organisations are presented in the report."
          },
          {
            claim: "Readiness advice ends at the audit. Getting the report is presented as the finish.",
            problem: "The report is a period document and it ages, which creates two obligations nobody warns a first-timer about. A prospect evaluating you five or nine months after the window closed is looking at evidence about a company that no longer exists in that configuration, and their procurement team will ask for a bridge letter \u2014 a management representation covering the gap between the report period and today, which you write and sign, asserting no material change. Companies discover this mid-deal and stall. The second is that the observation windows are meant to be contiguous: if you let a gap open between one period and the next, you have a hole in your evidence trail that a buyer's security team can see, and it is far more expensive to restart a control cadence than to keep one running. Readiness, in other words, is not a project that closes; the audit is the first instance of a recurring cost of sale.",
            ours: "We plan the second window before the first report is issued, keep periods contiguous, and give you the bridge-letter mechanism up front so a deal in month nine does not stall on a document you have never heard of."
          }
        ],
        only: [
          "SOC 2 described accurately: an attestation over an elapsed period, with an opinion and exceptions, not a pass/fail certificate.",
          "The observation window as the one part of the timeline that cannot be accelerated \u2014 and what 'SOC 2 in weeks' is really measuring.",
          "Only the security criteria are mandatory: the real added cost of availability and privacy, priced in hours rather than listed as options.",
          "The controls an automation dashboard structurally cannot evidence, plus how subservice organisations appear in your report.",
          "Bridge letters and contiguous observation windows \u2014 the post-report obligations that stall deals in month nine."
        ]
      },
      faq: [
        { q: "Do we need compliance automation software?", a: "<p>It saves real time on evidence collection above about 20 employees. Below that, spreadsheets and discipline work. It does not produce the report \u2014 only an independent practitioner can do that.</p>" },
        { q: "Availability and confidentiality too?", a: "<p>Add them only if a customer contract requires them. Only the security criteria are mandatory, and every extra criterion adds its own control population and audit hours.</p>" },
        { q: "Our report period ended months ago. Is it still usable?", a: "<p>Yes, but expect procurement to ask for a bridge letter covering the gap between the period end and today. Plan the next observation window so it starts where the last one ended.</p>" }
      ],
      sources: [
        { name: "AICPA \u2014 SOC 2 and the trust services criteria", url: "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2", note: "Defines SOC 2 as an attestation engagement and sets which criteria are mandatory" },
        { name: "AICPA \u2014 trust services criteria for security, availability, processing integrity, confidentiality and privacy", url: "https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022", note: "The criteria themselves, including subservice organisation treatment" },
        { name: "NIST \u2014 Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", note: "Control baseline used to structure remediation before an audit" }
      ],
      related: ["soc2-audit-cost", "security-questionnaires"]
    },

    "security-questionnaires": {
      title: "Answering enterprise security questionnaires efficiently",
      h1: "Security questionnaires without losing a week",
      section: "Compliance",
      eyebrow: "Explainer",
      dek: "Building a reusable answer library, what 'compensating control' really means, and when to push back.",
      answer: "Build a maintained answer library mapped to standard frameworks, answer honestly with compensating controls where a control is absent, and never claim something you cannot evidence — the contract will incorporate your answers.",
      body:
        "<h2>The answer library</h2>" +
        "<p>Maintain a single document keyed to the common frameworks with your standard answer, evidence location, and last-reviewed date. Ninety per cent of any new questionnaire is answerable by lookup.</p>" +
        "<!--AD-->" +
        "<h2>Answering honestly</h2>" +
        "<p>'No, but' is a legitimate answer: no formal SIEM, but 90-day centralised logging with weekly review. Buyers accept compensating controls; they do not accept discovering you overstated after an incident.</p>" +
        "<h2>Pushing back</h2>" +
        "<p>It is reasonable to decline questions irrelevant to the service, refuse to share penetration test reports outside NDA, and offer a summary letter instead. Enterprise procurement expects negotiation.</p>",
      faq: [
        { q: "Does SOC 2 remove questionnaires?", a: "<p>It shortens them substantially — often to a handful of gap questions plus the report.</p>" },
        { q: "Who should own them?", a: "<p>One named person with a maintained library. Rotating them around engineering guarantees inconsistency.</p>" }
      ],
      related: ["soc2-readiness-guide", "security-baseline-smb"]
    },

    "cyber-insurance-requirements": {
      title: "Cyber insurance requirements 2026: the controls underwriters demand",
      h1: "What cyber insurers require before they quote",
      section: "Compliance",
      eyebrow: "High-intent guide",
      dek: "The control checklist behind the application form, how answers become warranties, and what a declination usually means.",
      disclosure: true,
      answer: "Expect to evidence <strong>MFA on email, remote access and privileged accounts</strong>, <strong>offline or immutable backups tested by restore</strong>, <strong>EDR on endpoints</strong>, <strong>email filtering</strong> and <strong>a patching cadence</strong>. Application answers are warranties — an inaccurate one can void the claim you buy the policy for.",
      table: {
        caption: "Controls most commonly required by cyber underwriters, July 2026.",
        headers: ["Control", "Required by most markets", "Evidence they accept", "Effect if missing"],
        rows: [
          { best: true, cells: ["MFA on email and remote access", "Yes", "Screenshot of enforced policy", "Declination or heavy loading"] },
          { cells: ["Immutable / offline backups", "Yes", "Restore test log with dates", "Ransomware sub-limits imposed"] },
          { cells: ["EDR on all endpoints", "Usually", "Console coverage report", "Higher retention"] },
          { cells: ["Email filtering / anti-phishing", "Usually", "Product name and tier", "Social engineering sub-limit cut"] },
          { cells: ["Patching within 30 days", "Usually", "Patch report", "Loading, exclusions"] },
          { cells: ["Privileged access separation", "Increasingly", "Admin account list", "Loading"] }
        ]
      },
      body:
        "<h2>Warranties, not questions</h2>" +
        "<p>The application is a contractual representation. If you attest to MFA everywhere and the breach enters through the one excluded service account, expect a coverage dispute. Have the person who administers the systems complete it.</p>" +
        "<!--AD-->" +
        "<h2>Getting to a better quote</h2>" +
        "<ol><li>Close the MFA gaps, including legacy protocols and service accounts.</li>" +
        "<li>Run and document one full restore test.</li>" +
        "<li>Replace consumer antivirus with managed EDR.</li>" +
        "<li>Write the payment-verification rule and attach it.</li>" +
        "<li>Submit a one-page control summary with the application — underwriters price uncertainty.</li></ol>" +
        "<!--FIG:Application control gaps and their effect on premium-->" +
        "<h2>If you are declined</h2>" +
        "<p>Usually a specific control gap rather than the whole posture. Ask the broker which one, fix it, and resubmit. The <a href='security-baseline-smb.html'>baseline</a> is written in roughly the order underwriters care about.</p>",
      edge: {
        intro: "Pages on this topic are published either by brokers, who present the control list as a shopping list to get you quoted, or by security vendors, who present it as a reason to buy their product. Both treat the application as a form to be completed. It is a contract, and that single reframing changes what you should do with almost every item on the list.",
        gaps: [
          {
            claim: "\"Here are the controls insurers require. Tick them off and you'll get covered.\"",
            problem: "The list is presented as a threshold to clear, which hides the mechanism that actually costs money. Controls do three different things in underwriting and the pages conflate them: some decide whether you are quoted at all, some move you between price bands, and some determine which <em>sub-limits</em> and coinsurance apply inside the policy you buy. That third category is where companies get hurt, because a policy issued with a ransomware sub-limit at a fraction of the headline limit, or fifty percent coinsurance on social-engineering loss, looks like a win at binding and is discovered at claim. A tick-list cannot express this, because the same control has a different effect depending on which of the three it is attached to.",
            ours: "We say for each control which of the three effects it has — declination, price band, or sub-limit — because a control that only moves the premium is optional and one that removes a sub-limit usually is not."
          },
          {
            claim: "\"Answer the application honestly and you're fine.\"",
            problem: "Honesty is necessary and not sufficient, because the answers are warranties about the state of systems rather than statements of intent, and they are usually completed by whoever is closest to the renewal deadline rather than whoever administers the systems. &lsquo;Do you enforce MFA on remote access?&rsquo; is answered yes in good faith by a founder who knows MFA was rolled out, while a legacy authentication protocol remains enabled for a mail connector and three service accounts are exempt. Both statements feel true; only one is a warranty. The exposure is asymmetric in the worst possible way — the inaccuracy is discovered during forensics, at the moment the policy is the only thing standing between the company and the loss, and the resulting dispute is about the answer rather than about the breach.",
            ours: "We say the person who administers the system must complete or countersign each answer, and we name the four places where a truthful &lsquo;yes&rsquo; is commonly wrong: legacy authentication protocols, service accounts, contractor and shared logins, and infrastructure or backup consoles."
          },
          {
            claim: "Backups are listed as a required control, satisfied by having backups.",
            problem: "Underwriters have moved and most pages have not. The requirement is now three separable properties — that a copy is immutable or genuinely offline, that restoration has been tested, and that the backup system's administrative credentials are separated from the production directory — and it is the third that ransomware operators exploit, because a backup reachable with a compromised domain admin account is encrypted alongside everything else. Meanwhile the evidence accepted has shifted from a policy document to a dated restore log, and the operationally decisive number is one nobody asks for at all: how long a full restore takes. A tested backup that restores in nine days does not prevent the business-interruption loss that dominates the claim.",
            ours: "We split backups into immutability, tested restoration and credential separation, and add restore <em>duration</em> as the figure that determines the interruption loss even when the control passes."
          },
          {
            claim: "Buy the security tools, then get insurance. Controls first, policy second.",
            problem: "The sequencing is right and the economics are stated backwards. These pages compare control cost against premium reduction, which is the smaller half of the calculation and usually makes the spend look marginal. Two larger effects go unmentioned. First, the same evidence set — MFA enforcement, EDR coverage, restore logs, patch cadence — is what enterprise customers demand in security questionnaires and what a SOC 2 tests, so it is one artefact serving three buyers, and pricing it against premium alone understates its return by a wide margin. Second, the controls that most reduce insured loss are largely procedural and nearly free: a written out-of-band payment-verification rule defeats the invoice-fraud and social-engineering losses that constitute a large share of small-business claims, and it costs a paragraph rather than a licence. The vendor-published pages omit it because nobody sells it.",
            ours: "We cost controls against premium, customer assurance and audit readiness together, and we put the free procedural controls at the top of the list rather than the purchasable ones."
          }
        ],
        only: [
          "Each control classified by what it actually does: gate quotation, move the price band, or remove a sub-limit.",
          "The four places a truthful 'yes we have MFA' is a false warranty — legacy protocols, service accounts, shared logins, infrastructure consoles.",
          "Backups split into immutability, tested restoration and credential separation, plus restore duration as the interruption-loss driver.",
          "The same evidence set priced across three buyers: underwriter, enterprise customer, SOC 2 auditor.",
          "Free procedural controls ranked above purchasable ones, starting with the out-of-band payment-verification rule."
        ]
      },
      leadForm: {
        title: "Get a control readiness review",
        sub: "Tell us your stack and we will map it against what cyber underwriters currently require.",
        offer: "cyber-control-readiness",
        numberLabel: "Employees",
        consent: "I consent to being contacted about security readiness. HardenHQ may be paid a referral fee for introductions.",
        cta: "Check my control gaps",
        steps: ["We map your current controls to underwriter requirements.", "You are told who will contact you before anything is shared.", "You get a prioritised gap list.", "The control summary template is sent regardless."],
        privacy: "Stored: name, email, company, headcount, notes. Never sold."
      },
      faq: [
        { q: "Will controls lower the premium?", a: "<p>They move you between price bands more than they discount within one — and they decide whether you are quoted at all.</p>" },
        { q: "Is a questionnaire an audit?", a: "<p>No, but insurers increasingly verify externally, and misstatements surface at claim time.</p>" }
      ],
      sources: [
        { name: "CISA — cyber hygiene and known exploited vulnerabilities", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog", note: "Basis for patching-cadence expectations" },
        { name: "NIST — Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", note: "Control categories underwriters map their questions to" },
        { name: "FBI — Internet Crime Complaint Center annual reports", url: "https://www.ic3.gov/", note: "Loss distribution across business email compromise and ransomware" }
      ],
      related: ["security-baseline-smb", "incident-response-plan"],
      crossRefs: [{ slug: "shieldwise", page: "cyber-insurance-cost", label: "What cyber insurance costs in 2026", why: "Once controls are in place, this is the price band to expect." }]
    },

    "soc2-audit-cost": {
      title: "SOC 2 audit cost 2026: fees, tooling and the hidden engineering time",
      h1: "What a SOC 2 actually costs",
      section: "Cost & pricing",
      eyebrow: "High-intent pricing guide",
      dek: "Auditor fees by company size, compliance tooling, readiness consulting and the internal time nobody budgets.",
      disclosure: true,
      answer: "For a company under 50 people, budget <strong>$12,000–$30,000 in year one</strong>: roughly $8k–$20k auditor fee, $6k–$15k compliance tooling, plus <strong>150–350 hours of internal engineering time</strong> — the largest cost, and the one usually left out.",
      table: {
        caption: "Indicative first-year SOC 2 Type II cost, July 2026.",
        headers: ["Company size", "Auditor fee", "Tooling", "Internal hours", "All-in year 1"],
        rows: [
          { cells: ["Under 15 people", "$8k – $12k", "$6k – $9k", "120 – 200", "$16k – $24k + time"] },
          { best: true, cells: ["15 – 50 people", "$12k – $20k", "$9k – $15k", "150 – 350", "$22k – $38k + time"] },
          { cells: ["50 – 150 people", "$20k – $35k", "$15k – $25k", "300 – 600", "$38k – $65k + time"] }
        ],
        note: "Type II, security criterion only. Adding criteria or a broad scope increases every column."
      },
      body:
        "<h2>What drives the fee</h2>" +
        "<ol><li><strong>Scope</strong> — systems, criteria and locations in scope.</li>" +
        "<li><strong>Number of controls</strong> tested and sample sizes.</li>" +
        "<li><strong>Evidence quality</strong> — messy evidence means auditor hours.</li>" +
        "<li><strong>Observation window</strong> — three months costs less than twelve.</li></ol>" +
        "<!--AD-->" +
        "<h2>Cutting it honestly</h2>" +
        "<ul><li>Scope to the product, not the whole company.</li>" +
        "<li>Security criterion only unless a customer demands more.</li>" +
        "<li>Deploy the <a href='security-baseline-smb.html'>baseline</a> before the gap assessment.</li>" +
        "<li>Three-month first observation window.</li>" +
        "<li>Fixed-fee engagement with a written scope.</li></ul>" +
        "<h2>Year two</h2>" +
        "<p>Roughly 60–75% of year one if controls held and evidence is automated. It becomes an annual operating cost, so build it into pricing rather than treating it as a project.</p>",
      edge: {
        intro: "This query is answered almost entirely by compliance-automation vendors and audit firms, and the two groups have opposite incentives that produce the same omission. The vendor pages quote a low all-in figure that excludes the auditor; the audit-firm pages quote a fee that excludes the tooling and the engineering time. Neither publishes the cost that dominates the total, and neither addresses the question that determines whether the money is worth spending at all.",
        gaps: [
          {
            claim: "\"Get SOC 2 compliant for under $10,000\" — or any single all-in figure.",
            problem: "The number is a fee, and the fee is not the cost. Three components sit outside it. The auditor's opinion — a SOC 2 report can only be issued by a licensed CPA firm, so any platform price necessarily excludes it. A readiness or gap assessment, frequently sold separately. And internal engineering time, which for a company under fifty people runs to several hundred hours of the most expensive labour in the business, spent on logging, access review, change management and evidence remediation. Loaded at any realistic rate, that time exceeds the auditor fee and the tooling combined, which means every published figure understates the true cost by roughly half while being technically accurate about what it covers.",
            ours: "We publish auditor fee, tooling and internal hours as three separate columns and state plainly that the hours are the largest line, so the total is a range plus labour rather than a single price."
          },
          {
            claim: "\"Start with SOC 2 Type I, then upgrade to Type II.\"",
            problem: "This is presented as a cheaper staged path and is usually a duplicated cost. Type I attests to control design at a single point in time; Type II attests to operating effectiveness across a period, and it is Type II that enterprise procurement asks for. Doing Type I first means paying two engagement fees and two evidence cycles to arrive where a single Type II would have taken you, and the Type I report does not shorten the Type II observation window. There is one narrow case where it is right — a deal that closes this quarter and will accept a Type I as interim assurance — and outside that case the staging exists because it sells two engagements instead of one.",
            ours: "We name the single circumstance in which Type I is worth buying and say to go directly to Type II otherwise, with a short first observation window rather than a preliminary report."
          },
          {
            claim: "Cost is driven by company size, so the tables are indexed on headcount.",
            problem: "Headcount correlates; scope causes. Three scope decisions move the fee far more than adding twenty employees does: how many Trust Services Criteria are in scope, where the system boundary is drawn, and how long the observation window runs. Adding availability, confidentiality, processing integrity or privacy alongside security multiplies the controls tested — and companies routinely add them because a single prospect's questionnaire mentioned one, without checking whether that prospect actually requires it in the report. The privacy criterion in particular imports a substantial programme of its own. A fifteen-person company auditing four criteria across the whole corporate estate over twelve months will pay more than a sixty-person company auditing security only, scoped to the product, over three.",
            ours: "We index cost on the three scope decisions rather than headcount, and say to scope to the product and to the security criterion until a signed customer requirement forces otherwise."
          },
          {
            claim: "A SOC 2 unlocks enterprise deals — so getting one is the goal.",
            problem: "It removes a specific procurement objection, which is not the same as generating demand, and it is a recurring operating cost rather than a project: annual re-audit at roughly two-thirds of year one, continuous evidence collection, and a gap period between report end date and renewal that customers will ask about. Two things follow that these pages never mention. Some buyers do not want SOC 2 at all — a healthcare buyer wants HIPAA assurance, a European buyer wants GDPR posture, a government buyer wants something else again — so the report can be the wrong artefact bought at real expense. And the cheaper intermediate step is frequently sufficient: a completed standard questionnaire, an architecture summary and evidence of the underlying controls will carry a mid-market deal that has not yet reached the stage of demanding an attestation. The report is a sales cost and should clear the same bar as any other.",
            ours: "We treat it as a recurring cost of sale, require a named customer requirement before starting, and set out the cheaper questionnaire-plus-evidence path that satisfies many buyers who have not yet asked for a report."
          }
        ],
        only: [
          "Auditor fee, tooling and internal engineering hours as three separate lines — with the hours identified as the largest.",
          "The one circumstance in which Type I is worth paying for, and why staged Type I → Type II usually duplicates cost.",
          "Cost indexed on the three scope decisions — criteria, system boundary, observation window — rather than headcount.",
          "Why adding Trust Services Criteria on the strength of one questionnaire mention is the most common avoidable overspend.",
          "The questionnaire-plus-evidence path that satisfies buyers who have not yet reached the attestation stage."
        ]
      },
      leadForm: {
        title: "Get a scoped SOC 2 cost estimate",
        sub: "Send your headcount, stack and customer requirements; we will map a realistic scope and cost band.",
        offer: "soc2-cost-estimate",
        numberLabel: "Employees",
        consent: "I consent to being contacted about SOC 2 readiness. HardenHQ may be paid a referral fee.",
        cta: "Estimate my SOC 2 cost",
        steps: ["We scope against what your customers actually require.", "You are told who will contact you.", "You get a cost band and a 16-week plan.", "The readiness checklist is sent regardless."],
        privacy: "Stored: name, email, company, headcount, notes. Never sold."
      },
      faq: [
        { q: "Is compliance tooling required?", a: "<p>No, but above about 20 employees it usually costs less than the evidence-collection time it replaces.</p>" },
        { q: "Can we reuse it for ISO 27001?", a: "<p>Substantially — control overlap is high, though ISO adds a management system and a different audit cycle.</p>" }
      ],
      sources: [
        { name: "AICPA — SOC 2 and the Trust Services Criteria", url: "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2", note: "Who may issue a report, and what Type I and Type II attest to" },
        { name: "NIST — Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", note: "Control mapping used to reuse SOC 2 evidence elsewhere" }
      ],
      related: ["soc2-readiness-guide", "security-questionnaires"]
    },

    "managed-security-cost": {
      title: "Managed security cost 2026: MSP, MSSP and MDR pricing compared",
      h1: "What outsourced security should cost",
      section: "Cost & pricing",
      eyebrow: "High-intent pricing guide",
      dek: "Per-seat pricing for managed IT, managed detection and full MSSP, plus what each genuinely covers.",
      disclosure: true,
      answer: "Expect roughly <strong>$100–$200 per user per month</strong> for managed IT with security included, <strong>$8–$25 per endpoint</strong> for managed detection and response, and <strong>$3,000–$15,000 monthly</strong> for a full MSSP. Most companies under 100 people need MDR, not an MSSP.",
      table: {
        caption: "Indicative managed security pricing, July 2026.",
        headers: ["Service", "Typical price", "What you get", "What it excludes", "Right for"],
        rows: [
          { cells: ["Managed IT (with security)", "$100 – $200 / user / mo", "Helpdesk, patching, endpoint, backup", "24/7 threat hunting", "5–100 staff, no internal IT"] },
          { best: true, cells: ["MDR", "$8 – $25 / endpoint / mo", "24/7 detection, triage, containment", "Helpdesk, patching, projects", "Any company with real data risk"] },
          { cells: ["MSSP", "$3k – $15k / month", "SIEM, log management, compliance reporting", "Endpoint response unless bundled", "Regulated or 100+ staff"] },
          { cells: ["vCISO", "$2k – $8k / month", "Strategy, roadmap, customer assurance", "Any operational work", "Companies selling to enterprise"] }
        ],
        note: "Ranges from published pricing and MSP quotes reviewed July 2026."
      },
      body:
        "<h2>Read the response authority clause</h2>" +
        "<p>The critical question for MDR is whether the provider can <em>isolate a host at 3am without calling you</em>. If they can only alert, you own the response and the value drops sharply. Get the authority in the contract.</p>" +
        "<!--AD-->" +
        "<h2>Questions before signing</h2>" +
        "<ol><li>What is the contractual response time, and to what — alert or containment?</li>" +
        "<li>Who owns the tooling licences if we leave?</li>" +
        "<li>Do we get raw log access, and for how long?</li>" +
        "<li>Is incident response included or billed hourly during an incident?</li>" +
        "<li>What is explicitly out of scope?</li></ol>" +
        "<h2>Build or buy</h2>" +
        "<p>Under 100 people, 24/7 coverage cannot be staffed internally — buy MDR. Keep identity administration and the <a href='security-baseline-smb.html'>baseline</a> in-house; those are cheap and you should not outsource understanding of them.</p>",
      edge: {
        intro: "Every page ranking for this term is published by a provider or a directory paid to introduce one, and they share a structural problem: the acronyms are used as though they denoted comparable products. MSP, MSSP and MDR describe different scopes with overlapping marketing, so a reader comparing three quotes is usually comparing three different things while believing they are comparing price. The single clause that decides whether any of it works is absent from all of them.",
        gaps: [
          {
            claim: "\"Managed security from $X per endpoint per month — 24/7 monitoring and response.\"",
            problem: "&lsquo;Response&rsquo; is the most overloaded word in this market and the pricing pages never define it. It spans four distinct service levels: notifying you, investigating and telling you what to do, taking containment action with your approval, and taking containment action unilaterally under pre-agreed authority. Only the fourth compresses attacker dwell time at three in the morning, which is when it matters, and the first three all get marketed as response. The consequence is that two quotes differing by threefold per endpoint may both say &lsquo;24/7 response&rsquo; while one isolates a compromised host in minutes and the other emails an alert into an inbox nobody reads until Monday — at which point you have bought monitoring at a response price and will find out during the incident.",
            ours: "We make the response-authority clause the first comparison line: can they isolate a host, disable an account and block a hash without calling you, in writing, and what is the contractual time to <em>containment</em> rather than to alert."
          },
          {
            claim: "Providers are compared per endpoint or per user, as though the unit were standard.",
            problem: "The units are not interchangeable and the quoted one is chosen to flatter. Per-endpoint pricing looks cheap for a company where staff have one laptop each and expensive where servers, virtual machines and containers are counted; per-user looks cheap until contractors and shared accounts are included. Underneath, three costs commonly sit outside the unit price: log ingestion or data volume charges that scale with what you actually send — the line item that most often doubles an MSSP bill — tooling licences that may be resold to you at margin or held in the provider's own tenant, and incident response billed hourly precisely when you need it most. A per-endpoint comparison of two providers can therefore invert once a real asset inventory and log volume are applied.",
            ours: "We normalise quotes onto your actual inventory including servers and cloud workloads, and require log-volume charges, licence ownership and incident-response billing to be quoted as separate lines before any per-unit figure is compared."
          },
          {
            claim: "\"Our SOC is staffed 24/7 by expert analysts.\"",
            problem: "Frequently true and frequently not the analysts who will handle your alert. Subcontracting and follow-the-sun arrangements are normal, which is unobjectionable in itself, but two things follow that no provider page discloses. Escalation crosses an organisational boundary at night, which is when dwell time is cheapest to the attacker and slowest to resolve. And the provider's own tenancy becomes part of your attack surface: a compromise of a managed provider grants privileged access into every customer environment simultaneously, a pattern that has repeatedly produced multi-victim incidents. So the question is not whether the SOC is staffed but who is on shift at three in the morning, and what the provider's own security posture and breach-notification obligation to you look like.",
            ours: "We ask who is on shift out of hours, whether triage is subcontracted, and what the provider's own attestation and notification obligations are — treating the provider as a privileged-access risk rather than only as a control."
          },
          {
            claim: "Outsourcing means you no longer need internal security capability.",
            problem: "This is the premise of the entire category and it fails on three specific tasks that cannot be delegated. Someone internal must know which systems and data actually matter, or every alert is triaged without business context and the provider optimises for closing tickets. Someone must own identity administration, because the joiner-mover-leaver process is where most real compromise originates and it moves faster than any external ticket queue. And someone must be able to authorise action at three in the morning, or the response authority you paid for stalls at the approval step. The related unpriced cost is exit: if the tooling licences, the tuned detection rules and the historical logs all live in the provider's tenant, switching means rebuilding detection from zero and losing the history you would need to investigate anything older than the transition.",
            ours: "We name the three functions to keep in-house regardless of spend, and treat log ownership, rule portability and retention on exit as contract terms to settle before signing rather than at renewal."
          }
        ],
        only: [
          "The four service levels hiding behind the word 'response', and the containment-authority clause as the first thing to compare.",
          "Quotes normalised onto a real inventory, with log-volume charges, licence ownership and hourly incident-response billing broken out.",
          "Who is actually on shift at 3am, plus the provider's own privileged access treated as part of your attack surface.",
          "The three functions that cannot be outsourced at any price: asset context, identity administration, out-of-hours authority.",
          "Exit cost priced up front — log ownership, detection-rule portability and historical retention when you switch."
        ]
      },
      leadForm: {
        title: "Get managed security quotes compared",
        sub: "Tell us your size and stack; we will show what the service tiers should cost and which you actually need.",
        offer: "managed-security-comparison",
        numberLabel: "Endpoints",
        consent: "I consent to being contacted about managed security services. HardenHQ may be paid a referral fee.",
        cta: "Compare managed options",
        steps: ["We size the requirement against your risk, not the vendor's tiers.", "You are told who will contact you.", "You get pricing benchmarks and the contract questions to ask.", "The scope template is sent regardless."],
        privacy: "Stored: name, email, company, endpoints, notes. Never sold."
      },
      faq: [
        { q: "Is MDR worth it under 20 staff?", a: "<p>If you hold customer or payment data, usually yes — it is the cheapest route to 24/7 coverage.</p>" },
        { q: "Can our MSP just do this?", a: "<p>Some do it well. Ask whether detection is staffed 24/7 by their own analysts or subcontracted, and what containment authority they hold.</p>" }
      ],
      sources: [
        { name: "CISA — guidance for managed service provider customers", url: "https://www.cisa.gov/news-events/cybersecurity-advisories", note: "Advisories on supply-chain compromise through managed providers" },
        { name: "NIST — Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", note: "Scoping reference for what a managed service does and does not cover" }
      ],
      related: ["best-endpoint-protection", "security-baseline-smb"]
    },

    "best-endpoint-protection": {
      title: "Best endpoint protection for small business 2026",
      h1: "Endpoint protection compared",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "EDR versus antivirus versus managed detection, scored on risk reduction, deployment friction, cost and evidence quality.",
      disclosure: true,
      answer: "Small companies should run <strong>managed EDR</strong>, not consumer antivirus. The decisive differences are 24/7 human triage, rollback capability, and whether the console produces evidence an insurer or auditor will accept.",
      table: {
        caption: "Endpoint protection tiers scored against the HardenHQ rubric, July 2026.",
        headers: ["Tier", "Risk reduction", "Friction", "Typical cost", "Best for"],
        rows: [
          { cells: ["Built-in OS protection", "Baseline", "None", "Included", "Very small, low-risk teams"] },
          { cells: ["Business antivirus", "Low–moderate", "Low", "$3 – $6 / endpoint / mo", "Minimal budgets"] },
          { best: true, cells: ["EDR with managed triage", "High", "Moderate", "$8 – $25 / endpoint / mo", "Most companies with real data"] },
          { cells: ["EDR + full MDR service", "Very high", "Low internally", "$20 – $45 / endpoint / mo", "No internal IT, 24/7 need"] }
        ]
      },
      body:
        "<h2>What actually separates them</h2>" +
        "<ol><li><strong>Telemetry retention.</strong> Can you reconstruct what happened 30 days ago?</li>" +
        "<li><strong>Human triage.</strong> Alerts nobody reads are not detection.</li>" +
        "<li><strong>Isolation and rollback.</strong> One-click network isolation is worth the tier upgrade alone.</li>" +
        "<li><strong>Coverage.</strong> Servers, Macs and mobile, or just Windows laptops?</li></ol>" +
        "<!--AD-->" +
        "<h2>Deployment realities</h2>" +
        "<p>Budget a week of tuning. Expect exclusions for development and line-of-business software, and document every one — exclusions are where attackers live. Verify coverage monthly; the gap is always the machine nobody enrolled.</p>" +
        "<h2>Cost in context</h2>" +
        "<p>At 25 endpoints, managed EDR costs roughly $200–$600 a month. Compare that against the <a href='managed-security-cost.html'>managed service alternatives</a> and against a single ransomware recovery.</p>",
      methodology: "<p>Tiers scored against our <a href='review-methodology.html'>rubric</a> using vendor documentation, published pricing and deployment in a 20-seat test environment, June–July 2026.</p>",
      faq: [
        { q: "Is built-in OS protection enough?", a: "<p>Its prevention is genuinely good; what is missing is retained telemetry, managed triage and response tooling.</p>" },
        { q: "Do we need it on servers?", a: "<p>Yes — servers are the target, and server licensing is usually a separate SKU.</p>" }
      ],
      related: ["managed-security-cost", "security-baseline-smb"]
    },

    "best-mfa-solutions": {
      title: "Best MFA solutions for small business 2026",
      h1: "MFA platforms compared",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "Built-in cloud identity MFA, dedicated platforms and hardware keys — scored on phishing resistance, friction and cost.",
      disclosure: true,
      answer: "Most small companies should use the <strong>MFA built into their existing cloud identity provider</strong> plus <strong>hardware keys for admins and finance</strong>. A dedicated MFA platform is worth it mainly when you must protect legacy on-premise applications.",
      table: {
        caption: "MFA approaches scored against the HardenHQ rubric, July 2026.",
        headers: ["Approach", "Phishing resistance", "Coverage", "Cost", "Best for"],
        rows: [
          { best: true, cells: ["Cloud identity built-in MFA", "Good with number matching", "Cloud apps, SSO", "Usually included", "Nearly all small companies"] },
          { cells: ["Hardware security keys", "Excellent", "Anything FIDO2", "$25 – $60 per key", "Admins, finance, executives"] },
          { cells: ["Dedicated MFA platform", "Good–excellent", "Legacy + VPN + cloud", "$3 – $9 / user / mo", "On-premise or mixed estates"] },
          { cells: ["SMS codes", "Poor", "Universal", "Low", "Last resort only"] }
        ]
      },
      body:
        "<h2>Buy keys before you buy a platform</h2>" +
        "<p>Two hardware keys each for your handful of privileged users costs a few hundred dollars and removes the attack path that produces the worst incidents. That beats a per-user platform subscription for most companies.</p>" +
        "<!--AD-->" +
        "<h2>When a platform earns its keep</h2>" +
        "<ul><li>VPN or RDP that your identity provider cannot protect.</li>" +
        "<li>On-premise applications with legacy authentication.</li>" +
        "<li>Contractors outside your directory needing scoped access.</li></ul>" +
        "<h2>Rollout matters more than product</h2>" +
        "<p>The failure mode is never the product — it is the excluded service account, the legacy protocol left enabled, or the help desk resetting factors on a phone call. Follow the <a href='mfa-rollout-guide.html'>rollout guide</a>.</p>",
      methodology: "<p>Scored against our <a href='review-methodology.html'>rubric</a> using vendor documentation, published pricing and a 20-seat pilot deployment, June–July 2026.</p>",
      faq: [
        { q: "How many hardware keys per person?", a: "<p>Two — one carried, one stored securely. Single-key users create lockouts.</p>" },
        { q: "Are passkeys ready for business use?", a: "<p>Yes for mainstream cloud identity. Verify legacy application support before committing.</p>" }
      ],
      related: ["mfa-rollout-guide", "password-manager-rollout"]
    },

    "security-score-calculator": {
      title: "Security posture scorer for small business",
      h1: "Security posture scorer",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Answer twelve questions about your current controls and get a weighted posture score with the three highest-value next actions.",
      disclosure: true,
      toc: false,
      answer: "The score weights each control by real-world risk reduction — identity and recovery dominate, because that is where small-business losses actually come from. It is a prioritisation aid, not an assessment of your environment.",
      body:
        "<div id='calculator'></div>" +
        "<h2>How the weighting works</h2>" +
        "<p>Controls are weighted by attack prevalence against small companies rather than by theoretical severity. MFA coverage and tested backups carry the most weight; logging and formal policy carry less, despite auditors' fondness for them.</p>" +
        "<h2>What it cannot see</h2>" +
        "<ul><li>Configuration quality — MFA enabled with legacy auth still on scores too well.</li>" +
        "<li>Your specific application and supply-chain risk.</li>" +
        "<li>Contractual and regulatory obligations that force controls regardless of risk.</li></ul>" +
        "<h2>Next step</h2>" +
        "<p>Take the three lowest-scoring weighted items into the <a href='security-baseline-checklist.html'>baseline checklist</a> and work them in order.</p>",
      calculator: {
        title: "Weighted posture score",
        sub: "Twelve questions, weighted by real-world risk reduction for companies under 500 staff.",
        disclaimer: "A prioritisation aid based on self-reported answers — not a security assessment, audit or guarantee of any outcome.",
        fields: [
          { id: "users", label: "Number of staff", type: "number", value: 25, min: 1, max: 5000, step: 1 },
          { id: "mfa", label: "MFA coverage", type: "select", value: "some", options: [{ value: "none", label: "None or optional" }, { value: "some", label: "Email only" }, { value: "most", label: "Email + remote access enforced" }, { value: "all", label: "Everything, phishing-resistant for admins" }] },
          { id: "legacy", label: "Legacy authentication protocols disabled?", type: "select", value: "no", options: [{ value: "no", label: "No / not sure" }, { value: "yes", label: "Yes, disabled and verified" }] },
          { id: "backup", label: "Backups", type: "select", value: "cloud", options: [{ value: "none", label: "None or ad hoc" }, { value: "cloud", label: "Cloud sync only" }, { value: "backup", label: "Real backups, untested" }, { value: "tested", label: "Immutable and restore-tested" }] },
          { id: "edr", label: "Endpoint protection", type: "select", value: "av", options: [{ value: "builtin", label: "Built-in OS only" }, { value: "av", label: "Business antivirus" }, { value: "edr", label: "EDR deployed" }, { value: "mdr", label: "EDR with 24/7 managed triage" }] },
          { id: "patch", label: "Patching cadence", type: "select", value: "monthly", options: [{ value: "adhoc", label: "Ad hoc" }, { value: "monthly", label: "Monthly" }, { value: "14", label: "Within 14 days" }, { value: "7", label: "Within 7 days, verified" }] },
          { id: "email", label: "Email authentication (SPF/DKIM/DMARC)", type: "select", value: "partial", options: [{ value: "none", label: "Not configured" }, { value: "partial", label: "SPF/DKIM only" }, { value: "monitor", label: "DMARC at p=none" }, { value: "reject", label: "DMARC at reject" }] },
          { id: "payment", label: "Written payment-verification callback rule?", type: "select", value: "no", options: [{ value: "no", label: "No" }, { value: "informal", label: "Informal practice" }, { value: "yes", label: "Written and enforced" }] },
          { id: "admin", label: "Local admin rights removed from users?", type: "select", value: "no", options: [{ value: "no", label: "No" }, { value: "partial", label: "Some users" }, { value: "yes", label: "Yes, with elevation process" }] },
          { id: "logs", label: "Centralised log retention", type: "select", value: "none", options: [{ value: "none", label: "None" }, { value: "30", label: "About 30 days" }, { value: "90", label: "90 days or more" }] },
          { id: "training", label: "Phishing reporting culture", type: "select", value: "none", options: [{ value: "none", label: "No programme" }, { value: "annual", label: "Annual training" }, { value: "active", label: "Report button + regular simulation" }] },
          { id: "irplan", label: "Incident response plan", type: "select", value: "none", options: [{ value: "none", label: "None" }, { value: "written", label: "Written, never exercised" }, { value: "tested", label: "Written and tabletop-tested" }] }
        ],
        compute: function (v) {
          var W = {
            mfa: { none: 0, some: 8, most: 18, all: 22 },
            legacy: { no: 0, yes: 8 },
            backup: { none: 0, cloud: 4, backup: 12, tested: 18 },
            edr: { builtin: 3, av: 6, edr: 12, mdr: 15 },
            patch: { adhoc: 0, monthly: 5, "14": 9, "7": 10 },
            email: { none: 0, partial: 3, monitor: 6, reject: 8 },
            payment: { no: 0, informal: 3, yes: 8 },
            admin: { no: 0, partial: 3, yes: 6 },
            logs: { none: 0, "30": 3, "90": 5 },
            training: { none: 0, annual: 2, active: 5 },
            irplan: { none: 0, written: 2, tested: 5 }
          };
          var max = 22 + 8 + 18 + 15 + 10 + 8 + 8 + 6 + 5 + 5 + 5;
          var score = 0, gaps = [];
          function add(k, label, best) {
            var got = W[k][v[k]];
            score += got;
            var top = W[k][best];
            if (got < top) { gaps.push({ label: label, missing: top - got }); }
          }
          add("mfa", "Extend MFA coverage (phishing-resistant for admins)", "all");
          add("legacy", "Disable legacy authentication protocols", "yes");
          add("backup", "Make backups immutable and restore-test them", "tested");
          add("edr", "Move to EDR with managed 24/7 triage", "mdr");
          add("patch", "Tighten patching to 7–14 days", "7");
          add("email", "Advance DMARC to reject", "reject");
          add("payment", "Write and enforce the payment callback rule", "yes");
          add("admin", "Remove local admin rights with an elevation process", "yes");
          add("logs", "Retain centralised logs for 90 days", "90");
          add("training", "Add a report button and regular simulation", "active");
          add("irplan", "Write and tabletop the incident response plan", "tested");
          gaps.sort(function (a, b) { return b.missing - a.missing; });
          var pct = Math.round(score / max * 100);
          var band = pct >= 85 ? "Strong for a company this size" : pct >= 65 ? "Reasonable, with clear gaps" : pct >= 40 ? "Below baseline — prioritise now" : "High exposure — start this week";
          var next = gaps.slice(0, 3).map(function (g, i) { return (i + 1) + ". " + g.label; }).join("<br>") || "Baseline complete — move to logging depth and vendor risk.";
          var perUser = v.users * 45;
          return [
            { label: "Posture score", value: pct + " / 100", hint: band },
            { label: "Top three actions", value: '<span style="font-size:.95rem;font-weight:600;line-height:1.5">' + next + "</span>", hint: "Ordered by weighted risk reduction, not by cost." },
            { label: "Indicative security budget", value: window.MDN_UTIL.money(perUser) + " / month", hint: "Benchmark of roughly $45 per user per month for baseline tooling at " + v.users + " staff." },
            { label: "Insurance readiness", value: (W.mfa[v.mfa] >= 18 && W.backup[v.backup] >= 12 && W.edr[v.edr] >= 12) ? "Likely to be quoted" : "Gaps underwriters will flag", hint: "MFA, tested backups and EDR are the three most commonly required controls." }
          ];
        }
      },
      faq: [
        { q: "Is this an assessment?", a: "<p>No. It is a weighted self-assessment to prioritise effort. A real assessment requires access to your environment.</p>" },
        { q: "Why does MFA dominate the score?", a: "<p>Because credential-based attacks dominate real small-business incidents. The weights follow prevalence, not vendor marketing.</p>" }
      ],
      related: ["security-baseline-smb", "security-baseline-checklist", "cyber-insurance-requirements"]
    },

    "security-baseline-checklist": {
      title: "SMB security baseline checklist (30 controls)",
      h1: "The baseline control checklist",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Thirty controls across identity, endpoints, email, data, people and response. Tick as you go — progress saves in your browser.",
      toc: false,
      answer: "Work top to bottom: the groups are ordered by risk reduction per hour. Anything unticked is either an accepted risk or an open gap, and writing down which is the point of the exercise.",
      body:
        "<div id='checklist'></div>" +
        "<h2>How to use it</h2>" +
        "<p>Run it quarterly and after any material change — a new office, a major SaaS migration, or your first enterprise customer. Print the completed list as evidence for insurers and questionnaires.</p>" +
        "<h2>Pair it with the score</h2>" +
        "<p>The <a href='security-score-calculator.html'>posture scorer</a> tells you which three to do next; this list tells you whether they are actually finished.</p>",
      checklist: {
        groups: [
          { title: "Identity", note: "Where most real attacks begin.", items: ["MFA enforced on email for all users", "MFA enforced on remote access and VPN", "Phishing-resistant MFA for admins and finance", "Legacy authentication protocols disabled and verified", "Admin accounts separate from daily-use accounts", "Offboarding revokes access within one hour"] },
          { title: "Endpoints", items: ["EDR deployed on every workstation and server", "Coverage report reviewed monthly for gaps", "Disk encryption enabled everywhere", "Local admin rights removed with an elevation process", "Patching within 14 days for internet-facing systems", "Unsupported operating systems eliminated or isolated"] },
          { title: "Email and payments", items: ["SPF, DKIM and DMARC published", "DMARC at quarantine or reject", "External sender warnings enabled", "Auto-forwarding to external addresses blocked", "Alerts on mailbox rule creation", "Written payment-verification callback rule"] },
          { title: "Data and recovery", items: ["Backups follow 3-2-1-1-0", "At least one immutable or offline copy", "Restore tested in the last 90 days with the result recorded", "SaaS data backed up independently of the vendor", "RTO and RPO defined and agreed"] },
          { title: "People and process", items: ["Phishing report button deployed and thanked", "Security onboarding for new starters", "Vendor list maintained with access levels", "Access reviewed quarterly"] },
          { title: "Response", items: ["Two-page incident response plan stored offline", "Insurer incident hotline number recorded", "Tabletop exercise in the last 12 months", "Centralised logs retained for 90 days"] }
        ]
      },
      faq: [
        { q: "Is my progress private?", a: "<p>Yes — ticks are stored only in your browser's local storage and never sent to us.</p>" },
        { q: "Can I use this as audit evidence?", a: "<p>As a self-assessment record, yes. Auditors will still want the underlying evidence for each control.</p>" }
      ],
      related: ["security-baseline-smb", "security-score-calculator"],
      cta: { title: "One control a month", text: "The Control Set sends one control worth deploying and one thing you can stop paying for.", btn: "Subscribe", href: "index" }
    }
  }
};

window.SITE_DATA.aboutRelated = ["security-baseline-smb", "best-endpoint-protection"];
Object.assign(window.SITE_DATA.pages, window.MDN_TRUST(window.SITE_DATA));
window.MDN_SITES = window.MDN_SITES || {};
window.MDN_SITES[window.SITE_DATA.slug] = window.SITE_DATA;
