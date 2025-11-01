/**
 * Email Service
 * 
 * Handles sending email notifications for appointments
 * Supports multiple backends: EmailJS (frontend), SendGrid, Resend, etc.
 */

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface AppointmentEmailData {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  recipientType: 'patient' | 'doctor';
}

/**
 * Send email using backend API
 * Recommended approach - set up a backend endpoint
 */
export const sendEmailViaAPI = async (emailData: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/api/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

/**
 * Send email using EmailJS (frontend-only solution)
 * Requires EmailJS account and configuration
 */
export const sendEmailViaEmailJS = async (
  serviceId: string,
  templateId: string,
  templateParams: Record<string, any>,
  publicKey: string
): Promise<boolean> => {
  try {
    // Dynamic import to avoid bundling EmailJS if not using it
    const emailjs = await import('@emailjs/browser');
    
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return true;
  } catch (error) {
    console.error('Error sending email via EmailJS:', error);
    return false;
  }
};

/**
 * Format appointment email HTML
 */
export const formatAppointmentEmailHTML = (data: AppointmentEmailData): string => {
  const appointmentDate = new Date(data.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (data.recipientType === 'patient') {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #667eea; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Appointment Request Received</h1>
            </div>
            <div class="content">
              <p>Hello ${data.patientName},</p>
              <p>Thank you for booking an appointment with Dr. Jyoti Kshirsagar!</p>
              
              <div class="info-box">
                <h3>Your Appointment Details:</h3>
                <p><strong>Date:</strong> ${appointmentDate}</p>
                <p><strong>Time:</strong> ${data.time}</p>
                <p><strong>Service:</strong> ${data.service}</p>
                ${data.message ? `<p><strong>Notes:</strong> ${data.message}</p>` : ''}
              </div>

              <p>We will contact you shortly to confirm your appointment. If you have any questions, please don't hesitate to reach out.</p>
              
              <p>Best regards,<br>Dr. Jyoti Kshirsagar Medical Clinic</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Dr. Jyoti Kshirsagar. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  } else {
    // Doctor notification
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #dc2626; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #dc2626; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 New Appointment Request</h1>
            </div>
            <div class="content">
              <div class="info-box">
                <h3>Patient Information:</h3>
                <p><strong>Name:</strong> ${data.patientName}</p>
                <p><strong>Email:</strong> ${data.patientEmail}</p>
                <p><strong>Phone:</strong> ${data.patientPhone}</p>
                <hr>
                <h3>Appointment Details:</h3>
                <p><strong>Date:</strong> ${appointmentDate}</p>
                <p><strong>Time:</strong> ${data.time}</p>
                <p><strong>Service:</strong> ${data.service}</p>
                ${data.message ? `<p><strong>Notes:</strong> ${data.message}</p>` : ''}
              </div>
              <p>Please confirm this appointment at your earliest convenience.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }
};

/**
 * Send appointment notification emails to patient and doctor
 */
export const sendAppointmentEmails = async (
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
  doctorEmail: string = "contact@jyotikshirsagar.com"
): Promise<{ patientSent: boolean; doctorSent: boolean }> => {
  const patientName = appointmentData.name || 
    `${appointmentData.firstName || ''} ${appointmentData.lastName || ''}`.trim();

  // Patient email
  const patientEmailData: AppointmentEmailData = {
    patientName,
    patientEmail: appointmentData.email,
    patientPhone: appointmentData.phone,
    service: appointmentData.service || 'General Consultation',
    date: appointmentData.date,
    time: appointmentData.time,
    message: appointmentData.message,
    recipientType: 'patient',
  };

  // Doctor email
  const doctorEmailData: AppointmentEmailData = {
    ...patientEmailData,
    recipientType: 'doctor',
  };

  // Send emails via API (recommended)
  const patientEmailSent = await sendEmailViaAPI({
    to: appointmentData.email,
    subject: 'Appointment Request Received - Dr. Jyoti Kshirsagar',
    html: formatAppointmentEmailHTML(patientEmailData),
  });

  const doctorEmailSent = await sendEmailViaAPI({
    to: doctorEmail,
    subject: `New Appointment Request - ${patientName}`,
    html: formatAppointmentEmailHTML(doctorEmailData),
  });

  // Alternative: If using EmailJS, uncomment and configure:
  /*
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const patientEmailSent = await sendEmailViaEmailJS(
    serviceId,
    templateId,
    {
      to_email: appointmentData.email,
      patient_name: patientName,
      appointment_date: appointmentDate,
      appointment_time: appointmentData.time,
      service: appointmentData.service || 'General Consultation',
    },
    publicKey
  );
  */

  return {
    patientSent: patientEmailSent,
    doctorSent: doctorEmailSent,
  };
};

