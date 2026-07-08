import { useRef, type PointerEvent, type ReactNode } from 'react';
import { motion, useMotionTemplate, useReducedMotion, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

/** Subtle 3D pointer-tilt with an optional cursor-following glow — skipped for touch/reduced-motion. */
export function TiltCard({ children, className, glow = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });
  const glowX = useSpring(50, { stiffness: 300, damping: 30 });
  const glowY = useSpring(50, { stiffness: 300, damping: 30 });

  const glowBackground = useMotionTemplate`radial-gradient(220px circle at ${glowX}% ${glowY}%, rgba(226,167,48,0.16), transparent 70%)`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === 'touch' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 10);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      <div className="relative h-full">
        {glow && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glowBackground }}
          />
        )}
        {children}
      </div>
    </motion.div>
  );
}
