import {
    ShieldCheck,
    TriangleAlert,
    Rocket,
    TrendingUp,
  } from "lucide-react";
  
  export const insights = [
    {
      id: 1,
      type: "success",
      title: "Biggest Strength",
      heading: "Excellent Project Section",
      description:
        "Your projects demonstrate practical experience and are presented in a clean, ATS-friendly manner.",
      icon: ShieldCheck,
    },
    {
      id: 2,
      type: "danger",
      title: "Highest Priority",
      heading: "Add Quantified Achievements",
      description:
        "Replace generic work descriptions with measurable impact using numbers, percentages and outcomes.",
      action: "Improve Now",
      icon: TriangleAlert,
    },
    {
      id: 3,
      type: "primary",
      title: "Quick Win",
      heading: "Add AWS & Docker Keywords",
      description:
        "Including missing technical keywords can immediately improve ATS matching.",
      icon: Rocket,
    },
    {
      id: 4,
      type: "info",
      title: "ATS Potential",
      heading: "78 → 89 (+11)",
      description:
        "Completing the suggested improvements could increase your ATS score by approximately 11 points.",
      icon: TrendingUp,
    },
  ];