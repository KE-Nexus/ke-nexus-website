import { Target, Users, Sparkles } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { NexusField } from '../ui/Nexusfield';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { UNSPLASH_IDS } from '../../data/images';

const POINTS = [
  {
    icon: Users,
    title: 'Founder-led, every project',
    description:
      'You work directly with the two engineers behind K&E Nexus — no layers of account managers between you and the people building your software.',
  },
  {
    icon: Target,
    title: 'Operations first, code second',
    description:
      'We start with your workflow, not a tech stack. The right solution is whatever actually removes the bottleneck — sometimes that means less software, not more.',
  },
  {
    icon: Sparkles,
    title: 'Built to scale with you',
    description:
      'Every system we ship is designed for the business you’re becoming, not just the one you are today.',
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="About K&E Nexus"
            title="Two engineers. One mission: make custom software accessible to any business."
            description="K&E Nexus was founded on a simple observation: the businesses that need custom software the most are usually the ones told they can't afford it. We built this consultancy to close that gap."
          />

          <Reveal delay={0.1} className="mt-8 rounded-2xl border border-ink-100 bg-ink-50/60 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-lg font-medium leading-relaxed text-ink-800 dark:text-ink-100">
              &ldquo;Our vision is to build a world where every business has access to custom
              digital solutions.&rdquo;
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={0.05 * i} as="li" className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-400 dark:bg-white/10">
                  <point.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900 dark:text-white">{point.title}</h3>
                  <p className="mt-1 text-ink-600 dark:text-ink-300">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-900 shadow-card-dark">
            <ResponsiveImage
              photoId={UNSPLASH_IDS.cityGlobal}
              alt="Aerial view of an illuminated city skyline at night, representing global reach"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover opacity-70 dark:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink-950/90 via-ink-950/50 to-gold-900/30 mix-blend-multiply" />
            <NexusField
              className="absolute inset-0 h-full w-full animate-float"
              nodeClassName="fill-gold-400/90"
              lineClassName="stroke-gold-400/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="font-display text-2xl font-semibold text-white text-balance">
                Global reach. Strategic execution.
              </p>
              <p className="mt-2 text-ink-300">
                Remote-first, working with businesses across industries and time zones.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
