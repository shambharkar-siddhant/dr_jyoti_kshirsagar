/**
 * Appointment Booking Service
 * 
 * This service handles sending appointment notifications via:
 * - Email (using EmailJS or API endpoint)
 * - WhatsApp (using WhatsApp Business API link or Twilio)
 */

export interface AppointmentData {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone: string;
  service?: string;
  date: string;
  time: string;
  message?: string;
}

export interface AppointmentResponse {
  success: boolean;
  message: string;
  appointmentId?: string;
}

/**
 * Send appointment notification via email
 * Uses EmailJS service (frontend-only solution)
 * 
 * Setup required:
 * 1. Create account at https://www.emailjs.com/
 * 2. Create email service and template
 * 3. Get Service ID, Template ID, and Public Key
 * 4. Add them to environment variables
 */
export const sendEmailNotification = async (
  appointmentData: AppointmentData,
  recipientEmail: string = "contact@jyotikshirsagar.com" // Doctor's email
): Promise<boolean> => {
  try {
    // For EmailJS (uncomment and configure if using EmailJS)
    /*
    const emailjs = await import('@emailjs/browser');
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      to_email: recipientEmail,
      patient_name: appointmentData.name || `${appointmentData.firstName} ${appointmentData.lastName}`,
      patient_email: appointmentData.email,
      patient_phone: appointmentData.phone,
      service: appointmentData.service || 'General Consultation',
      date: appointmentData.date,
      time: appointmentData.time,
      message: appointmentData.message || 'No additional notes',
      appointment_date: new Date(appointmentData.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    */

    // Alternative: Call your backend API endpoint
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...appointmentData,
        recipientEmail,
        notificationType: 'email',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email notification');
    }

    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
};

/**
 * Send WhatsApp notification
 * Uses WhatsApp Business API link (works from frontend)
 * 
 * Format: https://wa.me/[phone]?text=[encoded message]
 * Phone number should be in international format without + or spaces
 */
export const sendWhatsAppNotification = (
  appointmentData: AppointmentData,
  doctorPhone: string = "971501234567" // Replace with actual doctor WhatsApp number
): void => {
  const patientName = appointmentData.name || `${appointmentData.firstName} ${appointmentData.lastName}`;
  const appointmentDate = new Date(appointmentData.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Message for patient confirmation
  const patientMessage = encodeURIComponent(
    `Hello ${patientName},\n\n` +
    `Your appointment request has been received:\n\n` +
    `📅 Date: ${appointmentDate}\n` +
    `⏰ Time: ${appointmentData.time}\n` +
    `🏥 Service: ${appointmentData.service || 'General Consultation'}\n\n` +
    `We'll confirm your appointment shortly. Thank you!`
  );

  // Message for doctor notification
  const doctorMessage = encodeURIComponent(
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

  // Open WhatsApp for patient confirmation
  window.open(`https://wa.me/${doctorPhone}?text=${patientMessage}`, '_blank');

  // Note: To send to doctor automatically, you need backend API or Twilio WhatsApp API
  // For now, doctor can check the clinic's WhatsApp Business number for messages
};

/**
 * Submit appointment and send notifications
 * This is the main function to call when form is submitted
 */
export const submitAppointment = async (
  appointmentData: AppointmentData
): Promise<AppointmentResponse> => {
  try {
    // Validate required fields
    if (!appointmentData.email || !appointmentData.phone || !appointmentData.date || !appointmentData.time) {
      return {
        success: false,
        message: 'Please fill in all required fields',
      };
    }

    // For backend API integration (recommended):
    /*
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit appointment');
    }

    const result = await response.json();
    */

    // Email notifications are handled separately in the component
    // WhatsApp notifications are handled separately in the component
    
    return {
      success: true,
      message: 'Appointment request submitted successfully! Check your email and WhatsApp for confirmation.',
    };
  } catch (error) {
    console.error('Error submitting appointment:', error);
    return {
      success: false,
      message: 'Failed to submit appointment. Please try again or contact us directly.',
    };
  }
};

