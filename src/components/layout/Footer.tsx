import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { SocialIcon } from '../ui/SocialIcon';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '../../data/site';

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="border-t border-ink-100 bg-white dark:border-white/10 dark:bg-ink-950">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Global Solutions &middot; Strategic Solutions. Custom digital solutions for
              businesses of any size or industry.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:border-gold-400 hover:text-gold-700 dark:border-white/10 dark:text-ink-400 dark:hover:text-gold-400"
                  >
                    <SocialIcon icon={social.icon} className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h3 className="text-sm font-semibold text-ink-900 dark:text-white">Navigate</h3>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-gold-700 dark:text-ink-400 dark:hover:text-gold-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink-900 dark:text-white">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-500 dark:text-ink-400">
                <li>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="transition-colors hover:text-gold-700 dark:hover:text-gold-400">
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li>{CONTACT_INFO.phone}</li>
                <li>{CONTACT_INFO.location}</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-ink-900 dark:text-white">Stay in the loop</h3>
            <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">
              Occasional notes on custom software, automation, and running a lean engineering
              practice. No spam.
            </p>
            {subscribed ? (
              <p className="mt-4 text-sm font-medium text-signal-600 dark:text-signal-400">
                You're on the list — thanks for subscribing.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full min-w-0 rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-500 dark:placeholder:text-ink-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400 text-ink-950 transition-colors hover:bg-gold-300"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-ink-100 pt-8 sm:flex-row dark:border-white/10">
          <p className="text-xs text-ink-500 dark:text-ink-400">
            &copy; {new Date().getFullYear()} K&amp;E Nexus. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-xs text-ink-500 transition-colors hover:text-gold-700 dark:text-ink-400 dark:hover:text-gold-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
