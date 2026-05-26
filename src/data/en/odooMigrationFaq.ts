export const odooMigrationFaq = [
  {
    question: 'How much does migration from 1C to Odoo cost?',
    answer: 'The cost depends on company size, number of users, customization scope, integrations, and data migration. Odoo license is paid separately per user according to current Odoo pricing.',
  },
  {
    question: 'What happens to historical data from 1C after migration?',
    answer: 'Balances, open transactions, and reference data are transferred. Parallel accounting is maintained until correctness is confirmed.',
  },
  {
    question: 'How to maintain accounting continuity during the transition?',
    answer: 'Continuity is ensured through a phased transition: first, critical processes, balances, and open transactions are identified, then data is transferred to Odoo and reconciled. Until results are confirmed, parallel accounting in 1C/BAS and Odoo may be maintained. The actual go-live only occurs after testing key scenarios and aligning results with the client team.',
  },
  {
    question: 'Is Odoo suitable for Ukrainian tax accounting?',
    answer: 'Typical adaptations for Ukrainian bookkeeping and tax accounting have already been developed for Odoo, covering most needs. Any additional settings and customizations can be implemented — the scope of development depends on the company\'s processes.',
  },
  {
    question: 'How does Odoo differ from SAP and MS Dynamics?',
    answer: 'Odoo has an open architecture, transparent licensing model, and typically lower total cost of ownership compared to large enterprise ERPs. Thanks to ready-made modules and flexible customization, implementation can often be faster and cheaper, but actual results depend on the scale of processes.',
  },
  {
    question: 'How much does Odoo cost per month?',
    answer: 'For most of our clients, the monthly Odoo cost is €17.90 per user for the first year and €22.40 for subsequent years. All business modules are available within the Odoo subscription with no extra charges.',
  },
  {
    question: 'Is staff training required after the transition?',
    answer: 'Yes. Training is required for accounting, managers, warehouse, sales, and other roles that will work in Odoo. A training course typically lasts up to 2 weeks.',
  },
  {
    question: 'What is a Discovery phase before Odoo implementation and why is it needed?',
    answer: 'Discovery is a short pre-project phase where we analyze business processes, accounting logic, data structure, integrations, and user expectations. Its purpose is to define the actual scope of Odoo implementation before development begins. The Discovery output gives the client a description of the target architecture, list of required modules, customization assessment, data migration approach, integration perimeter, and preliminary timeline and budget estimate. This reduces the risk of project misjudgment, unnecessary development, and cost overruns during implementation.',
  },
  {
    question: 'Can we migrate only the accounting module?',
    answer: 'Yes, you can start with the accounting module and gradually add warehouse, sales, purchasing, manufacturing, or CRM. But before starting it is important to design the target architecture so that the first phase does not create constraints for future scaling.',
  },
  {
    question: 'How to verify that migration was performed correctly?',
    answer: 'Correctness is verified through reconciliation of the balance sheet, trial balances, counterparty balances, inventory, warehouses, banks and cash, as well as through testing of typical transactions. LUCAS conducts data reconciliation and control scenarios before go-live.',
  },
];
