import React from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/projectData';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Building,
  Facebook,
  Instagram
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();
  const currentYear = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      navigate(basePath);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="relative bg-white text-slate-700 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Footer Grid in Polar White Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-200 text-left">
          
          {/* Column 1: ST Constructions Logo, Bio & Multi-Vertical Badges */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block py-1">
              <img
                src={COMPANY_INFO.stLogoSrc}
                alt="ST Constructions"
                className="h-11 sm:h-13 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-sm">
              <strong className="text-slate-900 font-bold">ST Constructions Group</strong> is a premier real estate enterprise founded by Sanjeev Tiwari and Sandeep Tiwari, backed by over 14 years of proven real estate and civil engineering expertise in Lucknow since 2012.
            </p>

            {/* Followers Section with Theme-Colored High-Visibility Icons */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Follow Us:
              </span>
              <div className="flex items-center gap-3">
                {/* 1. Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ST Constructions on Facebook"
                  className="w-10 h-10 rounded-xl bg-[#043728] hover:bg-[#03271d] text-white hover:text-[#EEBF67] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                </a>

                {/* 2. Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ST Constructions on Instagram"
                  className="w-10 h-10 rounded-xl bg-[#043728] hover:bg-[#03271d] text-white hover:text-[#EEBF67] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                {/* 3. YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ST Constructions on YouTube"
                  className="group w-10 h-10 rounded-xl bg-[#043728] hover:bg-[#03271d] text-white hover:text-[#EEBF67] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                      className="fill-current"
                    />
                    <polygon
                      points="9.6 15.3 15.6 12 9.6 8.7"
                      className="fill-[#043728] group-hover:fill-[#03271d] transition-colors"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Important Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-2xs bg-[#043728] shrink-0" />
              <span>Important Links</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-normal">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav(e, '/')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleNav(e, '/services')}
                  className="hover:text-[#043728] transition-colors block font-semibold text-[#043728]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, '/about')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={(e) => handleNav(e, '/projects')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/projects/narayani-villas"
                  onClick={(e) => handleNav(e, '/projects/narayani-villas')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Narayani Villa
                </a>
              </li>
              <li>
                <a
                  href="/projects/narayani-villas#gallery"
                  onClick={(e) => handleNav(e, '/projects/narayani-villas#gallery')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Architectural Gallery
                </a>
              </li>
              <li>
                <a
                  href="/construction-updates"
                  onClick={(e) => handleNav(e, '/construction-updates')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Construction Updates
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-2xs bg-[#043728] shrink-0" />
              <span>Useful Links</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-normal">
              <li>
                <a
                  href="/refer-a-friend"
                  onClick={(e) => handleNav(e, '/refer-a-friend')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Refer a Friend
                </a>
              </li>
              <li>
                <a
                  href="/channel-partners"
                  onClick={(e) => handleNav(e, '/channel-partners')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Channel Partners
                </a>
              </li>
              <li>
                <button
                  onClick={() => openEnquiryModal('Price and Payment Plan')}
                  className="hover:text-[#043728] transition-colors block text-left cursor-pointer"
                >
                  Brochure & Price Sheet
                </button>
              </li>
              <li>
                <a
                  href="/projects/narayani-villas#amenities"
                  onClick={(e) => handleNav(e, '/projects/narayani-villas#amenities')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Project Amenities
                </a>
              </li>
              <li>
                <a
                  href="/projects/narayani-villas#floorplans"
                  onClick={(e) => handleNav(e, '/projects/narayani-villas#floorplans')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Duplex Floor Plans
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleNav(e, '/privacy-policy')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-disclaimer"
                  onClick={(e) => handleNav(e, '/terms-disclaimer')}
                  className="hover:text-[#043728] transition-colors block"
                >
                  Terms & Disclaimers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Address Details of ST Constructions (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-2xs bg-[#043728] shrink-0" />
              <span>Contact & Addresses</span>
            </h4>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-normal">
              {/* Corporate Office */}
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-xs uppercase tracking-wider font-bold mb-0.5">
                    Corporate Office:
                  </strong>
                  <span className="text-slate-700 leading-relaxed block">
                    {COMPANY_INFO.corporateOffice.address}
                  </span>
                </div>
              </div>

              {/* Site Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-xs uppercase tracking-wider font-bold mb-0.5">
                    Site Address:
                  </strong>
                  <span className="text-slate-700 leading-relaxed block">
                    {COMPANY_INFO.siteOffice.address}
                  </span>
                </div>
              </div>

              {/* Calling Numbers */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-xs uppercase tracking-wider font-bold mb-0.5">
                    Phone Numbers:
                  </strong>
                  <div className="flex flex-col gap-0.5">
                    <a
                      href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                      className="text-slate-700 hover:text-[#043728] font-semibold transition-colors"
                    >
                      {COMPANY_INFO.contact.displayPhone}
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`}
                      className="text-slate-700 hover:text-[#043728] font-semibold transition-colors"
                    >
                      {COMPANY_INFO.contact.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-xs uppercase tracking-wider font-bold mb-0.5">
                    Email Address:
                  </strong>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
                    className="text-slate-700 hover:text-[#043728] transition-colors"
                  >
                    {COMPANY_INFO.contact.officialEmail}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#043728] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-xs uppercase tracking-wider font-bold mb-0.5">
                    Office Hours:
                  </strong>
                  <span className="text-slate-600">
                    {COMPANY_INFO.contact.officeHours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright (No Scroll To Top & No Lucknow Uttar Pradesh text) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Copyright © {currentYear} <strong className="text-slate-800 font-semibold">ST Constructions</strong>. All rights reserved. Developed by{' '}
            <a
              href="https://realtyexperts.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#043728] hover:underline font-bold"
            >
              Realty Experts
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              onClick={(e) => handleNav(e, '/privacy-policy')}
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="/terms-disclaimer"
              onClick={(e) => handleNav(e, '/terms-disclaimer')}
              className="hover:text-slate-900 transition-colors"
            >
              Terms & Disclaimers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
