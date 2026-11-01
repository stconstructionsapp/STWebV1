import React from 'react';
import { COMPANY_INFO } from '../data/projectData';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F4EC]">
      <section className="bg-[#173D2B] text-[#F7F4EC] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#22563D]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4BF86] font-semibold block">
            ST Constructions · Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Privacy Policy
          </h1>
          <div className="w-12 h-0.5 bg-[#B59A5A] mx-auto my-2" />
          <p className="text-xs text-[#E5E1D7]/70">
            Effective Date: October 2026 · Applicable to website visitors and project enquiry submissions.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
        <div className="bg-white p-8 sm:p-12 rounded-lg border border-[#E5E1D7] shadow-xs space-y-8 text-xs text-[#202723]/90 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry or request a site visit through this corporate portal, ST Constructions collects the following details voluntarily provided by you:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-[#202723]/80">
              <li>Full Name</li>
              <li>Contact telephone / mobile number (normalized for telephonic coordination)</li>
              <li>Email address (if provided)</li>
              <li>Enquiry purpose and personal requirements / questions</li>
              <li>Timestamp, IP address, and browser headers solely for spam and rate-limit security monitoring.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              2. How Your Information Is Used
            </h2>
            <p>
              Your contact information is strictly utilized for genuine communication regarding <strong>Narayani Villas</strong> and direct property consultation with ST Constructions personnel. Specifically:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-[#202723]/80">
              <li>To provide verified layout blueprints, pricing plans, and sanction documentation.</li>
              <li>To schedule, coordinate, and dispatch directions for on-site property walkthroughs.</li>
              <li>To follow up on explicit inquiries initiated by you.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              3. No Third-Party Reselling or Broker Aggregation
            </h2>
            <p>
              ST Constructions does not sell, rent, monetize, or distribute customer lead details to third-party telemarketers, real estate listing networks, brokers, or unaffiliated aggregators.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              4. Data Retention and Security
            </h2>
            <p>
              Enquiries are handled through secure server endpoints equipped with honeypot spam barriers, rate-limit controls, and restricted administrative access. Data is retained only for the duration necessary to satisfy your enquiry or comply with applicable legal frameworks.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#173D2B] mb-2">
              5. Contact & Opt-Out Rights
            </h2>
            <p>
              If at any point you wish to withdraw consent or request the deletion of your contact records, please write to our compliance desk at{' '}
              <a href={`mailto:${COMPANY_INFO.contact.officialEmail}`} className="text-[#173D2B] font-bold underline">
                {COMPANY_INFO.contact.officialEmail}
              </a>
              . Your records will be promptly purged from our active contact lists.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
