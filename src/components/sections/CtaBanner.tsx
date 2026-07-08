import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { NexusField } from '../ui/Nexusfield';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { UNSPLASH_IDS } from '../../data/images';

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-16 text-center sm:px-16 sm:py-20">
          <ResponsiveImage
            photoId={UNSPLASH_IDS.dataCenter}
            alt=""
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <NexusField
            className="absolute inset-0 h-full w-full opacity-40"
            nodeClassName="fill-gold-400/70"
            lineClassName="stroke-gold-400/20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-900/95 to-ink-800/90" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
              Not sure what "custom software" even looks like for your business?
            </h2>
            <p className="mt-4 text-balance text-lg text-ink-300">
              That's the most common way engagements start. Tell us what's slow, manual, or
              breaking — we'll tell you honestly whether custom software is the answer.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="#contact" size="lg">
                Book a free consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
