import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/Layout";
import { getTeamMemberById } from "@/data/team";
import { HOTDOC_URL } from "@/lib/constants";

export default function TeamMember() {
  const { id } = useParams<{ id: string }>();
  const member = id ? getTeamMemberById(id) : undefined;

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link to="/team">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <Card className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-square w-full object-cover"
                />
              </Card>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-3">
                  {member.role}
                </Badge>
                <h1 className="mb-2 text-3xl font-bold md:text-4xl">{member.name}</h1>
                {member.specialization && (
                  <p className="text-lg text-primary">{member.specialization}</p>
                )}
              </div>

              {/* Quick Info Cards */}
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Experience</p>
                      <p className="font-semibold">{member.experience}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Education</p>
                      <p className="font-semibold text-sm">{member.education}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">About</h2>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>

              {/* Book Appointment CTA */}
              <Button asChild size="lg">
                <a href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment with {member.name.split(" ")[0]}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
