export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "tips" | "articles" | "guides";
  readTime?: string;
  icon: string;
}

export const resources: Resource[] = [
  // Health Tips
  {
    id: "staying-active",
    title: "Staying Active at Any Age",
    description: "Simple exercises and activities to maintain mobility and fitness throughout your life. Learn how just 30 minutes a day can transform your health.",
    category: "tips",
    readTime: "3 min read",
    icon: "Activity"
  },
  {
    id: "healthy-eating",
    title: "Heart-Healthy Eating Habits",
    description: "Discover the Mediterranean diet principles and simple swaps that can reduce your risk of heart disease and improve overall wellbeing.",
    category: "tips",
    readTime: "4 min read",
    icon: "Apple"
  },
  {
    id: "sleep-hygiene",
    title: "Better Sleep, Better Health",
    description: "Practical tips for improving your sleep quality, from bedroom environment to bedtime routines that promote restful sleep.",
    category: "tips",
    readTime: "3 min read",
    icon: "Moon"
  },
  {
    id: "stress-management",
    title: "Managing Stress Effectively",
    description: "Evidence-based techniques for reducing stress and anxiety, including breathing exercises, mindfulness, and lifestyle adjustments.",
    category: "tips",
    readTime: "5 min read",
    icon: "Sparkles"
  },

  // Articles
  {
    id: "diabetes-prevention",
    title: "Understanding Type 2 Diabetes Prevention",
    description: "Learn about risk factors for type 2 diabetes and the lifestyle changes that can significantly reduce your chances of developing this condition.",
    category: "articles",
    readTime: "6 min read",
    icon: "FileText"
  },
  {
    id: "mental-health-awareness",
    title: "Mental Health: Breaking the Stigma",
    description: "An open discussion about mental health conditions, when to seek help, and how to support loved ones who may be struggling.",
    category: "articles",
    readTime: "7 min read",
    icon: "Brain"
  },
  {
    id: "childhood-immunisation",
    title: "The Importance of Childhood Immunisation",
    description: "Everything parents need to know about the Australian childhood vaccination schedule and why timely immunisation matters.",
    category: "articles",
    readTime: "5 min read",
    icon: "Syringe"
  },
  {
    id: "sun-safety",
    title: "Sun Safety in Australia",
    description: "Essential information about protecting yourself from harmful UV rays and reducing your skin cancer risk in our sunny climate.",
    category: "articles",
    readTime: "4 min read",
    icon: "Sun"
  },

  // Patient Guides
  {
    id: "first-visit",
    title: "Preparing for Your First Visit",
    description: "What to bring, what to expect, and how to make the most of your initial consultation at Sanctuary Point Healthcare.",
    category: "guides",
    readTime: "3 min read",
    icon: "ClipboardList"
  },
  {
    id: "telehealth-guide",
    title: "How to Use Telehealth Services",
    description: "Step-by-step guide to accessing our telehealth consultations, including technical requirements and tips for a successful virtual visit.",
    category: "guides",
    readTime: "4 min read",
    icon: "Video"
  },
  {
    id: "care-plan",
    title: "Understanding Your Care Plan",
    description: "A comprehensive guide to chronic disease management plans, including what's included, Medicare rebates, and how to get the most from your plan.",
    category: "guides",
    readTime: "5 min read",
    icon: "FileHeart"
  },
  {
    id: "referral-process",
    title: "The Referral Process Explained",
    description: "Everything you need to know about specialist referrals, from how to request one to what happens after your specialist appointment.",
    category: "guides",
    readTime: "3 min read",
    icon: "Share2"
  }
];

export const getResourcesByCategory = (category: "tips" | "articles" | "guides"): Resource[] => {
  return resources.filter(resource => resource.category === category);
};
