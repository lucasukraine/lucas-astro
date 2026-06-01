const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const homeFaq = [
  // Audit
  {
    question: "Which companies in Ukraine are required to undergo statutory audit in 2026?",
    answer: `Statutory audit applies to public interest entities (PIEs), large and medium-sized enterprises under the Law of Ukraine "On Audit of Financial Statements." PIEs include public joint-stock companies, banks, insurers, and other categories. The audit is performed under International Standards on Auditing with an auditor's report issued accordingly. <a href="${base}/en/audit/">Learn more about audit →</a>`,
  },
  {
    question: "What is the difference between an audit and a review of financial statements?",
    answer: "An audit provides reasonable assurance and is performed under the full scope of ISA procedures with an auditor's report under ISA 700. A review under ISRE 2400 provides limited assurance, is performed faster and costs less — suitable when a full audit is not legally required but confirmation is needed for a bank or investor.",
  },
  {
    question: "Can an accounting firm simultaneously maintain accounting records and conduct an audit?",
    answer: "No. This is a direct prohibition under the International Code of Ethics and ISA. An auditor cannot examine financial statements that they themselves prepared — this violates the independence principle. LUCAS provides either audit or financial statement preparation for a single client, but not both services simultaneously.",
  },
  // SAF-T
  {
    question: "What is SAF-T and who does it apply to in Ukraine?",
    answer: `SAF-T (Standard Audit File for Tax) is a standardized XML file for transmitting detailed accounting data to the State Tax Service. In Ukraine it is being introduced in phases, starting with large taxpayers. The file contains all business transactions, primary documents, and reference data — essentially the full accounting records in a structured format. <a href="${base}/en/saf-t/">Learn more about SAF-T Connector →</a>`,
  },
  {
    question: "Can SAF-T be submitted directly from 1C/BAS, SAP, or Odoo?",
    answer: "Built-in SAF-T modules in 1C/BAS or SAP work only with one system and have limited processing speed. If data is distributed across multiple systems, a separate solution is needed. SAF-T Connector by LUCAS connects to SAP, 1C/BAS, Odoo, Microsoft Dynamics, and any custom systems simultaneously.",
  },
  {
    question: "What penalties apply for failure to submit SAF-T?",
    answer: "Non-submission or late submission of SAF-T is treated as a tax law violation with penalties under the Tax Code. In addition to direct fines, the company risks increased STS scrutiny, more frequent audits, and VAT refund delays.",
  },
  // Transfer Pricing
  {
    question: "Who is required to prepare transfer pricing documentation?",
    answer: `Companies conducting controlled transactions with related parties or residents of low-tax jurisdictions — subject to the value thresholds of Article 39 of the Tax Code of Ukraine. Verifying whether you fall under these requirements is the first step, and this is where mistakes most often occur. <a href="${base}/en/transfer-pricing/">Learn more about TP →</a>`,
  },
  {
    question: "What happens if the controlled transactions report is not submitted?",
    answer: "The penalty for non-submission of the controlled transactions report is set as a percentage of undeclared transaction amounts. If the STS determines that prices do not comply with the arm's length principle — it will assess additional income tax plus penalty plus interest. Quality documentation with benchmark analysis is the primary defense tool.",
  },
  {
    question: "What is the Master File and when is it required for TP?",
    answer: "The Master File is part of the OECD three-tier documentation structure: a description of the group's global business, functions of participants, and risks. It is prepared for participants of multinational enterprise groups (MNE groups) together with the MNE group participation notification and the local file. Without it, MNE group documentation is incomplete.",
  },
  // 1C → Odoo
  {
    question: "Is 1C/BAS banned in Ukraine in 2026?",
    answer: `Restrictions apply to government bodies, state enterprises, and critical infrastructure facilities (Cabinet Resolution №1335). For the private sector — restrictions through NSDC sanctions lists and risk of fines up to 2% of annual turnover under draft law №13505. Using 1C/BAS may raise additional concerns from banks and investors. <a href="${base}/en/odoo-migration/">Learn more about migration →</a>`,
  },
  {
    question: "What can replace 1C/BAS in Ukraine — real alternatives for 2026?",
    answer: "Main alternatives: Odoo (4th globally, TCO 70–80% lower than SAP), SAP S/4HANA (for large enterprises), Microsoft Dynamics 365 (for companies in the Microsoft ecosystem). For most Ukrainian mid-market businesses, Odoo is the optimal choice by functionality, cost, and implementation speed.",
  },
  {
    question: "How long does migration from 1C to Odoo take?",
    answer: "From 2 to 6 months depending on company size and accounting structure complexity. Small business — 2–3 months, medium with multiple legal entities — 4–6 months. The key speed factor: having implementation team members who understand both accounting and technology — without this the project drags on and costs more.",
  },
];
