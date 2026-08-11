import {
    KeyRound,
    BriefcaseBusiness,
    GraduationCap,
    Star,
  } from "lucide-react";
  
  export const improvements = [
    {
      icon: KeyRound,
      title: "Add More Keywords",
      level: "High",
      levelColor: "bg-red-100 text-red-500",
      description:
        'Add role-specific keywords like "Data Structures", "System Design", "REST API", "AWS" to improve ATS match.',
      buttonColor: "border-red-300 text-red-500",
    },
    {
      icon: BriefcaseBusiness,
      title: "Work Experience",
      level: "Medium",
      levelColor: "bg-orange-100 text-orange-500",
      description:
        "Use more quantifiable achievements and impact-driven bullet points.",
      buttonColor: "border-orange-300 text-orange-500",
    },
    {
      icon: GraduationCap,
      title: "Education Section",
      level: "Medium",
      levelColor: "bg-orange-100 text-orange-500",
      description:
        "Include relevant coursework, CGPA (if above 7) and certifications.",
      buttonColor: "border-orange-300 text-orange-500",
    },
    {
      icon: Star,
      title: "Skills Section",
      level: "Low",
      levelColor: "bg-violet-100 text-violet-500",
      description:
        "Categorize skills (Technical, Tools, Soft Skills) for better readability.",
      buttonColor: "border-violet-300 text-violet-500",
    },
  ];