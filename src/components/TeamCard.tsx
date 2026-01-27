import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Link to={`/team/${member.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-square overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-semibold text-foreground">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
          {member.specialization && (
            <p className="mt-1 text-xs text-primary">{member.specialization}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
