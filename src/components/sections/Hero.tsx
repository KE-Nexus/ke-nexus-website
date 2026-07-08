import { useRef, type PointerEvent } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { NexusField } from '../ui/Nexusfield';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { UNSPLASH_IDS } from '../../data/images';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const fieldY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 90]);

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);
  const springX = useSpring(spotlightX, { stiffness: 120, damping: 25 });
  const springY = useSpring(spotlightY, { stiffness: 120, damping: 25 });
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${springX}% ${springY}%, rgba(226,167,48,0.16), transparent 70%)`;

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    spotlightX.set(((event.clientX - rect.left) / rect.width) * 100);
    spotlightY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-white pt-16 dark:bg-ink-950 sm:pt-20"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <motion.div
        aria-hidden="true"
        style={{ background: spotlightBackground }}
        className="pointer-events-none absolute inset-0 hidden sm:block"
      />

      <motion.div
        style={{ y: fieldY }}
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-80"
      >
        <NexusField
          className="absolute -top-1/4 right-[-15%] h-[140%] w-[75%]"
          nodeClassName="fill-gold-500/60 dark:fill-gold-400/70"
          lineClassName="stroke-gold-500/20 dark:stroke-gold-400/25"
        />
      </motion.div>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-gold-300/20 blur-3xl dark:bg-gold-500/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 animate-float-delayed rounded-full bg-signal-300/20 blur-3xl dark:bg-signal-500/10"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-page relative z-10 grid gap-16 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-ink-300"
          >
            Global Solutions <span className="text-gold-500">&middot;</span> Strategic Solutions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.08] text-ink-900 sm:text-5xl md:text-6xl dark:text-white"
          >
            <span className="animate-gradient bg-gradient-to-r from-gold-500 via-gold-300 to-signal-400 bg-[length:200%_200%] bg-clip-text text-transparent">
              Custom software
            </span>{' '}
            for businesses that refuse to run on spreadsheets and workarounds.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-600 dark:text-ink-300"
          >
            K&amp;E Nexus is a two-engineer consultancy that designs and builds custom digital
            solutions — software, automation, and applications — engineered around how your
            business actually operates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" size="lg">
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#work" variant="secondary" size="lg">
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              See our work
            </Button>
          </motion.div>
        </div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] animate-float overflow-hidden rounded-3xl border border-white/10 shadow-glow">
            <ResponsiveImage
              photoId={UNSPLASH_IDS.happyClient}
              alt="A smiling business owner working happily on her laptop, representing a satisfied K&E Nexus client"
              sizes="(min-width: 1024px) 40vw, 90vw"
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/15 via-transparent to-signal-900/15 mix-blend-multiply" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-lg font-semibold text-white text-balance">
                Real businesses. Real satisfaction.
              </p>
              <p className="mt-1 text-sm text-ink-200">
                We measure success by how our clients feel using what we build.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -left-6 -top-6 hidden items-center gap-2 rounded-2xl border border-ink-100 bg-white/90 px-4 py-3 shadow-card backdrop-blur-md dark:border-white/10 dark:bg-ink-900/90 dark:shadow-card-dark sm:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal-100 text-signal-600 dark:bg-signal-900/60 dark:text-signal-400">
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-ink-900 dark:text-white">
              Clients love
              <br />
              working with us
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-ink-950" />
    </section>
  );
}
