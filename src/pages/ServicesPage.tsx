import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO, NARAYANI_VILLAS } from '../data/projectData';
import { EnquiryForm } from '../components/EnquiryForm';
import {
  Building2,
  Hammer,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Phone,
  Layers,
  Clock,
  Award,
  HardHat,
  ChevronRight,
  Check,
  Building
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'development' | 'construction' | 'mandate'>('all');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'development' || hash === 'construction' || hash === 'mandate') {
      setActiveTab(hash);
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#043728]/20 selection:text-[#043728]">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#043728]" />
            <span>ST Constructions Group Services</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Our Three Core Verticals
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Backed by over 14 years of proven civil and real estate mastery in Lucknow, ST Constructions Group operates across three specialized, synergistic domains:
          </p>

          {/* Quick Vertical Switcher Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#043728] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              All Verticals
            </button>
            <button
              onClick={() => {
                setActiveTab('development');
                document.getElementById('development')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'development'
                  ? 'bg-[#043728] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              1. Real Estate Development
            </button>
            <button
              onClick={() => {
                setActiveTab('construction');
                document.getElementById('construction')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'construction'
                  ? 'bg-[#043728] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              2. Real Estate Construction
            </button>
            <button
              onClick={() => {
                setActiveTab('mandate');
                document.getElementById('mandate')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'mandate'
                  ? 'bg-[#043728] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              3. Real Estate Mandate
            </button>
          </div>
        </div>
      </section>

      {/* 2. Detailed Breakdown of Verticals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        {/* ========================================================
            VERTICAL 1: REAL ESTATE DEVELOPMENT
           ======================================================== */}
        {(activeTab === 'all' || activeTab === 'development') && (
          <section id="development" className="scroll-mt-28 space-y-8">
            <div className="bg-white rounded-3xl sm:rounded-[36px] border-2 border-slate-200 p-8 sm:p-12 lg:p-14 shadow-lg hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Vertical Identity & Details */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-extrabold uppercase tracking-widest">
                    <span>Vertical 01</span>
                    <span>·</span>
                    <span>Township & Community Development</span>
                  </div>

                  <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                    Real Estate Development
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    As forward-thinking developers, <strong className="text-slate-900 font-semibold">ST Constructions Group</strong> conceives, designs, and executes integrated, self-sustaining gated residential communities across Lucknow’s highest-appreciation corridors.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    We acquire strategic land banks, secure transparent municipal approvals, and build townships that feature subterranean electrical cabling, wide reinforced concrete roads, Italian-inspired duplex architecture, and active green community spaces.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Flagship Township
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Narayani Villa: 120 luxury duplex villas on Deva Road, just 1 KM from Kisan Path.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Modern Infrastructure
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Underground cabling, wide RCC avenues, stormwater drainage & 24/7 security.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        100% Legal Transparency
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Clear freehold titles, registered deeds, and formal bank home loan tie-ups.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Pricing Discipline
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Fixed pre-launch prices (₹70 Lacs) with structured construction-linked plans (CLP).
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => navigate('/projects/narayani-villas')}
                      className="inline-flex items-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow cursor-pointer group"
                    >
                      <span>Explore Narayani Villa</span>
                      <ArrowUpRight className="w-4 h-4 text-[#EEBF67] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => openEnquiryModal('Narayani Villa Booking & Pricing')}
                      className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full border border-slate-200 transition-all cursor-pointer"
                    >
                      <span>Request Township Brochure</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Showcase */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
                    <img
                      src="/assets/projects/narayani-villas/elevation/front_4_PR_Elevation_1.jpg"
                      alt="Narayani Villa by ST Constructions Group"
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="p-6 bg-slate-900 text-white text-left space-y-2">
                      <span className="text-[10px] uppercase font-bold text-[#EEBF67] tracking-wider block">
                        Active Development Showcase
                      </span>
                      <h4 className="font-sans text-xl font-bold">
                        Narayani Villa · Deva Road, Lucknow
                      </h4>
                      <p className="text-xs text-white/70">
                        120 Duplex Villas · 1 KM from Kisan Path · ₹70 Lacs Pre-Launch Price
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            VERTICAL 2: REAL ESTATE CONSTRUCTION
           ======================================================== */}
        {(activeTab === 'all' || activeTab === 'construction') && (
          <section id="construction" className="scroll-mt-28 space-y-8">
            <div className="bg-white rounded-3xl sm:rounded-[36px] border-2 border-slate-200 p-8 sm:p-12 lg:p-14 shadow-lg hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual Showcase on Left for alternating layout */}
                <div className="lg:col-span-5 order-2 lg:order-1 relative">
                  <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
                    <img
                      src="/assets/construction-updates/foundation-completed-navratri-2026.jpg"
                      alt="Civil Construction by ST Constructions Group"
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="p-6 bg-slate-900 text-white text-left space-y-2">
                      <span className="text-[10px] uppercase font-bold text-[#EEBF67] tracking-wider block">
                        Civil Contracting Excellence
                      </span>
                      <h4 className="font-sans text-xl font-bold">
                        Turnkey Home Construction on Your Plot
                      </h4>
                      <p className="text-xs text-white/70">
                        Lab-Tested Materials · Grade 53 Cement · Strict Milestone Handover
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Vertical Identity & Details */}
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-extrabold uppercase tracking-widest">
                    <span>Vertical 02</span>
                    <span>·</span>
                    <span>Turnkey Civil Contracting & Home Building</span>
                  </div>

                  <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                    Real Estate Construction
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Own a residential plot or commercial parcel in Lucknow and want a reliable, stress-free construction partner? <strong className="text-slate-900 font-semibold">ST Constructions Group</strong> provides end-to-end civil contracting, turning raw land into a master-crafted duplex or home.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    With over 14 years of hands-on structural engineering since 2012, we manage the entire lifecycle: soil analysis, architectural blueprint drafting, foundation piling, RCC frame construction, first-class brick masonry, plumbing/electrical MEP, waterproofing, and high-end turnkey finishing.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Turnkey Custom Building
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Complete execution from soil testing to final key handover.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Certified Building Materials
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Primary TMT steel (Tata/Jindal), Grade-53 cement & kiln-fired red bricks.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Fixed Timelines & Cost Control
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Itemized contracts with zero unexpected cost escalations.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Transparent Progress
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Milestone-linked billing verified with dated on-site photographs.
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => openEnquiryModal('Turnkey Home Construction (Contractor Services)')}
                      className="inline-flex items-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow cursor-pointer group"
                    >
                      <span>Request Construction Quotation</span>
                      <ArrowUpRight className="w-4 h-4 text-[#EEBF67] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => navigate('/construction-updates')}
                      className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full border border-slate-200 transition-all cursor-pointer"
                    >
                      <span>View Construction Updates</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            VERTICAL 3: REAL ESTATE MANDATE
           ======================================================== */}
        {(activeTab === 'all' || activeTab === 'mandate') && (
          <section id="mandate" className="scroll-mt-28 space-y-8">
            <div className="bg-white rounded-3xl sm:rounded-[36px] border-2 border-slate-200 p-8 sm:p-12 lg:p-14 shadow-lg hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Vertical Identity & Details */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-extrabold uppercase tracking-widest">
                    <span>Vertical 03</span>
                    <span>·</span>
                    <span>Sole Selling & Project Acceleration</span>
                  </div>

                  <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                    Real Estate Mandate
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Are you a land developer or builder with a residential or commercial project in Lucknow? <strong className="text-slate-900 font-semibold">ST Constructions Group</strong> acts as your authorized Real Estate Mandate partner to take end-to-end responsibility for project sales, branding, and customer acquisition.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    We eliminate the headaches of managing scattered sales agencies. From project launch pricing models and digital demand generation to activating our extensive network of 500+ active Channel Partners across Uttar Pradesh and NCR, we turn projects into fast-selling successes.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Sole-Selling Representation
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Dedicated sales leadership, site experience centers, and closing teams.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        500+ Channel Partner Network
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Deep distribution reach across brokers and wealth advisors in UP.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Go-To-Market & Pricing
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Strategic tranche releases, pre-launch momentum, and high-ROI digital funnels.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        Predictable Cash Flow
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Rapid inventory absorption to guarantee ongoing construction cash flow.
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => openEnquiryModal('Real Estate Mandate Partnership (For Developers)')}
                      className="inline-flex items-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow cursor-pointer group"
                    >
                      <span>Partner Your Project Sales</span>
                      <ArrowUpRight className="w-4 h-4 text-[#EEBF67] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => navigate('/channel-partners')}
                      className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full border border-slate-200 transition-all cursor-pointer"
                    >
                      <span>Channel Partner Details</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Showcase */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
                    <img
                      src="/assets/projects/narayani-villas/elevation/front_5_PR_Elevation_2.jpg"
                      alt="Real Estate Mandate by ST Constructions Group"
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="p-6 bg-slate-900 text-white text-left space-y-2">
                      <span className="text-[10px] uppercase font-bold text-[#EEBF67] tracking-wider block">
                        Sales Mandate Partnership
                      </span>
                      <h4 className="font-sans text-xl font-bold">
                        Accelerating Project Sell-Out
                      </h4>
                      <p className="text-xs text-white/70">
                        Strategic Positioning · Digital Marketing · 500+ CP Distribution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. Integrated Consultation Form Section */}
        <section className="bg-slate-900 text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#EEBF67] block">
                Get In Touch
              </span>
              <h3 className="font-sans text-3xl sm:text-4xl font-black text-white leading-tight">
                Partner with ST Constructions Group Today
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Whether you want to purchase a luxury duplex villa at Narayani Villa, hire our civil construction team to build on your private plot, or partner your real estate project with our sales mandate desk, we are ready to assist you.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#EEBF67]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>Direct Desk: {COMPANY_INFO.contact.displayPhone} / {COMPANY_INFO.contact.secondaryPhone}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#EEBF67]">
                    <Building className="w-4 h-4" />
                  </div>
                  <span>Corporate Office: {COMPANY_INFO.corporateOffice.address}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h4 className="text-lg font-bold text-slate-900 mb-4 text-left">
                Request a Service Consultation
              </h4>
              <EnquiryForm initialTopic="Project Details & Site Visit" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
