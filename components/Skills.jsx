import { Code2, Layers, Database, ShieldCheck, Wrench, Sparkles } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    tone: "from-lavender-100 to-lavender-50",
    iconTone: "text-lavender-600 bg-lavender-100",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Dart",
      "Java",
      "SQL",
      "PHP",
      "HTML",
      "CSS",
    ],
  },
  {
    icon: Layers,
    title: "Frameworks",
    tone: "from-blossom-100 to-blossom-50",
    iconTone: "text-blossom-600 bg-blossom-100",
    skills: ["React", "Next.js", "NestJS", "Node.js", "Flutter", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Databases",
    tone: "from-skyblue-100 to-skyblue-50",
    iconTone: "text-skyblue-600 bg-skyblue-100",
    skills: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    icon: Sparkles,
    title: "AI",
    tone: "from-violet-100 to-violet-50",
    iconTone: "text-violet-600 bg-violet-100",
    skills: ["CV Parsing", "Skill Extraction", "Matching Algorithms", "Computer Vision", "Speech Recognition"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    tone: "from-lavender-100 to-blossom-50",
    iconTone: "text-lavender-600 bg-lavender-100",
    skills: ["SQLMap", "Secure coding"],
  },
  {
    icon: Wrench,
    title: "Tools",
    tone: "from-skyblue-100 to-lavender-50",
    iconTone: "text-skyblue-600 bg-skyblue-100",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-gradient-to-b from-white to-lavender-50/60"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <span className="font-display font-semibold text-sm uppercase tracking-wide text-skyblue-600">
            Skills
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-ink-900">
            What I work with
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ icon: Icon, title, tone, iconTone, skills }) => (
            <div
              key={title}
              className={`rounded-4xl p-6 sm:p-7 shadow-soft bg-gradient-to-br ${tone} border border-white/70 hover:-translate-y-1 hover:shadow-glow-hover transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${iconTone}`}
              >
                <Icon size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink-900 mb-3">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm font-body font-medium text-ink-700 bg-white/70 rounded-full px-3 py-1.5 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
