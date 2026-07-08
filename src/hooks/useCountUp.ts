import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

/** Animates the numeric portion of a stat string (e.g. "20+", "<2wk", "98%") once it scrolls into view. */
export function useCountUp(value: string, duration = 1.4) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const match = value.match(/-?\d+(\.\d+)?/);
  const target = match ? parseFloat(match[0]) : null;
  const prefix = match ? value.slice(0, match.index) : '';
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : '';
  const decimals = match?.[1]?.length ? match[1].length - 1 : 0;

  useEffect(() => {
    if (!isInView || target === null) return;

    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`);
      },
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return { ref, display };
}
