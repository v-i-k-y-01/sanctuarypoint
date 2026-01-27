export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export const services: Service[] = [
  {
    id: "general-consultation",
    title: "General Consultation",
    description: "Comprehensive health assessments and consultations for all ages. Our experienced doctors take time to listen, diagnose, and create personalized treatment plans.",
    icon: "Stethoscope",
    features: ["Same-day appointments available", "Extended consultations", "Telehealth options"]
  },
  {
    id: "preventive-care",
    title: "Preventive Care",
    description: "Stay ahead of health issues with regular check-ups, health screenings, and personalized prevention strategies tailored to your age and risk factors.",
    icon: "Shield",
    features: ["Health assessments", "Cancer screenings", "Heart health checks"]
  },
  {
    id: "chronic-care",
    title: "Chronic Care Management",
    description: "Ongoing support for managing chronic conditions including diabetes, heart disease, asthma, and arthritis with comprehensive care plans.",
    icon: "HeartPulse",
    features: ["Care coordination", "Regular monitoring", "Lifestyle coaching"]
  },
  {
    id: "womens-health",
    title: "Women's Health",
    description: "Dedicated services for women's health needs including reproductive health, pregnancy care, menopause management, and cervical screening.",
    icon: "Heart",
    features: ["Pap smears", "Pregnancy care", "Contraception advice"]
  },
  {
    id: "mens-health",
    title: "Men's Health",
    description: "Specialized care addressing men's health concerns including prostate health, cardiovascular screening, and mental health support.",
    icon: "User",
    features: ["Prostate checks", "Heart health", "Mental wellness"]
  },
  {
    id: "pediatrics",
    title: "Pediatric Care",
    description: "Gentle, comprehensive healthcare for infants, children, and adolescents including developmental assessments, immunizations, and illness management.",
    icon: "Baby",
    features: ["Immunizations", "Growth monitoring", "Developmental checks"]
  },
  {
    id: "mental-health",
    title: "Mental Health",
    description: "Compassionate mental health support including counseling, mental health care plans, and referrals to psychologists and psychiatrists.",
    icon: "Brain",
    features: ["Mental health plans", "Counseling", "Crisis support referrals"]
  },
  {
    id: "diagnostics",
    title: "Diagnostics & Pathology",
    description: "On-site pathology collection and referrals for diagnostic imaging to ensure quick and accurate diagnosis of health conditions.",
    icon: "Microscope",
    features: ["Blood tests", "Imaging referrals", "Quick results"]
  },
  {
    id: "vaccinations",
    title: "Vaccinations & Immunizations",
    description: "Full range of vaccinations for all ages including childhood immunizations, flu shots, travel vaccines, and COVID-19 boosters.",
    icon: "Syringe",
    features: ["Childhood vaccines", "Travel medicine", "Flu shots"]
  },
  {
    id: "skin-checks",
    title: "Skin Checks",
    description: "Thorough skin cancer screenings and mole checks using dermoscopy. Early detection is key to successful treatment of skin cancers.",
    icon: "Scan",
    features: ["Full body checks", "Mole mapping", "Early detection"]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
