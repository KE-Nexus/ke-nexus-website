import type { LucideIcon } from 'lucide-react';
import { Code2, Workflow, Smartphone, LineChart, Cloud, ShieldCheck } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: 'Custom Software',
    description:
      'Purpose-built systems designed around how your business actually operates — not the other way around.',
    points: ['Internal tools & dashboards', 'Legacy system modernization', 'API & integrations'],
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'We find the manual, repetitive, error-prone steps in your operations and engineer them away.',
    points: ['Process mapping & audits', 'Automated pipelines', 'Cross-tool orchestration'],
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Apps',
    description:
      'Customer-facing or internal, on any device — built for speed, clarity, and long-term maintainability.',
    points: ['Responsive web apps', 'iOS & Android', 'Progressive web apps'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description:
      'Scalable foundations so growth never turns into downtime — sized to your business, not a hyperscaler sales quota.',
    points: ['Cloud architecture', 'CI/CD pipelines', 'Cost-optimized hosting'],
  },
  {
    icon: LineChart,
    title: 'Strategic Consulting',
    description:
      'For teams who know something is broken but aren’t sure what to build. We help you find out, before you spend.',
    points: ['Technical roadmapping', 'Build vs. buy analysis', 'Scoping & feasibility'],
  },
  {
    icon: ShieldCheck,
    title: 'Support & Maintenance',
    description:
      'Software is never really "done." We stay on as a long-term partner, not a vendor who disappears at launch.',
    points: ['Ongoing maintenance', 'Monitoring & uptime', 'Iterative improvements'],
  },
];
