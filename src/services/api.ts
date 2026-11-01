import { LeadSubmission, ApiResponse } from '../types';

/**
 * Client API service for enquiry submissions and backend communications
 */
export async function submitLeadEnquiry(payload: LeadSubmission): Promise<ApiResponse> {
  const response = await fetch('/api/enquiries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return response.json();
}

export async function checkServerHealth(): Promise<ApiResponse> {
  const response = await fetch('/api/health');
  return response.json();
}
