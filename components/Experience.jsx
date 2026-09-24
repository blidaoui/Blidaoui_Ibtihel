import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack & AI Developer Intern",
    company: "Softavera",
    period: "09/2026 – Present",
    location: "Golâa, Douz, Tunisia",
    bullets: [
      "Building an AI-powered recruitment web platform: React interface, Node.js/Express REST API, PostgreSQL database and a separate AI service",
      "Designed the matching pipeline: CV parsing, skill extraction, then candidate-to-offer matching",
      "Set up the application architecture (interface / API / AI service separation) and Google-based authentication",
    ],
    tone: "from-blossom-50 to-white",
    accent: "bg-blossom-100 text-blossom-600",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "AURES Group",
    period: "02/2024 – 05/2024",
    location: "Golâa, Douz, Tunisia",
    bullets: [
      "Designed and built a full-stack click-and-collect restaurant ordering system with Next.js and NestJS",
      "Implemented secure online payment and real-time delivery tracking",
      "Added a Python chatbot to reduce customer friction and support order flow",
      "Collaborated in Agile sprints to improve checkout usability and overall experience",
    ],
    tone: "from-lavender-50 to-white",
    accent: "bg-lavender-100 text-lavender-600",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "AURES Group",
    period: "07/2023 – 08/2023",
    location: "Golâa, Douz, Tunisia",
    bullets: [
      "Built responsive React + Node.js applications with REST APIs",
      "Delivered UI components and backend features for internal projects",
      "Participated in code reviews and Agile ceremonies to improve quality",
    ],
    tone: "from-skyblue-50 to-white",
    accent: "bg-skyblue-100 text-skyblue-600",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <span className="font-display font-semibold text-sm uppercase tracking-wide text-lavender-600">
            Experience
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-ink-900">
            Work & internships
          </h2>
        </div>

        <div className="relative border-l-2 border-lavender-200 ml-6 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.period} className="relative pl-10">
              <span className={`absolute -left-[1.15rem] top-1 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${exp.accent}`}>
                <Briefcase size={15} />
              </span>
              <div className={`rounded-4xl border border-lavender-100 bg-gradient-to-br ${exp.tone} p-6 sm:p-8 shadow-soft hover:shadow-glow-hover hover:-translate-y-1 transition-all duration-300`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-lg text-ink-900">{exp.role}</h3>
                  <span className="text-xs font-body text-ink-600">{exp.period}</span>
                </div>
                <p className="font-body text-sm text-ink-600 mb-4">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-body text-sm text-ink-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lavender-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}