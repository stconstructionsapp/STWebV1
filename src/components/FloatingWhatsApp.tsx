import React from 'react';
import { COMPANY_INFO } from '../data/projectData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    'Hello ST Constructions, I am interested in Narayani Villa (₹70 Lacs Pre-Launch on Deva Road, Lucknow). Please share floor plans and pricing details.'
  );

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Authentic Floating Circular WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 group"
        aria-label="Chat on WhatsApp (+91 99180 53660)"
        title="WhatsApp: +91 99180 53660"
      >
        {/* Subtle pulsing background wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping duration-1000 pointer-events-none" />

        {/* Globally Recognized Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 sm:w-9 sm:h-9 fill-current relative z-10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16.002 0C7.165 0 0 7.163 0 16.002c0 2.825.738 5.578 2.14 7.995L.23 31.066a.8.8 0 00.98.98l7.268-1.905a15.93 15.93 0 007.524 1.862c8.837 0 16.002-7.163 16.002-16.001C32.004 7.163 24.839 0 16.002 0zm0 29.336a13.25 13.25 0 01-6.753-1.846.8.8 0 00-.573-.098l-5.32 1.394 1.423-5.185a.8.8 0 00-.095-.626 13.27 13.27 0 01-2.019-6.973c0-7.355 5.981-13.336 13.337-13.336 7.355 0 13.336 5.981 13.336 13.336 0 7.355-5.981 13.334-13.336 13.334zm7.318-9.988c-.401-.201-2.373-1.171-2.74-1.305-.368-.134-.635-.201-.902.201-.268.401-1.037 1.305-1.271 1.573-.234.268-.468.301-.869.1-.401-.201-1.696-.625-3.23-1.993-1.194-1.064-2-2.378-2.234-2.779-.234-.401-.025-.618.176-.818.181-.18.401-.468.602-.702.201-.234.268-.401.401-.669.134-.268.067-.502-.033-.702-.1-.201-.902-2.174-1.237-2.976-.326-.781-.657-.675-.902-.687-.234-.012-.502-.014-.769-.014-.268 0-.702.1-1.07.502-.368.401-1.405 1.372-1.405 3.344 0 1.973 1.438 3.879 1.639 4.147.201.268 2.83 4.321 6.856 6.06.957.414 1.705.661 2.288.846.962.305 1.838.262 2.53.159.771-.115 2.373-.97 2.707-1.906.335-.936.335-1.739.234-1.906-.1-.167-.367-.268-.769-.469z" />
        </svg>
      </a>
    </div>
  );
};
