import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2, User } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface Testimonial {
  id: string;
  name: string;
  profession: string;
  location: string;
  avatarText: string;
  rating: number;
  villaType: string;
  title: string;
  quote: string;
  date: string;
  status: string;
}

export const TestimonialSlider: React.FC = () => {
  const { openEnquiryModal } = useRouter();

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Dr. Rajesh Verma',
      profession: 'Senior Physician, King George’s Medical University (KGMU)',
      location: 'Lucknow',
      avatarText: 'RV',
      rating: 5,
      villaType: '3 BHK Italian Duplex · 120 Villas Enclave',
      title: 'Peaceful Gated Living with Superb Kisan Path Connectivity',
      quote:
        'Finding a freehold 3 BHK duplex villa near Gomti Nagar Extension at ₹70 Lacs was unmatched. The 1 KM approach from Kisan Path makes my hospital commute quick, while the gated layout with 24/7 security provides immense peace of mind for my parents and children.',
      date: 'April 2026',
      status: 'Early Allottee · Narayani Villa'
    },
    {
      id: '2',
      name: 'Amit & Shalini Srivastava',
      profession: 'Lead Software Architect & IT Consultant',
      location: 'HCL Technologies / Lucknow IT City',
      avatarText: 'AS',
      rating: 5,
      villaType: 'Type 1 Classical Duplex (25×40)',
      title: 'Transparent Execution and Experienced Founders You Can Trust',
      quote:
        'What gave us complete confidence in ST Constructions was meeting the founders, Sanjeev Tiwari and Sandeep Tiwari. Their 14+ years of civil track record since 2012 is evident on site. The underground electrification and clean RCC roads give Narayani Villa a premium European feel.',
      date: 'March 2026',
      status: 'Verified Booking · Phase 1'
    },
    {
      id: '3',
      name: 'Er. Arvind Pandey',
      profession: 'Executive Engineer, Central PWD',
      location: 'Lucknow',
      avatarText: 'AP',
      rating: 5,
      villaType: 'Type 2 Arched Balcony Villa (30×40)',
      title: 'Superior Structural Standards & Approved Zila Panchayat Clearances',
      quote:
        'With my engineering background, I inspected the foundation depth, column reinforcement, and Zila Panchayat approvals thoroughly. ST Constructions maintains zero compromises on RCC strength, termite treatment, and water supply infrastructure.',
      date: 'March 2026',
      status: 'Verified Investor · Narayani Villa'
    },
    {
      id: '4',
      name: 'Priya & Manmohan Agarwal',
      profession: 'Entrepreneurs & Commercial Investors',
      location: 'Hazratganj, Lucknow',
      avatarText: 'PA',
      rating: 5,
      villaType: '3 BHK Duplex · Private Rooftop Terrace',
      title: 'Exceptional Capital Value in Lucknow’s Fastest Growing Hub',
      quote:
        'With Tata Telco and BBD University nearby, the Deva Road corridor has tremendous growth potential. The ₹70 Lacs pre-launch fixed pricing for a luxury duplex is an unbeatable investment compared to cramped multistory flats.',
      date: 'February 2026',
      status: 'Registered Buyer · Narayani Villa'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance slider every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const current = testimonials[currentIndex];

  return (
    <section
      className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#043728]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EEBF67]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#043728]/10 text-[#043728] text-xs font-bold uppercase tracking-wider">
            <span>Customer Testimonials</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by Lucknow Homebuyers & Investors
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Hear why families and professionals choose Narayani Villa by ST Constructions for their dream 3 BHK duplex home.
          </p>
        </div>

        {/* Testimonial Card Carousel */}
        <div
          className="relative bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 lg:p-12 transition-all duration-500"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Large decorative quotation mark */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 text-[#043728]/10 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* Review Content */}
            <div className="lg:col-span-8 space-y-5">
              {/* Star Rating & Status Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#EEBF67] text-[#EEBF67]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-500">5.0 / 5.0</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#043728]" />
                  <span>{current.status}</span>
                </span>
              </div>

              {/* Title & Review Quote */}
              <div className="space-y-3">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  “{current.title}”
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal italic">
                  "{current.quote}"
                </p>
              </div>

              {/* Villa Type & Verification Details */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="px-3 py-1 bg-slate-100 rounded-lg border border-slate-200 text-slate-700">
                  {current.villaType}
                </span>
                <span>·</span>
                <span>Verified Feedback ({current.date})</span>
              </div>
            </div>

            {/* Author Persona Card */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#043728] to-[#03291e] text-white flex items-center justify-center font-extrabold text-lg shadow-md shrink-0">
                  {current.avatarText}
                </div>
                <div>
                  <h4 className="font-sans text-base sm:text-lg font-bold text-slate-900">
                    {current.name}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-snug mt-0.5">
                    {current.profession}
                  </p>
                  <p className="text-[11px] text-[#043728] font-bold mt-1">
                    {current.location}
                  </p>
                </div>
              </div>

              {/* Quick Action */}
              <div className="pt-2">
                <button
                  onClick={() => openEnquiryModal('Testimonial Site Visit')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#043728] text-slate-800 hover:text-white border border-slate-200 hover:border-[#043728] text-xs font-bold transition-all text-center cursor-pointer shadow-2xs"
                >
                  Book Walkthrough Like {current.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>

          {/* Slider Controls & Navigation */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#043728]'
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs text-slate-400 font-semibold ml-2">
                {currentIndex + 1} of {testimonials.length}
              </span>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#043728] hover:bg-[#03291e] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Homebuyer Trust Indicator Footer */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#043728]" />
            <span>100% Freehold Independent Villa Registries</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#043728]" />
            <span>Zila Panchayat Sanctioned Township</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#043728]" />
            <span>120 Luxury Duplex Units Total Capacity</span>
          </div>
        </div>
      </div>
    </section>
  );
};
