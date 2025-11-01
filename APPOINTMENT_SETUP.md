# Appointment Booking & Notification Setup Guide

## Current Implementation

Currently, the appointment booking system only shows a toast notification when submitted. **No actual notifications are being sent** to patients or doctors via email or WhatsApp.

## How It Works

### Frontend Flow
1. Patient fills out appointment form (in `/appointment` page or footer quick booking)
2. Form validates input (email, phone format)
3. On submit, shows success toast
4. **Currently stops here** - no backend integration

## Setting Up Email Notifications

### Option 1: EmailJS (Frontend-Only, Easy Setup)

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for free account

2. **Create Email Service**
   - Go to Email Services → Add New Service
   - Choose Gmail, Outlook, or custom SMTP
   - Connect your email account

3. **Create Email Templates**
   - Create template for patient confirmation
   - Create template for doctor notification
   - Use variables: `{{patient_name}}`, `{{appointment_date}}`, etc.

4. **Get API Keys**
   - Service ID
   - Template ID (one for patient, one for doctor)
   - Public Key

5. **Add to Environment Variables**
   Create `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID_PATIENT=your_patient_template_id
   VITE_EMAILJS_TEMPLATE_ID_DOCTOR=your_doctor_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Install EmailJS Package**
   ```bash
   npm install @emailjs/browser
   ```

7. **Update Code**
   - Uncomment EmailJS code in `src/lib/email-service.ts`
   - Update `src/pages/Appointment.tsx` to call email service

### Option 2: Backend API (Recommended for Production)

1. **Create Backend Endpoint**
   ```javascript
   POST /api/appointments
   Body: {
     firstName, lastName, email, phone, service, date, time, message
   }
   ```

2. **Backend Implementation**
   Use services like:
   - **SendGrid** - Professional email service
   - **Resend** - Modern email API
   - **Nodemailer** - Node.js email sender
   - **AWS SES** - Amazon Simple Email Service

3. **Example Backend (Node.js/Express)**
   ```javascript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   app.post('/api/appointments', async (req, res) => {
     const { email, phone, date, time, ...rest } = req.body;
     
     // Send to patient
     await sgMail.send({
       to: email,
       from: 'contact@jyotikshirsagar.com',
       subject: 'Appointment Confirmation',
       html: formatPatientEmail(req.body)
     });
     
     // Send to doctor
     await sgMail.send({
       to: 'contact@jyotikshirsagar.com',
       from: 'noreply@jyotikshirsagar.com',
       subject: 'New Appointment Request',
       html: formatDoctorEmail(req.body)
     });
     
     res.json({ success: true });
   });
   ```

## Setting Up WhatsApp Notifications

### Option 1: WhatsApp Business API Link (Simple, Frontend-Only)

**Already implemented!** The code opens WhatsApp with pre-filled message.

**How it works:**
- Patient: Opens WhatsApp with their confirmation message
- Doctor: Would need to manually check WhatsApp Business number

**To configure doctor's phone number:**
1. Update `doctorPhone` in `src/lib/whatsapp-service.ts`
2. Format: International number without + or spaces (e.g., "971501234567" for UAE)

**Limitation:** Only opens WhatsApp app, doesn't automatically send messages to doctor.

### Option 2: Twilio WhatsApp API (Requires Backend)

1. **Create Twilio Account**
   - Go to https://www.twilio.com/
   - Sign up and get API credentials

2. **Get WhatsApp Sender Number**
   - Apply for WhatsApp Business Account via Twilio
   - Get approved sender number

3. **Backend Implementation**
   ```javascript
   const twilio = require('twilio');
   const client = twilio(accountSid, authToken);

   // Send to patient
   await client.messages.create({
     from: 'whatsapp:+14155238886', // Twilio WhatsApp number
     to: `whatsapp:+${patientPhone}`,
     body: patientMessage
   });

   // Send to doctor
   await client.messages.create({
     from: 'whatsapp:+14155238886',
     to: `whatsapp:+${doctorPhone}`,
     body: doctorMessage
   });
   ```

4. **Update Frontend**
   - Uncomment API call code in `src/lib/whatsapp-service.ts`
   - Create backend endpoint `/api/whatsapp/send`

### Option 3: WhatsApp Business Cloud API

1. **Set up Meta Business Account**
2. **Create WhatsApp Business App**
3. **Get Access Token**
4. **Use API to send messages**

## Implementation Steps

### Step 1: Choose Your Approach
- **Quick Start:** EmailJS for emails + WhatsApp links (already works)
- **Production:** Backend API with SendGrid/Resend + Twilio

### Step 2: Update Appointment Form

Update `src/pages/Appointment.tsx`:

```typescript
import { submitAppointment } from '@/lib/appointment-service';
import { sendAppointmentWhatsAppNotifications } from '@/lib/whatsapp-service';
import { sendAppointmentEmails } from '@/lib/email-service';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // ... validation ...

  // Submit appointment with notifications
  const result = await submitAppointment(formData);
  
  if (result.success) {
    // Send WhatsApp notifications
    sendAppointmentWhatsAppNotifications(formData);
    
    // Send email notifications
    await sendAppointmentEmails(formData);
    
    toast({
      title: "Appointment Request Received!",
      description: result.message,
    });
  } else {
    toast({
      title: "Error",
      description: result.message,
      variant: "destructive",
    });
  }
  
  // Reset form...
};
```

### Step 3: Configure Contact Information

Update in `src/lib/whatsapp-service.ts`:
- `doctorPhone`: Doctor's WhatsApp number (international format)

Update in `src/lib/email-service.ts`:
- `doctorEmail`: Doctor's email address

## Testing

1. **Test Email:**
   - Submit appointment form
   - Check patient's email inbox
   - Check doctor's email inbox

2. **Test WhatsApp:**
   - Submit appointment form
   - Should open WhatsApp with pre-filled message
   - For doctor notifications via API, check Twilio logs

## Current Status

✅ **Frontend forms ready**  
✅ **Email service code ready**  
✅ **WhatsApp service code ready**  
❌ **Need to configure EmailJS or backend API**  
❌ **Need to set up Twilio/WhatsApp Business API for automatic doctor notifications**

## Recommended Next Steps

1. Set up EmailJS account (free tier: 200 emails/month)
2. Configure EmailJS templates
3. Add environment variables
4. Uncomment EmailJS code in `email-service.ts`
5. For production, migrate to backend API with SendGrid/Resend
6. For WhatsApp, set up Twilio account and backend endpoint

## Environment Variables Needed

Create `.env` file in project root:

```env
# EmailJS (if using frontend solution)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID_PATIENT=your_patient_template_id
VITE_EMAILJS_TEMPLATE_ID_DOCTOR=your_doctor_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Doctor Contact Info
VITE_DOCTOR_EMAIL=contact@jyotikshirsagar.com
VITE_DOCTOR_PHONE=971501234567

# Backend API (if using)
VITE_API_URL=https://your-api.com
```

