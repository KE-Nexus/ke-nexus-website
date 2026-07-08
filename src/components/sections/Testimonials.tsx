import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonials';

const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const count = TESTIMONIALS.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % count) + count) % count);
  }, [count]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || shouldReduceMotion) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, paused, shouldReduceMotion]);

  const testimonial = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="What it's like to work with us."
          align="center"
        />

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <Quote className="mx-auto h-10 w-10 text-gold-400/60" aria-hidden="true" />

          <div className="relative mt-6 min-h-[220px] sm:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-center"
                aria-live="polite"
              >
                <blockquote>
                  <p className="text-balance text-xl font-medium leading-relaxed text-ink-800 dark:text-ink-100 sm:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-sm font-semibold text-gold-400 dark:bg-white/10">
                    {testimonial.initials}
                  </span>
                  <span className="text-left">
                    <span className="block font-semibold text-ink-900 dark:text-white">
                      {testimonial.name}
                    </span>
                    <span className="block text-sm text-ink-500 dark:text-ink-400">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:border-white/10 dark:text-ink-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1} of ${count}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-gold-400' : 'w-2 bg-ink-200 hover:bg-ink-300 dark:bg-white/15 dark:hover:bg-white/25'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:border-white/10 dark:text-ink-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
