import QuickBookingStrip from "@/components/QuickBookingStrip";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Book() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Book an Appointment
          </h1>
          <p className="text-muted-foreground text-lg">
            Fill in your details and we'll reach you on WhatsApp within minutes ✨
          </p>
        </div>

        <QuickBookingStrip />

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Prefer to talk directly?
          </p>
          <a
            href="tel:+918149600848"
            data-testid="link-book-call"
          >
            <Button variant="outline" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Call Now - </span>
              <span className="font-semibold">+91 98765 43210</span>
            </Button>
          </a>
        </div>
      </div>
      <FloatingWhatsApp />
    </div>
  );
}
