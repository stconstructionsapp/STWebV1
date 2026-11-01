import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import {
  NARAYANI_VILLAS,
  COMPANY_INFO,
  CONSTRUCTION_UPDATES,
  FAQS
} from '../data/projectData';
import { EnquiryForm } from '../components/EnquiryForm';
import {
  MapPin,
  Calendar,
  Layers,
  ShieldCheck,
  Check,
  ArrowRight,
  Info,
  ChevronRight,
  Phone,
  MessageCircle,
  Maximize2,
  Lock,
  Zap,
  Building,
  Camera,
  Trees,
  Droplets,
  Smile,
  CloudRain,
  SunMedium,
  Car,
  CheckCircle2,
  Building2
} from 'lucide-react';

export const NarayaniVillasPage: React.FC = () => {
  const { openEnquiryModal, navigate } = useRouter();
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  // Floor plan active tab
  const [activeFloorPlanId, setActiveFloorPlanId] = useState(NARAYANI_VILLAS.floorPlans[0].id);
  const activeFloorPlan =
    NARAYANI_VILLAS.floorPlans.find((fp) => fp.id === activeFloorPlanId) ||
    NARAYANI_VILLAS.floorPlans[0];

  const projectFaqs = FAQS.filter(
    (f) =>
      f.category === 'Pricing & Booking' ||
      f.category === 'Villa Specifications' ||
      f.category === 'Approvals & Legal' ||
      f.category === 'Construction'
  );

  const projectAmenities = [
    {
      title: 'Gated Community Entrance',
      subtitle: 'Grand Access & Security Checkpost',
      description: 'Stately architectural entry archway equipped with boom barriers, 24/7 security guard post, and smart digital visitor authentication.',
      icon: ShieldCheck,
      badge: 'Protected Perimeter'
    },
    {
      title: '24/7 Smart Security & CCTV',
      subtitle: 'Complete Township Surveillance',
      description: 'High-definition day-and-night CCTV coverage across all internal avenues, entry gates, and common recreational areas for family safety.',
      icon: Camera,
      badge: '24/7 Monitored'
    },
    {
      title: 'Landscaped Gardens & Green Parks',
      subtitle: 'Verdant Walking Avenues',
      description: 'Lush manicured community green lawns, ornamental plantation belts, seasonal flowerbeds, and dedicated pedestrian jogging paths.',
      icon: Trees,
      badge: 'Eco Living'
    },
    {
      title: 'Underground Electrical Cabling',
      subtitle: 'Zero Overhead Aerial Wires',
      description: 'All power cables, transformers, and distribution conduits run subterranean for modern clutter-free streetscapes and uninterrupted safety.',
      icon: Zap,
      badge: 'Underground Grid'
    },
    {
      title: 'Wide Concrete RCC Roads',
      subtitle: 'Engineered Dual-Lane Avenues',
      description: 'Durable reinforced cement concrete roads designed for smooth bidirectional vehicular flow, integrated curbs, and proper rainwater runoff.',
      icon: Car,
      badge: 'All-Weather Roads'
    },
    {
      title: '24/7 Potable Water Supply',
      subtitle: 'Overhead Reservoir Network',
      description: 'Deep high-yield borewell system paired with high-capacity centralized overhead storage tanks delivering continuous potable water pressure.',
      icon: Droplets,
      badge: 'Continuous Supply'
    },
    {
      title: 'Kids Play Zone & Gazebo',
      subtitle: 'Recreation & Elder Relaxation',
      description: 'Equipped children’s play area with safe turf, slides, swings, and tranquil sheltered gazebos for evening gatherings and elder relaxation.',
      icon: Smile,
      badge: 'Family Friendly'
    },
    {
      title: 'Smart Auto-Lock Electronic Lock',
      subtitle: 'Keyless Duplex Security',
      description: 'Each villa main entrance features digital keyless entry with biometric fingerprint recognition, numerical passcode, and RFID card access.',
      icon: Lock,
      badge: 'Smart Home'
    },
    {
      title: 'Eco Rainwater Harvesting',
      subtitle: 'Sustainable Ground Recharging',
      description: 'Advanced stormwater drainage network with scientific groundwater recharge pits preventing waterlogging and conserving nature.',
      icon: CloudRain,
      badge: 'Eco-Friendly'
    },
    {
      title: 'LED Street Lighting Network',
      subtitle: 'Energy-Efficient Illumination',
      description: 'Dusk-to-dawn automated street lighting illuminating all internal pathways, road intersections, and corner curves with zero blind spots.',
      icon: SunMedium,
      badge: 'Well Lit'
    },
    {
      title: 'Covered Private Car Porch',
      subtitle: 'Ground-Floor Dedicated Parking',
      description: 'Independent shaded portico space built into your ground-floor duplex layout, protecting family vehicles from rain, dust, and direct sun.',
      icon: Building2,
      badge: 'Private Parking'
    },
    {
      title: 'Freehold Registry & Clear Titles',
      subtitle: 'Zila Panchayat Approved Project',
      description: '100% freehold individual property mutation, sanctioned township blueprint, clean documentation, and seamless bank loan assistance.',
      icon: CheckCircle2,
      badge: '100% Freehold'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* 1. PROJECT HERO (Polar White Theme with ST Constructions Logo) */}
      <section className="relative bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50 text-slate-900 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* ST Constructions Official Brand Logo Header */}
              <div className="inline-block p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <img
                  src={COMPANY_INFO.stLogoSrc}
                  alt="ST Constructions"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#043728] font-extrabold block">
                  Signature Residential Project · 120 Luxury Duplex Villas · Deva Road, Lucknow
                </span>
                <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                  Narayani Villa
                </h1>
              </div>

              {/* Pre-Launch Pricing Card */}
              <div className="p-5 sm:p-6 bg-white border-2 border-[#043728]/20 rounded-2xl max-w-lg shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#043728] text-white text-[10px] uppercase font-bold tracking-wider px-3.5 py-1 rounded-bl-xl">
                  Limited Units
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#043728] font-bold block mb-1">
                  Fixed Pre-Launch Pricing Offer
                </span>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 block tracking-tight">
                  ₹70 Lacs Fixed Price
                </span>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-600 font-medium">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    10 Units Only (120 Total Township)
                  </span>
                  <span>10% Booking | Rest CLP / Bank Loan</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <MapPin className="w-4 h-4 text-[#043728] shrink-0" />
                <span>Mati Bazar, Just 1 KM from Kisanpath, Deva Road, Lucknow</span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                A planned private enclave of 120 units of 3 BHK smart duplex villas by <strong className="text-slate-900 font-bold">ST Constructions</strong>. Featuring authentic Italian arch elevations, Smart Auto-Lock system, wide RCC township roads, underground electricity, and dedicated ground-level car porch.
              </p>

              {/* Verified Feature Checklist */}
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 max-w-lg">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#043728] shrink-0" />
                  <span>Italian Elevation Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#043728] shrink-0" />
                  <span>Smart Auto-Lock Entry System</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#043728] shrink-0" />
                  <span>Underground Electricity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#043728] shrink-0" />
                  <span>Zila Panchayat Approved</span>
                </div>
              </div>

              {/* CTAs using ST Constructions logo color #043728 */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openEnquiryModal('Site Visit')}
                  className="bg-[#043728] hover:bg-[#03291e] text-white text-xs uppercase tracking-wider font-bold px-7 py-4 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
                >
                  <span>Book Site Visit</span>
                  <ArrowRight className="w-4 h-4 text-[#EEBF67] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  className="bg-white hover:bg-slate-50 text-slate-900 text-xs uppercase tracking-wider font-bold px-6 py-4 rounded-full border border-slate-300 transition-colors shadow-xs flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#043728]" />
                  <span>Call {COMPANY_INFO.contact.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Hero Concept Image with Real Type 1 Elevation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-2">
                <div className="relative rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src="/assets/projects/narayani-villas/elevation/front_1_Front_elevation_Type1.jpg"
                    alt="Proposed front elevation design for 3 BHK duplex villa at Narayani Villa"
                    className="w-full h-[420px] sm:h-[480px] object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs border border-white/20 px-3 py-1 rounded-md text-[11px] font-medium text-white">
                    Proposed Villa Design
                  </div>
                  <div className="absolute top-3 left-3 bg-white text-[#173D2B] px-3 py-1 rounded-md text-xs font-bold shadow border border-slate-200">
                    ₹70 Lacs Pre-Launch
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 to-transparent p-5 text-left">
                    <span className="text-[10px] uppercase tracking-wider text-[#D4BF86] font-semibold block">
                      Type 1 Duplex Elevation (Veerkala Architecture)
                    </span>
                    <p className="text-xs text-slate-200">
                      Classic Italian loggia with arched terrace, planter bed, and teak wood automated gate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONFIRMED SPECIFICATIONS BAR */}
      <section className="py-14 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.22em] text-[#173D2B] font-bold block mb-1">
              Project Inclusions
            </span>
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Confirmed Project Specifications
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {NARAYANI_VILLAS.confirmedHighlights.map((hl, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                  <Check className="w-4 h-4 text-[#173D2B] shrink-0" />
                  <span>{hl.title}</span>
                </div>
                <p className="text-[11px] text-slate-600 pl-5.5">{hl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT AMENITIES SECTION (Gated Community, 24/7 Security, Landscaped Gardens, Underground Utilities) */}
      <section id="amenities" className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Township Amenities · 120 Villas</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Project Amenities & Township Features
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Every detail at Narayani Villa is crafted for tranquil, secure, and modern community living. Enjoy a gated enclave with round-the-clock security, landscaped green spaces, and underground utility networks.
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            {projectAmenities.map((amenity, idx) => {
              const IconComponent = amenity.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#043728]/30"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#043728]/10 group-hover:bg-[#043728] text-[#043728] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {amenity.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold text-[#043728] uppercase tracking-wider block mb-1">
                        {amenity.subtitle}
                      </span>
                      <h3 className="font-sans text-lg font-bold text-slate-900 group-hover:text-[#043728] transition-colors">
                        {amenity.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {amenity.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#043728]" />
                      <span>Standard In Narayani Villa</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Amenities Guided Tour Banner */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1.5">
              <span className="text-xs uppercase font-bold text-[#043728] tracking-wider block">
                Site Verification
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-900">
                Inspect Township Amenities & Roads in Person
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal">
                Visit Mati Bazar on Deva Road (just 1 KM from Kisan Path). Walk on our wide concrete RCC roads, inspect the underground cabling duct system, and review the approved 120-villa township master layout.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => openEnquiryModal('Amenities Walkthrough')}
                className="bg-[#043728] hover:bg-[#03291e] text-white text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-full transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Book Site Tour</span>
                <ArrowRight className="w-4 h-4 text-[#EEBF67]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FLOOR PLANS (Polar White) */}
      <section id="floorplans" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 max-w-7xl mx-auto border-b border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-[#173D2B] font-bold block mb-2">
            Floor Planing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900">
            Interactive Architectural Floor Plans
          </h2>
          <div className="w-16 h-0.5 bg-[#173D2B] mx-auto my-3" />
          <p className="text-sm text-slate-600">
            View detailed floor layouts and 3D isometric cutaways for 25'×40' and 30'×40' plots.
          </p>
        </div>

        {/* Floor Plan Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {NARAYANI_VILLAS.floorPlans.map((fp) => {
            const isActive = fp.id === activeFloorPlanId;
            return (
              <button
                key={fp.id}
                onClick={() => setActiveFloorPlanId(fp.id)}
                className={`px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#173D2B] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{fp.name}</span>
              </button>
            );
          })}
        </div>

        {/* Floor Plan Display Card */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
          <div className="lg:col-span-7 bg-slate-50 p-4 rounded-xl border border-slate-200 relative group">
            <img
              src={activeFloorPlan.src}
              alt={activeFloorPlan.name}
              className="w-full h-[400px] sm:h-[480px] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedGalleryImg(activeFloorPlan.src)}
              className="absolute top-6 right-6 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-lg shadow cursor-pointer transition-colors"
              title="Expand Floor Plan"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#173D2B] font-bold block mb-1">
                {activeFloorPlan.level}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {activeFloorPlan.name}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-slate-100 rounded-md border border-slate-200 font-semibold text-slate-800">
                  Plot: {activeFloorPlan.dimensions}
                </span>
                <span className="px-3 py-1 bg-slate-100 rounded-md border border-slate-200 font-semibold text-[#173D2B]">
                  {activeFloorPlan.coveredArea}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {activeFloorPlan.description}
            </p>

            <div>
              <strong className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2.5">
                Key Space Inclusions:
              </strong>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {activeFloorPlan.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#173D2B] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openEnquiryModal('Project Details')}
                className="bg-[#173D2B] hover:bg-[#0F271C] text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                Download PDF Plan
              </button>
              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="text-xs font-bold text-slate-900 hover:text-[#173D2B] underline"
              >
                Call Project Advisor →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURAL GALLERY (Polar White) */}
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.22em] text-[#173D2B] font-bold block mb-2">
              Visual Designs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900">
              Elevation Variations & Streetscapes
            </h2>
            <div className="w-16 h-0.5 bg-[#173D2B] mx-auto my-3" />
            <p className="text-sm text-slate-600">
              Designed by Veerkala Architects. Clearly labeled as conceptual proposed visualizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NARAYANI_VILLAS.gallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryImg(item.src)}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="overflow-hidden bg-slate-900 h-72">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                  {item.label}
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-left">
                  <h4 className="font-serif text-sm font-bold text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING & PAYMENT STRUCTURE (Polar White) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl text-left space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#173D2B] flex items-center justify-center font-serif font-bold text-lg shrink-0">
              ₹70L
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#173D2B] font-bold block mb-1">
                Direct Developer Commercial Structure
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                ₹70 Lacs Fixed Pre-Launch Price
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                {NARAYANI_VILLAS.pricingPolicy.disclosure}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 block mb-1">Booking Amount:</span>
              <strong className="text-lg font-bold text-slate-900 block">10% of Value</strong>
              <span className="text-[10px] text-slate-500">Secures villa reservation</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 block mb-1">Balance Schedule:</span>
              <strong className="text-lg font-bold text-slate-900 block">CLP / Bank Loan</strong>
              <span className="text-[10px] text-slate-500">Construction-linked stages</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 block mb-1">Phase 1 Inventory:</span>
              <strong className="text-lg font-bold text-emerald-700 block">10 Units Only</strong>
              <span className="text-[10px] text-slate-500">Pre-launch priority</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="bg-[#173D2B] text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-lg hover:bg-[#0F271C] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4BF86]" />
              <span>Call to Reserve: +91 99180 53660</span>
            </a>
            <button
              onClick={() => openEnquiryModal('Price and Payment Plan')}
              className="bg-slate-100 text-slate-800 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer border border-slate-200"
            >
              Request CLP Schedule
            </button>
          </div>
        </div>
      </section>

      {/* 6. APPROVALS & LEGAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#173D2B]" />
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Zila Panchayat Approved Project
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Narayani Villa is an officially sanctioned <strong>Zila Panchayat Approved Project</strong>.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              {NARAYANI_VILLAS.legalAndApprovals.verificationNote}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-[#173D2B]" />
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Developer Integrity & Clear Legal Title
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              ST Constructions enforces absolute transparency across all property paperwork, individual registries, bank approvals, and construction verification milestones.
            </p>
          </div>
        </div>
      </section>

      {/* 7. DEDICATED PROJECT ENQUIRY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-[#173D2B] font-bold block mb-2">
            Limited Pre-Launch Allotment
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">
            Reserve Your Narayani Villa
          </h2>
          <p className="text-xs text-slate-600 mb-8 max-w-md mx-auto">
            Lock in your preferred plot and orientation at the ₹70 Lacs pre-launch price. Call{' '}
            <strong>+91 99180 53660</strong> or register below.
          </p>

          <EnquiryForm initialTopic="Price and Payment Plan" />
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedGalleryImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setSelectedGalleryImg(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-xl">
            <img
              src={selectedGalleryImg}
              alt="Expanded preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-xs uppercase tracking-wider font-bold cursor-pointer"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
