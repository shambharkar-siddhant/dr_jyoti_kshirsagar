import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import casualPhoto from '@assets/generated_images/Casual_woman_smiling_photo_5caf0855.png';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Do you accept walk-in appointments?",
    answer: "We prefer scheduled appointments to ensure minimal wait time, but we do accommodate walk-ins based on availability.",
  },
  {
    question: "Is the treatment painful?",
    answer: "We use the latest painless techniques and ensure you're comfortable throughout. Most procedures involve minimal to no discomfort.",
  },
  {
    question: "How long does a typical visit take?",
    answer: "A routine check-up takes about 30-45 minutes. Complex procedures are scheduled with adequate time and discussed in advance.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options for major treatments. Contact us to discuss your specific needs.",
  },
  {
    question: "How do I prepare for my first visit?",
    answer: "Just bring any previous dental records if you have them. We'll take care of the rest and make you feel at home.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-3">
          Common Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Quick answers to help you feel confident
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          <Accordion type="single" collapsible className="space-y-4 order-1 lg:order-1">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="order-2 lg:order-2">
            <div className="rounded-2xl overflow-hidden w-full max-w-xs sm:max-w-sm mx-auto lg:ml-auto">
              <img
                src={casualPhoto}
                alt="Happy patient"
                className="w-full h-auto"
                data-testid="img-faq-casual"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
