import React from 'react';
import { COMPANY_INFO } from '../data/projectData';
import { EnquiryForm } from '../components/EnquiryForm';
import { MapPin, Mail, Clock, Phone, MessageCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    'Hello ST Constructions, I would like to enquire about Narayani Villa (₹70 Lacs Pre-Launch on Deva Road).'
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header (Polar White) */}
      <section className="bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50 text-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#043728] font-bold block">
            Direct Developer Access
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900">
            Contact ST Constructions
          </h1>
          <div className="w-12 h-0.5 bg-[#043728] mx-auto my-2" />
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal">
            Get in touch directly with our sales desk for Narayani Villa reservations, site visit appointments, and official documentation reviews.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Contact Cards & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#043728] font-bold block mb-1">
                Project & Corporate Desk
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Site & Communication Hub
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-normal">
                Direct developer interaction. No brokerage or intermediary markups.
              </p>
            </div>

            <div className="space-y-4">
              {/* Official Call Desk */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#043728] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 block text-sm mb-1">Direct Telephone Lines</strong>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                      className="text-base font-bold text-slate-900 hover:text-[#043728] font-mono"
                    >
                      {COMPANY_INFO.contact.displayPhone}
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`}
                      className="text-base font-bold text-slate-900 hover:text-[#043728] font-mono"
                    >
                      {COMPANY_INFO.contact.secondaryPhone}
                    </a>
                  </div>
                  <span className="text-slate-500 block mt-1">Available 10:00 AM – 6:30 PM (Mon–Sat)</span>
                </div>
              </div>

              {/* Official WhatsApp */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 block text-sm mb-1">Instant WhatsApp Assistance</strong>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:underline"
                  >
                    Click to Chat on WhatsApp →
                  </a>
                  <span className="text-slate-500 block mt-1">Receive brochure, price list & live location pin.</span>
                </div>
              </div>

              {/* Corporate Office */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#043728] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 block text-sm mb-1">Corporate Office</strong>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    6/972, Gomti Nagar Extension, Lucknow, 226010
                  </p>
                  <span className="text-slate-500 block mt-1">Executive leadership & legal documentation desk</span>
                </div>
              </div>

              {/* Site Address */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#043728] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 block text-sm mb-1">Project Site Location (Narayani Villa)</strong>
                  <p className="text-slate-700 leading-relaxed font-normal">
                    Mati Bazar, Just 1 KM from Kisan Path (Outer Ring Road), Deva Road, Lucknow, 226028.
                  </p>
                  <span className="text-slate-500 block mt-1">Site walkthroughs, foundation inspection & bookings</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#173D2B] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 block text-sm mb-1">Official Correspondence</strong>
                  <p className="text-slate-600 leading-relaxed font-mono">
                    {COMPANY_INFO.contact.officialEmail}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#173D2B] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 block text-sm mb-1">Site Visiting Hours</strong>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    {COMPANY_INFO.contact.officeHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#173D2B] font-bold block mb-1">
                Priority Reservation & Inspection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Send Direct Enquiry
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-normal">
                Submit your contact details and our project manager will get back to you within 2 business hours.
              </p>
            </div>

            <EnquiryForm initialTopic="Site Visit" />
          </div>
        </div>
      </section>
    </div>
  );
};
