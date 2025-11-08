import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  whatsapp: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number (e.g., +919876543210)"),
  message: z.string().min(10, "Please provide more details about your appointment"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  serviceName?: string;
}

export default function BookingForm({ serviceName }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      message: serviceName ? `I'd like to book an appointment for ${serviceName}. ` : "",
    },
  });

  const openWhatsApp = (data: BookingFormData) => {
    const message = `Hi! I'm ${data.name}.\n\n${data.message}\n\nMy WhatsApp number: ${data.whatsapp}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      openWhatsApp(data);
      toast({
        title: "Opening WhatsApp",
        description: "We'll reply to your message soon!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickWhatsApp = () => {
    const message = serviceName
      ? `Hi! I'd like to book an appointment for ${serviceName}.`
      : "Hi! I'd like to book an appointment.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} data-testid="input-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} data-testid="input-whatsapp" />
                </FormControl>
                <FormMessage />
                <p className="text-xs text-muted-foreground">
                  Include country code (e.g., +91 for India)
                </p>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your preferred date and time, or any specific concerns..."
                    className="resize-none min-h-24"
                    {...field}
                    data-testid="input-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
            data-testid="button-submit-booking"
          >
            <SiWhatsapp className="w-5 h-5 mr-2" />
            {isSubmitting ? "Opening WhatsApp..." : "Book on WhatsApp"}
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        size="lg"
        onClick={quickWhatsApp}
        data-testid="button-quick-whatsapp"
      >
        <SiWhatsapp className="w-5 h-5 mr-2" />
        Quick WhatsApp Message
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        No spam. We reply fast on WhatsApp
      </p>
    </div>
  );
}
