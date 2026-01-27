export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization?: string;
  experience: string;
  education: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "dr-sarah-mitchell",
    name: "Dr. Sarah Mitchell",
    role: "General Practitioner",
    specialization: "Family Medicine",
    experience: "15+ years",
    education: "MBBS, University of Sydney; FRACGP",
    bio: "Dr. Mitchell is passionate about providing comprehensive family healthcare. With over 15 years of experience, she believes in building lasting relationships with her patients and their families. She has a special interest in preventive medicine and chronic disease management.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "dr-james-chen",
    name: "Dr. James Chen",
    role: "General Practitioner",
    specialization: "Internal Medicine",
    experience: "12 years",
    education: "MBBS, University of Melbourne; FRACP",
    bio: "Dr. Chen brings a wealth of experience in internal medicine to our practice. He is dedicated to evidence-based medicine and takes a thorough approach to diagnosing and treating complex medical conditions. He speaks fluent Mandarin and English.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "dr-emma-thompson",
    name: "Dr. Emma Thompson",
    role: "General Practitioner",
    specialization: "Women's Health",
    experience: "10 years",
    education: "MBBS, University of NSW; FRACGP, Diploma in Women's Health",
    bio: "Dr. Thompson is committed to providing compassionate care for women at all stages of life. From adolescent health to menopause management, she offers a safe and supportive environment for discussing sensitive health concerns.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "dr-michael-okonkwo",
    name: "Dr. Michael Okonkwo",
    role: "General Practitioner",
    specialization: "Pediatrics & Adolescent Health",
    experience: "8 years",
    education: "MBBS, University of Queensland; FRACGP",
    bio: "Dr. Okonkwo has a special interest in pediatric and adolescent medicine. He creates a welcoming environment for young patients and their families, focusing on developmental health, vaccinations, and childhood illness management.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    role: "General Practitioner",
    specialization: "Mental Health & Chronic Care",
    experience: "11 years",
    education: "MBBS, University of Adelaide; FRACGP, Certificate in Mental Health",
    bio: "Dr. Sharma takes a holistic approach to healthcare, with particular expertise in mental health and chronic disease management. She believes in empowering patients through education and collaborative care planning.",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "nurse-lisa-brown",
    name: "Lisa Brown",
    role: "Registered Nurse",
    specialization: "Clinical Nursing",
    experience: "18 years",
    education: "Bachelor of Nursing, University of Technology Sydney",
    bio: "Lisa is our senior practice nurse with extensive experience in clinical nursing, wound care, immunizations, and health assessments. She is known for her gentle manner and dedication to patient comfort.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "nurse-david-williams",
    name: "David Williams",
    role: "Registered Nurse",
    specialization: "Chronic Disease Management",
    experience: "9 years",
    education: "Bachelor of Nursing, Charles Sturt University",
    bio: "David specializes in chronic disease management programs, including diabetes education, cardiovascular health, and respiratory care. He works closely with our doctors to ensure coordinated patient care.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "manager-helen-patel",
    name: "Helen Patel",
    role: "Practice Manager",
    experience: "14 years",
    education: "Bachelor of Health Administration, Western Sydney University",
    bio: "Helen ensures the smooth operation of our practice, from appointment scheduling to quality improvement initiatives. She is committed to creating a welcoming environment for all patients and staff.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "reception-amy-nguyen",
    name: "Amy Nguyen",
    role: "Senior Receptionist",
    experience: "7 years",
    education: "Certificate III in Health Administration",
    bio: "Amy is often the first friendly face you'll see at Sanctuary Point. She manages appointments, inquiries, and ensures every patient feels welcome from the moment they walk through our doors.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "allied-mark-johnson",
    name: "Mark Johnson",
    role: "Physiotherapist",
    specialization: "Musculoskeletal Health",
    experience: "10 years",
    education: "Bachelor of Physiotherapy, University of Sydney",
    bio: "Mark provides comprehensive physiotherapy services, specializing in musculoskeletal conditions, post-surgical rehabilitation, and sports injuries. He believes in empowering patients through movement and exercise.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};
