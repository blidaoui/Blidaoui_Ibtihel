"use client";

import { useLang } from "@/lib/LanguageProvider";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>{t.experience.title}</SectionHeading>

        <ol className="mt-14 relative border-s border-line ms-2 space-y-14">
          {t.experience.items.map((job) => (
            <li key={job.period + job.role} className="relative ps-8 sm:ps-10">
              <span
                aria-hidden="true"
                className="absolute -start-[7px] top-2 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-bg"
              />
              <p className="ltr-isolate font-mono text-sm text-accent-ink">
                {job.period}
              </p>
              <h3 className="mt-2 font-display font-bold text-xl sm:text-2xl">
                {job.role}
              </h3>
              <p className="mt-1 text-soft">
                {job.company} — {job.location}
              </p>
              <ul className="mt-5 space-y-3 max-w-3xl">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-base">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                    />
                    <span className="text-soft">{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
