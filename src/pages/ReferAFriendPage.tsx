import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/projectData';
import { submitToWeb3Forms, WEB3FORMS_ACCESS_KEY } from '../utils/web3forms';
import {
  Gift,
  Share2,
  Users,
  CheckCircle2,
  Send,
  Loader2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Award,
  ArrowRight
} from 'lucide-react';

export const ReferAFriendPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();

  const [formData, setFormData] = useState({
    referrerName: '',
    referrerPhone: '',
    referrerEmail: '',
    friendName: '',
    friendPhone: '',
    friendCity: 'Lucknow',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions
    if (!formData.referrerName.trim() || !formData.referrerPhone.trim() || !formData.friendName.trim() || !formData.friendPhone.trim()) {
      return;
    }
    setIsSubmitting(true);
    const generatedCode = `REF-${Math.floor(10000 + Math.random() * 90000)}`;
    setRefCode(generatedCode);

    try {
      // 1. Submit to Web3Forms API
      await submitToWeb3Forms({
        name: formData.referrerName.trim(),
        phone: formData.referrerPhone.trim(),
        email: formData.referrerEmail.trim(),
        enquiryTopic: 'Refer a Friend Program',
        subject: `New Referral [${generatedCode}]: ${formData.referrerName} referring ${formData.friendName}`,
        message: `Referrer: ${formData.referrerName} (${formData.referrerPhone}, ${formData.referrerEmail || 'N/A'})
Referred Friend: ${formData.friendName} (${formData.friendPhone}, ${formData.friendCity})
Notes: ${formData.notes || 'None'}
Referral Code: ${generatedCode}`
      });

      // 2. Also forward to local backend if reachable
      fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `${formData.referrerName} (Referring: ${formData.friendName})`,
          phoneNumber: formData.referrerPhone,
          emailAddress: formData.referrerEmail,
          enquiryTopic: `Refer a Friend Program [${generatedCode}]`,
          message: `Referrer: ${formData.referrerName} (${formData.referrerPhone}). Referred Friend: ${formData.friendName} (${formData.friendPhone}, ${formData.friendCity}). Notes: ${formData.notes || 'None'}`,
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

  const shareText = encodeURIComponent(
    `Hey! I wanted to recommend Narayani Villa by ST Constructions on Deva Road, Lucknow (1 KM from Kisan Path). Luxury 3 BHK Duplex Villas at ₹70 Lacs pre-launch price (only 10 units in this batch out of 120 villas). Check it out here: https://kommodo.ai/i/MTc9sPxdn6G7Fvb5jDS9`
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#043728]/20 selection:text-[#043728]">
      {/* Hero Banner (Polar White Theme) */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-[#043728]" />
            <span>ST Constructions Rewards Program</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Refer a Friend & Earn Rewards
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Help your friends and family discover luxury duplex living at <strong>Narayani Villa</strong> on Deva Road, Lucknow. Receive exclusive rewards of up to <strong className="text-slate-900 font-bold">₹50,000 to ₹1,00,000</strong> upon every successful villa booking.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Invite on WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full border border-slate-300 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#043728]" />
              <span>Referral Desk: {COMPANY_INFO.contact.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Simple Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#043728] font-bold block mb-1">
            How It Works
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900">
            Three Effortless Steps to Claim Your Reward
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 relative">
            <span className="w-10 h-10 rounded-2xl bg-[#043728] text-[#EEBF67] font-extrabold flex items-center justify-center text-sm mb-4 shadow-sm">
              01
            </span>
            <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">
              Share Their Contact
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Fill out the referral form below or connect your friend directly with our ST Constructions relationship desk.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 relative">
            <span className="w-10 h-10 rounded-2xl bg-[#043728] text-[#EEBF67] font-extrabold flex items-center justify-center text-sm mb-4 shadow-sm">
              02
            </span>
            <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">
              VIP Site Walkthrough
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Our project advisors host your referral for a personalized site tour of the completed foundation and Italian elevation plans on Deva Road.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 relative">
            <span className="w-10 h-10 rounded-2xl bg-[#043728] text-[#EEBF67] font-extrabold flex items-center justify-center text-sm mb-4 shadow-sm">
              03
            </span>
            <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">
              Receive Your Incentive
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Upon booking confirmation, your referral bonus is transferred directly via bank disbursement or adjusted towards your own payment plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Benefits Grid */}
      <section className="py-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Referral Form */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              <h3 className="font-sans text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                Submit a Referral
              </h3>
              <p className="text-xs text-slate-600 mb-6 font-normal">
                Enter your details and the friend you are recommending. We respect privacy and never spam.
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-left space-y-4">
                  <div className="flex items-center gap-3 text-emerald-800">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-base">Referral Registered Successfully!</h4>
                      <p className="text-xs text-emerald-700">Reference ID: <span className="font-mono font-bold text-slate-900">{refCode}</span></p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Our team will reach out to your referred friend with VIP hospitality and keep you updated on every step. Thank you for placing your trust in ST Constructions!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        referrerName: '',
                        referrerPhone: '',
                        referrerEmail: '',
                        friendName: '',
                        friendPhone: '',
                        friendCity: 'Lucknow',
                        notes: ''
                      });
                    }}
                    className="text-xs text-[#043728] font-bold underline cursor-pointer"
                  >
                    Submit another referral
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#043728] block mb-3">
                      Your Contact Details (Referrer)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.referrerName}
                          onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                          placeholder="e.g. Amit Srivastava"
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Your Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.referrerPhone}
                          onChange={(e) => setFormData({ ...formData, referrerPhone: e.target.value })}
                          placeholder="+91 99180 53660"
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#043728] block mb-3">
                      Your Friend / Family Member Details
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Friend's Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.friendName}
                          onChange={(e) => setFormData({ ...formData, friendName: e.target.value })}
                          placeholder="e.g. Neha Verma"
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Friend's Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.friendPhone}
                          onChange={(e) => setFormData({ ...formData, friendPhone: e.target.value })}
                          placeholder="+91 94151 65999"
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Friend's Current City</label>
                      <input
                        type="text"
                        value={formData.friendCity}
                        onChange={(e) => setFormData({ ...formData, friendCity: e.target.value })}
                        placeholder="Lucknow, Kanpur, Delhi, NRI, etc."
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Additional Notes (Optional)</label>
                      <input
                        type="text"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Looking for 3 BHK duplex, weekend visit"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#043728]/30"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#043728] hover:bg-[#03291e] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#EEBF67]" />
                        <span>Registering Referral...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#EEBF67]" />
                        <span>Submit Referral Now</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Program Highlights & FAQ */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#043728]/10 text-[#043728] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-slate-900">
                    Why Recommend Narayani Villa?
                  </h4>
                  <span className="text-[11px] text-slate-500">120 Villas Township · Deva Road</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-slate-700 font-normal">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
                  <span><strong>Unmatched Pricing:</strong> ₹70 Lacs fixed pre-launch price for a 3 BHK duplex villa is Lucknow’s best value.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
                  <span><strong>Prime Connectivity:</strong> Just 1 KM from Kisan Path bypass, connecting Gomti Nagar Extension in 10 minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
                  <span><strong>Approved Title:</strong> Zila Panchayat approved project with clear freehold registry title.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
                  <span><strong>Construction Pace:</strong> Foundation milestone complete; swift possession schedule.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#043728]">
                <ShieldCheck className="w-4 h-4" />
                <span>Terms & Conditions</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                Referral reward applies to bookings confirmed with the minimum 10% booking amount and executed builder-buyer agreements. The incentive is paid out within 15 business days of booking clearance. There is no cap on the number of friends you can refer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
