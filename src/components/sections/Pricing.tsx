import { ArrowUpRight, Check } from 'lucide-react';
import clsx from 'clsx';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { Button } from '../ui/Button';
import { PRICING_TIERS } from '../../data/pricing';

export function Pricing() {
  return (
    <section id="pricing" className="bg-ink-50/60 py-24 dark:bg-white/[0.02] sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Straightforward packages. No surprise scope."
          description="A starting point for common engagements — every quote is scoped to your business before we lock in a number."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={0.05 * i} className="h-full">
              <TiltCard className="group h-full" glow={tier.popular}>
                <div
                  className={clsx(
                    'relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1',
                    tier.popular
                      ? 'border-gold-400/70 bg-white shadow-glow dark:bg-ink-900/60 lg:-translate-y-3'
                      : 'border-ink-100 bg-white hover:border-gold-300 hover:shadow-card dark:border-white/10 dark:bg-ink-900/40 dark:hover:border-gold-500/40 dark:hover:shadow-card-dark',
                  )}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 right-7 inline-flex items-center rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-ink-950 shadow-sm">
                      Popular
                    </span>
                  )}

                  <h3 className="text-xl font-semibold text-ink-900 dark:text-white">{tier.name}</h3>
                  <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{tier.tagline}</p>

                  <div className="mt-6">
                    <span className="font-display text-3xl font-semibold text-ink-900 dark:text-white">
                      {tier.price}
                    </span>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{tier.priceNote}</p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-ink-100 pt-6 dark:border-white/10">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-signal-500 dark:text-signal-400"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contact"
                    variant={tier.popular ? 'primary' : 'secondary'}
                    size="md"
                    className="mt-7 w-full"
                  >
                    Request quote
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
