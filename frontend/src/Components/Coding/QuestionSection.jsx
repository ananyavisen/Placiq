import FilterBar from "./FilterBar";
import QuestionRow from "./QuestionRow";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    title: "Maximum Average Subarray I",
    difficulty: "Easy",
    solved: true,
  },
  {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    solved: true,
  },
  {
    title: "Fruit Into Baskets",
    difficulty: "Medium",
    solved: true,
  },
  {
    title: "Longest Repeating Character Replacement",
    difficulty: "Medium",
    solved: false,
  },
  {
    title: "Minimum Window Substring",
    difficulty: "Hard",
    solved: false,
  },
  {
    title: "Find All Anagrams in a String",
    difficulty: "Medium",
    solved: false,
  },
  {
    title: "Number of Substrings Containing All Three Characters",
    difficulty: "Medium",
    solved: false,
  },
];

export default function QuestionSection() {
  return (
    <div className="mt-6 rounded-3xl border border-gray-200 bg-white/20 p-6">
      <FilterBar />

      <div className="mt-4 divide-y divide-gray-100">
        {questions.map((question) => (
          <QuestionRow key={question.title} {...question} />
        ))}
      </div>

      <button className="mt-6 mx-auto flex items-center gap-2 text-[#8B5CF6] font-medium hover:opacity-80">
        View More Questions
        <ChevronDown size={16} />
      </button>
    </div>
  );
}