export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  { id: "aboriginal-health", title: "Aboriginal Health", icon: "Heart", description: "Culturally sensitive healthcare for Aboriginal and Torres Strait Islander communities." },
  { id: "aged-care", title: "Aged Care", icon: "UserRound", description: "Comprehensive healthcare services for elderly patients." },
  { id: "allergies", title: "Allergies", icon: "Flower2", description: "Diagnosis and management of allergic conditions." },
  { id: "antenatal-care", title: "Antenatal Care", icon: "Baby", description: "Pregnancy care and monitoring for expectant mothers." },
  { id: "autoimmune-conditions", title: "Autoimmune Conditions", icon: "Shield", description: "Management of autoimmune disorders and related conditions." },
  { id: "bone-joint", title: "Bone and Joint Conditions", icon: "Bone", description: "Treatment for musculoskeletal issues and joint problems." },
  { id: "cardiovascular", title: "Cardiovascular Disease", icon: "HeartPulse", description: "Heart health monitoring and cardiovascular care." },
  { id: "care-elderly", title: "Care of the Elderly", icon: "HandHeart", description: "Specialized care tailored to the needs of older patients." },
  { id: "care-plan", title: "Care Plan", icon: "ClipboardList", description: "Personalized care plans for chronic condition management." },
  { id: "cervical-screening", title: "Cervical Screening", icon: "Microscope", description: "Regular cervical screening tests and follow-up care." },
  { id: "child-adolescent", title: "Child & Adolescent Health", icon: "Baby", description: "Healthcare services for children and teenagers." },
  { id: "chronic-disease", title: "Chronic Disease Management", icon: "Activity", description: "Ongoing management of long-term health conditions." },
  { id: "copd-asthma", title: "COPD and Asthma", icon: "Wind", description: "Respiratory condition management and treatment." },
  { id: "dementia", title: "Dementia", icon: "Brain", description: "Support and care for patients with dementia." },
  { id: "diabetes", title: "Diabetes Management", icon: "Droplet", description: "Comprehensive diabetes care and monitoring." },
  { id: "dietician", title: "Dietician", icon: "Apple", description: "Nutritional advice and dietary planning services." },
  { id: "family-planning", title: "Family Planning", icon: "Users", description: "Contraception and family planning consultations." },
  { id: "gynaecological", title: "Gynaecological Services", icon: "Stethoscope", description: "Women's reproductive health services." },
  { id: "health-assessments", title: "Health Assessments", icon: "ClipboardCheck", description: "Comprehensive health check-ups and assessments." },
  { id: "heart-disease", title: "Heart Disease", icon: "Heart", description: "Diagnosis and management of heart conditions." },
  { id: "immunisations", title: "Immunisations", icon: "Syringe", description: "Vaccinations for all ages and travel requirements." },
  { id: "implanon", title: "Implanon Insertion & Removal", icon: "Pill", description: "Contraceptive implant procedures." },
  { id: "indigenous-health", title: "Indigenous Health", icon: "Leaf", description: "Culturally appropriate healthcare for Indigenous Australians." },
  { id: "medical-education", title: "Medical Education", icon: "GraduationCap", description: "Health education and patient information services." },
  { id: "medical-termination", title: "Medical Termination of Pregnancy", icon: "Stethoscope", description: "Supportive and confidential pregnancy termination services." },
  { id: "medicals", title: "Medicals (Sports, Work, Pre-employment)", icon: "FileCheck", description: "Medical assessments for various purposes." },
  { id: "mens-health", title: "Men's Health", icon: "User", description: "Health services tailored to men's specific needs." },
  { id: "mental-health", title: "Mental Health", icon: "Brain", description: "Mental health support and counselling services." },
  { id: "minor-surgical", title: "Minor Surgical Excisions & Nail Avulsions", icon: "Scissors", description: "Minor surgical procedures performed on-site." },
  { id: "occupational-health", title: "Occupational Health", icon: "Briefcase", description: "Workplace health assessments and services." },
  { id: "palliative-care", title: "Palliative Care", icon: "HandHeart", description: "Compassionate end-of-life care and support." },
  { id: "pathology", title: "Pathology Lab – 4Cyte", icon: "TestTube", description: "On-site blood collection and pathology services." },
  { id: "podiatry", title: "Podiatry", icon: "Footprints", description: "Foot care and podiatry services." },
  { id: "private-medical", title: "Private Medical Consultations", icon: "Building2", description: "Consultations for BUPA, Allianz, NAB, Medibank and more." },
  { id: "psychologist", title: "Psychologist", icon: "MessageCircle", description: "Professional psychological support and therapy." },
  { id: "referrals", title: "Referrals", icon: "Send", description: "Specialist referrals and coordination of care." },
  { id: "rheumatological", title: "Rheumatological Conditions", icon: "Bone", description: "Management of arthritis and rheumatic diseases." },
  { id: "sexual-reproductive", title: "Sexual and Reproductive Health", icon: "HeartHandshake", description: "Comprehensive sexual health services." },
  { id: "shared-antenatal", title: "Shared Antenatal Care", icon: "Baby", description: "Collaborative pregnancy care with hospitals." },
  { id: "travel-vaccinations", title: "Travel Advice and Vaccinations", icon: "Plane", description: "Travel health consultations and required vaccinations." },
  { id: "weight-management", title: "Weight Management", icon: "Scale", description: "Weight loss programs and nutritional support." },
  { id: "women-children", title: "Women and Children's Health", icon: "Users", description: "Dedicated health services for women and children." },
  { id: "workers-compensation", title: "Workers Compensation", icon: "HardHat", description: "Work injury assessments and compensation claims." },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
