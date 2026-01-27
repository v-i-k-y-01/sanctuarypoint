import { icons, FileText, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Resource } from "@/data/resources";

interface ResourceCardProps {
  resource: Resource;
}

const categoryColors = {
  tips: "bg-healthcare-green-light text-healthcare-green",
  articles: "bg-healthcare-blue-light text-healthcare-blue",
  guides: "bg-healthcare-warm-light text-healthcare-warm",
};

const categoryLabels = {
  tips: "Health Tip",
  articles: "Article",
  guides: "Patient Guide",
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const IconComponent: LucideIcon = icons[resource.icon as keyof typeof icons] || FileText;
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-2">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className={categoryColors[resource.category]}>
            {categoryLabels[resource.category]}
          </Badge>
          {resource.readTime && (
            <span className="text-xs text-muted-foreground">{resource.readTime}</span>
          )}
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <IconComponent className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold leading-tight">{resource.title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{resource.description}</p>
      </CardContent>
    </Card>
  );
}
