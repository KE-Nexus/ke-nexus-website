import { Check } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { SERVICES } from '../../data/services';

export function Services() {
  return (
    <section id="services" className="bg-ink-50/60 py-24 dark:bg-white/[0.02] sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we build"
          title="Every engagement starts with your bottleneck, not our product catalog."
          description="From a single automation to a full platform rebuild — here's where we typically add the most value."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={0.05 * (i % 3)} className="h-full">
              <TiltCard className="group h-full">
                <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card dark:border-white/10 dark:bg-ink-900/40 dark:hover:border-gold-500/40 dark:hover:shadow-card-dark">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950 dark:bg-white/10">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-ink-600 dark:text-ink-300">{service.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5 dark:border-white/10">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-300">
                        <Check className="h-4 w-4 shrink-0 text-signal-500 dark:text-signal-400" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
