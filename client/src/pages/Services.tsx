import { Sparkles, Smile, Shield, Zap, Users, Award, Hammer, Gem, ShieldAlert, Crown } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    id: "veneers",
    title: "Veneers",
    description: "Minimal prep, natural look",
    icon: Smile,
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Safe, fast, stunning results",
    icon: Zap,
  },
  {
    id: "crowns",
    title: "Crowns & Bridges",
    description: "Strong, lasting tooth restoration",
    icon: Crown,
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent solution for missing teeth",
    icon: Award,
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "Straighten teeth with modern braces",
    icon: Users,
  },
  {
    id: "cleaning",
    title: "Cleaning & Polishing",
    description: "Fresher breath, brighter smile",
    icon: Sparkles,
  },
  {
    id: "filling",
    title: "Tooth Filling",
    description: "Restore decayed or damaged teeth seamlessly",
    icon: Hammer, // or use Wrench / Tool / ShieldCheck depending on your icon set
  },
  {
    id: "crown",
    title: "Dental Crown",
    description: "Protect and restore broken or weak teeth",
    icon: Gem, // or use Shield / Layers / Building for a royal or protective feel
  },
  {
    id: "rootCanal",
    title: "Root Canal Treatment",
    description: "Save infected teeth with painless precision",
    icon: ShieldAlert, // or use HeartPulse / ShieldAlert / Stethoscope if available
  },
];

export default function Services() {
  return (
    <div>
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-4">
            Our Services
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your unique needs. Each treatment is designed with your comfort and results in mind.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
