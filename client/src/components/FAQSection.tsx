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
    question: "How to make an appointment with Dr.Jyoti?",
    answer: "The most effective way to schedule appointment with Dr.Jyoti is by sending WhatsApp message on +0000000000 number",
  },
  {
    question: "Do I need to send photo of my teeth?",
    answer: "Yes. You can definetly send picture of your teeth on whatsapp, it will be very healpful.",
  },
  {
    question: "How many sessions does it take to get veeners?",
    answer: "It can be done in only two sessions, the first one lasting 30 minutes and the second one 1 hour.",
  },
  {
    question: "How many days does it take to get veeners?",
    answer: "You may select a package based on the number of days, with options for 4-day, 5-day, 7-day, and 14-day stays",
  },
  {
    question: "What is price of veeners without shaving the teeth?",
    answer: "Text us at +00000000000 on WhatsApp to get a quote for non shaving veneers",
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
