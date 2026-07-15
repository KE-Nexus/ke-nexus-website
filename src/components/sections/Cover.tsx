import { useState } from 'react';
import clsx from 'clsx';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

const featured = TESTIMONIALS[0];

export function Cover() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h-[100svh] min-h-[36rem] w-full overflow-hidden bg-white dark:bg-ink-950">
      <img
        src="/images/cover.png"
        alt="A smiling K&E Nexus client reviewing her newly launched business website on a large screen and laptop in a modern office, celebrating a successful project launch."
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={clsx(
          'absolute inset-0 h-full w-full object-cover object-[40%_35%] transition-all duration-700 ease-out',
          loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md',
        )}
      />

      {/* Scrim so the fixed, transparent navbar stays legible over the photo in both themes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/85 to-transparent dark:from-ink-950/85 sm:h-36"
      />

      {/* Dark wash — independent of site theme, like Hero's photo-caption treatment —
          fully opaque near the bottom so it also hides the photo's own baked-in caption text,
          which would otherwise ghost through behind our real quote overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink-950 from-35% to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 pb-8 sm:pb-12">
        <div className="container-page max-w-2xl">
          <Quote className="h-7 w-7 text-gold-400/80 sm:h-8 sm:w-8" aria-hidden="true" />
          <p className="mt-3 break-words text-balance text-lg font-medium leading-snug text-white sm:text-2xl">
            &ldquo;{featured.quote}&rdquo;
          </p>
          <p className="mt-3 break-words text-sm text-ink-200">
            {featured.name} &middot; {featured.role}, {featured.company}
          </p>
        </div>
      </div>
    </section>
  );
}
