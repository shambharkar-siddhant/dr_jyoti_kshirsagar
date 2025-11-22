import { Phone } from "lucide-react";
import { Sparkles, Smile, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import QuickBookingStrip from "@/components/QuickBookingStrip";
import doctorImg from '@assets/generated_images/Friendly_dentist_portrait_photo_40b2a4a5.png';
import before1 from '@assets/generated_images/before_1.png';
import after1 from '@assets/generated_images/after_1.png';
import before2 from '@assets/generated_images/before_2.png';
import after2 from '@assets/generated_images/after_2.png';
import before3 from '@assets/generated_images/Before_teeth_transformation_gaps_318c195f.png';
import after3 from '@assets/generated_images/After_teeth_transformation_no_gaps_83747cb8.png';
import avatar1 from '@assets/generated_images/Female_testimonial_avatar_photo_b6500cb3.png';
import avatar2 from '@assets/generated_images/Male_testimonial_avatar_photo_4aba068e.png';
import avatar3 from '@assets/generated_images/Young_female_testimonial_avatar_88a87ddb.png';

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
    icon: Shield,
  },
  {
    id: "cleaning",
    title: "Cleaning & Polishing",
    description: "Fresher breath, brighter smile",
    icon: Sparkles,
  },
];

const testimonials = [
  {
    name: "Feng Gao",
    text: "Dr. Jyoti Dentist here is very good and friendly. I am super happy to do treatment with her for my teeth. I highly recommend her for dental treatment.",
    avatar: avatar2,
  },
  {
    name: "Sanae B",
    text: "Dr. JYOTI I was so scared to do my front tooth Koz its a big filling I was readdly afraid but thanks to dr JYOTI I get a beautiful result. I am super happy!",
    avatar: avatar1,
  },
  {
    name: "Loz H",
    text: "Jyoti did Emaz Veneers for me and was very friendly and did very good job of my teeth no shaving and quick 2 visits, wuold recommend!",
    avatar: avatar3,
  },
];

export default function Home() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-cta');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section className="relative pt-12 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8" id="hero-section">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-5">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-4xl font-bold mb-4">
                Dr. Jyoti
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6">
                Cosmetic Dentist,  Expert Prosthodontist 
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Hollywood Smile</span>
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">No Shaving Teeth</span>
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Utlra Thin</span>
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Super Natural</span>
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Full Mouth Rehabilitation</span>
              </div>
              <a
                href="tel:+918149600848"
                className="inline-block"
                data-testid="button-hero-call"
              >
                <Button variant="outline" size="lg" className="group">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">WhatsApp Now - </span>
                  <span className="font-semibold">+91 98765 43210</span>
                </Button>
              </a>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="rounded-2xl overflow-hidden w-72 sm:w-96 md:w-[350px] lg:w-[400px]">
                <img
                  src={doctorImg}
                  alt="Dr. Jyoti"
                  className="w-full h-auto"
                  data-testid="img-doctor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-4 sm:pt-6 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <QuickBookingStrip />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-3">
            Smile Transformations
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Real results from our patients
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <BeforeAfterSlider
              beforeImage={before1}
              afterImage={after1}
              alt="Teeth whitening transformation"
            />
            <BeforeAfterSlider
              beforeImage={before2}
              afterImage={after2}
              alt="Alignment transformation"
            />
            <BeforeAfterSlider
              beforeImage={before3}
              afterImage={after3}
              alt="Gap closure transformation"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-3">
            Our Services
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Quality dental care tailored to you
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-3">
            Reviews from Patients
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Real experiences, real smiles
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
