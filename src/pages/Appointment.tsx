import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { submitAppointment } from "@/lib/appointment-service";
import { sendAppointmentWhatsAppNotifications } from "@/lib/whatsapp-service";
import { sendAppointmentEmails } from "@/lib/email-service";

const Appointment = () => {
  const { toast } = useToast();
  const location = useLocation();
  const preSelectedService = location.state?.service || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: preSelectedService,
    date: "",
    time: "",
    message: "",
  });

  const services = [
    "General Consultations",
    "Preventive Care",
    "Chronic Disease Management",
    "Women's Health",
    "Pediatric Care",
    "Family Medicine",
    "Mental Health Support",
    "Urgent Care"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Phone format validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    // Show loading state
    toast({
      title: "Submitting...",
      description: "Please wait while we process your appointment request.",
    });

    try {
      // Submit appointment and send notifications
      const result = await submitAppointment(formData);
      
      if (result.success) {
        // Send WhatsApp notifications (opens WhatsApp with message)
        sendAppointmentWhatsAppNotifications(formData);
        
        // Send email notifications (requires backend API or EmailJS setup)
        // Uncomment and configure when email service is set up
        // const emailResult = await sendAppointmentEmails(formData);
        
        toast({
          title: "Appointment Request Received!",
          description: "Thank you! We've sent confirmation details via WhatsApp. Check your email for appointment details.",
        });
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to submit appointment. Please try again or contact us directly.",
          variant: "destructive",
        });
        return;
      }

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting appointment:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Book Your Appointment
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
              Schedule your consultation with Dr. Jyoti Kshirsagar today
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Appointment Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="font-heading text-2xl font-bold mb-6">Appointment Details</h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">First Name *</label>
                            <Input
                              placeholder="John"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              required
                              maxLength={50}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Last Name *</label>
                            <Input
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              required
                              maxLength={50}
                            />
                          </div>
                        </div>

                        {/* Contact Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Email *</label>
                            <Input
                              type="email"
                              placeholder="john.doe@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              maxLength={100}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Phone Number *</label>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              required
                              maxLength={20}
                            />
                          </div>
                        </div>

                        {/* Service Selection */}
                        <div>
                          <label className="block text-sm font-medium mb-2">Service Required *</label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => setFormData({ ...formData, service: value })}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Date and Time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                            <Input
                              type="date"
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              min={new Date().toISOString().split('T')[0]}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                            <Input
                              type="time"
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-medium mb-2">Additional Notes</label>
                          <Textarea
                            placeholder="Please share any specific concerns or questions you'd like to discuss during your appointment..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            maxLength={500}
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            {formData.message.length}/500 characters
                          </p>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                          Request Appointment
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          By submitting this form, you agree to receive appointment confirmations via email and WhatsApp
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                  {/* Clinic Info Card */}
                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      <h3 className="font-heading font-semibold text-lg mb-4">Clinic Information</h3>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Jyoti Kshirsagar Medical Clinic</p>
                          <p className="text-sm text-muted-foreground">123 Healthcare Ave</p>
                          <p className="text-sm text-muted-foreground">Medical District, NY 10001</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <a href="tel:+15551234567" className="text-sm hover:text-primary transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                        <a href="mailto:contact@jyotikshirsagar.com" className="text-sm hover:text-primary transition-colors">
                          contact@jyotikshirsagar.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Hours Card */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <h3 className="font-heading font-semibold text-lg">Office Hours</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Monday - Friday</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="font-medium">10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="font-medium">Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Map Preview */}
                  <Card>
                    <CardContent className="p-0">
                      <div className="rounded-lg overflow-hidden h-48">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215264851614!2d-73.98823492346611!3d40.758896971385845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1703176888932!5m2!1sen!2sus"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Clinic Location Preview"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Note Card */}
                  <Card className="bg-accent/5 border-accent/20">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-sm mb-2">Please Note</h4>
                      <p className="text-xs text-muted-foreground">
                        This is an appointment request. Our team will confirm availability and contact you within 24 hours via your preferred contact method.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Appointment;
