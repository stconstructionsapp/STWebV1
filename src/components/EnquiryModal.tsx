import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { EnquiryForm } from './EnquiryForm';
import { X } from 'lucide-react';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, closeEnquiryModal, enquiryModalTopic } = useRouter();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeEnquiryModal();
      }
    };
    if (isEnquiryModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isEnquiryModalOpen, closeEnquiryModal]);

  if (!isEnquiryModalOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={closeEnquiryModal} />

      {/* Modal Dialog Card */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeEnquiryModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 focus:outline-none cursor-pointer transition-colors"
          aria-label="Close enquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 id="modal-headline" className="font-sans text-2xl sm:text-3xl font-extrabold text-[#043728] mb-2 tracking-tight">
          Inquire about Narayani Villa
        </h2>
        <p className="text-xs text-slate-600 mb-6">
          Request official layout plans, verified specifications, or schedule an in-person site walkthrough.
        </p>

        <EnquiryForm
          initialTopic={enquiryModalTopic || 'Project Details'}
          onSuccess={() => {
            // Keep modal open to show the reference ID confirmation card
          }}
        />
      </div>
    </div>
  );
};
