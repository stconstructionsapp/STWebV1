import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/projectData';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate, openEnquiryModal } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Nav menu: Home, Services, Projects, Narayani Villas, Gallery, About, Contact
  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICES', path: '/services' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'NARAYANI VILLAS', path: '/projects/narayani-villas' },
    { label: 'GALLERY', path: '/projects/narayani-villas#gallery' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
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
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Utility Bar: Clean Email & Contact Desk */}
      <div className="bg-[#043728] text-white/90 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <a
            href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
            className="flex items-center gap-2 hover:text-[#EEBF67] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#EEBF67]" />
            <span className="font-medium text-[11px] sm:text-xs tracking-wide">
              {COMPANY_INFO.contact.officialEmail}
            </span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
            className="flex items-center gap-2 font-bold text-white hover:text-[#EEBF67] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#EEBF67]" />
            <span className="text-[11px] sm:text-xs tracking-wide hidden sm:inline">
              Call: {COMPANY_INFO.contact.displayPhone} / {COMPANY_INFO.contact.secondaryPhone}
            </span>
            <span className="text-[11px] sm:text-xs tracking-wide sm:hidden">
              Call: {COMPANY_INFO.contact.displayPhone}
            </span>
          </a>
        </div>
      </div>

      {/* Main Polar White Navbar */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
          {/* Brand Identity: Single Clean ST Constructions Logo */}
          <div className="flex items-center">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center focus:outline-none"
              aria-label="ST Constructions - Home"
            >
              <img
                src={COMPANY_INFO.stLogoSrc}
                alt="ST Constructions"
                className="h-11 sm:h-13 w-auto object-contain"
              />
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`text-[11px] 2xl:text-xs uppercase tracking-[0.14em] font-bold transition-colors relative py-1.5 ${
                    isActive
                      ? 'text-[#043728]'
                      : 'text-slate-700 hover:text-[#043728]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#043728]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: ST Constructions Logo Brand Color (#043728) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openEnquiryModal('Site Visit')}
              className="inline-flex items-center gap-2.5 bg-[#043728] hover:bg-[#03291e] text-white text-xs uppercase tracking-wider font-bold px-5 py-3 rounded-full transition-all shadow-sm hover:shadow-md focus:outline-none cursor-pointer group"
            >
              <span>Book Site Visit</span>
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#EEBF67]" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-slate-800 hover:bg-slate-100 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu (Polar White) */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`block px-3.5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider ${
                    isActive
                      ? 'bg-slate-100 text-[#043728]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 space-y-2 border-t border-slate-100">
              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs uppercase tracking-wider font-bold px-4 py-3 rounded-full border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#043728]" />
                <span>Call: {COMPANY_INFO.contact.displayPhone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiryModal('Site Visit');
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs uppercase tracking-wider font-bold px-4 py-3 rounded-full shadow-sm cursor-pointer"
              >
                <span>Schedule Site Visit</span>
                <ArrowUpRight className="w-4 h-4 text-[#EEBF67]" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
