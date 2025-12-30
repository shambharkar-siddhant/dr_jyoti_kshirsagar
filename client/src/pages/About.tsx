import { Heart, Coffee, Book, Smile } from "lucide-react";
import QuickBookingStrip from "@/components/QuickBookingStrip";
import doctorImg from '@assets/generated_images/about_profile.png';
import clinicImg from '@assets/generated_images/Friendly_clinic_interior_479a0f47.png';
import patientImg from '@assets/generated_images/Dentist_with_patient_interaction_cf9e06cf.png';
import equipmentImg from '@assets/generated_images/Modern_dental_equipment_da10c83b.png';
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function About() {
  return (
    <div>
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-teal-500">
            Crafting Smiles with Science and Soul ❤️
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="rounded-2xl overflow-hidden  h-full md:h-full">
              <img
                src={doctorImg}
                alt="Dr. Jyoti"
                className="w-full h-full object-cover"
                data-testid="img-about-doctor"
              />
            </div>
            <div className="space-y-4 h-full flex flex-col justify-center">
              <p className="text-base leading-relaxed">
              Hi, I'm Dr. Jyoti Kshirsagar, a Specialist Prosthodontist and Cosmetic Dentist with over 15 years of experience helping people fall in love with their smiles. I specialize in veneers, smile design, implants, and full-mouth rehabilitation, combining precision, aesthetics, and comfort in every treatment.
              </p>
              <p className="text-base leading-relaxed">
              I completed my Bachelor's in Dentistry in 2009 and later earned my Master's in Prosthodontics and Implantology in 2017—a field that allows me to blend science and artistry every single day. My passion for advanced cosmetic dentistry keeps me learning through international dental conferences, research, and publications.
              </p>
              <p className="text-base leading-relaxed">
              I believe every smile is unique, and so is every patient. My goal is to make your dental journey relaxed, transparent, and rewarding—from simple preventive care to complete smile makeovers, all in a calm, welcoming environment where you'll always feel at ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            What You Can Expect
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            How we do things at DazzlingSmile
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Zero Pain Philosophy
                    </h3>
                    <p className="text-muted-foreground">
                      I use the latest techniques to make sure you're comfortable. Most of my patients are surprised at how painless everything is!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Coffee className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Relaxed Atmosphere
                    </h3>
                    <p className="text-muted-foreground">
                      No sterile hospital vibes here. We've designed the clinic to feel warm and welcoming – like visiting a friend's living room (but cleaner!).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Book className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Honest Conversations
                    </h3>
                    <p className="text-muted-foreground">
                      I'll explain everything in plain language and only recommend what you actually need. Your trust means everything to me.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Smile className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Natural-Looking Results
                    </h3>
                    <p className="text-muted-foreground">
                      My goal? Creating smiles that look so natural, people will think you were born with them. No "obviously fake" veneers here!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md">
              <img
                src={equipmentImg}
                alt="Modern equipment"
                className="w-full h-auto rounded-2xl object-cover"
                data-testid="img-equipment"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Let's Chat About Your Smile
            </h2>
          </div>
          <QuickBookingStrip />
        </div>
      </section>
      <FloatingWhatsApp />
    </div>
  );
}
