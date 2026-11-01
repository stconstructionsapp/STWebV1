import React from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/projectData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const { openEnquiryModal } = useRouter();

  const whatsappMessage = encodeURIComponent(
    'Hello ST Constructions, I would like more details about Narayani Villa on Deva Road, Lucknow (₹70 Lacs Pre-Launch).'
  );

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 border-t border-slate-200 px-3 py-2.5 shadow-2xl backdrop-blur-md flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-2.5 px-2 rounded-lg border border-slate-200 shadow-xs transition-colors"
        aria-label="Call ST Constructions sales desk"
      >
        <Phone className="w-3.5 h-3.5 text-[#043728]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-2.5 px-2 rounded-lg shadow-xs transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Site Visit / Enquiry Button */}
      <button
        onClick={() => openEnquiryModal('Site Visit')}
        className="flex-1 flex items-center justify-center gap-1.5 bg-[#043728] hover:bg-[#03291e] text-white font-bold text-xs py-2.5 px-2 rounded-lg shadow-sm transition-colors cursor-pointer"
        aria-label="Book a site visit"
      >
        <Calendar className="w-3.5 h-3.5 text-[#EEBF67]" />
        <span>Site Visit</span>
      </button>
    </div>
  );
};
