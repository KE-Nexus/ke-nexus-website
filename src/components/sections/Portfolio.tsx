import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { TiltCard } from '../ui/TiltCard';
import { PROJECTS } from '../../data/projects';

const ACCENT_OVERLAY: Record<'gold' | 'signal' | 'ink', string> = {
  gold: 'from-gold-600/70 via-ink-950/30',
  signal: 'from-signal-700/70 via-ink-950/30',
  ink: 'from-ink-700/70 via-ink-950/30',
};

export function Portfolio() {
  return (
    <section id="work" className="bg-ink-50/60 py-24 dark:bg-white/[0.02] sm:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="A sample of the problems we've been trusted to solve."
            description="Representative case studies across the industries we work in — illustrative of scope and outcome, details anonymized."
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={0.05 * (i % 3)} className="h-full">
              <TiltCard className="group h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-ink-900/40 dark:hover:shadow-card-dark">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ResponsiveImage
                      photoId={project.imageId}
                      alt={`${project.title} — ${project.industry} case study`}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${ACCENT_OVERLAY[project.accent]} to-transparent mix-blend-multiply`}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" aria-hidden="true" />
                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                      {project.industry}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="flex items-start justify-between gap-2 text-lg font-semibold text-ink-900 dark:text-white">
                      {project.title}
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-ink-600 dark:text-ink-300">{project.summary}</p>

                    <p className="mt-4 text-sm font-semibold text-signal-600 dark:text-signal-400">
                      {project.result}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2 border-t border-ink-100 pt-4 dark:border-white/10">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-600 dark:bg-white/10 dark:text-ink-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
