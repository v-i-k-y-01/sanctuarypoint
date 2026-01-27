import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { PRACTICE_INFO, HOTDOC_URL } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Contact Us"
            subtitle="We'd love to hear from you. Reach out for appointments, inquiries, or any questions about our services."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(02) xxxx xxxx"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Quick Book Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Book an Appointment</h3>
                  <p className="mb-4 text-primary-foreground/90">
                    Skip the wait! Book your appointment online through HotDoc.
                  </p>
                  <Button asChild variant="secondary" size="lg">
                    <a href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Online Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-sm text-muted-foreground">
                        {PRACTICE_INFO.address.street}<br />
                        {PRACTICE_INFO.address.suburb}, {PRACTICE_INFO.address.state} {PRACTICE_INFO.address.postcode}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a
                        href={`tel:${PRACTICE_INFO.phone}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {PRACTICE_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a
                        href={`mailto:${PRACTICE_INFO.email}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {PRACTICE_INFO.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Opening Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Mon - Fri: {PRACTICE_INFO.hours.weekdays}<br />
                        Saturday: {PRACTICE_INFO.hours.saturday}<br />
                        Sunday: {PRACTICE_INFO.hours.sunday}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map */}
              <Card className="overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13086.799477844657!2d${PRACTICE_INFO.coordinates.lng}!3d${PRACTICE_INFO.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b149c0b2ad9d7e7%3A0x500eef17f210560!2sSanctuary%20Point%20NSW%202540!5e0!3m2!1sen!2sau!4v1697000000000!5m2!1sen!2sau`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sanctuary Point Location"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
