import React from 'react';
import { useRouter } from '../context/RouterContext';
import { NARAYANI_VILLAS, COMPANY_INFO } from '../data/projectData';
import { MapPin, Phone, ArrowRight, Check, ShieldCheck, Building, Layers, Eye, Hammer, Briefcase, ArrowUpRight } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#043728]/20 selection:text-[#043728]">
      {/* Header Banner (Polar White) */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#043728]" />
            <span>ST Constructions Portfolio</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Residential Developments
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            ST Constructions focuses on delivering exceptional living environments in Lucknow's fastest-growing corridors. Explore our flagship duplex villa development on Deva Road.
          </p>
        </div>
      </section>

      {/* Flagship Development: Narayani Villa */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#043728] font-bold block">
              Flagship Active Project · 120 Villas Township
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Narayani Villa
            </h2>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            Pre-Launch Phase · Only 10 Units
          </span>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Project Visual Container */}
          <div className="lg:col-span-7 relative bg-slate-900">
            <img
              src="/assets/projects/narayani-villas/elevation/front_4_PR_Elevation_1.jpg"
              alt="Narayani Villa front elevation rendering by ST Constructions"
              className="w-full h-full min-h-[380px] sm:min-h-[460px] object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#043728] text-white text-xs uppercase tracking-wider font-bold px-3.5 py-1.5 rounded-full shadow">
              ₹70 Lacs Pre-Launch Price
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs p-3.5 rounded-2xl border border-white/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-[#EEBF67] font-bold block">Location</span>
                <span className="font-medium text-white/90">Deva Road, Mati Bazar (1 KM from Kisanpath)</span>
              </div>
              <button
                onClick={() => navigate('/projects/narayani-villas#gallery')}
                className="hidden sm:inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg font-bold text-xs transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Gallery</span>
              </button>
            </div>
          </div>

          {/* Project Details Panel */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between text-left space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#043728]" />
                <span>Deva Road, Lucknow · 1 KM from Kisan Path</span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900">
                3 BHK Luxury Duplex Villas
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 font-normal">
                A prestigious 120-villa gated community engineered with authentic Italian elevation, Smart Auto-Lock system, underground electrification, and wide RCC township roads.
              </p>

              {/* Specs Grid */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[11px] block">Project Scale</span>
                  <span className="font-bold text-slate-900">120 Villas Total</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[11px] block">Fixed Price</span>
                  <span className="font-bold text-[#043728]">₹70 Lacs</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[11px] block">Payment Plan</span>
                  <span className="font-bold text-slate-900">10% Booking | CLP</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[11px] block">Approval</span>
                  <span className="font-bold text-slate-900">Zila Panchayat</span>
                </div>
              </div>

              {/* Highlights checklist */}
              <div className="mt-5 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#043728] shrink-0" />
                  <span>Smart Auto-Lock Electronic Entry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#043728] shrink-0" />
                  <span>Underground Electricity & Drainage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#043728] shrink-0" />
                  <span>120 Villas Master Plan · 10 Pre-Launch Units</span>
                </div>
              </div>
            </div>

            {/* Actions using ST Constructions branding color #043728 */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => navigate('/projects/narayani-villas')}
                className="flex-1 bg-[#043728] hover:bg-[#03291e] text-white text-xs uppercase tracking-wider font-bold py-3.5 px-4 rounded-full transition-all text-center cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Explore Narayani Villa</span>
                <ArrowRight className="w-4 h-4 text-[#EEBF67] group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => openEnquiryModal('Site Visit')}
                className="flex-1 bg-white hover:bg-slate-50 text-slate-800 text-xs uppercase tracking-wider font-bold py-3.5 px-4 rounded-full border border-slate-300 transition-colors text-center cursor-pointer shadow-xs"
              >
                Book Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contractor & Real Estate Mandate Verticals */}
      <section className="py-16 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#043728] font-bold block">
              Beyond Our Own Developments
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contractor & Real Estate Mandate Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal">
              Whether you need end-to-end home construction on your private plot or require exclusive sales mandate representation for your real estate project, ST Constructions delivers 14+ years of civil and sales expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Contractor Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#043728] text-white flex items-center justify-center shadow">
                  <Hammer className="w-6 h-6 text-[#EEBF67]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#043728] block">
                    Turnkey Civil Contractor
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-slate-900">
                    Construct Your Dream Home on Your Plot
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  ST Constructions offers full-scale turnkey home building services for landowners across Lucknow. We handle soil testing, architectural drafting, structural RCC frame casting, brickwork, electrical/plumbing MEP, plaster, and interior finishing with lab-certified materials and milestone-linked payment schedules.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#043728]" />
                    <span>Fixed-cost contracts with zero hidden escalation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#043728]" />
                    <span>Certified grade-A TMT steel, Ultratech/ACC cement & red bricks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#043728]" />
                    <span>Guaranteed completion timelines with weekly photo progress</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => openEnquiryModal('Turnkey Home Construction (Contractor Services)')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all cursor-pointer shadow-sm"
                >
                  <span>Request Construction Quotation</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EEBF67]" />
                </button>
              </div>
            </div>

            {/* Real Estate Mandate Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#043728] text-white flex items-center justify-center shadow">
                  <Briefcase className="w-6 h-6 text-[#EEBF67]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#043728] block">
                    Exclusive Sales Partners
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-slate-900">
                    Real Estate Mandates for Project Developers
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Are you a builder or land developer with a residential project in Lucknow seeking accelerated inventory absorption? ST Constructions takes on exclusive sales and marketing mandates—executing launch pricing, branding campaigns, digital buyer acquisition, and managing an extensive 500+ Channel Partner network.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#043728]" />
                    <span>Complete 360° sole-selling ownership and sales team deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#043728]" />
                    <span>Direct activation across 500+ active Channel Partners in UP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#043728]" />
                    <span>Predictable cash-flow velocity and customer closing support</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => openEnquiryModal('Real Estate Mandate Partnership (For Developers)')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all cursor-pointer shadow-sm"
                >
                  <span>Partner Your Project Sales</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EEBF67]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Future Pipeline along Kisan Path Corridor */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#043728] font-bold block">
              Strategic Growth
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Future Pipeline & Land Parcels
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              ST Constructions is strategically expanding along the Kisan Path ring corridor, providing early-stage investors prime land development access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Future Phase 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm text-left space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#043728]/10 text-[#043728] flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">
                  Planning Stage
                </span>
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-slate-900">
                  Narayani Enclave — Phase 2
                </h3>
                <span className="text-xs text-slate-500">Deva Road Growth Corridor, Lucknow</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                An extension of our successful duplex villa typology with expanded club house provisions, children's park, and integrated convenience retail.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                <span className="text-slate-500">Target Launch: 2027</span>
                <button
                  onClick={() => openEnquiryModal('Future Phase')}
                  className="text-[#043728] font-bold hover:underline cursor-pointer"
                >
                  Register Early Interest →
                </button>
              </div>
            </div>

            {/* Commercial Project */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm text-left space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#043728]/10 text-[#043728] flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">
                  Land Acquired
                </span>
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-slate-900">
                  ST Commercial Square
                </h3>
                <span className="text-xs text-slate-500">Direct Kisan Path Junction Frontage</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                High-visibility commercial suites, showroom spaces, and healthcare chambers designed to cater to the booming residential density of Deva Road.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                <span className="text-slate-500">RERA Filing in Progress</span>
                <button
                  onClick={() => openEnquiryModal('Commercial Space')}
                  className="text-[#043728] font-bold hover:underline cursor-pointer"
                >
                  Request Pre-Notification →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
