import { SiWhatsapp } from "react-icons/si";
import { Smile } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  whatsapp: z.string().min(1, "Please enter your WhatsApp number"),
  message: z.string().min(1, "Please enter a message"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function InlineBookingStrip() {
  const { toast } = useToast();
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      message: "",
    },
  });

  const onSubmit = (data: BookingFormData) => {
    const fullMessage = `Hi Dr! I'm ${data.name} and I'd like to book an appointment.\n\n${data.message}\n\nMy WhatsApp: ${data.whatsapp}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/918149600848?text=${encodedMessage}`, "_blank");
    
    toast({
      title: "Opening WhatsApp...",
      description: "We'll get back to you soon on WhatsApp!",
    });
    
    form.reset();
  };

  return (
    <section className="w-full bg-gradient-to-r from-background to-accent/20 border-t shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-center">
            {/* Left side - Friendly text */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <Smile className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold">
                  Ready for a brighter smile?
                </h2>
              </div>
              <p className="text-muted-foreground">
                Send us a quick message on WhatsApp — we'll confirm your slot soon!
              </p>
            </div>

            {/* Right side - Booking form */}
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              data-testid="input-inline-name"
                              className="bg-background"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+91 98765 43210"
                              data-testid="input-inline-whatsapp"
                              className="bg-background"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Message (e.g., preferred date/time, specific service)"
                            rows={3}
                            data-testid="input-inline-message"
                            className="bg-background resize-none"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto"
                    data-testid="button-inline-submit"
                  >
                    <SiWhatsapp className="w-5 h-5 mr-2" />
                    Book on WhatsApp
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
