"use client";

import {
  Braces,
  BrainCircuit,
  Container,
  Database,
  Layout,
  Server,
  ShieldCheck,
} from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import SectionHeading from "@/components/SectionHeading";

const icons = {
  languages: Braces,
  frontend: Layout,
  backend: Server,
  data: Database,
  ai: BrainCircuit,
  devops: Container,
  security: ShieldCheck,
};

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 sm:py-28 border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>{t.skills.title}</SectionHeading>

        <div className="mt-12 border-t border-line">
          {t.skills.groups.map((group) => {
            const Icon = icons[group.key];
            const isAi = group.key === "ai";
            return (
              <div
                key={group.key}
                className="grid md:grid-cols-[240px_1fr] gap-4 md:gap-10 py-6 border-b border-line"
              >
                <h3 className="flex items-center gap-3 font-display font-semibold text-lg">
                  <Icon size={19} className="text-accent-ink shrink-0" />
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-md border px-3 py-1.5 text-sm ${
                        isAi
                          ? "border-accent/60 bg-surface"
                          : "border-line bg-surface"
                      }`}
                    >
                      <bdi>{item}</bdi>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
