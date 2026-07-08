import type { LucideIcon } from 'lucide-react';
import { Search, PenTool, Hammer, Rocket, LifeBuoy } from 'lucide-react';

export interface ProcessStep {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description:
      'We start by understanding your operations, not your feature list — mapping bottlenecks, stakeholders, and constraints before writing a line of code.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description:
      'Architecture and interface decisions get made deliberately, with tradeoffs documented and validated with you before development begins.',
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Build',
    description:
      'Agile sprints with working software early and often. You see progress every week, not a black box for three months.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deliver',
    description:
      'Rigorous testing, staged rollout, and a launch plan built around your business, not a generic go-live checklist.',
  },
  {
    icon: LifeBuoy,
    number: '05',
    title: 'Support',
    description:
      'We stay on after launch — monitoring, iterating, and evolving the system as your business changes shape.',
  },
];
