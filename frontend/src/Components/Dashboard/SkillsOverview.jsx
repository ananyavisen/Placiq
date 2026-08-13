export default function SkillsOverview() {
  const skills = [
    { name: "Data Structures", score: 76 },
    { name: "Algorithms", score: 68 },
    { name: "System Design", score: 54 },
    { name: "Aptitude", score: 80 },
    { name: "Communication", score: 60 },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 h-[300px]">
      
      <div className="flex items-center justify-between mb-7">
        <h2 className="text-lg font-semibold text-[#18245c]">
          Skills Overview
        </h2>

        <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
          View all
        </button>
      </div>

      <div className="space-y-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-4"
          >
            {/* Skill name */}
            <span className="w-[120px] shrink-0 text-sm text-slate-600">
              {skill.name}
            </span>

            {/* Progress bar */}
            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-500 rounded-full"
                style={{ width: `${skill.score}%` }}
              />
            </div>

            {/* Percentage */}
            <span className="w-10 text-right text-sm font-medium text-[#18245c]">
              {skill.score}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}