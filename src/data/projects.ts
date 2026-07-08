import { UNSPLASH_IDS } from './images';

export interface Project {
  industry: string;
  title: string;
  summary: string;
  result: string;
  tags: string[];
  accent: 'gold' | 'signal' | 'ink';
  imageId: string;
}

export const PROJECTS: Project[] = [
  {
    industry: 'Logistics',
    title: 'Fleet dispatch platform',
    summary:
      'Replaced a spreadsheet-and-phone-calls dispatch process with a real-time routing dashboard for a regional delivery fleet.',
    result: '32% reduction in idle drive time',
    tags: ['React', 'Node.js', 'PostGIS'],
    accent: 'gold',
    imageId: UNSPLASH_IDS.fleetLogistics,
  },
  {
    industry: 'Healthcare',
    title: 'Patient intake automation',
    summary:
      'Built a HIPAA-conscious intake and scheduling system that syncs across three clinic locations for a growing practice group.',
    result: '40% less front-desk admin time',
    tags: ['Next.js', 'PostgreSQL', 'HL7'],
    accent: 'signal',
    imageId: UNSPLASH_IDS.healthcareClinic,
  },
  {
    industry: 'Retail',
    title: 'Inventory sync engine',
    summary:
      'Unified inventory across an e-commerce storefront, in-store POS, and three marketplace channels into a single source of truth.',
    result: 'Eliminated overselling incidents',
    tags: ['TypeScript', 'Shopify API', 'Redis'],
    accent: 'ink',
    imageId: UNSPLASH_IDS.retailWarehouse,
  },
  {
    industry: 'Professional Services',
    title: 'Client portal & billing',
    summary:
      'A branded client portal for a consulting firm — proposals, e-signatures, and invoicing in one workflow instead of five tools.',
    result: '3 weeks average sales-cycle cut',
    tags: ['React', 'Stripe', 'AWS'],
    accent: 'gold',
    imageId: UNSPLASH_IDS.professionalServices,
  },
  {
    industry: 'Manufacturing',
    title: 'Shop-floor QA tracker',
    summary:
      'A tablet-based quality-control system that replaced paper checklists on the production line for a mid-size manufacturer.',
    result: 'Defect reporting time cut in half',
    tags: ['React Native', 'GraphQL', 'AWS'],
    accent: 'signal',
    imageId: UNSPLASH_IDS.manufacturing,
  },
  {
    industry: 'Nonprofit',
    title: 'Donor & grant management',
    summary:
      'A lightweight CRM tailored to grant cycles and donor stewardship for a nonprofit outgrowing generic spreadsheets.',
    result: '2x donor follow-up rate',
    tags: ['Next.js', 'Postgres', 'Resend'],
    accent: 'ink',
    imageId: UNSPLASH_IDS.nonprofit,
  },
];
