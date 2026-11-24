/**
 * Lead Submission Client Helper for ST Constructions
 * Submits form leads to the backend /api/enquiries endpoint so third-party
 * access keys and webhook URLs remain securely on the server.
 */

export interface LeadSubmissionPayload {
  name: string;
  email?: string;
  phone?: string;
  enquiryTopic?: string;
  message?: string;
  subject?: string;
  reference_id?: string;
  _hp?: string;
}

export async function submitToWeb3Forms(
  data: LeadSubmissionPayload
): Promise<{ success: boolean; leadId?: string; message?: string; adapterNote?: string }> {
  try {
    const response = await fetch('/api/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        fullName: data.name,
        phoneNumber: data.phone || '',
        email: data.email || '',
        enquiryTopic: data.enquiryTopic || 'General Enquiry',
        message: data.message || '',
        subject: data.subject,
        reference_id: data.reference_id,
        consentGiven: true,
        _hp: data._hp || ''
      })
    });

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return {
        success: false,
        message: 'Enquiry endpoint unavailable in standalone frontend preview.'
      };
    }

    const result = await response.json();
    return {
      success: response.ok && result.success === true,
      leadId: result.leadId,
      message: result.message || result.error || 'Enquiry processed',
      adapterNote: result.adapterNote
    };
  } catch (error) {
    console.error('[Lead Submission Error]', error);
    return {
      success: false,
      message: 'Network error connecting to lead service'
    };
  }
}
