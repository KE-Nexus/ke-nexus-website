export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className ?? ''}`}
      aria-label="K&E Nexus — home"
    >
      <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
        <rect width="64" height="64" rx="14" className="fill-ink-900 dark:fill-white/10" />
        <g stroke="#e2a730" strokeWidth="2.4" strokeLinecap="round">
          <line x1="18" y1="18" x2="32" y2="32" />
          <line x1="46" y1="18" x2="32" y2="32" />
          <line x1="18" y1="46" x2="32" y2="32" />
          <line x1="46" y1="46" x2="32" y2="32" />
        </g>
        <circle cx="32" cy="32" r="6.5" fill="#e2a730" />
        <circle cx="18" cy="18" r="3.4" fill="#f4f6fb" />
        <circle cx="46" cy="18" r="3.4" fill="#f4f6fb" />
        <circle cx="18" cy="46" r="3.4" fill="#f4f6fb" />
        <circle cx="46" cy="46" r="3.4" fill="#f4f6fb" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
        K&amp;E <span className="text-gold-700 dark:text-gold-400">Nexus</span>
      </span>
    </a>
  );
}
