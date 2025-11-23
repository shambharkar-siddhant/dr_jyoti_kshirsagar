import { useRoute, Link } from "wouter";
import { ArrowLeft, Clock, Users, Heart, Hammer, ShieldAlert, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QuickBookingStrip from "@/components/QuickBookingStrip";
import { Sparkles, Smile, Shield, Zap, Users as UsersIcon, Award } from "lucide-react";

const servicesData: Record<string, {
  title: string;
  icon: any;
  description: string;
  whatItIs: string;
  whoItsFor: string[];
  duration: string;
  aftercare: string[];
}> = {
  cleaning: {
    title: "Cleaning & Polishing",
    icon: Sparkles,
    description: "Professional dental cleaning removes plaque, tartar, and stains for a healthier, brighter smile.",
    whatItIs: "Professional teeth cleaning and polishing involves removing hardened plaque (tartar) that can't be removed by regular brushing. This preventive treatment helps maintain healthy gums and prevents cavities.",
    whoItsFor: [
      "Everyone! Recommended every 6 months",
      "Those with gum sensitivity or bad breath",
      "Smokers or coffee/tea drinkers with stains",
    ],
    duration: "30-45 minutes",
    aftercare: [
      "Avoid very hot or cold foods for a few hours",
      "Maintain regular brushing and flossing",
      "Use recommended mouthwash",
      "Schedule your next cleaning in 6 months",
    ],
  },
  veneers: {
    title: "Veneers",
    icon: Smile,
    description: "Ultra-thin porcelain shells that create a flawless, natural-looking smile with minimal tooth preparation.",
    whatItIs: "Dental veneers are custom-made, thin shells of tooth-colored porcelain that cover the front surface of teeth. Our no-shave technique preserves your natural teeth while creating a stunning transformation.",
    whoItsFor: [
      "Anyone wanting a Hollywood smile",
      "Those with chipped or worn teeth",
      "People with gaps or minor misalignment",
      "Anyone seeking a dramatic smile makeover",
    ],
    duration: "2-3 visits over 2-3 weeks",
    aftercare: [
      "Avoid biting hard objects",
      "Maintain excellent oral hygiene",
      "Use a night guard if you grind teeth",
      "Regular dental check-ups every 6 months",
    ],
  },
  whitening: {
    title: "Teeth Whitening",
    icon: Zap,
    description: "Professional-grade whitening treatment that safely brightens your smile by several shades in just one visit.",
    whatItIs: "Our advanced whitening system uses a safe, professional-grade gel activated by LED light to remove deep stains and discoloration. Results are visible immediately and can last for years with proper care.",
    whoItsFor: [
      "Anyone with stained or yellowed teeth",
      "Coffee, tea, or wine drinkers",
      "Smokers looking to brighten their smile",
      "Special occasions (weddings, events)",
    ],
    duration: "60-90 minutes",
    aftercare: [
      "Avoid staining foods/drinks for 48 hours",
      "Use whitening toothpaste as recommended",
      "Avoid smoking for at least 48 hours",
      "Touch-up treatments every 6-12 months",
    ],
  },
  crowns: {
    title: "Crowns & Bridges",
    icon: Shield,
    description: "Durable, natural-looking restoration that protects damaged teeth and replaces missing ones.",
    whatItIs: "Dental crowns cap and protect damaged or weakened teeth, while bridges replace missing teeth by anchoring to adjacent teeth. Both are custom-made to match your natural teeth perfectly.",
    whoItsFor: [
      "Teeth with large fillings or cracks",
      "Root canal treated teeth needing protection",
      "Missing teeth (bridges)",
      "Severely worn or damaged teeth",
    ],
    duration: "2 visits over 2-3 weeks",
    aftercare: [
      "Avoid hard or sticky foods initially",
      "Brush and floss carefully around the crown",
      "Report any discomfort immediately",
      "Regular dental check-ups",
    ],
  },
  implants: {
    title: "Dental Implants",
    icon: Award,
    description: "Permanent tooth replacement that looks, feels, and functions just like your natural teeth.",
    whatItIs: "Dental implants are titanium posts surgically placed in the jawbone to serve as artificial tooth roots. They provide a permanent foundation for replacement teeth that won't slip or shift.",
    whoItsFor: [
      "Anyone missing one or more teeth",
      "Those seeking a permanent solution",
      "People with healthy gums and adequate bone",
      "Anyone wanting to avoid dentures",
    ],
    duration: "3-6 months (staged process)",
    aftercare: [
      "Follow post-surgery instructions carefully",
      "Maintain excellent oral hygiene",
      "Avoid smoking during healing",
      "Regular follow-up appointments",
    ],
  },
  orthodontics: {
    title: "Orthodontics",
    icon: UsersIcon,
    description: "Modern braces and aligners to straighten teeth and correct bite issues for all ages.",
    whatItIs: "Orthodontic treatment uses braces or clear aligners to gradually move teeth into proper position. We offer both traditional braces and modern invisible aligners depending on your needs and preferences.",
    whoItsFor: [
      "Children, teens, and adults",
      "Crooked or crowded teeth",
      "Bite problems (overbite, underbite)",
      "Anyone wanting a straighter smile",
    ],
    duration: "12-24 months (varies by case)",
    aftercare: [
      "Wear retainers as prescribed",
      "Maintain regular orthodontic check-ups",
      "Clean aligners/braces daily",
      "Avoid hard or sticky foods (braces)",
    ],
  },
  filling: {
    title: "Tooth Filling",
    icon: Hammer,
    description: "Restores teeth damaged by decay or minor fractures using durable, tooth-colored materials.",
    whatItIs: "A dental filling repairs cavities or small areas of tooth damage. The decayed portion is removed and replaced with a strong, tooth-colored composite material that blends seamlessly with your natural enamel.",
    whoItsFor: [
      "Patients with cavities or tooth decay",
      "Anyone with chipped or worn teeth",
      "Those needing to restore tooth function and appearance",
    ],
    duration: "Single visit (30-60 minutes per tooth)",
    aftercare: [
      "Avoid eating until numbness wears off",
      "Refrain from very hard or sticky foods for 24 hours",
      "Brush and floss regularly to prevent new decay",
      "Schedule dental cleanings every 6 months",
    ],
  },
  
  crown: {
    title: "Dental Crown",
    icon: Crown,
    description: "Protects and restores strength, shape, and appearance to damaged or root-treated teeth.",
    whatItIs: "A dental crown is a custom-made cap that covers a tooth to restore its structure and aesthetics. Made from porcelain, zirconia, or metal-ceramic, crowns protect weakened teeth and blend naturally with your smile.",
    whoItsFor: [
      "Teeth with large fillings or cracks",
      "Root-canal-treated teeth",
      "Severely worn or broken teeth",
      "Cosmetic restoration of discolored teeth",
    ],
    duration: "2 visits over 1-2 weeks",
    aftercare: [
      "Avoid biting on very hard foods or ice",
      "Maintain daily brushing and flossing",
      "Report any looseness or discomfort promptly",
      "Visit your dentist for regular check-ups",
    ],
  },
  
  rootCanal: {
    title: "Root Canal Treatment",
    icon: ShieldAlert,
    description: "Saves infected or deeply decayed teeth through painless cleaning and sealing of the inner root canals.",
    whatItIs: "Root canal therapy removes infected or inflamed pulp from inside the tooth, disinfects the canals, and seals them with a biocompatible material. The treated tooth is then restored with a crown for protection and function.",
    whoItsFor: [
      "Teeth with deep decay or infection",
      "Persistent tooth pain or sensitivity",
      "Swelling or abscess near the tooth",
      "Previously injured or fractured teeth",
    ],
    duration: "1-2 visits depending on complexity",
    aftercare: [
      "Avoid chewing hard foods until the crown is placed",
      "Maintain excellent oral hygiene",
      "Take prescribed medications if advised",
      "Follow up promptly for crown placement and reviews",
    ],
  },
  dentures: {
    title: "Dentures",
    icon: Smile,
    description: "Comfortable, natural-looking replacement for missing teeth that restores your smile, chewing ability, and confidence.",
    whatItIs: "Dentures are custom-made removable appliances designed to replace missing teeth and surrounding tissues. Depending on your needs, they can be full dentures (replacing all teeth) or partial dentures (replacing a few missing teeth). Modern dentures are lightweight, natural-looking, and designed to fit comfortably for daily use.",
    whoItsFor: [
      "Patients who have lost multiple or all teeth",
      "Those wanting an affordable tooth replacement option",
      "People unable to undergo implant surgery",
      "Patients seeking to improve chewing, speech, and facial support",
    ],
    duration: "2-3 visits over 1-2 weeks",
    aftercare: [
      "Remove and clean dentures daily",
      "Soak dentures overnight in recommended solution",
      "Avoid very hot foods initially",
      "Visit your dentist regularly for adjustments and relining",
    ],
  },

};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:id");
  const serviceId = params?.id || "";
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Service not found</h1>
          <Link href="/services">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div>
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link href="/services">
            <Button variant="ghost" className="mb-6" data-testid="button-back-services">
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Services
            </Button>
          </Link>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold">
                {service.title}
              </h1>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>

          <div className="grid gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-xl font-semibold mb-3">What It Is</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.whatItIs}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="w-5 h-5 text-primary" />
                  <h2 className="font-heading text-xl font-semibold">Who It's For</h2>
                </div>
                <ul className="space-y-2">
                  {service.whoItsFor.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <QuickBookingStrip serviceName={service.title} />
          
          <div className="mt-6 text-center">
            <Link href="/services">
              <Button variant="outline" data-testid="button-all-services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
