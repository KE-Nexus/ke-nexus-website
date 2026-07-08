import { Reveal } from '../ui/Reveal';

const INDUSTRIES = [
  'Logistics',
  'Healthcare',
  'Retail & E-commerce',
  'Professional Services',
  'Manufacturing',
  'Nonprofit',
  'Real Estate',
  'Hospitality',
  'Financial Services',
];

export function TrustBar() {
  const loop = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section aria-label="Industries we serve" className="border-y border-ink-100 bg-ink-50/60 py-10 dark:border-white/10 dark:bg-white/[0.03]">
      <Reveal className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-400">
          Trusted across industries — built for businesses of any size
        </p>
      </Reveal>

      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap py-1 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          {loop.map((industry, i) => (
            <span
              key={`${industry}-${i}`}
              className="text-lg font-display font-medium text-ink-500 dark:text-ink-400"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
