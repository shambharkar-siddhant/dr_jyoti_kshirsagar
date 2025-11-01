/**
 * WhatsApp Service
 * 
 * Provides functions to send WhatsApp messages using different methods:
 * 1. WhatsApp Business API Link (simple, frontend-only)
 * 2. Twilio WhatsApp API (requires backend)
 * 3. WhatsApp Business Cloud API (requires backend)
 */

export interface WhatsAppMessage {
  to: string; // Phone number in international format (e.g., "971501234567")
  message: string;
}

/**
 * Send WhatsApp message using WhatsApp Business API link
 * Opens WhatsApp in new tab/window with pre-filled message
 * 
 * @param phoneNumber - Phone number in international format without + or spaces
 * @param message - Message to send
 */
export const sendWhatsAppLink = (phoneNumber: string, message: string): void => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Send WhatsApp message via Twilio API (requires backend)
 * Call your backend endpoint that uses Twilio
 */
export const sendWhatsAppViaAPI = async (
  phoneNumber: string,
  message: string
): Promise<boolean> => {
  try {
    const response = await fetch('/api/whatsapp/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: phoneNumber,
        message: message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send WhatsApp message');
    }

    return true;
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return false;
  }
};

/**
 * Format appointment details for WhatsApp message
 */
export const formatAppointmentWhatsAppMessage = (
  appointmentData: {
    name?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    phone: string;
    service?: string;
    date: string;
    time: string;
    message?: string;
  },
  isPatientMessage: boolean = true
): string => {
  const patientName = appointmentData.name || 
    `${appointmentData.firstName || ''} ${appointmentData.lastName || ''}`.trim();
  
  const appointmentDate = new Date(appointmentData.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (isPatientMessage) {
    return (
      `Hello ${patientName},\n\n` +
      `Your appointment request has been received:\n\n` +
      `📅 Date: ${appointmentDate}\n` +
      `⏰ Time: ${appointmentData.time}\n` +
      `🏥 Service: ${appointmentData.service || 'General Consultation'}\n\n` +
      `We'll confirm your appointment shortly. Thank you!`
    );
  } else {
    // Message for doctor/clinic
    return (
      `🔔 New Appointment Request\n\n` +
      `Patient: ${patientName}\n` +
      `📧 Email: ${appointmentData.email}\n` +
      `📱 Phone: ${appointmentData.phone}\n` +
      `📅 Date: ${appointmentDate}\n` +
      `⏰ Time: ${appointmentData.time}\n` +
      `🏥 Service: ${appointmentData.service || 'General Consultation'}\n` +
      (appointmentData.message ? `💬 Notes: ${appointmentData.message}\n` : '') +
      `\nPlease confirm this appointment.`
    );
  }
};

/**
 * Send appointment notifications to both patient and doctor
 */
export const sendAppointmentWhatsAppNotifications = (
  appointmentData: {
    name?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    phone: string;
    service?: string;
    date: string;
    time: string;
    message?: string;
  },
  doctorPhone: string = "971501234567" // Replace with actual doctor WhatsApp number
): void => {
  // Send to patient
  const patientMessage = formatAppointmentWhatsAppMessage(appointmentData, true);
  sendWhatsAppLink(appointmentData.phone.replace(/\D/g, ''), patientMessage);

  // Send to doctor (if you have WhatsApp Business API or Twilio)
  // For now, this opens WhatsApp - in production, use API to send automatically
  const doctorMessage = formatAppointmentWhatsAppMessage(appointmentData, false);
  // Uncomment to open WhatsApp for doctor (or use API in backend)
  // sendWhatsAppLink(doctorPhone, doctorMessage);
};

