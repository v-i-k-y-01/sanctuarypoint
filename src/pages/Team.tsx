import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Meet Our Team"
            subtitle="Our dedicated healthcare professionals are committed to providing you with compassionate, expert care. Get to know the people who make Sanctuary Point Healthcare special."
          />
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-2xl gap-8 sm:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Our Commitment to You</h2>
            <p className="text-muted-foreground">
              Every member of our team shares a commitment to excellence, compassion, and patient-centered care. 
              We work together to ensure you receive the highest quality healthcare in a supportive, 
              welcoming environment.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
