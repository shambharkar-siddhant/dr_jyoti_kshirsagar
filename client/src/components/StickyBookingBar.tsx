import { useState, useEffect, useRef } from "react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroSection = document.getElementById('hero-section');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when hero section is not intersecting (completely scrolled past)
        setIsVisible(!entry.isIntersecting);
      },
      { 
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px' // Account for header and spacing
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMessage = `Hi! I'm ${name}.\n\n${message}\n\nMy WhatsApp: ${whatsapp}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={sentinelRef}
      className="sticky top-16 z-50 animate-in slide-in-from-top duration-300"
    >
      <div className="bg-card/95 backdrop-blur-sm border-b shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 max-w-5xl mx-auto">
            <span className="text-sm font-medium hidden lg:inline-block mr-2">Quick Booking:</span>
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              data-testid="input-sticky-name"
              className="bg-background h-9 text-sm"
            />
            <Input
              placeholder="+91 98765 43210"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              data-testid="input-sticky-whatsapp"
              className="bg-background h-9 text-sm"
            />
            <Input
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              data-testid="input-sticky-message"
              className="bg-background h-9 text-sm flex-1"
            />
            <Button type="submit" size="sm" className="whitespace-nowrap" data-testid="button-sticky-submit">
              <SiWhatsapp className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
