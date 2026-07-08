import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700 dark:text-gold-400">
        <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-semibold text-ink-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-lg leading-relaxed text-ink-600 dark:text-ink-300">
          {description}
        </p>
      )}
    </Reveal>
  );
}
