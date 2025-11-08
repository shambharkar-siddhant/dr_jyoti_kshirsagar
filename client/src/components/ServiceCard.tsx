import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ id, title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <Card className="hover-elevate active-elevate-2 cursor-pointer transition-all duration-200 h-full" data-testid={`card-service-${id}`}>
        <CardHeader className="pb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="font-heading text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
