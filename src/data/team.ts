import doctor1 from "@/assets/doctor1.jpg";
import doctor2 from "@/assets/doctor2.jpg";

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
    image: doctor1
  },
  {
    id: "dr-james-chen",
    name: "Dr. James Chen",
    role: "General Practitioner",
    specialization: "Internal Medicine",
    experience: "12 years",
    education: "MBBS, University of Melbourne; FRACP",
    bio: "Dr. Chen brings a wealth of experience in internal medicine to our practice. He is dedicated to evidence-based medicine and takes a thorough approach to diagnosing and treating complex medical conditions. He speaks fluent Mandarin and English.",
    image: doctor2
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};
