/**
 * Core Application TypeScript Interfaces
 */
export interface LeadSubmission {
  fullName: string;
  phoneNumber: string;
  email?: string;
  enquiryTopic: string;
  message?: string;
  consentGiven: boolean;
  _hp?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: Record<string, string>;
  leadId?: string;
}

export interface BusinessVertical {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}
