import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { StatValue } from '../ui/StatValue';
import { STATS, DIFFERENTIATORS } from '../../data/stats';

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Why K&E Nexus"
          title="Built to be a long-term technical partner, not a one-off vendor."
          align="center"
        />

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={0.05 * i} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <StatValue value={stat.value} className="font-display text-4xl font-semibold text-gold-400 sm:text-5xl" />
              <p className="mt-2 text-sm text-ink-300">{stat.label}</p>
            </Reveal>
          ))}
        </dl>

        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={0.05 * i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold-400/30 hover:bg-white/[0.06]"
            >
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-ink-300">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
