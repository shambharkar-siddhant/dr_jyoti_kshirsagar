import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface QuickBookingStripProps {
  serviceName?: string;
}

export default function QuickBookingStrip({ serviceName }: QuickBookingStripProps) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState(serviceName ? `I'd like to book for ${serviceName}` : "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMessage = `Hi! I'm ${name}.\n\n${message}\n\nMy WhatsApp: ${whatsapp}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="bg-card rounded-2xl p-6 sm:p-8 border">
      <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-2 text-center">
        Book Your Appointment
      </h3>
      <p className="text-center text-muted-foreground text-sm mb-6">
        We'll reach you on WhatsApp within minutes ✨
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            data-testid="input-quick-name"
            className="bg-background flex-[2]"
          />
          <Input
            placeholder="Whatsapp Number"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
            data-testid="input-quick-whatsapp"
            className="bg-background flex-[2]"
          />
          <Input
            placeholder="Preferred time or service"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            data-testid="input-quick-message"
            className="bg-background flex-[2]"
          />
          <Button 
            type="submit" 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white whitespace-nowrap flex-shrink-0 w-auto px-4" 
            data-testid="button-quick-submit"
          >
            <SiWhatsapp className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Book Now</span>
            <span className="sm:hidden">Book</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
