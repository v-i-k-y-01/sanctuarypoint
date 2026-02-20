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
    id: "dr-mahesh-ramalingam",
    name: "Dr. Mahesh Ramalingam",
    role: "General Practitioner",
    specialization: "General Practice",
    experience: "18+ years",
    education: "MBBS, FRACGP, MRCGP, DRCOG",
    bio: `Dr Mahesh Ramalingam MBBS FRACGP MRCGP DRCOG — Specialist in General Practice

Mahesh is a UK trained GP with 18 years of experience in the NHS (UK healthcare system). He qualified as a doctor in 1997 and has been a GP since 2006.

He practises patient-centred consultations and strives to explore the ideas, concerns and expectations of his patients and how those affect them.

He believes strongly in ethical and evidence-based medicine and has wide experience in all aspects of general practice. He has a passion for mental health across the lifespan and provides extensive chronic disease management and Indigenous health care.

Born in Tamil Nadu, India, he completed his MBBS at Madras Medical College. He moved to the United Kingdom in 2001 to further his career, working in various medical and surgical specialties before completing his post-graduate training in general practice with The South Cumbria GP Training (part of Manchester Deanery).

In the UK he was a trainer for medical students, junior doctors and GP trainees, and served as an appraiser for GPs. He has been working in the Illawarra since 2017.
`,
    image: doctor1
  },
  {
    id: "dr-suganya-velusamy",
    name: "Dr Suganya Velusamy",
    role: "General Practitioner",
    specialization: "General Practice",
    experience: "12 years",
    education: "MBBS, FRACGP, MRCGP, DRCOG",
    bio: `Dr Suganya Velusamy MBBS FRACGP MRCGP DRCOG

Dr Suganya Velusamy is a dedicated caring general practitioner, who is committed to provide patient centred care for all. She graduated MBBS from India and then moved to UK in 2003 to further her career. She did her paediatric training for 6 years in UK before changing her career to general practice. She completed her postgraduate training MRCGP, at South Cumbria Vocational Training Scheme under Manchester Deanery in 2012.

Suganya has a holistic approach in providing patient centred care in all aspects of General practice. She is interested in teaching medical students and junior doctors in GP training. She was a trainer for Medical Students and junior doctors in UK.

She enjoys walking, meditation, travelling and spending time with her family and friends in her free time.`,
    image: doctor2
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined =>
  teamMembers.find(member => member.id === id);