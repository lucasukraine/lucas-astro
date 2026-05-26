export const saftFaq = [
  {
    question: 'How to prepare a SAF-T XML file — where to start?',
    answer: 'Analysis of data sources, mapping the chart of accounts to the SAF-T UA structure, checking the quality of reference data. Without quality input data, even the best software will generate a file with errors.',
  },
  {
    question: 'How much does SAF-T implementation cost in Ukraine?',
    answer: 'The cost depends on the ERP system, number of data sources, and mapping complexity. Turnkey SAF-T Connector implementation starts from €9,900.',
  },
  {
    question: 'What are typical SAF-T preparation errors and how to avoid them?',
    answer: "Typical errors occur not only at the XML or XSD schema level, but even before the file is generated — in the data structure, reference books, analytics, and mapping logic. The most common issues are related to insufficient transaction detail, incorrect links between documents, accounts, counterparties and tax data, as well as the accounting system not storing certain information in the format required for SAF-T UA. Errors can be avoided through prior data diagnostics, field mapping to SAF-T UA structure, test file generation, XSD validation, and logical consistency checks before official submission.",
  },
  {
    question: 'What is XSD validation and why is a file rejected?',
    answer: 'XSD validation checks whether the XML file conforms to the approved SAF-T UA technical structure. If the file fails technical or logical checks, the STS may reject the file and provide a list of identified errors in the receipt.',
  },
  {
    question: 'Can SAF-T be prepared in Excel or manually?',
    answer: 'SAF-T UA cannot be submitted in Excel format — the file must be generated in XML according to the current STS XSD structure. Excel can only be used as an intermediate source or auxiliary tool, not as the final submission format. SAF-T Connector includes an Excel viewer for generated XML files with editing capabilities.',
  },
  {
    question: 'How does SAF-T Connector differ from built-in modules in 1C or SAP?',
    answer: 'A built-in module typically works within a single ERP and depends on its data structure, performance, settings, and availability of required detail. This can be a limitation for companies with multiple systems, those that changed ERP during the reporting period, or those storing part of their data outside the main accounting system. SAF-T Connector works as a separate layer between accounting sources and SAF-T UA XML. It can consolidate data from multiple systems, apply unified mapping logic, perform preliminary validation, and generate the file regardless of which ERP is used for accounting.',
  },
  {
    question: 'How does SAF-T relate to standard VAT reporting?',
    answer: 'SAF-T UA does not replace tax declarations and standard reporting. Declarations are filed in the usual manner, while SAF-T UA is generated as a separate XML file and is currently submitted by large taxpayers upon STS request during documentary audits.',
  },
  {
    question: "Is company data transferred to the cloud during SAF-T preparation?",
    answer: 'SAF-T Connector is on-premise: installed on the client\'s server, data does not leave the infrastructure, no internet connection required.',
  },
  {
    question: 'How long does SAF-T Connector implementation take?',
    answer: '3–4 months. After implementation, technical SAF-T generation typically takes from a few minutes to two hours, depending on the volume of data in your accounting system.',
  },
  {
    question: 'What to do if the STS rejected the SAF-T file?',
    answer: 'If the STS did not accept the file, you need to analyze the list of errors in the receipt, identify their cause, correct the data or file generation logic, and resubmit the SAF-T UA. SAF-T Connector has built-in technical checks that allow processing errors before submitting the report to the tax authority.',
  },
];
