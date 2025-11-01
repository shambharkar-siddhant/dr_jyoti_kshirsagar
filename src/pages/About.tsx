import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Heart, Shield, Users, Stethoscope } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "MD from Johns Hopkins University School of Medicine",
        "Residency in Family Medicine at Mayo Clinic",
        "Fellowship in Preventive Medicine"
      ]
    },
    {
      icon: Award,
      title: "Certifications",
      items: [
        "Board Certified Family Medicine Physician",
        "Advanced Cardiac Life Support (ACLS)",
        "Member, American Academy of Family Physicians"
      ]
    },
    {
      icon: Shield,
      title: "Specializations",
      items: [
        "Preventive Medicine & Wellness",
        "Chronic Disease Management",
        "Women's Health & Pediatrics"
      ]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every patient deserves to be heard, understood, and treated with dignity and respect."
    },
    {
      icon: Stethoscope,
      title: "Evidence-Based Medicine",
      description: "Combining the latest medical research with proven clinical practices for optimal outcomes."
    },
    {
      icon: Users,
      title: "Patient Education",
      description: "Empowering patients with knowledge to make informed decisions about their health."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Dr. Jyoti Kshirsagar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Dedicated to providing exceptional, personalized healthcare for over 15 years
              </p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="order-2 lg:order-1">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                    A Commitment to Excellence in Healthcare
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Dr. Jyoti Kshirsagar is a board-certified family medicine physician with over 15 years of clinical experience. After graduating from Johns Hopkins University School of Medicine with honors, she completed her residency at the prestigious Mayo Clinic, where she developed a passion for preventive medicine and patient-centered care.
                    </p>
                    
                    <p>
                      Throughout her career, Dr. Jyoti Kshirsagar has been committed to staying at the forefront of medical innovation while maintaining the timeless values of compassionate, personalized healthcare. She believes in treating the whole person, not just symptoms, and takes the time to understand each patient's unique health goals and concerns.
                    </p>
                    
                    <p>
                      In 2015, Dr. Jyoti Kshirsagar established Jyoti Kshirsagar Medical Clinic with a vision to create a healthcare environment where patients feel truly heard and cared for. The clinic has since become a trusted healthcare destination, serving over 5,000 patients and maintaining a 98% patient satisfaction rate.
                    </p>
                    
                    <p>
                      Dr. Jyoti Kshirsagar is an active member of the American Academy of Family Physicians and regularly participates in continuing medical education to ensure her patients receive the most current, evidence-based care. When she's not caring for patients, she volunteers at local community health initiatives and mentors medical students.
                    </p>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="sticky top-24">
                    <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
                      <img
                        src={doctorPortrait}
                        alt="Dr. Jyoti Kshirsagar"
                        className="w-full h-auto"
                      />
                    </div>
                    <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-none">
                      <CardContent className="pt-6">
                        <h3 className="font-heading text-xl font-semibold mb-4">Quick Facts</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 15+ years of clinical experience</li>
                          <li>• 5,000+ patients served</li>
                          <li>• 98% patient satisfaction rate</li>
                          <li>• Published researcher in preventive medicine</li>
                          <li>• Community health advocate</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Credentials & Expertise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <achievement.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold mb-4">
                        {achievement.title}
                      </h3>
                      <ul className="space-y-2">
                        {achievement.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                At Jyoti Kshirsagar Medical Clinic, our approach to healthcare is built on three core principles
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
                Recognition & Awards
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Top Family Medicine Physician 2023",
                  "Patient's Choice Award 2022",
                  "Excellence in Preventive Care 2021",
                  "Community Healthcare Leader 2020"
                ].map((award, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center p-6">
                      <Award className="w-8 h-8 text-gold mr-4 flex-shrink-0" />
                      <p className="text-foreground font-medium text-left">{award}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
