// SKU Configuration for Tim's Ebook Publishing System
export interface EbookSKU {
  id: string;
  name: string;
  type: 'lite' | 'standard' | 'pro' | 'deluxe' | 'team';
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  includes: string[];
  cta: string;
  gating: 'email' | 'payment' | 'subscription';
  testPricing?: number[];
}

export const ebookSKUs: EbookSKU[] = [
  {
    id: 'lite',
    name: 'Lite (Free PDF)',
    type: 'lite',
    price: 0,
    description: '20-30 page summary with scripture pull-quotes and 3 practice exercises',
    features: [
      'Core APEST concepts',
      'Scripture foundations',
      '3 practical exercises',
      'Assessment invitation',
      'Email-gated access'
    ],
    includes: [
      'PDF summary (20-30 pages)',
      'Key scripture pull-quotes',
      '3 practice exercises',
      'Full book preview'
    ],
    cta: 'Get Free PDF Guide',
    gating: 'email'
  },
  {
    id: 'standard',
    name: 'Standard (EPUB + PDF)',
    type: 'standard',
    price: 9, // Tripwire price
    originalPrice: 19,
    testPricing: [14, 19],
    description: 'Full manuscript in accessible EPUB3 + tagged PDF with light stamping',
    features: [
      'Complete 7-chapter book',
      'Accessible EPUB3 format',
      'Tagged PDF with stamping',
      'Mobile-optimized reading',
      'Downloadable content'
    ],
    includes: [
      'Full EPUB3 ebook',
      'Tagged PDF (stamped)',
      'Mobile reading app',
      'Lifetime access'
    ],
    cta: 'Get Full Ebook',
    gating: 'payment'
  },
  {
    id: 'pro',
    name: 'Pro (Interactive WebBook Bundle)',
    type: 'pro',
    price: 39,
    testPricing: [39, 59],
    description: 'Interactive web experience with progress tracking, notes, quizzes, and AI helper',
    features: [
      'Interactive WebBook platform',
      'Progress tracking & highlights',
      'End-of-chapter quizzes',
      'Ask Tim AI helper (page-aware)',
      'Downloadable workbook',
      '2-3 private videos',
      'Notes export system'
    ],
    includes: [
      'Full WebBook access',
      'Progress & highlight system',
      'Chapter quizzes with scoring',
      'Ask Tim AI (page-aware Q&A)',
      'Workbook PDF download',
      '3 exclusive videos (5-8 min each)',
      'Notes export to PDF/Email'
    ],
    cta: 'Unlock Interactive Experience',
    gating: 'payment'
  },
  {
    id: 'deluxe',
    name: 'Deluxe (Print + Digital + Voucher)',
    type: 'deluxe',
    price: 89,
    testPricing: [79, 99],
    description: 'Physical paperback + all digital formats + coaching debrief voucher',
    features: [
      'Premium paperback book',
      'All digital formats included',
      'Coaching debrief voucher ($49 value)',
      'Companion site access',
      'Bonus materials via QR codes'
    ],
    includes: [
      'Paperback book (KDP + IngramSpark)',
      'EPUB + PDF downloads',
      'Coaching debrief voucher',
      'Companion site access code',
      'Bonus workbook via QR',
      'Private videos access',
      'Assessment coupon'
    ],
    cta: 'Get Complete Package',
    gating: 'payment'
  },
  {
    id: 'team',
    name: 'Team Pack (10 seats + facilitator kit)',
    type: 'team',
    price: 249,
    testPricing: [249, 399],
    description: 'WebBook access for 10 team members plus complete facilitator resources',
    features: [
      '10 WebBook seat licenses',
      'Team dashboard & analytics',
      'Facilitator guide & slides',
      'Group discussion prompts',
      'Team assessment tools',
      'Group debrief session offer'
    ],
    includes: [
      '10 WebBook licenses',
      'Team progress dashboard',
      'Facilitator guide (PDF)',
      'PowerPoint slide deck',
      'Team discussion prompts',
      'Group assessment tools',
      'Video conference debrief session'
    ],
    cta: 'Equip Your Team',
    gating: 'payment'
  }
];

// Funnel configuration
export interface FunnelStep {
  id: string;
  name: string;
  trigger: string;
  offers: string[];
  upsells: string[];
  orderBumps?: string[];
  sequences: string[];
}

export const ebookFunnel: FunnelStep[] = [
  {
    id: 'entry-a',
    name: 'Free Lead Magnet Entry',
    trigger: 'lite_download',
    offers: ['standard'],
    orderBumps: ['workbook-light'],
    upsells: ['pro'],
    sequences: ['lite-nurture', 'tripwire-push', 'pro-conversion']
  },
  {
    id: 'entry-b',
    name: 'Store Buyer Entry',
    trigger: 'store_purchase',
    offers: ['pro', 'all-access'],
    upsells: [],
    sequences: ['store-claim', 'bonus-unlock', 'coaching-prompt']
  },
  {
    id: 'entry-c',
    name: 'Website Product Page',
    trigger: 'website_visit',
    offers: ['standard', 'pro'],
    upsells: ['deluxe'],
    sequences: ['comparison-nudge', 'coaching-debrief']
  }
];

// Analytics events to track
export const analyticsEvents = {
  webbook: [
    'chapter_viewed',
    'quiz_completed', 
    'note_created',
    'ai_query',
    'cta_clicked',
    'progress_milestone',
    'highlight_created',
    'video_watched'
  ],
  funnel: [
    'email_captured',
    'tripwire_viewed',
    'upsell_presented',
    'order_bump_shown',
    'coaching_scheduled',
    'store_claim_started'
  ]
};
