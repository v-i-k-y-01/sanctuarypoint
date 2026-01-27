import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ResourceCard } from "@/components/ResourceCard";
import { getResourcesByCategory } from "@/data/resources";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, FileText, BookOpen } from "lucide-react";

const categories = [
  { id: "tips", label: "Health Tips", icon: Lightbulb },
  { id: "articles", label: "Articles", icon: FileText },
  { id: "guides", label: "Patient Guides", icon: BookOpen },
] as const;

export default function Resources() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Health Resources"
            subtitle="Empowering you with knowledge for better health. Explore our collection of health tips, educational articles, and practical guides to support your wellness journey."
          />
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tips" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {getResourcesByCategory(category.id).map((resource, index) => (
                    <div
                      key={resource.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ResourceCard resource={resource} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Health Information Disclaimer</h2>
            <p className="text-muted-foreground">
              The information provided in these resources is for general educational purposes only and 
              should not replace professional medical advice. Always consult with your healthcare provider 
              for personalized guidance about your health concerns.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
