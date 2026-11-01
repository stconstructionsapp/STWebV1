import React from 'react';
import { useRouter } from '../context/RouterContext';
import { CONSTRUCTION_UPDATES } from '../data/projectData';
import { Calendar, ArrowUpRight } from 'lucide-react';

export const ConstructionUpdatesPage: React.FC = () => {
  const { openEnquiryModal } = useRouter();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header (Polar White) */}
      <section className="bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50 text-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#173D2B] font-bold block">
            Verifiable Progress Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900">
            Construction Updates
          </h1>
          <div className="w-12 h-0.5 bg-[#173D2B] mx-auto my-2" />
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal">
            Chronological documentation of physical construction milestones at Narayani Villa, Deva Road near Kisan Path, Lucknow.
          </p>
        </div>
      </section>

      {/* Main Journal Feed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-12">
          {CONSTRUCTION_UPDATES.map((update, idx) => (
            <article
              key={update.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg text-left"
            >
              <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#173D2B] flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#173D2B] uppercase tracking-wider block">
                      Milestone Update
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      {update.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Calendar className="w-4 h-4 text-[#173D2B]" />
                    {update.date}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    {update.status}
                  </span>
                </div>
              </div>

              {/* Genuine Site Photograph */}
              <div className="relative bg-slate-900">
                <img
                  src={update.image}
                  alt={update.caption}
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-slate-900 border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{update.imageLabel}</span>
                </div>
                <div className="absolute bottom-3 inset-x-3 bg-black/75 backdrop-blur-xs text-xs text-white px-4 py-2 rounded-lg">
                  {update.caption}
                </div>
              </div>

              {/* Factual Description & Verification */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Technical Execution Summary
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {update.description}
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <strong className="text-slate-900 block font-semibold">Authenticity & Inspection Note:</strong>
                  <p>{update.verificationNote}</p>
                  <p className="text-slate-500 italic mt-1">
                    *Completed during the auspicious period of Navratri 2026. The next phase will commence column raising and perimeter brick masonry.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500">
                    Want to see the current progress in person?
                  </span>
                  <button
                    onClick={() => openEnquiryModal('Site Visit')}
                    className="inline-flex items-center gap-2 bg-[#173D2B] hover:bg-[#0F271C] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Schedule On-Site Walkthrough</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4BF86]" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Future Milestones Schedule Preview */}
        <div className="mt-14 bg-slate-50/70 p-8 rounded-3xl border border-slate-200 text-left">
          <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
            Planned Construction Sequence
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Future milestones will only be marked "Completed" with authentic, dated site photography.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded-2xl border border-emerald-300 bg-white shadow-xs">
              <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider block mb-1">
                Milestone 01 · Completed
              </span>
              <strong className="text-slate-900 block text-sm mb-1">RCC Foundation & Plinth</strong>
              <span className="text-slate-500">Footings, ground beams, starter rebar columns</span>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[10px] uppercase font-bold text-[#173D2B] tracking-wider block mb-1">
                Milestone 02 · Scheduled
              </span>
              <strong className="text-slate-900 block text-sm mb-1">Ground Floor Superstructure</strong>
              <span className="text-slate-500">Columns, brickwork masonry & lintel beams</span>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                Milestone 03 · Planned
              </span>
              <strong className="text-slate-900 block text-sm mb-1">First Floor & Roof Slab</strong>
              <span className="text-slate-500">Upper arches, roof casting & terrace drainage</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
