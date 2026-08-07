import {
  BookOpen,
  Code2,
  Cpu,
  Database,
  Network,
  Play,
  FileText,
  StickyNote,
  BookMarked,
  HelpCircle,
} from "lucide-react";

export const resourceCategories = [
  {
    id: "all",
    title: "All Resources",
    count: 1284,
    icon: BookOpen,
    iconGradient: "from-[#C4B5FD] to-[#8B5CF6]",
    active: true,
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    count: 356,
    icon: Code2,
    iconGradient: "from-[#FCA5A5] to-[#EF4444]",
  },
  {
    id: "os",
    title: "Operating System",
    count: 162,
    icon: Cpu,
    iconGradient: "from-[#C4B5FD] to-[#7C3AED]",
  },
  {
    id: "dbms",
    title: "DBMS",
    count: 118,
    icon: Database,
    iconGradient: "from-[#93C5FD] to-[#2563EB]",
  },
  {
    id: "cn",
    title: "Computer Networks",
    count: 98,
    icon: Network,
    iconGradient: "from-[#67E8F9] to-[#0891B2]",
  },
];

export const recommendedResources = [
  {
    id: 1,
    title: "Data Structures & Algorithms Complete Course",
    description:
      "Master DSA from basics to advanced with hands-on coding exercises and real interview questions.",
    type: "Video",
    typeBg: "bg-[#F3E8FF]",
    typeText: "text-[#7C3AED]",
    difficulty: "Intermediate",
    difficultyDot: "bg-[#2563EB]",
    meta: "12h 45m",
    metaIcon: "clock",
    icon: Play,
    iconGradient: "from-[#C4B5FD] to-[#8B5CF6]",
  },
  {
    id: 2,
    title: "Operating System Concepts",
    description:
      "Comprehensive guide covering processes, memory management, file systems, and synchronization.",
    type: "Article",
    typeBg: "bg-[#FCE7F3]",
    typeText: "text-[#DB2777]",
    difficulty: "Advanced",
    difficultyDot: "bg-[#DC2626]",
    meta: "28 pages",
    metaIcon: "file",
    icon: FileText,
    iconGradient: "from-[#F9A8D4] to-[#DB2777]",
  },
  {
    id: 3,
    title: "DBMS SQL Mastery Notes",
    description:
      "Complete SQL reference with query optimization techniques and database design patterns.",
    type: "Notes",
    typeBg: "bg-[#FFEDD5]",
    typeText: "text-[#EA580C]",
    difficulty: "Beginner",
    difficultyDot: "bg-[#16A34A]",
    meta: "45 pages",
    metaIcon: "file",
    icon: StickyNote,
    iconGradient: "from-[#FDBA74] to-[#EA580C]",
  },
  {
    id: 4,
    title: "Computer Networks Fundamentals",
    description:
      "Learn TCP/IP, routing protocols, network security, and OSI model with visual explanations.",
    type: "Video",
    typeBg: "bg-[#F3E8FF]",
    typeText: "text-[#7C3AED]",
    difficulty: "Intermediate",
    difficultyDot: "bg-[#2563EB]",
    meta: "8h 20m",
    metaIcon: "clock",
    icon: Play,
    iconGradient: "from-[#67E8F9] to-[#0891B2]",
  },
  {
    id: 5,
    title: "Cracking the Coding Interview",
    description:
      "The definitive guide to technical interviews with 189 programming questions and solutions.",
    type: "Book",
    typeBg: "bg-[#DBEAFE]",
    typeText: "text-[#2563EB]",
    difficulty: "Advanced",
    difficultyDot: "bg-[#DC2626]",
    meta: "687 pages",
    metaIcon: "file",
    icon: BookMarked,
    iconGradient: "from-[#93C5FD] to-[#2563EB]",
  },
  {
    id: 6,
    title: "Aptitude & Reasoning Practice Quiz",
    description:
      "Sharpen your quantitative aptitude and logical reasoning skills for placement tests.",
    type: "Quiz",
    typeBg: "bg-[#DCFCE7]",
    typeText: "text-[#16A34A]",
    difficulty: "Beginner",
    difficultyDot: "bg-[#16A34A]",
    meta: "30 Questions",
    metaIcon: "help",
    icon: HelpCircle,
    iconGradient: "from-[#86EFAC] to-[#16A34A]",
  },
];

export const continueLearning = [
  {
    id: 1,
    title: "Arrays & Strings in DSA",
    subtitle: "Continue Video",
    progress: 65,
    icon: Code2,
    iconGradient: "from-[#C4B5FD] to-[#8B5CF6]",
  },
  {
    id: 2,
    title: "Process Scheduling in OS",
    subtitle: "Continue Article",
    progress: 42,
    icon: Cpu,
    iconGradient: "from-[#F9A8D4] to-[#DB2777]",
  },
];

export const resourceTypeFilters = [
  "All",
  "Video",
  "Article",
  "Notes",
  "Book",
  "Quiz",
];

export const difficultyFilters = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export const durationOptions = [
  "Any Duration",
  "Under 30 mins",
  "30 mins - 2 hours",
  "2+ hours",
];
