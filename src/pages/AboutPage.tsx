import React from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/projectData';
import {
  MapPin,
  Building,
  Calendar,
  Clock,
  Building2,
  Hammer,
  Briefcase,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#043728]/20 selection:text-[#043728]">
      {/* 1. Header Banner (Polar White Theme) */}
      <section className="bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50 text-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center mb-2">
            <img
              src={COMPANY_INFO.stLogoSrc}
              alt="ST Constructions"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            ST Constructions
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto italic">
            “{COMPANY_INFO.positioning}”
          </p>

          {/* Quick Credential Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#043728]" />
              <span>14+ Years Experience (Since 2012)</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#043728]" />
              <span>Established: March 2026</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-[#043728]" />
              <span>120 Luxury Duplex Township</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Leadership & Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#043728] font-bold block">
            Executive Leadership
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Founders
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            ST Constructions is guided by founders <strong>Sanjeev Tiwari</strong> and <strong>Sandeep Tiwari</strong>. While the corporate entity ST Constructions was formally established in <strong>March 2026</strong>, both founders have been actively executing real estate and construction developments across Lucknow since <strong>2012</strong>, bringing over <strong>14 years</strong> of rich, hands-on construction excellence.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COMPANY_INFO.founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all text-center group"
            >
              {/* Full Complete Founder Portrait (No Cropping) */}
              <div className="relative bg-slate-50/70 p-4 sm:p-5 flex items-center justify-center">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full max-h-[440px] sm:max-h-[480px] object-contain rounded-2xl shadow-xs"
                />
                <div className="absolute top-7 left-7 bg-[#043728] text-white text-[11px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  Founder
                </div>
              </div>

              {/* Founder Information - Just Name and Founder & Director of ST Constructions */}
              <div className="p-6 border-t border-slate-100 flex flex-col items-center justify-center space-y-1.5">
                <h3 className="font-sans text-2xl font-black text-slate-900 tracking-tight">
                  {founder.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#043728]">
                  Founder & Director, ST Constructions
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 Three Core Business Verticals (Developer · Contractor · Mandates) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/60 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#043728] font-bold block">
            Integrated Real Estate Capabilities
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Three Business Verticals
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            ST Constructions operates as a versatile real estate enterprise, seamlessly connecting master-planned residential development, turnkey home construction contracting, and specialized sales mandate representation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {COMPANY_INFO.businessVerticals.map((vert) => (
            <div
              key={vert.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#043728] text-white flex items-center justify-center shadow-md">
                  {vert.id === 'developer' && <Building2 className="w-7 h-7 text-[#EEBF67]" />}
                  {vert.id === 'contractor' && <Hammer className="w-7 h-7 text-[#EEBF67]" />}
                  {vert.id === 'mandate' && <Briefcase className="w-7 h-7 text-[#EEBF67]" />}
                </div>

                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#043728] block mb-1">
                    {vert.badge}
                  </span>
                  <h3 className="font-sans text-2xl font-black text-slate-900 tracking-tight">
                    {vert.title}
                  </h3>
                  <p className="text-xs font-bold text-[#9E7A36] mt-0.5">
                    {vert.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {vert.fullDesc}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Key Features:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {vert.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#043728] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    if (vert.ctaPath.startsWith('/projects')) {
                      navigate(vert.ctaPath);
                    } else if (vert.id === 'contractor') {
                      openEnquiryModal('Turnkey Home Construction (Contractor Services)');
                    } else {
                      openEnquiryModal('Real Estate Mandate Partnership (For Developers)');
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all cursor-pointer shadow-sm group-hover:shadow"
                >
                  <span>{vert.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EEBF67]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Company Story & Philosophy */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-left space-y-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#043728] font-bold block">
              Company Background
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900">
              14 Years of Experience Built on Trust & Integrity
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              ST Constructions was formally established in <strong>March 2026</strong> as a consolidated residential development enterprise. Behind the firm is a solid 14-year legacy dating back to <strong>2012</strong>, when our founders began executing real estate, civil construction, and land developments in the fast-expanding urban corridors of Lucknow.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We focus deliberately on residential communities where architectural beauty, clear freehold titles, and durable structural engineering take precedence over speculative volumes. Our flagship township, <strong>Narayani Villa</strong> on Deva Road, embodies this philosophy with 120 Italian-elevation duplex villas engineered for lifetime comfort.
            </p>

            <div className="p-4 bg-emerald-50/60 border-l-4 border-[#043728] rounded-r-2xl text-xs text-slate-700 space-y-1">
              <strong className="text-slate-900 block font-bold">The ST Constructions Guarantee:</strong>
              <p>
                Every villa at Narayani Villa comes with approved Zila Panchayat sanctions, clear individual registries, bank loan tie-ups, and verified construction milestones accessible directly on site.
              </p>
            </div>
          </div>

          {/* Guiding Principles */}
          <div>
            <h3 className="font-sans text-2xl font-bold text-slate-900 mb-6 text-center">
              Our Core Principles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPANY_INFO.values.map((v, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-lg bg-[#043728]/10 flex items-center justify-center text-[#043728] font-extrabold text-xs mb-3">
                    0{i + 1}
                  </div>
                  <h4 className="font-sans text-base font-bold text-slate-900 mb-1.5">
                    {v.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Offices & Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#043728] font-bold block mb-1">
            Where to Find Us
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900">
            Our Corporate & Site Offices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {/* Corporate Office Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[#043728]/10 text-[#043728] flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#043728] block">
                Headquarters
              </span>
              <h3 className="font-sans text-xl font-bold text-slate-900">
                Corporate Office
              </h3>
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
              <span className="font-medium text-slate-800 text-sm">
                6/972, Gomti Nagar Extension, Lucknow, 226010
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Executive leadership, corporate operations, legal documentation review, and investor meetings.
            </p>
          </div>

          {/* Project Site Office Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[#043728]/10 text-[#043728] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#043728] block">
                Flagship Project Location
              </span>
              <h3 className="font-sans text-xl font-bold text-slate-900">
                Site Office · Narayani Villa
              </h3>
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
              <span className="font-medium text-slate-800 text-sm">
                Mati Bazar, Just 1 KM from Kisan Path, Deva Road, Lucknow
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Walk-in site visits, sample villa layout inspection, completed foundation verification, and booking desk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
