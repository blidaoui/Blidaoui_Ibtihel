"use client";

import {
  ArrowUpRight,
  Bug,
  HandMetal,
  ShoppingBag,
  UserSearch,
  Workflow,
} from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { projectsMeta } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

const icons = {
  haor: HandMetal,
  recruit: UserSearch,
  aures: ShoppingBag,
  rag: Workflow,
  sqli: Bug,
};

export default function Projects() {
  const { t } = useLang();
  const featured = projectsMeta.filter((p) => p.featured);
  const others = projectsMeta.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-28 border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>{t.projects.title}</SectionHeading>

        <div className="mt-14 grid gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.key} meta={p} large />
          ))}
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <ProjectCard key={p.key} meta={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ meta, large }) {
  const { t } = useLang();
  const text = t.projects.items[meta.key];
  const Icon = icons[meta.key];

  return (
    <article
      className={`group flex flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent ${
        large ? "md:p-10 border-s-4 border-s-accent" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface2 text-accent-ink">
          <Icon size={21} />
        </span>
        <span className="inline-flex items-center gap-2 text-xs text-soft">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {text.status}
        </span>
      </div>

      <h3
        className={`mt-6 font-display font-bold tracking-tight ${
          large ? "text-3xl sm:text-4xl" : "text-xl"
        }`}
      >
        {text.title}
      </h3>
      <p className="mt-1.5 text-sm text-soft">{text.subtitle}</p>
      <p className={`mt-4 text-soft ${large ? "text-base sm:text-lg max-w-3xl" : "text-[15px]"}`}>
        {text.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2" dir="ltr">
        {meta.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-line bg-bg/50 px-2.5 py-1 font-mono text-xs text-soft"
          >
            {tag}
          </li>
        ))}
      </ul>

      {meta.repoUrl && (
        <a
          href={meta.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent-ink hover:underline underline-offset-4"
        >
          {t.projects.viewCode}
          <ArrowUpRight size={16} className="rtl:-scale-x-100" />
        </a>
      )}
    </article>
  );
}
