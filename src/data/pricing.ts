export interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  popular?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter',
    tagline: 'Landing page',
    price: '₦99,900',
    priceNote: 'one-time',
    features: ['1-page site', 'Mobile responsive', 'Contact form', '3-day delivery'],
  },
  {
    name: 'Business',
    tagline: 'Full website',
    price: '₦249,900',
    priceNote: 'one-time',
    features: ['Up to 5 pages', 'CMS access', 'Basic SEO setup', '7-day delivery'],
    popular: true,
  },
  {
    name: 'Premium',
    tagline: 'Web app / store',
    price: '₦599,900',
    priceNote: 'one-time',
    features: ['Online store or web app', 'Payment integration', 'Admin dashboard', '2-3 week delivery'],
  },
  {
    name: 'Enterprise',
    tagline: 'Custom app',
    price: '₦1,499,900',
    priceNote: 'starting from',
    features: ['Mobile + web app', 'Custom features', 'Dedicated support', 'Ongoing maintenance'],
  },
];
