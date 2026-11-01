import React from 'react';
import { COMPANY_INFO, NARAYANI_VILLAS } from '../data/projectData';
import { ShieldAlert, AlertTriangle, FileCheck, CheckCircle } from 'lucide-react';

export const TermsDisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F4EC]">
      <section className="bg-[#173D2B] text-[#F7F4EC] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#22563D]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4BF86] font-semibold block">
            ST Constructions · Buyer Transparency
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Terms & Project Disclaimer
          </h1>
          <div className="w-12 h-0.5 bg-[#B59A5A] mx-auto my-2" />
          <p className="text-xs text-[#E5E1D7]/70">
            Important legal disclosures regarding project representations, architectural renders, and regulatory documentation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
        <div className="bg-white p-8 sm:p-12 rounded-lg border border-[#E5E1D7] shadow-xs space-y-8 text-xs text-[#202723]/90 leading-relaxed">
          {/* Critical Project Separation Notice */}
          <div className="p-5 rounded-lg border-2 border-red-500/40 bg-red-50/70 text-red-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-red-900">
              <ShieldAlert className="w-5 h-5 text-red-700 shrink-0" />
              <span>Independent Project Identity: Absolute Separation Notice</span>
            </div>
            <p>
              <strong>Notice:</strong> Paradise Town Phase 2 is an entirely separate development project. ST Constructions and Narayani Villas maintain no legal connection, shared bank accounts, joint venture, promoter identity, or regulatory filings with Paradise Town Phase 2. Prospective buyers must rely exclusively on official ST Constructions documentation for Narayani Villas.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              1. Artistic Impressions and Proposed Elevation Visuals
            </h2>
            <p>
              All elevation renderings, 3D street views, interior impressions, landscaping visuals, and video graphics displayed across this website represent the <em>Proposed Villa Design / Concept Image</em> designed by Veerkala Architects. They are intended for conceptual visualization and do not constitute an exact contractual warranty of final finishing materials, fittings, or surrounding urban environment.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              2. Verified Construction Status
            </h2>
            <p>
              As of the verified milestone (Navratri 2026), <strong>Foundation Work Completed</strong> represents the actual physical status achieved on site near Kisan Path, Deva Road. The website strictly distinguishes actual site progress photographs from conceptual 3D renders. Superstructure masonry, casting, and internal utilities are scheduled in subsequent phases.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              3. Commercial Terms & Pricing
            </h2>
            <p>
              Any earlier marketing references (including historical pre-launch indicators of ₹70 Lakh brackets or 10-unit allocations) are time-sensitive promotional notices. Current unit availability, actual plot dimensions, and binding payment schedules are valid only when formally communicated by ST Constructions via an official written proposal and booking form.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              4. Layout Approvals and Due Diligence
            </h2>
            <p>
              Creative collateral identifies Narayani Villas as a Zila (Jila) Panchayat approved layout. All prospective buyers are warmly welcomed and advised to physically inspect certified sanction orders, land registry documents, and layout blueprints during their site visit before executing financial transactions.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              5. Official Brand Name
            </h2>
            <p>
              The corporate developer is ST Constructions. References in preliminary design drafts to “ST Construction & Solution” represent internal nomenclature prior to brand finalization.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
