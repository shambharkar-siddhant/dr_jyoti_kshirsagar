import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Award, Users, Heart } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import clinicHero from "@/assets/clinic-hero.jpg";

const Home = () => {
  const testimonials = [
    {
      name: "Jennifer Thompson",
      rating: 5,
      text: "Dr. Jyoti Kshirsagar is incredibly thorough and caring. She takes the time to listen and explain everything clearly. Best doctor I've ever had!",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Professional, knowledgeable, and compassionate. The clinic is modern and comfortable. Highly recommend to anyone seeking quality healthcare.",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "I've been a patient for 5 years. Dr. Jyoti Kshirsagar's expertise and personalized approach to care has made a significant difference in my health journey.",
    },
    {
      name: "David Rodriguez",
      rating: 5,
      text: "Outstanding service from start to finish. The staff is friendly and efficient. Dr. Jyoti Kshirsagar truly cares about her patients' wellbeing.",
    },
  ];

  const stats = [
    { icon: Users, label: "Patients Served", value: "5,000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Heart, label: "Success Rate", value: "98%" },
    { icon: Star, label: "Patient Rating", value: "4.9/5" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Expert Medical Care You Can Trust
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-4">
                  Board-certified specialist with over 15 years of experience in comprehensive family medicine
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-8">
                  <span className="font-medium text-foreground">Jyoti Kshirsagar Medical Clinic</span> • Medical District, New York
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/appointment">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                      Book Appointment
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      View Services
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-slide-up">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={clinicHero}
                    alt="Modern medical clinic interior"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor Introduction */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Meet Dr. Jyoti Kshirsagar
                </h2>
                <p className="text-lg text-muted-foreground">
                  Your partner in health and wellness
                </p>
              </div>
              
              <div className="flex justify-center mb-12">
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={doctorPortrait}
                    alt="Dr. Jyoti Kshirsagar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center mb-12">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  With a passion for preventive care and patient education, Dr. Jyoti Kshirsagar brings over 15 years of clinical experience to every consultation. Her approach combines evidence-based medicine with compassionate, personalized care.
                </p>
                <Link to="/about">
                  <Button variant="outline">Learn More About Dr. Jyoti Kshirsagar</Button>
                </Link>
              </div>

              {/* Video Section */}
              <div className="rounded-2xl overflow-hidden shadow-xl bg-muted">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/kmjeMrjOjFA?si=-Hqshjoe9SJ6cy9q&autoplay=1&mute=1&loop=1&playlist=kmjeMrjOjFA"
                    title="Clinic Introduction Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Patients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Real experiences from real patients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                      "{testimonial.text}"
                    </p>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Schedule your consultation today and experience personalized, expert medical care
            </p>
            <Link to="/appointment">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
