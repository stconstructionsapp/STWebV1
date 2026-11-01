import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import {
  COMPANY_INFO,
  NARAYANI_VILLAS,
  CONSTRUCTION_UPDATES
} from '../data/projectData';
import { TestimonialSlider } from '../components/TestimonialSlider';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Building,
  MapPin,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageCircle,
  Maximize2,
  Lock,
  Zap,
  CheckCircle2,
  Play,
  Star,
  Send,
  Loader2,
  Mail,
  Clock,
  User,
  ShieldCheck,
  HelpCircle,
  Hammer,
  Briefcase,
  Building2,
  HardHat,
  Handshake
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();

  // Hero carousel elevation images
  const heroImages = [
    {
      id: 'dusk',
      src: '/assets/projects/narayani-villas/elevation/front_4_PR_Elevation_1.jpg',
      label: 'Golden Hour Street View (PR Elevation 1)',
      tag: 'Duplex Streetscape'
    },
    {
      id: 'type1',
      src: '/assets/projects/narayani-villas/elevation/front_1_Front_elevation_Type1.jpg',
      label: 'Type 1 Italian Classical Facade',
      tag: 'Front Elevation'
    },
    {
      id: 'daytime',
      src: '/assets/projects/narayani-villas/elevation/front_5_PR_Elevation_2.jpg',
      label: 'Township Daylight Avenue (PR Elevation 2)',
      tag: 'RCC Avenue'
    },
    {
      id: 'type2',
      src: '/assets/projects/narayani-villas/elevation/front_2_Front_elevation_Type2.jpg',
      label: 'Type 2 Arched Balcony Elevation',
      tag: 'Elevation Detail'
    },
    {
      id: 'type3',
      src: '/assets/projects/narayani-villas/elevation/front_3_Front_elevation_Type3.jpg',
      label: 'Type 3 Balustrade & Porch Variation',
      tag: 'Classical Finish'
    }
  ];

  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  // Room Details Tabs (Section 4)
  const roomTabs = [
    {
      id: 'living-room',
      title: 'Living Room',
      subtitle: 'Expansive Duplex Hall',
      desc: 'Step into a spacious and elegantly designed living room that combines comfort with modern Italian classical style. Featuring open layouts, abundant natural light, and high-quality finishes.',
      checks: [
        'Natural Light & Cross Ventilation',
        'Smart Home Auto-Lock Integration',
        'Cozy Ambience & High Ceiling Clearance'
      ],
      area: '250 sq. mtr.',
      baths: '3 Bathrooms',
      gym: 'Covered Car Porch',
      image: '/assets/projects/narayani-villas/floorplans/floorplan_1_3D_Floor_Plan.jpg'
    },
    {
      id: 'dining-room',
      title: 'Dining Room',
      subtitle: 'Family Dining Space',
      desc: 'Seamlessly connected to the modular kitchen and living room, offering an intimate yet grand setting for daily family dinners and celebratory gatherings.',
      checks: [
        'Seamless Kitchen Connectivity',
        'Natural Garden Facing Window',
        'Vitrified Tile Flooring'
      ],
      area: '180 sq. mtr.',
      baths: 'Handwash Foyer',
      gym: 'Open Kitchen Layout',
      image: '/assets/projects/narayani-villas/elevation/front_5_PR_Elevation_2.jpg'
    },
    {
      id: 'master-bedroom',
      title: 'Master Bedroom',
      subtitle: 'First Floor Luxury Suite',
      desc: 'Private master sanctuary opening directly to a signature Italian arched classical balcony overlooking the peaceful landscaped township avenues.',
      checks: [
        'Signature Arched Balcony Access',
        'En-Suite Dressing & Bath Provision',
        'Teak Wood Doors & Premium Hardware'
      ],
      area: '220 sq. mtr.',
      baths: 'En-Suite Bathroom',
      gym: 'Private Balcony',
      image: '/assets/projects/narayani-villas/elevation/front_2_Front_elevation_Type2.jpg'
    },
    {
      id: 'arched-porch',
      title: 'Entrance Porch',
      subtitle: 'Grand Italian Portico',
      desc: 'Stately arched ground-floor portico featuring integrated LED-lit step risers, teak-finish automated main gate, and landscaped perimeter planter boxes.',
      checks: [
        'Dedicated Private Car Parking',
        'Smart Auto-Lock Electronic Entry',
        'Perimeter Planter Boxes'
      ],
      area: '150 sq. mtr.',
      baths: 'Ground Foyer',
      gym: 'RCC Driveway',
      image: '/assets/projects/narayani-villas/elevation/front_1_Front_elevation_Type1.jpg'
    },
    {
      id: 'terrace',
      title: 'Rooftop Terrace',
      subtitle: 'Private Sky Deck',
      desc: 'Expansive private open terrace engineered with waterproofing, decorative parapets, and panoramic vistas across the Kisan Path green belt.',
      checks: [
        'Weather-Proof Terrace Tiles',
        'Classical Balustrade Parapets',
        'Rooftop Garden Provisions'
      ],
      area: '320 sq. mtr.',
      baths: 'Utility Area',
      gym: 'Open Sky Terrace',
      image: '/assets/projects/narayani-villas/elevation/front_3_Front_elevation_Type3.jpg'
    }
  ];

  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  // Floor Planning Rooms list (Section 7)
  const floorPlanRooms = [
    {
      id: 'ground-floor',
      label: 'Ground Floor Plan',
      level: 'Level 01',
      title: 'Ground Floor Layout',
      desc: 'A private layout designed for focus, spacious living, welcoming entry porch, private foyer, guest bedroom, kitchen, and natural cross-ventilation.',
      area: '950 sq. ft. Built-up',
      baths: '2 Bathrooms',
      park: 'Covered Car Porch',
      image: '/assets/projects/narayani-villas/floorplans/floorplan_3_Floorplan1.jpg'
    },
    {
      id: 'first-floor',
      label: 'First Floor Plan',
      level: 'Level 02',
      title: 'First Floor Layout',
      desc: 'Dedicated family private sanctuary featuring the signature Italian arched facade balcony overlooking the landscaped township, 2 en-suite bedrooms, and upper family lounge.',
      area: '882.80 sq. ft. Built-up',
      baths: '2 Bathrooms',
      park: 'Italian Arched Balcony',
      image: '/assets/projects/narayani-villas/floorplans/floorplan_2_Floor_Plan_2.jpg'
    },
    {
      id: 'isometric-3d',
      label: '3D Cutaway Isometric View',
      level: '3D Architecture',
      title: 'Duplex Spatial Layout',
      desc: 'High-detail 3D isometric cutaway illustrating the spatial harmony, vertical ceiling clearances, room proportions, and luxury furniture layout.',
      area: '1,832.80 sq. ft. Total',
      baths: '3 Bedrooms + Lounge',
      park: 'Duplex Visualization',
      image: '/assets/projects/narayani-villas/floorplans/floorplan_1_3D_Floor_Plan.jpg'
    },
    {
      id: 'porch-room',
      label: 'Car Porch & Front Portico',
      level: 'Portico Level',
      title: 'Dedicated Parking & Entrance',
      desc: 'Covered vehicle portico with smooth reinforced concrete floor, teak gate access, and perimeter greenery.',
      area: '180 sq. ft. Dedicated',
      baths: 'Ground Access',
      park: 'SUV / Sedan Parking',
      image: '/assets/projects/narayani-villas/elevation/front_1_Front_elevation_Type1.jpg'
    },
    {
      id: 'balcony-room',
      label: 'Italian Arched Balcony',
      level: 'Upper Elevation',
      title: 'Signature Facade Balcony',
      desc: 'Classical Roman-inspired arch with handcrafted balustrades, providing morning sunlight and scenic township outlooks.',
      area: '90 sq. ft. Verandah',
      baths: 'Master Bedroom Attached',
      park: 'Wrought Iron Railing',
      image: '/assets/projects/narayani-villas/elevation/front_2_Front_elevation_Type2.jpg'
    }
  ];

  const [activeFloorPlanIndex, setActiveFloorPlanIndex] = useState(0);

  // Gallery Filter (Section 6)
  const [galleryFilter, setGalleryFilter] = useState<
    'All' | 'Elevation' | 'Streetscape' | 'Floorplan' | 'Construction'
  >('All');
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);

  const filteredGallery =
    galleryFilter === 'All'
      ? NARAYANI_VILLAS.gallery
      : NARAYANI_VILLAS.gallery.filter((item) => item.category === galleryFilter);

  // Nearby Places Accordion (Section 9)
  const nearbyPlaces = [
    {
      id: 'kisan-path',
      number: '01',
      name: 'Kisan Path (Outer Ring Road)',
      distance: '1 KM',
      desc: 'Direct arterial bypass ring road connecting all major highway corridors across Lucknow with zero city traffic delays.',
      highlights: [
        'Direct 1 KM Highway Bypass Link',
        'Swift Transit to Airport & Shaheed Path',
        'Rapidly Appreciating Residential Corridor'
      ],
      image: '/assets/projects/narayani-villas/elevation/front_4_PR_Elevation_1.jpg'
    },
    {
      id: 'telco',
      number: '02',
      name: 'Tata Telco Industrial Anchor',
      distance: '3 KM',
      desc: 'Prominent industrial, logistics, and employment powerhouse driving steady residential housing demand along the Deva Road belt.',
      highlights: [
        'Major Corporate & Industrial Employment',
        'Just 5 Minutes Drive from Site Gate',
        'Robust Commercial Infrastructure'
      ],
      image: '/assets/projects/narayani-villas/elevation/front_5_PR_Elevation_2.jpg'
    },
    {
      id: 'matiyari',
      number: '03',
      name: 'Matiyari Chauraha Commercial Hub',
      distance: '5 KM',
      desc: 'Vibrant local retail market, grocery stores, banks, pharmacies, and daily neighborhood conveniences.',
      highlights: [
        'Primary Neighborhood Retail Hub',
        'Daily Essentials, Banks & Pharmacies',
        'Public Transit & Auto Terminus'
      ],
      image: '/assets/projects/narayani-villas/elevation/front_1_Front_elevation_Type1.jpg'
    },
    {
      id: 'bbd',
      number: '04',
      name: 'BBD University & Hospitals',
      distance: '6 KM',
      desc: 'Premier educational institutions, dental & medical colleges, multi-specialty hospital care, and student campuses.',
      highlights: [
        'Babu Banarasi Das University Campus',
        'Multi-Specialty Hospital Facilities',
        'High Rental & Resale Yield Zone'
      ],
      image: '/assets/projects/narayani-villas/floorplans/floorplan_1_3D_Floor_Plan.jpg'
    },
    {
      id: 'gomti-nagar',
      number: '05',
      name: 'Gomti Nagar Extension',
      distance: '6 KM',
      desc: 'Lucknow’s most prestigious modern urban quadrant featuring upscale shopping malls, luxury hotels, and corporate IT parks.',
      highlights: [
        'Direct Access via Kisan Path Bypass',
        'Phoenix Palassio & Ekana Stadium',
        'Top Administrative & Corporate Offices'
      ],
      image: '/assets/projects/narayani-villas/elevation/front_2_Front_elevation_Type2.jpg'
    },
    {
      id: 'polytechnic',
      number: '06',
      name: 'Polytechnic Chauraha Metro Node',
      distance: '8 KM',
      desc: 'Central junction connecting Faizabad Road, Munshi Pulia Metro Station, and interstate transit arteries.',
      highlights: [
        'Metro Line Feeder & Transit Interchange',
        'Connects Charbagh & Airport Metro',
        'Central Lucknow Access in 15 Mins'
      ],
      image: '/assets/projects/narayani-villas/elevation/front_3_Front_elevation_Type3.jpg'
    }
  ];

  const [activeNearbyId, setActiveNearbyId] = useState('kisan-path');

  // FAQ Accordion State & Questions
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const homeFaqs = [
    {
      q: 'Where is Narayani Villa located and what is the distance from Kisan Path?',
      a: 'Narayani Villa is situated at Mati Bazar on Deva Road, Lucknow, just 1 KM from the newly operational Kisan Path (Outer Ring Road). Key city connections include Tata Telco (3 KM / 5 mins), Matiyari Chauraha (5 KM / 8 mins), BBD University (6 KM / 10 mins), Gomti Nagar Extension (6 KM / 10 mins), and Polytechnic Chauraha (8 KM / 15 mins).'
    },
    {
      q: 'What is the project scale and how many units are available at pre-launch pricing?',
      a: 'Narayani Villa is a planned 120-villa gated township offering spacious 3 BHK luxury duplex residences. As an introductory launch opportunity, special pre-launch pricing of ₹70 Lacs is strictly reserved for the first 10 buyers.'
    },
    {
      q: 'Is Narayani Villa approved by government authorities?',
      a: 'Yes, Narayani Villa is a Zila Panchayat Approved residential township by ST Constructions. The land title is clear and registry-ready with all layout and road sanctions approved by competent authorities.'
    },
    {
      q: 'What is the booking amount and payment plan structure?',
      a: 'You can book your villa with an initial 10% booking amount. The balance payment is linked to actual on-site construction milestones (Construction-Linked Plan / CLP) or funded through approved home loans from major nationalized and private banks.'
    },
    {
      q: 'What infrastructure and security features are provided?',
      a: 'The township features an Italian elevation facade, Smart Auto-Lock electronic entry system on main doors, underground electricity cabling with no hanging wires, wide RCC internal roads, underground storm drainage, 24/7 security, and dedicated covered car porch.'
    },
    {
      q: 'What is the current construction status and can I visit the site?',
      a: 'Ground foundation work was successfully completed during Navratri 2026. Buyers and investors are warmly welcome to visit the site to inspect the road network and foundation quality. Call our dedicated project desk at +91 99180 53660 or +91 94151 65999 to schedule your complimentary site visit.'
    }
  ];

  // Contact Form State (Section 11)
  const [contactForm, setContactForm] = useState({
    firstName: '',
    email: '',
    phone: '',
    need: '3 BHK Duplex Villa (₹70 Lacs)',
    message: ''
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.firstName || !contactForm.phone) return;
    setFormLoading(true);

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: contactForm.firstName,
          phoneNumber: contactForm.phone,
          email: contactForm.email,
          enquiryTopic: contactForm.need,
          message: contactForm.message,
          consentGiven: true
        })
      });
      setFormSuccess(true);
    } catch {
      setFormSuccess(true);
    } finally {
      setFormLoading(false);
    }
  };

  // Hero Section Lead Capture Form State
  const [heroForm, setHeroForm] = useState({
    fullName: '',
    phone: '',
    visitTiming: 'Schedule Site Visit This Weekend'
  });
  const [heroFormLoading, setHeroFormLoading] = useState(false);
  const [heroFormSuccess, setHeroFormSuccess] = useState(false);
  const [heroFormRefId, setHeroFormRefId] = useState('');

  const handleHeroFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroForm.fullName.trim() || !heroForm.phone.trim()) return;
    setHeroFormLoading(true);

    const generatedId = `NV-${Math.floor(1000 + Math.random() * 9000)}`;
    setHeroFormRefId(generatedId);

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: heroForm.fullName.trim(),
          phoneNumber: heroForm.phone.trim(),
          enquiryTopic: `Hero Form: ${heroForm.visitTiming}`,
          message: `Site visit preference: ${heroForm.visitTiming}. Ref ID: ${generatedId}. Pre-launch unit enquiry.`,
          consentGiven: true
        })
      });
    } catch {
      // Graceful fallback
    } finally {
      setHeroFormLoading(false);
      setHeroFormSuccess(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello ST Constructions, I would like to enquire about Narayani Villa (₹70 Lacs Pre-Launch on Deva Road, Lucknow).'
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#043728]/20 selection:text-slate-900">
      {/* ========================================================
          SECTION 1: HERO (VillaHub Rounded Architectural Banner + High-Converting Lead Form)
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-slate-950 shadow-2xl min-h-[620px] lg:min-h-[680px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 border border-slate-200/50">
            {/* Background Hero Image */}
            <img
              src={heroImages[activeHeroIndex].src}
              alt="Narayani Villa by ST Constructions"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 brightness-[0.68] contrast-[1.08]"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 pointer-events-none" />

            {/* Top Inventory & Connectivity Status */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-[#EEBF67]">120 Luxury Villas Township</span>
                <span className="text-white/60">·</span>
                <span>Only 10 Pre-Launch Units at ₹70 Lacs</span>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#EEBF67]" />
                <span>Deva Road, 1 KM from Kisan Path, Lucknow</span>
              </div>
            </div>

            {/* Center: 2-Column High-Converting Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto pt-8 pb-8">
              {/* Left Column: Headlines & Key Value Propositions */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="space-y-3">
                  <h1 className="font-sans text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.12]">
                    A HOME THAT FEELS DIFFERENT
                  </h1>
                </div>

                <p className="text-white/90 text-sm sm:text-base max-w-xl font-light leading-relaxed">
                  Introducing <strong className="text-white font-semibold">Narayani Villa</strong> by{' '}
                  <strong className="text-[#EEBF67] font-semibold">ST Constructions</strong> — Lucknow’s trusted{' '}
                  <span className="text-white font-semibold">Developer, Civil Contractor & Real Estate Mandates</span>. A master-planned 120-villa gated community just 1 KM from Kisan Path at{' '}
                  <strong className="text-white font-semibold">₹70 Lacs Fixed Pre-Launch Price</strong> on Deva Road, Lucknow.
                </p>

                {/* Key Selling Features (Translucent Glass Badges) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 max-w-xl">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>₹70 Lac Fixed Pre-Launch Price</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>Smart Auto-Lock & Italian Facade</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>Underground Electricity & RCC Road</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>10% Booking | Rest CLP / Bank Loan</span>
                  </div>
                </div>

                {/* Distance Route Pill */}
                <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] text-white/80">
                  <span className="font-semibold text-[#C5A880]">Prime Connectivity:</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15">Kisanpath 1 KM</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15">Tata Telco 3 KM</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15">Matiyari 5 KM</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15">Gomti Nagar 6 KM</span>
                </div>

                {/* Direct Call & Visit CTA */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-full border border-white/30 transition-all hover:scale-105"
                  >
                    <Phone className="w-4 h-4 text-[#C5A880]" />
                    <span>Direct Desk: {COMPANY_INFO.contact.displayPhone}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Prominent High-Converting Lead Capture Form (Polar White Theme) */}
              <div className="lg:col-span-5">
                <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/90 text-left relative overflow-hidden backdrop-blur-xl">
                  {/* Gold decorative accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C5A880] via-[#D8C29D] to-[#173D2B]" />

                  {heroFormSuccess ? (
                    <div className="py-6 text-center space-y-4">
                      <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block">
                          Request Confirmed · Ref #{heroFormRefId}
                        </span>
                        <h3 className="font-sans text-xl font-extrabold text-slate-900">
                          Visit Slot Registered!
                        </h3>
                        <p className="text-xs text-slate-600 max-w-xs mx-auto">
                          Thank you, <strong className="text-slate-900">{heroForm.fullName || 'Valued Buyer'}</strong>. Our Lucknow site advisor will call you shortly to confirm your visit.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 text-left space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Project:</span>
                          <span className="font-semibold">Narayani Villa, Deva Road</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Contact:</span>
                          <span className="font-semibold">+91 {heroForm.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Timing:</span>
                          <span className="font-semibold">{heroForm.visitTiming}</span>
                        </div>
                      </div>

                      <div className="pt-2 space-y-2">
                        <a
                          href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
                            `Hello ST Constructions, I just submitted a site visit request (Ref: ${heroFormRefId}) for Narayani Villa. Please share the floor plan PDF.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Get Floor Plan PDF on WhatsApp</span>
                        </a>

                        <button
                          onClick={() => {
                            setHeroFormSuccess(false);
                            setHeroForm({ fullName: '', phone: '', visitTiming: 'Schedule Site Visit This Weekend' });
                          }}
                          className="text-xs text-slate-500 hover:text-slate-800 underline font-medium cursor-pointer"
                        >
                          Submit another request
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                      {/* Form Header */}
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#043728]/10 text-[#043728] text-[10px] font-bold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#043728]" />
                          <span>VIP Pre-Launch Offer · ₹70 Lacs</span>
                        </div>
                        <h3 className="font-sans text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          Book A Private Site Visit
                        </h3>
                        <p className="text-xs text-slate-600">
                          Only 10 units at pre-launch pricing. Instant brochure & pricing breakdown sent on WhatsApp.
                        </p>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={heroForm.fullName}
                            onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 focus:border-[#C5A880] transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative flex">
                          <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-700 text-xs font-semibold">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            placeholder="99180 53660"
                            value={heroForm.phone}
                            onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 focus:border-[#C5A880] transition-all"
                          />
                        </div>
                      </div>

                      {/* Visit Preference */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Visit Preference / Requirement
                        </label>
                        <select
                          value={heroForm.visitTiming}
                          onChange={(e) => setHeroForm({ ...heroForm, visitTiming: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 focus:border-[#C5A880] transition-all cursor-pointer"
                        >
                          <option value="Schedule Site Visit This Weekend">Schedule Site Visit This Weekend</option>
                          <option value="Schedule Site Visit On A Weekday">Schedule Site Visit On A Weekday</option>
                          <option value="Send Floor Plan & Pricing on WhatsApp">Send Floor Plan & Pricing on WhatsApp</option>
                          <option value="Request Bank Loan / CLP Consultation">Request Bank Loan / CLP Consultation</option>
                        </select>
                      </div>

                      {/* Prominent Clear CTA Button - ST Constructions Logo Brand Color #043728 */}
                      <button
                        type="submit"
                        disabled={heroFormLoading}
                        className="w-full bg-[#043728] hover:bg-[#03291e] text-white text-xs sm:text-sm uppercase tracking-wider font-extrabold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group disabled:opacity-70"
                      >
                        {heroFormLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-[#EEBF67]" />
                            <span>Registering Visit...</span>
                          </>
                        ) : (
                          <>
                            <span>Schedule Free Site Visit Now</span>
                            <ArrowRight className="w-4 h-4 text-[#EEBF67] group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      {/* Micro-trust indicators */}
                      <div className="pt-1 text-center space-y-1">
                        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>100% Privacy Protected · Direct Developer Sales Desk</span>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Row: Rating Badge & Thumbnail Switcher */}
            <div className="relative z-10 flex flex-wrap items-end justify-between gap-6 pt-4 border-t border-white/15">
              {/* Left Google Rating Style Badge */}
              <div className="flex items-center gap-3 text-left">
                <div className="text-xs text-white">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-bold text-white text-sm">Rating 5.0</span>
                    <div className="flex text-[#C5A880]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                      ))}
                    </div>
                  </div>
                  <span className="text-white/70 text-[11px]">
                    Zila Panchayat Approved · 10% Booking | Rest CLP / Loan
                  </span>
                </div>
              </div>

              {/* Center / Right Thumbnail Switcher */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {heroImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveHeroIndex(idx)}
                    className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeHeroIndex === idx
                        ? 'border-[#C5A880] scale-105 opacity-100 ring-2 ring-[#C5A880]/50'
                        : 'border-white/40 opacity-60 hover:opacity-100'
                    }`}
                    title={img.label}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Right Circular Badge (VillaHub Lookalike: "10+ Pre-Launch Units") */}
              <div className="hidden lg:flex items-center gap-3 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-left">
                <div className="w-12 h-12 rounded-full border-2 border-[#C5A880] flex items-center justify-center font-bold text-lg text-white">
                  10+
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Pre-Launch Units</span>
                  <span className="text-[11px] text-white/70 block">₹70 Lacs Fixed Price</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: THREE CORE BUSINESS VERTICALS (Developer · Contractor · Mandates)
         ======================================================== */}
      <section id="verticals" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#043728]" />
            <span>Comprehensive Real Estate Solutions</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Our Three Pillars of Excellence
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            ST Constructions is built on 14+ years of civil and real estate mastery in Lucknow. We serve families, plot owners, and fellow developers through three distinct, integrated verticals.
          </p>
        </div>

        {/* 3 Core Verticals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {/* Vertical 1: Real Estate Development */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#043728] p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#043728]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />
            
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#043728] text-white flex items-center justify-center shadow-md">
                <Building2 className="w-7 h-7 text-[#EEBF67]" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#043728] block mb-1">
                  Vertical 01 · Flagship
                </span>
                <h3 className="font-sans text-2xl font-black text-slate-900 tracking-tight">
                  Real Estate Development
                </h3>
                <p className="text-xs font-bold text-[#EEBF67] tracking-wide mt-0.5">
                  Master-Planned Gated Communities & Townships
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We conceptualize, finance, and execute integrated residential villa townships across Lucknow’s prime expansion corridors. From underground electrical cabling and wide RCC roads to classical Italian elevations, we create enduring addresses.
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                  Key Capabilities:
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                    <span><strong>Flagship Project:</strong> Narayani Villa (120 duplexes on Deva Road)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                    <span>Underground power grid & cable-free avenues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                    <span>Clear freehold titles with bank finance approvals</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => navigate('/services#development')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all cursor-pointer shadow-sm group-hover:shadow"
              >
                <span>Explore Real Estate Development</span>
                <ArrowUpRight className="w-4 h-4 text-[#EEBF67]" />
              </button>
            </div>
          </div>

          {/* Vertical 2: Real Estate Construction */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#043728] p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#EEBF67]/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />
            
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#043728] text-white flex items-center justify-center shadow-md">
                <Hammer className="w-7 h-7 text-[#EEBF67]" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#043728] block mb-1">
                  Vertical 02 · Construction
                </span>
                <h3 className="font-sans text-2xl font-black text-slate-900 tracking-tight">
                  Real Estate Construction
                </h3>
                <p className="text-xs font-bold text-[#EEBF67] tracking-wide mt-0.5">
                  Turnkey Home Building on Your Plot
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Own a plot in Lucknow and want a stress-free home building experience? We act as your turnkey civil contractor—taking responsibility for architectural designs, structural RCC, masonry, MEP electrical/plumbing, and luxury interior finishing.
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                  Contractor Services:
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                    <span>Complete home construction from foundation to finishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                    <span>Rigorous lab-tested cement, steel & brick standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                    <span>Milestone-linked billing with guaranteed handover timelines</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => navigate('/services#construction')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all cursor-pointer shadow-sm group-hover:shadow"
              >
                <span>Explore Real Estate Construction</span>
                <ArrowUpRight className="w-4 h-4 text-[#EEBF67]" />
              </button>
            </div>
          </div>

          {/* Vertical 3: Real Estate Mandate */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#043728] p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#043728]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />
            
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#043728] text-white flex items-center justify-center shadow-md">
                <Briefcase className="w-7 h-7 text-[#EEBF67]" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#043728] block mb-1">
                  Vertical 03 · Mandate Sales
                </span>
                <h3 className="font-sans text-2xl font-black text-slate-900 tracking-tight">
                  Real Estate Mandate
                </h3>
                <p className="text-xs font-bold text-[#EEBF67] tracking-wide mt-0.5">
                  Exclusive Sales & Sole Selling for Developers
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We represent other prominent builders and project developers as their exclusive Real Estate Mandate partner. We manage end-to-end sales operations, launch positioning, pricing strategy, digital demand generation, and channel partner distribution.
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                  Mandate Offerings:
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                    <span>Exclusive sole-selling representation for residential projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                    <span>Extensive network of 500+ Channel Partners across UP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                    <span>Accelerated cash flow and swift inventory sell-out</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => navigate('/services#mandate')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all cursor-pointer shadow-sm group-hover:shadow"
              >
                <span>Explore Real Estate Mandate</span>
                <ArrowUpRight className="w-4 h-4 text-[#EEBF67]" />
              </button>
            </div>
          </div>
        </div>

        {/* Callout Strip for Homeowners & Developers */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-1.5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EEBF67] block">
              Direct Founder Access & Consultation
            </span>
            <h4 className="font-sans text-xl sm:text-2xl font-extrabold text-white">
              Looking to Buy a Villa, Build on Your Plot, or Need a Sales Mandate Partner?
            </h4>
            <p className="text-xs text-white/80 max-w-2xl font-light">
              Speak directly with our leadership team for custom contractor quotations, township site visits, or project mandate collaborations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#EEBF67] hover:bg-[#d8a954] text-[#043728] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_INFO.contact.displayPhone}</span>
            </a>
            <button
              onClick={() => openEnquiryModal('Other Enquiry')}
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              <span>Submit Enquiry</span>
              <ArrowUpRight className="w-4 h-4 text-[#EEBF67]" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2.5: ABOUT OUR COMPANY (VillaHub Split Section)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Pill, Big Stat Card, Description & Features */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700">
              About ST Constructions
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.18]">
              Over 14 Years of Building Trust & Crafting Landmarks <br />
              <span className="font-serif italic font-normal text-slate-500">
                in the heart of Lucknow
              </span>
            </h2>

            {/* Stat Box */}
            <div className="p-6 bg-[#FBF9F5] rounded-2xl border border-[#EFEAE1] max-w-md shadow-xs">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">14+</span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-600">
                  Years Experience Since 2012 · 120 Villas Township
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Founded by directors <strong className="text-slate-900">Sanjeev Tiwari</strong> and <strong className="text-slate-900">Sandeep Tiwari</strong>, ST Constructions combines the agility of a focused developer, the precision of a master contractor, and the reach of a seasoned real estate mandate partner.
              </p>
            </div>

            {/* Two Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#FBF9F5] flex items-center justify-center text-[#C5A880] shrink-0 border border-[#EFEAE1]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 font-bold block mb-1">
                    Prime Location 1 KM Kisanpath
                  </strong>
                  <span className="text-slate-500">
                    Mati Bazar, Deva Road bypass corridor in Lucknow.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#FBF9F5] flex items-center justify-center text-[#C5A880] shrink-0 border border-[#EFEAE1]">
                  <Building className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 font-bold block mb-1">
                    Modern Italian Elevation
                  </strong>
                  <span className="text-slate-500">
                    Handcrafted classical arches, loggias & RCC roads.
                  </span>
                </div>
              </div>
            </div>

            {/* Pill CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2.5 bg-[#043728] hover:bg-[#03291e] text-white text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Learn More About Us</span>
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-[#EEBF67]" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Rounded Corner Luxury Villa Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl sm:rounded-[36px] overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/assets/projects/narayani-villas/elevation/front_5_PR_Elevation_2.jpg"
                alt="Narayani Villa Day Avenue by ST Constructions"
                className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: INFINITE MARQUEE TICKER (VillaHub Lookalike)
         ======================================================== */}
      <section className="py-6 border-y border-slate-200 bg-[#FBF9F5] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-10 text-slate-800 text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">🏡</span>
                <span>Narayani Villa</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">🏛️</span>
                <span>3 BHK Duplex</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">📍</span>
                <span>1 KM from Kisanpath</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">🏷️</span>
                <span>₹70 Lacs Fixed Price</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">⚡</span>
                <span>Underground Electricity</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">🛣️</span>
                <span>Heavy-Duty RCC Road</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">📜</span>
                <span>Zila Panchayat Approved</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">🤝</span>
                <span>10% Booking | Rest CLP</span>
              </span>
              <span className="text-slate-300">★</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 4: ROOMS DESIGNED FOR COMFORT & STYLE (VillaHub)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3 bg-[#FBF9F5]">
            Real Estate Development Showcase
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Narayani Villa Living Spaces{' '}
            <span className="font-serif italic font-normal text-slate-500">
              & Italian Architecture
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Experience how ST Constructions translates our in-house Real Estate Development vertical into living reality: Italian arched elevations, soaring double-height living halls, and expansive master suites.
          </p>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10 pb-2">
          {roomTabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveRoomIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeRoomIndex === idx
                  ? 'bg-[#043728] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Split Room Content Card (VillaHub Lookalike) */}
        <div className="bg-[#FBF9F5] rounded-3xl sm:rounded-[36px] border border-[#EFEAE1] p-6 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
          {/* Left: Big Room Photograph with Rounded Corners */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-slate-900">
            <img
              src={roomTabs[activeRoomIndex].image}
              alt={roomTabs[activeRoomIndex].title}
              className="w-full h-[360px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Room Specs, Checks & Dimension Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#043728] font-bold block mb-1">
                {roomTabs[activeRoomIndex].subtitle}
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900">
                {roomTabs[activeRoomIndex].title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {roomTabs[activeRoomIndex].desc}
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-1">
              {roomTabs[activeRoomIndex].checks.map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <span className="w-5 h-5 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-[#043728] shrink-0 shadow-xs">
                    <Check className="w-3 h-3 text-[#043728]" />
                  </span>
                  <span>{c}</span>
                </div>
              ))}
            </div>

            {/* Spec Strip Icons at Bottom (VillaHub Style: 250 mtr, 1 Bath, Gym) */}
            <div className="pt-6 border-t border-[#EFEAE1] flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="text-base">📐</span>
                <span>{roomTabs[activeRoomIndex].area}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-base">🚿</span>
                <span>{roomTabs[activeRoomIndex].baths}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-base">🚗</span>
                <span>{roomTabs[activeRoomIndex].gym}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: WHY CHOOSE US (VillaHub Dark Section)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Row: Headline Left, Description & Button Right */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 text-left">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-white/80 mb-3">
                Why Choose Us
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Redefining modern living <br />
                <span className="font-serif italic font-normal text-[#EEBF67]">
                  experiences property...
                </span>
              </h2>
            </div>

            <div className="max-w-md space-y-4">
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                Step into a modern residential enclave designed for comfort, structural longevity, and verified construction milestones near Kisan Path, Lucknow.
              </p>
              <button
                onClick={() => openEnquiryModal('Price and Payment Plan')}
                className="inline-flex items-center gap-2.5 bg-[#043728] hover:bg-[#03291e] text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-all cursor-pointer group border border-white/20"
              >
                <span>Learn more us</span>
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#EEBF67]" />
                </span>
              </button>
            </div>
          </div>

          {/* 6-Grid Features with Wireframe Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A880]/50 transition-all hover:bg-white/8 group">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] mb-5 group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                <span className="font-serif font-bold text-lg">₹70L</span>
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-2">
                Fixed Pre-Launch Price
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Inaugural pricing of ₹70 Lacs for the initial allocation of 10 prospective homeowners on Deva Road.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A880]/50 transition-all hover:bg-white/8 group">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] mb-5 group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-2">
                Smart Auto-Lock System
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                State-of-the-art electronic door security with keyless digital entry provisions for your family peace of mind.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A880]/50 transition-all hover:bg-white/8 group">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] mb-5 group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-2">
                Italian Classical Elevation
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Iconic arched balconies, loggias, terracotta roof tiles, and balustrade accents designed by Veerkala Architects.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A880]/50 transition-all hover:bg-white/8 group">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] mb-5 group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-2">
                Underground Electricity
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Modern subterranean power network ensuring completely wire-free, clutterless community streetscapes.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A880]/50 transition-all hover:bg-white/8 group">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] mb-5 group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-2">
                Heavy-Duty RCC Roads
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Reinforced cement concrete internal township roads designed for decades of durability without pot-holes.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A880]/50 transition-all hover:bg-white/8 group">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] mb-5 group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-2">
                10% Booking | Rest CLP
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Pay only 10% to book your villa. Balance through verified Construction-Linked Plan (CLP) or bank financing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: PROPERTY GALLERY (VillaHub Style)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3 bg-[#FBF9F5]">
            Development & Construction Gallery
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Browse our curated collection <br />
            <span className="font-serif italic font-normal text-slate-500">
              of villa elevations & construction progress
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            High-definition photographs showcasing classical Italian architecture, reinforced concrete road networks, underground conduits, and active on-site craftsmanship.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['All', 'Elevation', 'Streetscape', 'Floorplan', 'Construction'] as const).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  galleryFilter === cat
                    ? 'bg-[#C5A880] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Images' : cat}
              </button>
            )
          )}
        </div>

        {/* 3-Column Photography Grid (VillaHub Lookalike) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImg(item.src)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-900 h-80"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 shadow-sm">
                {item.label}
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-left">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold block mb-1">
                  {item.category}
                </span>
                <h4 className="font-sans text-sm font-bold text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 7: FLOOR PLANNING (VillaHub Vertical List + Blueprint)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] border-y border-[#EFEAE1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3 bg-white">
              Township Blueprints & Planning
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Functional 3 BHK Duplex Floor Plans <br />
              <span className="font-serif italic font-normal text-slate-500">
                engineered for light & space
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Master-planned architectural blueprints from our in-house development studio for our 120-villa gated community on Deva Road near Kisan Path.
            </p>
          </div>

          {/* VillaHub Lookalike Container: Left Vertical Tab List, Right Blueprint Card */}
          <div className="bg-white rounded-3xl sm:rounded-[36px] border border-[#EFEAE1] p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* Left Vertical List */}
            <div className="lg:col-span-5 space-y-2.5">
              {floorPlanRooms.map((room, idx) => {
                const isActive = activeFloorPlanIndex === idx;
                return (
                  <button
                    key={room.id}
                    onClick={() => setActiveFloorPlanIndex(idx)}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#C5A880] text-white shadow-md'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                    }`}
                  >
                    <span>{room.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Blueprint Frame */}
            <div className="lg:col-span-7 bg-[#FBF9F5] p-6 sm:p-8 rounded-3xl border border-[#EFEAE1] space-y-5">
              <div className="relative rounded-2xl overflow-hidden bg-white p-4 border border-[#EFEAE1] shadow-xs">
                <img
                  src={floorPlanRooms[activeFloorPlanIndex].image}
                  alt={floorPlanRooms[activeFloorPlanIndex].title}
                  className="w-full h-[320px] sm:h-[380px] object-contain"
                />
                <button
                  onClick={() => setActiveModalImg(floorPlanRooms[activeFloorPlanIndex].image)}
                  className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-lg cursor-pointer"
                  title="Expand blueprint"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold text-slate-900 mb-1">
                  {floorPlanRooms[activeFloorPlanIndex].title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {floorPlanRooms[activeFloorPlanIndex].desc}
                </p>
              </div>

              {/* Bottom spec strip (VillaHub 350 mtr, 1 Bath, Gym) */}
              <div className="pt-4 border-t border-[#EFEAE1] flex items-center justify-between text-xs text-slate-600 font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="text-base">📐</span>
                  <span>{floorPlanRooms[activeFloorPlanIndex].area}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-base">🚿</span>
                  <span>{floorPlanRooms[activeFloorPlanIndex].baths}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-base">🚗</span>
                  <span>{floorPlanRooms[activeFloorPlanIndex].park}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 8: VIDEO EXPERIENCE BANNER (VillaHub Lookalike)
         ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-slate-950 shadow-2xl py-24 sm:py-32 px-6 sm:px-12 text-center text-white border border-slate-200/50">
            {/* Background Image */}
            <img
              src="/assets/projects/narayani-villas/elevation/front_4_PR_Elevation_1.jpg"
              alt="Experience Narayani Villa"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
            />

            {/* Circular Play Button Ring (VillaHub: "WELCOME TO OUR WEBSITE") */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C5A880]/60 animate-spin" style={{ animationDuration: '20s' }} />
                <button
                  onClick={() => openEnquiryModal('Site Visit')}
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#C5A880] hover:bg-[#b5986e] text-white flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform"
                  aria-label="Play video experience"
                >
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                </button>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-2xl leading-tight">
                Experience Our Professional <br />
                <span className="font-serif italic font-normal text-[#EAE2D7]">
                  Real Estate Approach
                </span>
              </h2>
            </div>

            {/* Bottom 4 Diagonal Arrow Points (VillaHub Style) */}
            <div className="relative z-10 mt-16 pt-8 border-t border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold text-white/90">
              <span className="flex items-center justify-center gap-1.5 hover:text-[#C5A880] transition-colors">
                <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                <span>One Dedicated Project</span>
              </span>
              <span className="flex items-center justify-center gap-1.5 hover:text-[#C5A880] transition-colors">
                <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                <span>1 KM from Kisanpath</span>
              </span>
              <span className="flex items-center justify-center gap-1.5 hover:text-[#C5A880] transition-colors">
                <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                <span>Italian Architecture</span>
              </span>
              <span className="flex items-center justify-center gap-1.5 hover:text-[#C5A880] transition-colors">
                <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                <span>Lifetime Durability</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: NEARBY ATTRACTIONS ACCORDION (VillaHub Style)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
            Near By Place
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Explore nearby{' '}
            <span className="font-serif italic font-normal text-slate-500">
              attractions
            </span>
          </h2>
        </div>

        {/* Accordion Rows (VillaHub Lookalike: Number + Preview Thumbnail + Expand Details) */}
        <div className="space-y-4 max-w-5xl mx-auto text-left">
          {nearbyPlaces.map((place) => {
            const isOpen = activeNearbyId === place.id;
            return (
              <div
                key={place.id}
                className={`rounded-3xl border transition-all ${
                  isOpen
                    ? 'bg-[#FBF9F5] border-[#EFEAE1] shadow-md p-6 sm:p-8'
                    : 'bg-white border-slate-200 hover:border-slate-300 p-5'
                }`}
              >
                {/* Header Strip */}
                <div
                  onClick={() => setActiveNearbyId(isOpen ? '' : place.id)}
                  className="flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-sans text-2xl sm:text-3xl font-bold text-[#C5A880]">
                      {place.number}
                    </span>

                    {/* Collapsed small thumbnail if closed */}
                    {!isOpen && (
                      <div className="w-16 h-10 rounded-lg overflow-hidden bg-slate-200 hidden sm:block">
                        <img src={place.image} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}

                    <h3 className="font-sans text-base sm:text-xl font-bold text-slate-900">
                      {place.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                      {place.distance}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </div>
                </div>

                {/* Expanded Details (VillaHub Split Layout) */}
                {isOpen && (
                  <div className="mt-6 pt-6 border-t border-[#EFEAE1] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-md">
                      <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
                      <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                        {place.distance} Distance
                      </div>
                    </div>

                    <div className="md:col-span-7 space-y-3">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {place.desc}
                      </p>
                      <div className="space-y-1.5 pt-1">
                        {place.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          SECTION 10: TESTIMONIALS & CONSTRUCTION EVIDENCE (Dark)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-white/80 mb-3">
              Client Testimonials & Due Diligence
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Hear from our happy homeowners{' '}
              <span className="font-serif italic font-normal text-[#C5A880]">
                real stories, real satisfaction
              </span>
            </h2>
          </div>

          {/* 3-Column Testimonial / Evidence Grid (VillaHub Style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            {/* Left Card: 4.8 / 5.0 Rating & Foundation Completed Photo */}
            <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <div>
                <span className="font-sans text-5xl font-extrabold text-white block mb-1">4.8 / 5.0</span>
                <p className="text-xs text-white/70">
                  Verified construction milestone and plot buyer transparency in Lucknow.
                </p>
                <div className="flex text-[#C5A880] mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/assets/construction-updates/foundation-completed-navratri-2026.jpg"
                  alt="Foundation Completed Navratri 2026"
                  className="w-full h-44 object-cover"
                />
                <div className="p-3 bg-black/60 text-[11px] text-white/80 flex items-center justify-between">
                  <span>Navratri 2026 Milestone</span>
                  <span className="text-emerald-400 font-bold">Foundation Done</span>
                </div>
              </div>
            </div>

            {/* Center Card: High-Rise / Villa Showcase Photo */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl">
              <img
                src="/assets/projects/narayani-villas/elevation/front_2_Front_elevation_Type2.jpg"
                alt="Narayani Villa Architecture"
                className="w-full h-full object-cover min-h-[360px]"
              />
            </div>

            {/* Right Card: Quotes & Reviews */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                  ))}
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-light italic">
                  “Booking our duplex villa near Kisan Path was straightforward. The ST Constructions team walked us through the completed foundation and confirmed Zila Panchayat approval directly on site.”
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-[#C5A880] text-slate-900 font-bold flex items-center justify-center text-xs">
                    AR
                  </div>
                  <div>
                    <strong className="text-xs text-white block">Alok Rawat</strong>
                    <span className="text-[10px] text-white/60">Phase 1 Villa Buyer</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                  ))}
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-light italic">
                  “Finding an Italian classical duplex with underground electricity cabling and RCC road at ₹70 Lacs near Kisan Path is unmatched in Lucknow’s Deva Road corridor.”
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-[#C5A880] text-slate-900 font-bold flex items-center justify-center text-xs">
                    SP
                  </div>
                  <div>
                    <strong className="text-xs text-white block">S. K. Pandey</strong>
                    <span className="text-[10px] text-white/60">Civil Engineer & Resident</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10.5: FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#043728]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Clear answers to your{' '}
            <span className="font-serif italic font-normal text-slate-500">
              key project questions
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-3 font-normal">
            Everything you need to know about Narayani Villa on Deva Road, Lucknow — pricing, approvals, site visits, and possession timeline.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 text-left">
          {homeFaqs.map((faq, idx) => {
            const isOpen = activeFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-slate-50/80 border-[#043728]/30 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="w-7 h-7 rounded-full bg-[#043728]/10 text-[#043728] font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-sans text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 shadow-xs">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#043728]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200/60 pt-4">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Helper Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h4 className="font-sans text-sm font-bold text-slate-900">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-slate-600">
              Speak directly with ST Constructions' Lucknow project desk for verified documentation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#EEBF67]" />
              <span>Call +91 99180 53660</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 11: SCHEDULE A VISIT / BOOK A VISIT (VillaHub)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Villa Photo & Overlay Contact Card */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700">
              Schedule A Visit
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Your future home awaits <br />
              <span className="font-serif italic font-normal text-slate-500">
                book a visit now
              </span>
            </h2>

            {/* Villa Image with Overlay Contact Box (VillaHub Style) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="/assets/projects/narayani-villas/elevation/front_5_PR_Elevation_2.jpg"
                alt="Narayani Villa Site"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute bottom-4 inset-x-4 bg-black/80 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs">
                  <span className="text-white/60 block mb-0.5">Location:</span>
                  <strong className="font-bold text-white block">Mati Bazar, Deva Road, Lucknow</strong>
                </div>
                <div className="text-xs">
                  <span className="text-white/60 block mb-0.5">Phone Desk:</span>
                  <strong className="font-bold text-[#EEBF67] block font-mono">+91 99180 53660</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Light Tan Form (VillaHub Lookalike: First Name, Email, Phone, Needs, Write Message) */}
          <div className="lg:col-span-6 bg-[#FBF9F5] p-8 sm:p-12 rounded-3xl sm:rounded-[36px] border border-[#EFEAE1] shadow-lg text-left">
            {formSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-slate-900">
                  Site Visit Request Received
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our site coordinator will call you to confirm your schedule and send the Google Maps location pin.
                </p>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="text-xs font-bold text-[#043728] underline pt-2 cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-slate-700 block mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={contactForm.firstName}
                      onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                      className="w-full bg-white border border-[#EFEAE1] rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#043728]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-slate-700 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@domain.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-white border border-[#EFEAE1] rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#043728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-slate-700 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-white border border-[#EFEAE1] rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#043728]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-slate-700 block mb-1">
                      What are your needs?
                    </label>
                    <select
                      value={contactForm.need}
                      onChange={(e) => setContactForm({ ...contactForm, need: e.target.value })}
                      className="w-full bg-white border border-[#EFEAE1] rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#043728]"
                    >
                      <option>3 BHK Duplex Villa (₹70 Lacs)</option>
                      <option>Schedule In-Person Site Visit</option>
                      <option>Request CLP Payment Plan</option>
                      <option>Inspect Foundation Milestone</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-slate-700 block mb-1">
                    Write Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us your preferred visit date or questions about Narayani Villa..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-white border border-[#EFEAE1] rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#043728] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {formLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#EEBF67]" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND YOUR REQUEST</span>
                      <ArrowRight className="w-4 h-4 text-[#EEBF67]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 12: SECOND INFINITE MARQUEE TICKER
         ======================================================== */}
      <section className="py-6 border-y border-slate-200 bg-[#FBF9F5] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-10 text-slate-800 text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">🏡</span>
                <span>Narayani Villa</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">🏛️</span>
                <span>3 BHK Duplex</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">📍</span>
                <span>1 KM from Kisanpath</span>
              </span>
              <span className="text-slate-300">★</span>
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white border border-[#EFEAE1] flex items-center justify-center text-lg shadow-xs">🏷️</span>
                <span>₹70 Lacs Fixed Price</span>
              </span>
              <span className="text-slate-300">★</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          HOMEBUYER TESTIMONIALS SLIDER
         ======================================================== */}
      <TestimonialSlider />

      {/* ========================================================
          SECTION 13: LATEST NEWS, EXPERT TIPS & BLOG (VillaHub)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
            News & Blog
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Latest News, Expert Tips & <br />
            <span className="font-serif italic font-normal text-slate-500">
              Design Inspiration
            </span>
          </h2>
        </div>

        {/* 3 Blog Cards (VillaHub Lookalike) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <article className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/projects/narayani-villas/elevation/front_1_Front_elevation_Type1.jpg"
                alt="Luxury Duplex Living"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-2">
                <span>Villas</span>
                <span>·</span>
                <span className="text-[#C5A880]">Navratri 2026</span>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <h3 className="font-sans text-lg font-bold text-slate-900 leading-snug group-hover:text-[#C5A880] transition-colors">
                Luxury living: what makes an Italian villa elevation truly timeless
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Discover the architectural elements—from authentic Roman arches to classical balustrades—crafted by Veerkala Architects for Narayani Villa.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openEnquiryModal('Project Details')}
                  className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#C5A880] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>

          <article className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/projects/narayani-villas/elevation/front_4_PR_Elevation_1.jpg"
                alt="Location Matters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-2">
                <span>Corridors</span>
                <span>·</span>
                <span className="text-[#C5A880]">Deva Road</span>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <h3 className="font-sans text-lg font-bold text-slate-900 leading-snug group-hover:text-[#C5A880] transition-colors">
                Why location matters: the value appreciation behind Kisan Path
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                With Tata Telco, BBD University, and Gomti Nagar just minutes away, the Kisan Path bypass corridor is Lucknow’s premier real estate growth node.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openEnquiryModal('Location & Access')}
                  className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#C5A880] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>

          <article className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/projects/narayani-villas/floorplans/floorplan_1_3D_Floor_Plan.jpg"
                alt="Modern Floorplans"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-2">
                <span>Planning</span>
                <span>·</span>
                <span className="text-[#C5A880]">3 BHK Duplex</span>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <h3 className="font-sans text-lg font-bold text-slate-900 leading-snug group-hover:text-[#C5A880] transition-colors">
                Designing perfect living spaces: smart auto-lock & open layout trends
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                From electronic keyless door entry to subterranean power cabling, learn how modern villa engineering creates clutter-free family living.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openEnquiryModal('Villa Specifications')}
                  className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#C5A880] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xs"
          onClick={() => setActiveModalImg(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl">
            <img
              src={activeModalImg}
              alt="Expanded preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setActiveModalImg(null)}
              className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold cursor-pointer"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
