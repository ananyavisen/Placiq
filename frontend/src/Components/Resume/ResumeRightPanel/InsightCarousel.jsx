import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InsightCard from "./InsightCard";
import { insights } from "./insightData";

export default function InsightCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % insights.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + insights.length) % insights.length
    );
  };

  // Show only 3 cards (front + 2 behind)
  const visibleCards = [
    insights[current],
    insights[(current + 1) % insights.length],
    insights[(current + 2) % insights.length],
  ];

  const stackStyles = [
    {
      className:
        "z-30 top-0 left-0 scale-100 opacity-100",
    },
    {
      className:
        "z-20 top-4 left-4 scale-[0.96] opacity-75",
    },
    {
      className:
        "z-10 top-8 left-8 scale-[0.92] opacity-45",
    },
  ];

  return (
    <>
      {/* Card Stack */}
      <div className="relative h-50">
        {[...visibleCards].reverse().map((card, reverseIndex) => {
          const index = visibleCards.length - 1 - reverseIndex;
          const style = stackStyles[index];

          return (
            <div
              key={card.id}
              className={`absolute w-full transition-all duration-500 ease-in-out ${style.className}`}
            >
              <InsightCard {...card} />
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={prev}
          className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {insights.map((_, index) => (
            <div
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-violet-600 w-6"
                  : "bg-violet-200"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </>
  );
}