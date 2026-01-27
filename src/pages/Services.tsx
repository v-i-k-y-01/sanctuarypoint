import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive healthcare services designed to meet the diverse needs of you and your family. From preventive care to specialized treatments, we're here for you at every stage of life."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Need a Service Not Listed?</h2>
            <p className="text-muted-foreground">
              Our team provides a wide range of healthcare services. If you don't see what you're looking for, 
              please contact us and we'll be happy to assist or provide an appropriate referral.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
