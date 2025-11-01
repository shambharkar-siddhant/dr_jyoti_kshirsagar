# Appointment Booking Workflow

## How It Currently Works

### Current Status: ✅ **WhatsApp Notifications Active** | ⚠️ **Email Notifications Need Setup**

---

## Patient Booking Flow

### 1. **Form Submission** 
Patient fills out appointment form on:
- `/appointment` page (full form)
- Footer quick booking form (simplified)

### 2. **Validation**
- Email format validation
- Phone number format validation
- Required fields check

### 3. **Notification Process**

#### ✅ WhatsApp (Currently Active)
**What Happens:**
- On form submission, WhatsApp opens automatically in a new tab/window
- Pre-filled message with appointment details is shown
- Patient can send the message directly

**Message Format:**
```
Hello [Patient Name],

Your appointment request has been received:

📅 Date: [Formatted Date]
⏰ Time: [Time]
🏥 Service: [Service Type]

We'll confirm your appointment shortly. Thank you!
```

**Configuration:**
- Doctor's WhatsApp number is set in `src/lib/whatsapp-service.ts`
- Default: `"971501234567"` (UAE format)
- **Update this with your actual WhatsApp Business number**

#### ⚠️ Email (Needs Setup)
**Current Status:** Code ready, but requires backend API or EmailJS configuration

**Options:**
1. **EmailJS** (Frontend-only, free tier: 200 emails/month)
   - See `APPOINTMENT_SETUP.md` for setup instructions
   - Uncomment EmailJS code in `src/lib/email-service.ts`
   
2. **Backend API** (Recommended for production)
   - Create API endpoint: `POST /api/appointments`
   - Use SendGrid, Resend, or similar service
   - Update `src/lib/email-service.ts` to use your API

**Email Templates:**
- **Patient Email:** Confirmation with appointment details
- **Doctor Email:** Notification with patient info and appointment details

---

## Doctor Notification Flow

### Current Implementation

#### WhatsApp
- **Currently:** Opens WhatsApp link (manual check required)
- **Future (with Twilio):** Automatic message sent to doctor's WhatsApp

#### Email
- **Currently:** Not sending (needs setup)
- **After Setup:** Automatic email to doctor's email address

### Doctor Notification Message Format

**WhatsApp/Email contains:**
```
🔔 New Appointment Request

Patient: [Name]
📧 Email: [Email]
📱 Phone: [Phone]
📅 Date: [Date]
⏰ Time: [Time]
🏥 Service: [Service]
💬 Notes: [Additional Notes]
```

---

## Configuration Required

### 1. Update Doctor Contact Information

**In `src/lib/whatsapp-service.ts`:**
```typescript
// Line ~87
doctorPhone: string = "971501234567" // ← Update this
```

**In `src/lib/email-service.ts`:**
```typescript
// Line ~127
doctorEmail: string = "contact@jyotikshirsagar.com" // ← Update this
```

### 2. Set Up Email Service

**Quick Setup (EmailJS):**
1. Sign up at https://www.emailjs.com/
2. Create email service and templates
3. Add environment variables to `.env`
4. Install: `npm install @emailjs/browser`
5. Uncomment EmailJS code in `src/lib/email-service.ts`

**Production Setup (Backend API):**
1. Create backend API endpoint
2. Integrate SendGrid/Resend
3. Update API calls in `src/lib/email-service.ts`

### 3. Enable Email Notifications

**In `src/pages/Appointment.tsx`:**
Uncomment line 84:
```typescript
// const emailResult = await sendAppointmentEmails(formData);
```

---

## Technical Details

### Files Involved

1. **`src/pages/Appointment.tsx`**
   - Main appointment form
   - Handles form submission
   - Calls notification services

2. **`src/components/Footer.tsx`**
   - Quick booking form
   - Same notification flow

3. **`src/lib/appointment-service.ts`**
   - Main appointment submission logic
   - Validates data

4. **`src/lib/whatsapp-service.ts`**
   - WhatsApp message formatting
   - Opens WhatsApp with pre-filled message

5. **`src/lib/email-service.ts`**
   - Email template formatting
   - Email sending logic (needs configuration)

---

## Testing

### Test WhatsApp Flow:
1. Fill out appointment form
2. Submit form
3. WhatsApp should open automatically
4. Verify message is pre-filled correctly

### Test Email Flow (after setup):
1. Configure EmailJS or backend API
2. Submit appointment form
3. Check patient email inbox
4. Check doctor email inbox

---

## Future Enhancements

### Automatic Doctor Notifications
- Set up Twilio WhatsApp API
- Backend endpoint to send WhatsApp to doctor automatically
- No manual checking required

### Appointment Database
- Store appointments in database
- Track appointment status
- Send reminder notifications

### Calendar Integration
- Sync with Google Calendar
- Send calendar invites
- Check availability automatically

---

## Support

For setup assistance, refer to:
- `APPOINTMENT_SETUP.md` - Detailed setup instructions
- EmailJS Documentation: https://www.emailjs.com/docs/
- Twilio WhatsApp API: https://www.twilio.com/docs/whatsapp

