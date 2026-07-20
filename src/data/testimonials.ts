export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: `Build Your Business Online from Just ₦99,000. 

      Professional websites and custom web applications designed to help your business grow, attract more customers, and increase sales.

      Get Started Today
      `,
    name: 'Marissa Okafor',
    role: 'Operations Director',
    company: 'Regional Fleet Logistics',
    initials: 'MO',
  },
  {
    quote:
      'They asked better questions about our clinic workflow than consultants we paid five times as much. The intake system just works, and it keeps working.',
    name: 'Dr. Aaron Bellweather',
    role: 'Managing Partner',
    company: 'Bellweather Clinic Group',
    initials: 'AB',
  },
  {
    quote:
      'What impressed me most was the weekly cadence — we always knew exactly what was being built and why. No black box, no surprises at delivery.',
    name: 'Priya Nathwani',
    role: 'Founder & CEO',
    company: 'Loomstate Retail Co.',
    initials: 'PN',
  },
  {
    quote:
      'K&E Nexus didn’t just build what we asked for — they pushed back on a few ideas that would’ve cost us more down the line. That kind of honesty is rare.',
    name: 'Devon Marsh',
    role: 'VP of Engineering',
    company: 'Northgate Manufacturing',
    initials: 'DM',
  },
]
