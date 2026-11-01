import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/projectData';
import { submitToWeb3Forms, WEB3FORMS_ACCESS_KEY } from '../utils/web3forms';
import {
  Briefcase,
  TrendingUp,
  Award,
  CheckCircle2,
  Phone,
  MessageCircle,
  Send,
  Loader2,
  Building,
  ShieldCheck,
  FileText,
  UserCheck
} from 'lucide-react';

export const ChannelPartnersPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();

  const [formData, setFormData] = useState({
    firmName: '',
    contactPerson: '',
    phone: '',
    email: '',
    reraNumber: '',
    experienceYears: '3-5 Years',
    operatingArea: 'Lucknow Central & East',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [partnerId, setPartnerId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions
    if (!formData.contactPerson.trim() || !formData.phone.trim()) return;
    setIsSubmitting(true);
    const generatedId = `CP-${Math.floor(1000 + Math.random() * 9000)}`;
    setPartnerId(generatedId);

    try {
      // 1. Submit directly to Web3Forms API
      await submitToWeb3Forms({
        name: formData.contactPerson.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        enquiryTopic: 'Channel Partner Registration',
        subject: `New Channel Partner Application [${generatedId}]: ${formData.contactPerson} (${formData.firmName || 'Individual'})`,
        message: `Contact Person: ${formData.contactPerson}
Agency/Firm Name: ${formData.firmName || 'Individual Broker'}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
RERA ID: ${formData.reraNumber || 'N/A'}
Experience: ${formData.experienceYears}
Operating Area: ${formData.operatingArea}
Special Notes: ${formData.message || 'None'}
Partner ID: ${generatedId}`
      });

      // 2. Also forward to local backend if reachable
      fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `${formData.contactPerson} (${formData.firmName || 'Individual Channel Partner'})`,
          phoneNumber: formData.phone,
          emailAddress: formData.email,
          enquiryTopic: `Channel Partner Onboarding [${generatedId}]`,
          message: `Firm: ${formData.firmName}. RERA: ${formData.reraNumber || 'N/A'}. Experience: ${formData.experienceYears}. Operating Area: ${formData.operatingArea}. Note: ${formData.message || 'None'}`,
          consentGiven: true
        })
      }).catch(() => {});
    } catch {
      // Graceful fallback
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello ST Constructions, I would like to register as a Channel Partner for Narayani Villa (120 Villas Township on Deva Road, Lucknow).'
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#043728]/20 selection:text-[#043728]">
      {/* Header Banner (Polar White Theme) */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-[#043728]" />
            <span>Authorized Channel Partner Network</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Partner with ST Constructions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Collaborate with Lucknow’s forward-thinking residential developer. Empower your clients with authentic 3 BHK Italian duplex villas at <strong>Narayani Villa</strong> (120 villas township on Deva Road) with transparent, fast commission disbursements.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect with Partner Desk</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full border border-slate-300 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#043728]" />
              <span>CP Desk: {COMPANY_INFO.contact.secondaryPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* CP Key Value Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#043728] font-bold block mb-1">
            Why Partner With Us
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900">
            A Lucrative, Developer-Backed Growth Partnership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-2xl bg-[#043728]/10 text-[#043728] flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-slate-900 mb-1.5">
              Rapid Conversions
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              ₹70 Lacs introductory pricing for a 3 BHK duplex near Kisan Path creates instant high conversion rates among prospective buyers.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-2xl bg-[#043728]/10 text-[#043728] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-slate-900 mb-1.5">
              Timely Commission
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Direct developer payouts upon client booking clearance. No brokerage bottlenecks or delayed milestone holds.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-2xl bg-[#043728]/10 text-[#043728] flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-slate-900 mb-1.5">
              Dedicated CP Manager
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              A personal project manager conducts site walkthroughs with your prospective clients, ensuring professional representation.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-2xl bg-[#043728]/10 text-[#043728] flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-slate-900 mb-1.5">
              Marketing Collaterals
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              White-label digital brochures, 3D floor plan PDFs, video walk-throughs, and location maps formatted for your client outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Registration Form */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              <h3 className="font-sans text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                Channel Partner Registration
              </h3>
              <p className="text-xs text-slate-600 mb-6 font-normal">
                Register your firm with ST Constructions to receive priority unit allotments and sales kits.
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-left space-y-4">
                  <div className="flex items-center gap-3 text-emerald-800">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-base">Channel Partner Application Received!</h4>
                      <p className="text-xs text-emerald-700">Partner Code: <span className="font-mono font-bold text-slate-900">{partnerId}</span></p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Our Head of Channel Sales will contact you within 24 hours with the official partner agreement, commission slab chart, and marketing drive folder.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-xs text-[#043728] font-bold underline cursor-pointer"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Agency Name</label>
                      <input
                        type="text"
                        value={formData.firmName}
                        onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                        placeholder="e.g. Apex Realty Consultants"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Person Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Vikas Mehrotra"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 94151 65999"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="partner@youragency.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">UP RERA Agent No. (If Available)</label>
                      <input
                        type="text"
                        value={formData.reraNumber}
                        onChange={(e) => setFormData({ ...formData, reraNumber: e.target.value })}
                        placeholder="UPRERAAGT..."
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Real Estate Experience</label>
                      <select
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30 bg-white"
                      >
                        <option value="1-2 Years">1-2 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="5-10 Years">5-10 Years</option>
                        <option value="10+ Years">10+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Operating Area in Lucknow</label>
                    <input
                      type="text"
                      value={formData.operatingArea}
                      onChange={(e) => setFormData({ ...formData, operatingArea: e.target.value })}
                      placeholder="e.g. Gomti Nagar, Indira Nagar, Faizabad Road, Deva Road"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message or Comments (Optional)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your client network or upcoming requirements..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#043728] hover:bg-[#03291e] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#EEBF67]" />
                        <span>Registering Partner...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#EEBF67]" />
                        <span>Submit Registration</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Project Scale & CP Privileges */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#043728] font-bold block">
                Project Overview for Partners
              </span>
              <h4 className="font-sans text-xl font-bold text-slate-900">
                Narayani Villa Township
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                A planned residential township comprising <strong className="text-slate-900 font-bold">120 luxury duplex villas</strong> located at Mati Bazar on Deva Road, Lucknow, just 1 KM from the newly operational Kisan Path (Outer Ring Road).
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Total Township Scale</span>
                  <span className="font-bold text-slate-900">120 Luxury Duplex Villas</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Current Phase Available</span>
                  <span className="font-bold text-emerald-700">10 Pre-Launch Units</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Fixed Pre-Launch Price</span>
                  <span className="font-bold text-[#043728]">₹70 Lacs</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Government Approval</span>
                  <span className="font-bold text-slate-900">Zila Panchayat Approved</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Payment Structure</span>
                  <span className="font-bold text-slate-900">10% Booking | CLP Plan</span>
                </div>
              </div>
            </div>

            {/* Direct CP Support Card */}
            <div className="p-6 rounded-3xl bg-[#043728] text-white shadow-xl space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#EEBF67] font-bold block">
                Channel Partner Helpdesk
              </span>
              <h4 className="font-sans text-lg font-bold">
                Need Fast Site Pass or Client Escort?
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Connect directly with our Channel Partner coordinators for priority client briefings, site car transfers, or pricing sheet downloads.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`}
                  className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full hover:bg-slate-100 transition-colors w-fit"
                >
                  <Phone className="w-4 h-4 text-[#043728]" />
                  <span>Call: {COMPANY_INFO.contact.secondaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
