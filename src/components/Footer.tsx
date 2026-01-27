import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { PRACTICE_INFO, SOCIAL_LINKS, HOTDOC_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">SP</span>
              </div>
              <span className="font-semibold">{PRACTICE_INFO.shortName}</span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Providing compassionate, quality healthcare to the Sanctuary Point community and surrounding areas.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {PRACTICE_INFO.address.street}<br />
                  {PRACTICE_INFO.address.suburb}, {PRACTICE_INFO.address.state} {PRACTICE_INFO.address.postcode}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${PRACTICE_INFO.phone}`} className="hover:text-primary">
                  {PRACTICE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${PRACTICE_INFO.email}`} className="hover:text-primary">
                  {PRACTICE_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 font-semibold">Opening Hours</h3>
            <ul className="mb-4 space-y-2">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p>Mon - Fri: {PRACTICE_INFO.hours.weekdays}</p>
                  <p>Saturday: {PRACTICE_INFO.hours.saturday}</p>
                  <p>Sunday: {PRACTICE_INFO.hours.sunday}</p>
                </div>
              </li>
            </ul>
            <Button asChild size="sm">
              <a href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">
                Book Online
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {PRACTICE_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
