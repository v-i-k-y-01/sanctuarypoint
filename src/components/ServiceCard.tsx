import { icons, Calendar, Stethoscope, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service } from "@/data/services";
import { HOTDOC_URL } from "@/lib/constants";

interface ServiceCardProps {
  service: Service;
  showBookButton?: boolean;
}

export function ServiceCard({ service, showBookButton = true }: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent: LucideIcon = icons[service.icon as keyof typeof icons] || Stethoscope;
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-2">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold">{service.title}</h3>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="mb-4 flex-1 text-sm text-muted-foreground">{service.description}</p>
        {showBookButton && (
          <Button asChild variant="outline" size="sm" className="mt-auto w-full">
            <a href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
