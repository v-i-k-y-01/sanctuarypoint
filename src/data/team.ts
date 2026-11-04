import doctor1 from "@/assets/doctor1.jpg";
import doctor2 from "@/assets/doctor2.jpg";
import doctor3 from "@/assets/doctor3.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization?: string;
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
    education: "MBBS, FRACGP, MRCGP, DRCOG",
    bio: `Dr Suganya Velusamy MBBS FRACGP MRCGP DRCOG

Dr Suganya Velusamy is a dedicated caring general practitioner, who is committed to provide patient centred care for all. She graduated MBBS from India and then moved to UK in 2003 to further her career. She did her paediatric training for 6 years in UK before changing her career to general practice. She completed her postgraduate training MRCGP, at South Cumbria Vocational Training Scheme under Manchester Deanery in 2012.

Suganya has a holistic approach in providing patient centred care in all aspects of General practice. She is interested in teaching medical students and junior doctors in GP training. She was a trainer for Medical Students and junior doctors in UK.

She enjoys walking, meditation, travelling and spending time with her family and friends in her free time.`,
    image: doctor2
  },
  {
    id: "dr-revolution-shrestha",
    name: "Dr Revolution Shrestha",
    role: "General Practitioner",
    specialization: "General Practice",
    education: "Doctor of Medicine (MD), Membership of the Royal College of Physicians – International, Diploma in Infectious Diseases, American Board certification in Aesthetic Medicine",
    bio: `Dr Revolution Shrestha is a General Practitioner with clinical experience across Nepal, the Philippines, the UAE and Australia since 2018.

Dr Shrestha believes that effective healthcare begins with understanding *what is happening, why it is happening, and how best to address it*. He takes a holistic, patient-centred approach, recognising that health is influenced by much more than physical symptoms alone.

He believes good medicine goes beyond prescribing medications. It involves understanding each patient's circumstances, empowering them with knowledge, and considering lifestyle changes, psychological wellbeing, social circumstances and community support, alongside medication when appropriate.

His clinical interests include acute and chronic disease management, pain management, mental health, maternal health, children's and adolescent health, preventive healthcare, screening and immunisation. He also welcomes patients with a broad range of health concerns and enjoys the variety that general practice brings, caring for individuals and families at every stage of life.

For five years in the UAE, Dr Shrestha also served as a Basic Life Support (BLS) trainer and health educator, delivering free lifesaving training and health education to schools, workplaces, churches and local communities.

He values open communication, shared decision-making and building trusting, long-term relationships with his patients. His aim is to help every patient feel heard, understand their health, and work together towards the best possible outcomes.

*His approach is simple: understand the person, understand the problem, and find the right way forward together.*

Languages spoken: English, Nepali, Hindi, Filipino (Tagalog).`,
    image: doctor3
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined =>
  teamMembers.find(member => member.id === id);
