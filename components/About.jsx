"use client";

import { MapPin, GraduationCap, Languages } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import SectionHeading from "@/components/SectionHeading";

const factIcons = {
  location: MapPin,
  education: GraduationCap,
  languages: Languages,
};

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-24 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>{a.title}</SectionHeading>

        <div className="mt-14 grid md:grid-cols-[260px_1fr] gap-12 md:gap-16 items-start">
          <div className="relative w-56 sm:w-64 mx-auto md:mx-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rtl:-translate-x-3 rounded-2xl border border-accent"
            />
            <img
              src="/PhotoBlidaoui.jpg"
              alt={a.photoAlt}
              width={839}
              height={839}
              loading="lazy"
              className="relative w-full aspect-[4/5] object-cover object-top rounded-2xl border border-line bg-surface"
            />
          </div>

          <div>
            <div className="space-y-5 text-base sm:text-lg text-soft max-w-2xl">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
            </div>

            <dl className="mt-10 pt-8 border-t border-line grid sm:grid-cols-3 gap-6">
              {Object.entries(a.facts).map(([key, fact]) => {
                const Icon = factIcons[key];
                return (
                  <div key={key}>
                    <dt className="flex items-center gap-2 text-sm text-soft">
                      <Icon size={15} className="text-accent-ink" />
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 font-medium">{fact.value}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
