import { Link } from "react-router-dom";
import { Calendar, Users, Heart, Shield, Stethoscope, ArrowRight, UserPlus, Phone, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { HOTDOC_URL, NEW_PATIENT_URL, PRACTICE_INFO, CURE_URL } from "@/lib/constants";
import heroImage from "@/assets/hero-clinic.jpg";

const highlights = [
  {
    icon: Stethoscope,
    title: "Experienced Doctors",
    description: "Our team of qualified GPs brings decades of combined experience in family medicine and specialized care.",
  },
  {
    icon: Heart,
    title: "Quality Care",
    description: "We're committed to providing evidence-based, compassionate healthcare tailored to your individual needs.",
  },
  {
    icon: Shield,
    title: "Patient-Centered",
    description: "Your health goals and concerns are at the heart of everything we do. We listen, we care, we act.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sanctuary Point General Practice - Welcoming clinic interior" 
            className="h-full w-full object-cover"
          />
          {/* Overlay for light mode */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 dark:from-background/90 dark:via-background/70 dark:to-background/40" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
              Welcoming new patients
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="text-primary">{PRACTICE_INFO.shortName}</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Compassionate, quality healthcare for you and your family. 
              Where every patient is treated like family.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <a href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-base">
                <a href={NEW_PATIENT_URL} target="_blank" rel="noopener noreferrer">
                  <UserPlus className="mr-2 h-5 w-5" />
                  New Patient? Register Here
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-background/80 backdrop-blur">
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              title="Your Health, Our Priority"
              subtitle="At Sanctuary Point General Practice & Quality Care Hospital, we believe in treating the whole person, not just the symptoms. Our dedicated team provides comprehensive healthcare services in a warm, welcoming environment."
            />
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/team">
                  <Users className="mr-2 h-4 w-4" />
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Us"
            subtitle="Experience healthcare that puts you first"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="border-0 bg-card shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <highlight.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  Ready to Take the Next Step?
                </h2>
                <p className="mb-6 text-primary-foreground/90">
                  Book an appointment online or give us a call. We're here to help with all your healthcare needs.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" variant="secondary">
                    <a href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Online
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    <a href={`tel:${PRACTICE_INFO.phone}`}>
                      Call {PRACTICE_INFO.phone}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
