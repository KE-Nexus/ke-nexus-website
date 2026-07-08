export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: '20+', label: 'Projects shipped' },
  { value: '9', label: 'Industries served' },
  { value: '98%', label: 'Client retention' },
  { value: '<2wk', label: 'Avg. discovery turnaround' },
];

export interface Differentiator {
  title: string;
  description: string;
}

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Two engineers, direct access',
    description:
      'No account managers relaying messages. You work directly with the people writing your code, from kickoff to launch.',
  },
  {
    title: 'Built for your size, not a template',
    description:
      'We don’t sell package tiers. Every engagement is scoped to what your business actually needs, whether that’s a five-week fix or a year-long build.',
  },
  {
    title: 'Fixed-visibility pricing',
    description:
      'Clear scope, clear cost, and no surprise invoices. You’ll always know what you’re paying for and why.',
  },
  {
    title: 'We stay after launch',
    description:
      'Most firms disappear at delivery. We structure engagements to keep supporting and evolving what we build.',
  },
];
