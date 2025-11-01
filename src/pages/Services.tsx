import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Stethoscope, Heart, Activity, Baby, Users, Brain, Shield, Clock } from "lucide-react";
import serviceConsultation from "@/assets/service-consultation.jpg";
import servicePreventive from "@/assets/service-preventive.jpg";
import serviceChronic from "@/assets/service-chronic.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Consultations",
      shortDesc: "Comprehensive health assessments and diagnoses",
      image: serviceConsultation,
      longDesc: "Our general consultation services provide thorough health evaluations for patients of all ages. Dr. Mitchell takes the time to understand your health concerns, review your medical history, and perform comprehensive physical examinations.",
      benefits: [
        "Detailed health assessments",
        "Personalized treatment plans",
        "Same-day and next-day appointments available",
        "Follow-up care and monitoring"
      ],
      duration: "30-60 minutes",
      preparation: "Bring any relevant medical records, current medications list, and insurance information"
    },
    {
      icon: Shield,
      title: "Preventive Care",
      shortDesc: "Regular screenings and health maintenance",
      image: servicePreventive,
      longDesc: "Prevention is the foundation of good health. Our preventive care services include annual physicals, health screenings, vaccinations, and lifestyle counseling to help you maintain optimal health and catch potential issues early.",
      benefits: [
        "Annual wellness examinations",
        "Age-appropriate health screenings",
        "Vaccination and immunization services",
        "Nutrition and lifestyle counseling"
      ],
      duration: "45-60 minutes",
      preparation: "Schedule annual visits in advance. Fasting may be required for certain blood tests."
    },
    {
      icon: Activity,
      title: "Chronic Disease Management",
      shortDesc: "Ongoing care for diabetes, hypertension, and more",
      image: serviceChronic,
      longDesc: "Managing chronic conditions requires consistent care and monitoring. We provide comprehensive management plans for conditions such as diabetes, hypertension, asthma, and heart disease with regular follow-ups and treatment adjustments.",
      benefits: [
        "Personalized management plans",
        "Regular monitoring and adjustments",
        "Medication management",
        "Patient education and self-care strategies"
      ],
      duration: "30-45 minutes per visit",
      preparation: "Keep a health diary tracking symptoms, medications, and daily measurements (blood pressure, glucose levels, etc.)"
    },
    {
      icon: Heart,
      title: "Women's Health",
      shortDesc: "Comprehensive care for women at all life stages",
      longDesc: "From adolescence through menopause and beyond, we provide specialized care addressing women's unique health needs including reproductive health, hormonal balance, and preventive screenings.",
      benefits: [
        "Annual gynecological exams",
        "Contraception counseling",
        "Menopause management",
        "Breast and cervical cancer screenings"
      ],
      duration: "30-60 minutes",
      preparation: "Schedule exams when not menstruating. Bring list of current medications and supplements."
    },
    {
      icon: Baby,
      title: "Pediatric Care",
      shortDesc: "Expert healthcare for infants, children, and adolescents",
      longDesc: "We provide comprehensive pediatric services including well-child visits, vaccinations, developmental assessments, and treatment of childhood illnesses in a comfortable, child-friendly environment.",
      benefits: [
        "Well-child checkups and vaccinations",
        "Growth and development monitoring",
        "Treatment of acute and chronic conditions",
        "Parenting guidance and support"
      ],
      duration: "20-45 minutes",
      preparation: "Bring immunization records and any concerns about development or behavior"
    },
    {
      icon: Users,
      title: "Family Medicine",
      shortDesc: "Coordinated care for the entire family",
      longDesc: "Simplify your family's healthcare with one trusted physician who understands your family's unique health history and needs. We provide care for all ages, from newborns to seniors.",
      benefits: [
        "Continuity of care across generations",
        "Coordinated health management",
        "Family health planning",
        "Convenient scheduling for multiple family members"
      ],
      duration: "Varies by service",
      preparation: "Maintain updated family health history and share relevant information across family members"
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      shortDesc: "Addressing emotional and psychological wellbeing",
      longDesc: "Mental health is integral to overall wellness. We provide screening, counseling, and treatment for common mental health concerns including anxiety, depression, and stress management.",
      benefits: [
        "Mental health screenings",
        "Counseling and support",
        "Medication management when appropriate",
        "Referrals to specialized care when needed"
      ],
      duration: "30-60 minutes",
      preparation: "Be prepared to discuss symptoms, triggers, and how conditions affect daily life"
    },
    {
      icon: Clock,
      title: "Urgent Care",
      shortDesc: "Same-day appointments for acute concerns",
      longDesc: "When you need medical attention quickly but it's not an emergency, our urgent care services provide timely treatment for minor injuries, infections, and acute illnesses.",
      benefits: [
        "Same-day appointments",
        "Treatment for minor injuries and illnesses",
        "On-site diagnostic services",
        "Extended hours availability"
      ],
      duration: "15-30 minutes",
      preparation: "Call ahead to ensure availability. Bring insurance information and ID."
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
                Comprehensive Medical Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Expert healthcare tailored to your needs, from prevention to specialized treatment
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Dialog key={index}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.shortDesc}</p>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </DialogTrigger>
                    </CardContent>
                  </Card>

                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-heading flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span>{service.title}</span>
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        {service.shortDesc}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 mt-4">
                      {service.image && (
                        <div className="rounded-lg overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}

                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-2">Overview</h4>
                        <p className="text-muted-foreground">{service.longDesc}</p>
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-3">What's Included</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-accent mr-2">✓</span>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h5 className="font-semibold text-sm mb-1">Duration</h5>
                          <p className="text-muted-foreground text-sm">{service.duration}</p>
                        </div>
                        <div className="bg-secondary p-4 rounded-lg">
                          <h5 className="font-semibold text-sm mb-1">Preparation</h5>
                          <p className="text-muted-foreground text-sm">{service.preparation}</p>
                        </div>
                      </div>

                      <Link to="/appointment" state={{ service: service.title }}>
                        <Button className="w-full bg-accent hover:bg-accent/90">
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a consultation and we'll work together to determine the best care plan for you
            </p>
            <Link to="/appointment">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
