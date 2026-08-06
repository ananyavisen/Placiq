import {
    Code2,
    BriefcaseBusiness,
    FileBadge2,
    BarChart3,
  } from "lucide-react";
  
  import FeatureCard from "./FeatureCard";
  
  const features = [
    {
      title: "Coding Practice",
      subtitle: "DSA, system design & more",
      icon: <Code2 size={28} color="#8B5CF6" strokeWidth={2.2} />,
    },
    {
      title: "Mock Interviews",
      subtitle: "Be interview ready",
      icon: <BriefcaseBusiness size={28} color="#8B5CF6" strokeWidth={2.2} />,
    },
    {
      title: "Resume Builder",
      subtitle: "Create a standout profile",
      icon: <FileBadge2 size={28} color="#8B5CF6" strokeWidth={2.2} />,
    },
    {
      title: "Aptitude & CS Fundamentals",
      subtitle: "Strengthen your core",
      icon: <BarChart3 size={28} color="#8B5CF6" strokeWidth={2.2} />,
    },
  ];
  
  export default function FeatureList() {
    return (
      <div className="flex flex-col gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            subtitle={feature.subtitle}
            icon={feature.icon}
          />
        ))}
      </div>
    );
  }