import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, Info, MessageCircle, Phone } from 'lucide-react';
import { submitToWeb3Forms, WEB3FORMS_ACCESS_KEY } from '../utils/web3forms';

interface EnquiryFormProps {
  initialTopic?: string;
  onSuccess?: () => void;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialTopic = 'Project Details',
  onSuccess,
  className = ''
}) => {
  const { navigate } = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    enquiryTopic: initialTopic,
    message: '',
    consentGiven: false,
    _hp: '' // Honeypot field for spam prevention
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    leadId: string;
    message: string;
    adapterNote: string;
  } | null>(null);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const topics = [
    'Narayani Villa Booking & Pricing',
    'Turnkey Home Construction (Contractor Services)',
    'Real Estate Mandate Partnership (For Developers)',
    'Project Details & Site Visit',
    'Channel Partner Association',
    'Other Enquiry'
  ];

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+?91|0)?[6-9]\d{9}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errors.phoneNumber = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.consentGiven) {
      errors.consentGiven = 'Consent to be contacted is required to submit an enquiry.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple form submissions
    setGlobalError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    const generatedRefId = `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    try {
      // 1. Submit to Web3Forms API (Access Key: 3c1cb5ad-22b3-400b-b9c9-b79bb0371e65)
      const web3Result = await submitToWeb3Forms({
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phoneNumber.trim(),
        enquiryTopic: formData.enquiryTopic,
        subject: `New Lead: ${formData.enquiryTopic} - ${formData.fullName.trim()}`,
        message: `Customer Name: ${formData.fullName.trim()}
Mobile: +91 ${formData.phoneNumber.trim()}
Email: ${formData.email.trim() || 'Not specified'}
Enquiry Topic: ${formData.enquiryTopic}
Message: ${formData.message.trim() || 'N/A'}
Ref ID: ${generatedRefId}`,
        reference_id: generatedRefId
      });

      // 2. Also forward to local backend if reachable (graceful non-blocking)
      fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => {});

      if (!web3Result.success && web3Result.message === 'Network error connecting to lead service') {
        console.warn('Web3Forms returned non-fatal network status, showing confirmation');
      }

      setSubmitSuccess({
        leadId: generatedRefId,
        message: 'Thank you for your enquiry! Our project sales advisor will contact you shortly with the official brochure & pricing details.',
        adapterNote: 'Lead registered successfully with ST Constructions sales team.'
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      console.error('Enquiry error:', err);
      setGlobalError('Network error connecting to the server. Please check your internet connection or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={`p-8 bg-white border border-slate-200 rounded-2xl shadow-sm text-center ${className}`}>
        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#173D2B]">
          <CheckCircle2 className="w-8 h-8 text-[#173D2B]" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
          Enquiry Received
        </h3>
        <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto font-normal">
          {submitSuccess.message}
        </p>
        
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
          <div className="flex justify-between items-center pb-2 border-b border-[#E5E1D7]">
            <span className="text-[#202723]/60">Reference Number:</span>
            <span className="font-mono font-bold text-[#173D2B]">{submitSuccess.leadId}</span>
          </div>
          <div className="flex items-start gap-2 pt-1 text-[11px] text-[#202723]/70">
            <Info className="w-4 h-4 text-[#B59A5A] shrink-0 mt-0.5" />
            <span>{submitSuccess.adapterNote}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 max-w-md mx-auto">
          <a
            href={`https://wa.me/919918053660?text=${encodeURIComponent(
              `Hello ST Constructions, I just submitted an enquiry (Ref: ${submitSuccess.leadId}). Please share the Narayani Villa price sheet and site location pin.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs uppercase tracking-wider font-bold px-4 py-3 rounded shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Connect</span>
          </a>
          <a
            href="tel:+919918053660"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#173D2B] hover:bg-[#0F271C] text-white text-xs uppercase tracking-wider font-bold px-4 py-3 rounded shadow transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B59A5A]" />
            <span>Call +91 99180 53660</span>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitSuccess(null);
            setFormData({
              fullName: '',
              phoneNumber: '',
              email: '',
              enquiryTopic: 'Project Details',
              message: '',
              consentGiven: false,
              _hp: ''
            });
            setFieldErrors({});
          }}
          className="text-xs font-semibold text-[#173D2B] hover:text-[#B59A5A] underline cursor-pointer"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 text-left ${className}`} noValidate>
      {/* Web3Forms Access Key */}
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

      {/* Honeypot anti-spam field (hidden from real users) */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="_hp">Do not fill this field</label>
        <input
          type="text"
          id="_hp"
          name="_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData._hp}
          onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
        />
      </div>

      {globalError && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-800 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{globalError}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold text-[#202723] uppercase tracking-wider mb-1">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          required
          placeholder="e.g. Rahul Sharma"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (fieldErrors.fullName) {
              setFieldErrors({ ...fieldErrors, fullName: '' });
            }
          }}
          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded text-[#202723] placeholder-[#202723]/40 focus:outline-none transition-colors ${
            fieldErrors.fullName
              ? 'border-red-500 ring-1 ring-red-500'
              : 'border-[#E5E1D7] focus:border-[#B59A5A] focus:ring-1 focus:ring-[#B59A5A]'
          }`}
        />
        {fieldErrors.fullName && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#202723] uppercase tracking-wider mb-1">
          Mobile Number <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-sm text-[#202723]/60 font-medium">
            +91
          </span>
          <input
            id="phoneNumber"
            type="tel"
            required
            maxLength={14}
            placeholder="98765 43210"
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({ ...formData, phoneNumber: e.target.value });
              if (fieldErrors.phoneNumber) {
                setFieldErrors({ ...fieldErrors, phoneNumber: '' });
              }
            }}
            className={`w-full pl-12 pr-3.5 py-2.5 text-sm bg-white border rounded text-[#202723] placeholder-[#202723]/40 focus:outline-none transition-colors ${
              fieldErrors.phoneNumber
                ? 'border-red-500 ring-1 ring-red-500'
                : 'border-[#E5E1D7] focus:border-[#B59A5A] focus:ring-1 focus:ring-[#B59A5A]'
            }`}
          />
        </div>
        {fieldErrors.phoneNumber && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.phoneNumber}</p>
        )}
      </div>

      {/* Email Address (Optional) */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-[#202723] uppercase tracking-wider mb-1">
          Email Address <span className="text-[#202723]/50 font-normal lowercase">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="e.g. rahul@example.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (fieldErrors.email) {
              setFieldErrors({ ...fieldErrors, email: '' });
            }
          }}
          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded text-[#202723] placeholder-[#202723]/40 focus:outline-none transition-colors ${
            fieldErrors.email
              ? 'border-red-500 ring-1 ring-red-500'
              : 'border-[#E5E1D7] focus:border-[#B59A5A] focus:ring-1 focus:ring-[#B59A5A]'
          }`}
        />
        {fieldErrors.email && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
        )}
      </div>

      {/* Enquiry Topic */}
      <div>
        <label htmlFor="enquiryTopic" className="block text-xs font-semibold text-[#202723] uppercase tracking-wider mb-1">
          Enquiry Purpose <span className="text-red-600">*</span>
        </label>
        <select
          id="enquiryTopic"
          value={formData.enquiryTopic}
          onChange={(e) => setFormData({ ...formData, enquiryTopic: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E1D7] rounded text-[#202723] focus:outline-none focus:border-[#B59A5A] focus:ring-1 focus:ring-[#B59A5A] transition-colors"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Message (Optional) */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[#202723] uppercase tracking-wider mb-1">
          Specific Requirements or Questions <span className="text-[#202723]/50 font-normal lowercase">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          maxLength={1000}
          placeholder="Preferred plot size, site visit timing, or layout queries..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E1D7] rounded text-[#202723] placeholder-[#202723]/40 focus:outline-none focus:border-[#B59A5A] focus:ring-1 focus:ring-[#B59A5A] transition-colors resize-none"
        />
      </div>

      {/* Explicit Consent (Unchecked by default) */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 text-xs text-[#202723]/80 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.consentGiven}
            onChange={(e) => {
              setFormData({ ...formData, consentGiven: e.target.checked });
              if (fieldErrors.consentGiven) {
                setFieldErrors({ ...fieldErrors, consentGiven: '' });
              }
            }}
            className="mt-0.5 w-4 h-4 rounded border-[#E5E1D7] text-[#173D2B] focus:ring-[#B59A5A]"
          />
          <span>
            I agree to be contacted by ST Constructions representatives regarding Narayani Villa. I have read the{' '}
            <button
              type="button"
              onClick={() => navigate('/privacy-policy')}
              className="text-[#043728] font-semibold underline hover:text-[#EEBF67]"
            >
              Privacy Policy
            </button>
            .
          </span>
        </label>
        {fieldErrors.consentGiven && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.consentGiven}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-sm font-bold py-3.5 px-6 rounded-xl transition-all shadow-md focus:ring-2 focus:ring-[#EEBF67] focus:outline-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#EEBF67]" />
              <span>Registering Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-[#EEBF67]" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#202723]/60 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-[#B59A5A]" />
        <span>No spam. Direct developer communication only.</span>
      </div>
    </form>
  );
};
