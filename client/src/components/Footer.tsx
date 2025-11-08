import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  123 Dental Street, Wellness Plaza<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@dentalglow.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  hello@dentalglow.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Clinic Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Saturday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-whatsapp"
              >
                <Button variant="outline" size="icon" className="hover-elevate">
                  <SiWhatsapp className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://instagram.com/dentalglow"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-instagram"
              >
                <Button variant="outline" size="icon" className="hover-elevate">
                  <SiInstagram className="w-5 h-5" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Connect with us on WhatsApp for quick appointments and queries
            </p>
          </div>
        </div>

        <div className="h-64 w-full rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.898410245436!2d72.82776931490089!3d19.01470198712353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec073968d3d%3A0x6a8e2e9b3e7d8e7e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
            data-testid="map-embed"
          />
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DentalGlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
