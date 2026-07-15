import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { SocialIcon } from '../ui/SocialIcon';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../data/site';

type Status = 'idle' | 'submitting' | 'success' | 'validation-error' | 'submit-error';

// FormSubmit relays the payload to kandenexus@gmail.com with no backend of our own.
// The first submission triggers a one-time confirmation email that must be clicked
// before it starts forwarding automatically. Override via VITE_CONTACT_ENDPOINT if needed.
const CONTACT_ENDPOINT =
  (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) ??
  'https://formsubmit.co/ajax/kandenexus@gmail.com';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('validation-error');
      return;
    }

    setStatus('submitting');

    try {
      if (CONTACT_ENDPOINT) {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name,
            email,
            company,
            message,
            _subject: `New project inquiry from ${name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });
        const result = await res.json().catch(() => null);
        if (!res.ok || result?.success === 'false') throw new Error('Request failed');
      } else {
        const subject = encodeURIComponent(`New project inquiry from ${name}`);
        const body = encodeURIComponent(
          `${message}\n\n— ${name} (${email})\nCompany: ${company || 'n/a'}`,
        );
        window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('submit-error');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Get in touch"
            title="Tell us what's slowing your business down."
            description="No sales scripts — just a direct conversation with the engineers who'd be building your solution."
          />

          <Reveal delay={0.1} className="mt-10 space-y-5">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 text-ink-700 transition-colors hover:text-gold-700 dark:text-ink-200 dark:hover:text-gold-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 dark:bg-white/10">
                <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              {CONTACT_INFO.email}
            </a>
            <div className="flex items-center gap-3 text-ink-700 dark:text-ink-200">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-100 dark:bg-white/10">
                <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {CONTACT_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+234${phone.slice(1)}`}
                    className="transition-colors hover:text-gold-700 dark:hover:text-gold-400"
                  >
                    {phone}
                  </a>
                ))}
              </span>
            </div>
            <div className="flex items-center gap-3 text-ink-700 dark:text-ink-200">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 dark:bg-white/10">
                <MapPin className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              {CONTACT_INFO.location}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-gold-400 hover:text-gold-700 dark:border-white/10 dark:text-ink-300 dark:hover:text-gold-400"
                >
                  <SocialIcon icon={social.icon} className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card dark:border-white/10 dark:bg-ink-900/40 dark:shadow-card-dark sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-ink-900 placeholder:text-ink-500 dark:placeholder:text-ink-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-ink-900 placeholder:text-ink-500 dark:placeholder:text-ink-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                  Company <span className="font-normal text-ink-400">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-ink-900 placeholder:text-ink-500 dark:placeholder:text-ink-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Company name"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                  What are you trying to solve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-ink-900 placeholder:text-ink-500 dark:placeholder:text-ink-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Tell us about your workflow, timeline, and what's not working today."
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send message'}
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>

              <div aria-live="polite">
                {status === 'success' && (
                  <span className="flex items-center gap-2 text-sm font-medium text-signal-600 dark:text-signal-400">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Thanks — we'll be in touch within one business day.
                  </span>
                )}
                {status === 'validation-error' && (
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">
                    Please fill in your name, email, and message.
                  </span>
                )}
                {status === 'submit-error' && (
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">
                    Something went wrong sending that — please email us directly at{' '}
                    <a href={`mailto:${CONTACT_INFO.email}`} className="underline">
                      {CONTACT_INFO.email}
                    </a>
                    .
                  </span>
                )}
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
