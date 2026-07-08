import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-400 text-ink-950 hover:bg-gold-300 hover:shadow-glow active:bg-gold-500 shadow-sm',
  secondary:
    'bg-transparent text-ink-900 ring-1 ring-inset ring-ink-300 hover:ring-ink-400 hover:bg-ink-50 dark:text-ink-50 dark:ring-ink-600 dark:hover:bg-ink-800/60',
  ghost:
    'bg-transparent text-ink-700 hover:text-ink-900 hover:bg-ink-100 dark:text-ink-200 dark:hover:text-white dark:hover:bg-ink-800/60',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    const classes = clsx(base, variants[variant], sizes[size], 'hover:-translate-y-0.5 active:translate-y-0', className);

    if (props.href !== undefined) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  },
);

Button.displayName = 'Button';
