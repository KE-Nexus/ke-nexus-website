import { useState } from 'react';
import clsx from 'clsx';

export function Cover() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h-[100svh] min-h-[36rem] w-full overflow-hidden bg-white dark:bg-ink-950">
      <img
        src="/images/cover.png"
        alt='A smiling K&E Nexus client reviewing her newly launched business website on a large screen and laptop in a modern office, celebrating with the quote: "A complete game-changer! K&E Nexus delivered beyond our wildest expectations."'
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

      {/* Fade into the Hero section's background for a seamless handoff */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-ink-950 sm:h-40"
      />
    </section>
  );
}
