import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  avatar?: string;
}

export default function TestimonialCard({ name, text, avatar }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full" data-testid={`card-testimonial-${name.replace(/\s+/g, '-').toLowerCase()}`}>
      <CardContent className="pt-6">
        <Quote className="w-8 h-8 text-primary/20 mb-4" />
        <p className="text-sm text-foreground mb-4 leading-relaxed">{text}</p>
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">Patient</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
