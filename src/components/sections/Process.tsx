import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { PROCESS_STEPS } from '../../data/process';

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="How we work"
          title="A process built for visibility, not surprises."
          description="Five stages, one continuous conversation. You'll always know what stage you're in and what happens next."
          align="center"
        />

        <div className="relative mt-16">
          <div
            className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-gold-400/60 via-ink-200 to-transparent dark:via-white/10 lg:left-1/2 lg:block"
            aria-hidden="true"
          />

          <ol className="space-y-10 lg:space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} as="li" delay={0.05 * i}>
                <div
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                    i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  } ${i > 0 ? 'lg:mt-4' : ''}`}
                >
                  <div className="flex items-center gap-4 lg:w-1/2 lg:justify-end">
                    <div
                      className={`flex flex-1 items-center gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-900/40 lg:max-w-md ${
                        i % 2 === 1 ? 'lg:flex-row-reverse lg:text-right' : ''
                      }`}
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-400 dark:bg-white/10">
                        <step.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700 dark:text-gold-400">
                          Step {step.number}
                        </span>
                        <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <span className="absolute left-6 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gold-400 ring-4 ring-white dark:ring-ink-950 lg:left-1/2 lg:block" />

                  <div className="lg:w-1/2">
                    <p className="max-w-md text-ink-600 dark:text-ink-300">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
