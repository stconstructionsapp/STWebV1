/**
 * ST CONSTRUCTION - Central Project & Corporate Configuration
 * Singularity Focus: Narayani Villa Flagship Residential Project on Deva Road, Lucknow.
 */

export interface ConstructionMilestone {
  id: string;
  date: string;
  title: string;
  category: 'Foundation' | 'Structure' | 'Infrastructure' | 'Finishing';
  status: 'Completed' | 'In Progress' | 'Planned';
  description: string;
  image: string;
  imageLabel: string;
  caption: string;
  verificationNote: string;
}

export interface FloorPlanItem {
  id: string;
  name: string;
  level: string;
  src: string;
  dimensions: string;
  coveredArea: string;
  highlights: string[];
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Elevation' | 'Streetscape' | 'Floorplan' | 'Construction';
  src: string;
  label: string;
  alt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pricing & Booking' | 'Location & Access' | 'Villa Specifications' | 'Approvals & Legal' | 'Construction';
}

export const COMPANY_INFO = {
  brandName: 'ST Constructions Group',
  corporateSubtitle: 'Real Estate Development · Construction · Mandates',
  positioning: 'Building Trust. Creating Legacies. Delivering Excellence.',
  city: 'Lucknow, Uttar Pradesh',
  domain: 'stconstructionsgroup.com',
  websiteUrl: 'https://stconstructionsgroup.com',
  stLogoSrc: '/assets/brand/st_constructions_logo.png',
  faviconSrc: '/assets/brand/favicon.png',
  overview:
    'ST Constructions Group is a diversified real estate conglomerate headquartered in Lucknow, Uttar Pradesh. Backed by 14+ years of proven expertise since 2012, we operate across three core verticals: Real Estate Development (landmark master-planned gated communities such as Narayani Villa), Real Estate Construction (turnkey civil contracting and custom home building on client plots), and Real Estate Mandate (exclusive 360-degree sales, marketing, and channel partner acceleration for project developers).',
  businessVerticals: [
    {
      id: 'development',
      badge: 'Vertical 01',
      title: 'Real Estate Development',
      tagline: 'Master-Planned Communities Built for Generations',
      shortDesc:
        'Conceiving, designing, and executing self-sustaining gated residential communities with underground infrastructure, wide RCC roads, and Italian architectural elevations.',
      fullDesc:
        'As visionary developers, ST Constructions Group conceptualizes and executes integrated residential addresses across prime growth corridors in Lucknow. Our premier in-house township, Narayani Villa on Deva Road (120 luxury duplex villas just 1 KM from Kisan Path), stands as a benchmark in township quality, featuring underground electrical cabling, robust RCC arterial roads, and classical Italian facades.',
      features: [
        'Integrated Gated Villa Communities & Townships',
        'Transparent Land Titles, Legal Vetting & Approvals',
        'Subterranean Power Cabling & Wide RCC Avenues',
        'Flagship Township: Narayani Villa (120 Luxury Duplexes)'
      ],
      iconName: 'Building2',
      ctaText: 'Explore Development Projects',
      ctaPath: '/projects/narayani-villas'
    },
    {
      id: 'construction',
      badge: 'Vertical 02',
      title: 'Real Estate Construction',
      tagline: 'Turnkey Home Building on Your Plot',
      shortDesc:
        'End-to-end home construction and civil contracting services for landowners and families wishing to construct high-durability modern homes in Lucknow.',
      fullDesc:
        'ST Constructions Group offers comprehensive turnkey civil contracting and custom home construction for clients who own residential plots or commercial land in Lucknow. We manage every phase with engineering rigor—soil testing, architectural layout, structural RCC frame casting, high-grade brick masonry, MEP electrical/plumbing installations, and premium finishes—all governed by milestone-linked contracts and strict quality benchmarks.',
      features: [
        'Turnkey Residential Construction on Client Plots',
        'Structural RCC Frame, Premium Brickwork & Waterproofing',
        'Architectural, Interior, Electrical & Plumbing MEP Execution',
        'Strict Material Testing, Fixed Timelines & Cost Transparency'
      ],
      iconName: 'Hammer',
      ctaText: 'Enquire for Home Construction',
      ctaPath: '/services#construction'
    },
    {
      id: 'mandate',
      badge: 'Vertical 03',
      title: 'Real Estate Mandate',
      tagline: 'Exclusive Sales & Sole Selling Partners',
      shortDesc:
        'Exclusive 360-degree sales and marketing mandate partner for other developers and marquee real estate projects in Lucknow and Uttar Pradesh.',
      fullDesc:
        'ST Constructions Group acts as the dedicated Real Estate Mandate partner for other real estate developers across Lucknow and UP. We assume complete 360-degree sales ownership—from strategic pricing models and go-to-market brand campaigns to active channel partner (CP) distribution and direct buyer closures—delivering accelerated inventory absorption and predictable cash flow.',
      features: [
        'Exclusive Sole-Selling & Project Sales Mandate',
        'Extensive Channel Partner Network Across UP & NCR',
        'Go-To-Market Strategy, Brand Campaigns & Digital Funnels',
        'End-to-End Buyer Onboarding, CRM & Document Support'
      ],
      iconName: 'Briefcase',
      ctaText: 'Partner Your Project with Us',
      ctaPath: '/services#mandate'
    }
  ],
  values: [
    {
      title: 'Architectural Craftsmanship',
      description: 'Handcrafted Italian-inspired duplex villa designs with natural ventilation and double-height living areas.'
    },
    {
      title: 'Underground Infrastructure',
      description: 'Fully subterranean power cabling and wide reinforced concrete roads for clean, cable-free community streetscapes.'
    },
    {
      title: 'Transparent Project Execution',
      description: 'Direct on-site progress documentation, dated milestone updates, and personalized guided walkthroughs.'
    }
  ],
  establishment: {
    establishedDate: 'March 2026',
    foundersExperienceSince: 2012,
    totalExperienceYears: '14+ Years'
  },
  corporateOffice: {
    address: '6/972, Gomti Nagar Extension, Lucknow, 226010',
    city: 'Lucknow',
    pincode: '226010'
  },
  siteOffice: {
    address: 'Mati Bazar, Just 1 KM from Kisan Path, Deva Road, Lucknow',
    city: 'Lucknow'
  },
  founders: [
    {
      name: 'Sanjeev Tiwari',
      role: 'Founder & Director, ST Constructions Group',
      title: 'Founder & Director',
      company: 'ST Constructions Group',
      image: '/assets/team/sanjeev_tiwari.png'
    },
    {
      name: 'Sandeep Tiwari',
      role: 'Founder & Director, ST Constructions Group',
      title: 'Founder & Director',
      company: 'ST Constructions Group',
      image: '/assets/team/sandeep_tiwari.png'
    }
  ],
  contact: {
    officeAddress: '6/972, Gomti Nagar Extension, Lucknow, 226010',
    siteAddress: 'Mati Bazar, Just 1 KM from Kisan Path, Deva Road, Lucknow',
    addressText: '6/972, Gomti Nagar Extension, Lucknow, 226010',
    displayPhone: '+91 99180 53660',
    phoneRaw: '+919918053660',
    secondaryPhone: '+91 94151 65999',
    secondaryPhoneRaw: '+919415165999',
    whatsappNumber: '919918053660',
    officialEmail: 'info@stconstructionsgroup.com',
    officeHours: 'Monday – Saturday: 10:00 AM – 6:30 PM'
  }
};

export const NARAYANI_VILLAS = {
  name: 'Narayani Villa',
  officialLogoSrc: '/assets/brand/narayani_villa_logo.png',
  developerLogoSrc: '/assets/brand/st_constructions_logo.png',
  tagline: 'Your Own Villa · Your Own World',
  secondaryTagline: 'Invest in Happiness',
  headline: 'A Luxury Villa Just 1 KM From Kisanpath at ₹70 Lacs',
  subheadline: 'Exclusive 3 BHK Italian-inspired Duplex Villas on Deva Road, Lucknow.',
  totalVillasCount: 120,

  preLaunchOffer: {
    price: '₹70 Lacs',
    priceDescription: 'Fixed Pre-Launch Price',
    bookingTerms: '10% Booking | Rest CLP (Construction-Linked Plan) / Bank Loan',
    unitsAvailable: 'Only 10 Pre-Launch Units Available (120 Villas Total)',
    isLimited: true,
    ctaCallText: 'Call: +91 99180 53660 / +91 94151 65999',
    badge: 'Limited Pre-Launch Phase'
  },

  pricingPolicy: {
    headline: '₹70 Lacs Fixed Pre-Launch Price',
    statusText: 'Fixed Pre-Launch Price: ₹70 Lacs (Only 10 Pre-Launch Units Available out of 120 Villas).',
    bookingNote: '10% Booking Amount | Balance through Construction-Linked Plan (CLP) or Bank Loan.',
    disclosure:
      'Narayani Villa features a master-planned community of 120 luxury duplex villas with a fixed ₹70 Lac pre-launch price for the introductory batch of 10 units. Booking starts at 10%, with the balance payable across verified construction milestones (CLP) or bank financing.'
  },

  keyStats: [
    { value: '120 Villas', label: 'Total Township', subtext: 'Grand Master Plan' },
    { value: '1 KM', label: 'From Kisan Path', subtext: 'Direct ring road bypass' },
    { value: '₹70 Lacs', label: 'Fixed Pre-Launch', subtext: 'Inaugural price' },
    { value: '10 Units', label: 'Pre-Launch Offer', subtext: 'Phase 1 allocation' },
    { value: '10%', label: 'Booking Amount', subtext: 'Balance CLP / Bank Loan' },
    { value: 'Zila Panchayat', label: 'Layout Approved', subtext: 'Sanctioned township' }
  ],

  confirmedHighlights: [
    {
      title: '₹70 Lac Fixed Pre-Launch Price',
      desc: 'Exclusive inaugural pricing for initial 10 prospective homeowners.'
    },
    {
      title: 'Smart Auto-Lock System',
      desc: 'State-of-the-art electronic door security with keyless entry provisions.'
    },
    {
      title: 'Italian Classical Elevation',
      desc: 'Iconic arched balconies, loggias, and terracotta tile accents by Veerkala Architects.'
    },
    {
      title: 'Underground Electricity',
      desc: 'Modern subterranean power network ensuring completely wire-free, aesthetic streets.'
    },
    {
      title: 'RCC Internal Roads',
      desc: 'Heavy-duty reinforced cement concrete internal township roads for longevity.'
    },
    {
      title: '10% Booking | Rest CLP / Loan',
      desc: 'Structured payments aligned with construction milestones and bank loan approvals.'
    },
    {
      title: 'Zila Panchayat Approved Project',
      desc: 'Sanctioned villa township layout ensuring regulatory clarity.'
    },
    {
      title: 'Only 10 Pre-Launch Units',
      desc: 'High-appreciation initial batch on the booming Deva Road belt.'
    }
  ],

  villaSpaces: [
    {
      id: 'space-porch',
      number: '01',
      title: 'Grand Italian Entrance & Car Porch',
      dimensions: 'Dedicated Private Parking + Garden Bed',
      description: 'Stately arched ground-floor portico featuring integrated LED-lit step risers, teak-finish automated main gate, and landscaped perimeter planter boxes.',
      image: '/assets/projects/narayani-villas/elevation/front_1_Front_elevation_Type1.jpg'
    },
    {
      id: 'space-living',
      number: '02',
      title: 'Expansive Living & Dining Hall',
      dimensions: 'High-Ceiling Open Concept',
      description: 'Generously proportioned duplex living room designed with cross-ventilation, expansive double-glazed windows, and seamless connection to the family dining area.',
      image: '/assets/projects/narayani-villas/floorplans/floorplan_1_3D_Floor_Plan.jpg'
    },
    {
      id: 'space-balcony',
      number: '03',
      title: 'Master Bedroom with Arched Balcony',
      dimensions: 'First Floor Luxury Suite',
      description: 'Private master bedroom opening into a signature Italian classical arch balcony with ornate wrought-iron railings and panoramic township views.',
      image: '/assets/projects/narayani-villas/elevation/front_2_Front_elevation_Type2.jpg'
    },
    {
      id: 'space-streetscape',
      number: '04',
      title: 'Underground Cabling & RCC Streets',
      dimensions: 'Wide Internal Township Arteries',
      description: 'Pristine avenue streetscape with underground electrical distribution, classic street lanterns, and reinforced concrete roads free of hanging wires.',
      image: '/assets/projects/narayani-villas/elevation/front_4_PR_Elevation_1.jpg'
    }
  ],

  location: {
    landmark: 'Mati Bazar, Just 1 KM from Kisan Path',
    road: 'Deva Road',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    kisanPathDistance: '1 KM',
    connectivity: [
      { name: 'Kisan Path (Outer Ring Road)', distance: '1 KM', note: 'Direct arterial bypass connecting all quadrants of Lucknow' },
      { name: 'Tata Telco', distance: '3 KM', note: 'Major industrial & logistics anchor' },
      { name: 'Matiyari Chauraha', distance: '5 KM', note: 'Primary retail and transit node' },
      { name: 'BBD University & Hospitals', distance: '6 KM', note: 'Premier educational & healthcare cluster' },
      { name: 'Gomti Nagar Extension', distance: '6 KM', note: 'Upscale commercial and administrative hub' },
      { name: 'Polytechnic Chauraha', distance: '8 KM', note: 'Central metro interchange & transit terminal' }
    ]
  },

  floorPlans: [
    {
      id: 'ground-floor',
      name: 'Ground Floor Plan',
      level: 'Level 01',
      src: '/assets/projects/narayani-villas/floorplans/floorplan_3_Floorplan1.jpg',
      dimensions: '25 ft × 40 ft / 30 ft × 40 ft',
      coveredArea: 'Approx. 950 Sq. Ft.',
      highlights: ['Covered Car Porch & Portico', 'Living & Dining Room', 'Guest Bedroom / Master 1', 'Modular Kitchen & Utility', 'Bathroom & Open Cutout'],
      description: 'Engineered for smooth everyday circulation, welcoming entry porch, private foyer, and natural cross-ventilation.'
    },
    {
      id: 'first-floor',
      name: 'First Floor Plan',
      level: 'Level 02',
      src: '/assets/projects/narayani-villas/floorplans/floorplan_2_Floor_Plan_2.jpg',
      dimensions: '25 ft × 40 ft / 30 ft × 40 ft',
      coveredArea: 'Approx. 882.80 Sq. Ft.',
      highlights: ['Master Suite with Dressing Area', 'Second Bedroom with En-suite', 'Italian Arched Front Balcony', 'Upper Family Lounge / Staircase lobby', 'Rear Balcony Access'],
      description: 'Dedicated family private sanctuary featuring the signature Italian arched facade balcony overlooking the landscaped township.'
    },
    {
      id: 'isometric-3d',
      name: '3D Cutaway Isometric Layout',
      level: '3D Architecture View',
      src: '/assets/projects/narayani-villas/floorplans/floorplan_1_3D_Floor_Plan.jpg',
      dimensions: 'Duplex Living Experience',
      coveredArea: '1,832.80 Sq. Ft. Total Covered Area',
      highlights: ['Full Vertical Space Visualization', 'Optimized Room Proportions', 'Furniture Placement Concept', 'Balcony & Stairwell Flow'],
      description: 'High-detail 3D isometric cutaway illustrating the spatial harmony, vertical ceiling clearances, and luxury finish layout.'
    }
  ],

  configurations: [
    {
      type: 'Type A (Standard Plot)',
      plotSize: '25 ft × 40 ft',
      plotAreaSqFt: '1,000 sq. ft.',
      approxCoveredArea: '1,832.80 sq. ft. (approx.)',
      orientation: 'East-Facing & West-Facing options',
      bedrooms: '3 BHK (Duplex)',
      keyFeature: 'Compact footprint with smart dual arch elevation'
    },
    {
      type: 'Type B (Spacious Plot)',
      plotSize: '30 ft × 40 ft',
      plotAreaSqFt: '1,200 sq. ft.',
      approxCoveredArea: '2,100+ sq. ft. (customizable plan)',
      orientation: 'East-Facing & West-Facing options',
      bedrooms: '3 BHK (Duplex)',
      keyFeature: 'Wider frontage with grand Italian balcony and extended car porch'
    }
  ],

  specifications: [
    {
      category: 'Structure & Civil Engineering',
      items: [
        { label: 'Foundation & Framing', value: 'Seismic-resistant RCC Framed Structure with reinforced plinth beams', verified: true },
        { label: 'External Walls', value: 'High-strength masonry with weather-shield exterior emulsion', verified: true },
        { label: 'Internal Roads', value: 'Heavy-duty Reinforced Cement Concrete (RCC) paved roads', verified: true }
      ]
    },
    {
      category: 'Elevation & Aesthetics (Veerkala)',
      items: [
        { label: 'Design Style', value: 'Italian Classical Elevation with arched loggias and terracotta tile accents', verified: true },
        { label: 'Balcony & Railing', value: 'Decorative laser-cut metal balustrades and baluster variations', verified: true },
        { label: 'Green Areas', value: 'Landscaped entrance porch with planter boxes and private terrace', verified: true }
      ]
    },
    {
      category: 'Infrastructure & Smart Utilities',
      items: [
        { label: 'Power Network', value: 'Underground electrical cabling for clean aesthetic streetscapes', verified: true },
        { label: 'Smart Villa Provisions', value: 'Smart auto-lock system and mobile construction updates', verified: true },
        { label: 'Drainage & Water', value: 'Covered stormwater drains and dedicated ground water supply setup', verified: true }
      ]
    }
  ],

  gallery: [
    {
      id: 'front-type-1',
      title: 'Front Elevation · Type 1 Duplex',
      category: 'Elevation',
      src: '/assets/projects/narayani-villas/elevation/front_1_Front_elevation_Type1.jpg',
      label: 'Proposed Villa Design',
      alt: 'Front elevation Type 1 of Narayani Villa with Italian arches'
    },
    {
      id: 'front-type-2',
      title: 'Front Elevation · Type 2 Variation',
      category: 'Elevation',
      src: '/assets/projects/narayani-villas/elevation/front_2_Front_elevation_Type2.jpg',
      label: 'Proposed Villa Design',
      alt: 'Front elevation Type 2 of Narayani Villa'
    },
    {
      id: 'front-type-3',
      title: 'Front Elevation · Type 3 Classical Balustrade',
      category: 'Elevation',
      src: '/assets/projects/narayani-villas/elevation/front_3_Front_elevation_Type3.jpg',
      label: 'Proposed Villa Design',
      alt: 'Front elevation Type 3 of Narayani Villa with sandstone balusters'
    },
    {
      id: 'street-dusk',
      title: 'Township Streetscape at Dusk (PR Elevation 1)',
      category: 'Streetscape',
      src: '/assets/projects/narayani-villas/elevation/front_4_PR_Elevation_1.jpg',
      label: 'Proposed Villa Design',
      alt: 'Row view of Narayani Villa under warm golden hour dusk'
    },
    {
      id: 'street-day',
      title: 'Township Streetscape in Daylight (PR Elevation 2)',
      category: 'Streetscape',
      src: '/assets/projects/narayani-villas/elevation/front_5_PR_Elevation_2.jpg',
      label: 'Proposed Villa Design',
      alt: 'Daytime streetscape of Narayani Villa on wide RCC road'
    },
    {
      id: 'plan-3d',
      title: '3D Floor Plan Isometric View',
      category: 'Floorplan',
      src: '/assets/projects/narayani-villas/floorplans/floorplan_1_3D_Floor_Plan.jpg',
      label: 'Architectural Floorplan',
      alt: '3D isometric cutaway floor plan of 3 BHK Narayani Villa'
    },
    {
      id: 'plan-first',
      title: 'First Floor Architectural Layout',
      category: 'Floorplan',
      src: '/assets/projects/narayani-villas/floorplans/floorplan_2_Floor_Plan_2.jpg',
      label: 'Architectural Floorplan',
      alt: 'First floor layout blueprint of Narayani Villa'
    },
    {
      id: 'plan-ground',
      title: 'Ground Floor Architectural Layout',
      category: 'Floorplan',
      src: '/assets/projects/narayani-villas/floorplans/floorplan_3_Floorplan1.jpg',
      label: 'Architectural Floorplan',
      alt: 'Ground floor layout blueprint of Narayani Villa'
    },
    {
      id: 'site-foundation',
      title: 'Foundation Work Completed (Navratri 2026)',
      category: 'Construction',
      src: '/assets/construction-updates/foundation-completed-navratri-2026.jpg',
      label: 'Actual Site Photograph',
      alt: 'Actual site photograph of completed foundation and plinth beams'
    }
  ],

  legalAndApprovals: {
    statedApproval: 'Zila Panchayat Approved Project',
    verificationNote:
      'Officially confirmed as a Zila Panchayat approved project layout. Original sanction documentation and approved blueprints are open for physical inspection during your site visit.',
    reraNote:
      'Prospective buyers are welcome to review project documentation and layout approvals directly on site with the ST Constructions team.',
    projectSeparationNote:
      'CRITICAL NOTICE: Paradise Town Phase 2 is an entirely separate development project. ST Constructions and Narayani Villa maintain no association, shared accounts, promoter credentials, or RERA filings with Paradise Town Phase 2.'
  }
};

export const CONSTRUCTION_UPDATES: ConstructionMilestone[] = [
  {
    id: 'update-navratri-2026-foundation',
    date: 'Navratri 2026 (Verified Milestone)',
    title: 'Foundation Work Completed',
    category: 'Foundation',
    status: 'Completed',
    description:
      'Reinforced Cement Concrete (RCC) footings, column starter rebar, and robust plinth ground beams have been cast and cured on site following structural soil testing.',
    image: '/assets/construction-updates/foundation-completed-navratri-2026.jpg',
    imageLabel: 'Actual Site Photograph',
    caption: 'Verified ground plinth and column rebar foundations on site near Kisan Path, Deva Road.',
    verificationNote: 'Foundation work milestone verified by project on-site team. Ground structure prepared for upcoming brickwork masonry.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Location & Access',
    question: 'Where is Narayani Villa located and how far is Kisan Path?',
    answer:
      'Narayani Villa is located on Deva Road at Mati Bazar, just 1 KM from Kisan Path (Outer Ring Road). Strategic transit points include Tata Telco (3 KM), Matiyari (5 KM), BBD University (6 KM), Gomti Nagar (6 KM), and Polytechnic (8 KM).'
  },
  {
    id: 'faq-2',
    category: 'Pricing & Booking',
    question: 'What is the pre-launch price and payment structure?',
    answer:
      'Narayani Villa features a fixed pre-launch price of ₹70 Lacs for a strictly limited inventory of 10 units. Booking starts at just 10%, with the balance structured across Construction-Linked Plan (CLP) milestones or approved bank loans.'
  },
  {
    id: 'faq-3',
    category: 'Approvals & Legal',
    question: 'Is Narayani Villa approved by the local authority?',
    answer:
      'Yes, Narayani Villa is an officially sanctioned Zila Panchayat Approved Project. Approved blueprints and legal paperwork are open for physical inspection at our project office.'
  },
  {
    id: 'faq-4',
    category: 'Villa Specifications',
    question: 'What features are included with each 3 BHK duplex villa?',
    answer:
      'Every villa includes a Smart Auto-Lock system, Italian classical arch elevation, underground electrical cabling, wide internal RCC roads, covered car porch, green planters, and private rooftop terrace.'
  },
  {
    id: 'faq-5',
    category: 'Construction',
    question: 'What is the current verified construction progress on site?',
    answer:
      'As of the Navratri 2026 milestone, the foundation work is complete on site, including RCC footings, column starter cages, and reinforced plinth ground beams.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & Booking',
    question: 'How do I book a pre-launch villa or schedule a site inspection?',
    answer:
      'You can call our official sales desk directly at +91 99180 53660, connect instantly via WhatsApp, or submit the booking form to reserve one of the 10 pre-launch units.'
  }
];
