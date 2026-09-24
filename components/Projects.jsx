import { ArrowUpRight, HandMetal, ShoppingBag, Bug } from "lucide-react";

const projects = [
  {
    icon: HandMetal,
    title: "HAOR",
    subtitle: "Touchless control for operating room equipment",
    description:
      "A contact-free surgical control system combining computer vision and speech recognition to control surgical room equipment without touch. Presented and successfully defended before an academic jury.",
    tags: ["Python", "FastAPI", "PostgreSQL", "PyQt6", "MediaPipe", "Vosk"],
    status: "Project",
    statusTone: "bg-blossom-100 text-blossom-600",
    cardTone: "from-lavender-100 via-blossom-50 to-skyblue-50",
    featured: true,
    repoUrl: "https://github.com/blidaoui/haor", // TODO: replace with the real repo URL
  },
  {
    icon: ShoppingBag,
    title: "AURES Click & Collect",
    subtitle: "Restaurant ordering platform",
    description:
      "Built a full-stack click-and-collect system with online payment, order tracking, and a chatbot assistant during a production internship.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    status: "Internship project",
    statusTone: "bg-skyblue-100 text-skyblue-600",
    cardTone: "from-skyblue-50 to-white",
    repoUrl: "https://github.com/blidaoui/aures-click-and-collect", // TODO: replace with the real repo URL
  },
  {
    icon: Bug,
    title: "Blind SQLi Assessment",
    subtitle: "Web security testing",
    description:
      "Detected and remediated a time-based Blind SQL Injection vulnerability using SQLMap, strengthening application resilience and data safety.",
    tags: ["SQLMap", "PHP", "MySQL"],
    status: "Security analysis",
    statusTone: "bg-lavender-100 text-lavender-600",
    cardTone: "from-lavender-50 to-white",
    repoUrl: "https://github.com/blidaoui/blind-sqli-assessment", // TODO: replace with the real repo URL
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <span className="font-display font-semibold text-sm uppercase tracking-wide text-lavender-600">
            Projects
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-ink-900">
            Projects with real outcomes
          </h2>
        </div>

        <div className="grid gap-6">
          {/* Featured project */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <ProjectCard key={project.title} project={project} large />
            ))}

          {/* Secondary projects */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large }) {
  const Icon = project.icon;
  return (
    <div
      className={`group relative rounded-4xl border border-lavender-100 bg-gradient-to-br ${project.cardTone} p-7 sm:p-8 shadow-soft hover:shadow-glow-hover hover:-translate-y-1.5 transition-all duration-300 ${large ? "md:p-10" : ""
        }`}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center text-lavender-600">
          <Icon size={22} />
        </div>
        <span
          className={`text-xs font-display font-semibold px-3 py-1.5 rounded-full ${project.statusTone}`}
        >
          {project.status}
        </span>
      </div>

      <h3
        className={`font-display font-bold text-ink-900 ${large ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
      >
        {project.title}
      </h3>
      <p className="mt-1 font-body text-sm text-ink-600">{project.subtitle}</p>
      <p className="mt-4 font-body text-ink-700 text-sm sm:text-base leading-relaxed">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-body font-medium text-ink-700 bg-white/70 rounded-full px-3 py-1.5 shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-display font-semibold text-lavender-600 hover:text-blossom-600 transition-colors"
      >
        View on GitHub
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}