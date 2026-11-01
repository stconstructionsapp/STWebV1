/**
 * Web3Forms Lead Integration Helper for ST Constructions
 * Direct, single-submission JSON API integration (prevents external page redirects).
 */

export const WEB3FORMS_ACCESS_KEY =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY) ||
  '3c1cb5ad-22b3-400b-b9c9-b79bb0371e65';

export interface Web3FormsData {
  name: string;
  email?: string;
  phone?: string;
  enquiryTopic?: string;
  message?: string;
  subject?: string;
  [key: string]: any;
}

/**
 * Submits lead data via JSON to Web3Forms API asynchronously.
 * Guarantees a single submission without navigating away from the page.
 */
export async function submitToWeb3Forms(data: Web3FormsData): Promise<{ success: boolean; message?: string }> {
  try {
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: 'ST Constructions Website Lead',
      subject: data.subject || `New Lead: ${data.enquiryTopic || 'General Enquiry'} - ST Constructions`,
      name: data.name,
      email: data.email && data.email.trim() ? data.email.trim() : 'no-email@stconstructions.in',
      phone: data.phone || 'Not provided',
      enquiry_topic: data.enquiryTopic || 'General Enquiry',
      message: data.message || `Lead submitted from ST Constructions web portal for ${data.enquiryTopic || 'Narayani Villa'}. Phone: ${data.phone}`,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    return {
      success: result.success === true,
      message: result.message || 'Form submitted successfully'
    };
  } catch (error) {
    console.error('[Web3Forms Exception]', error);
    return {
      success: false,
      message: 'Network error connecting to lead service'
    };
  }
}
