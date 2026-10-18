"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { links } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const rows = [
    {
      icon: Mail,
      label: c.email,
      value: links.email,
      href: `mailto:${links.email}`,
    },
    {
      icon: Linkedin,
      label: c.linkedin,
      value: "linkedin.com/in/ibtihel-blidaoui",
      href: links.linkedin,
      external: true,
    },
    {
      icon: Github,
      label: c.github,
      value: "github.com/blidaoui",
      href: links.github,
      external: true,
    },
    {
      icon: Phone,
      label: c.phone,
      value: links.phone,
      href: links.phoneHref,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-28 border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <SectionHeading>{c.title}</SectionHeading>
          <p className="mt-6 text-base sm:text-lg text-soft max-w-xl">{c.text}</p>
          <p className="mt-6 text-sm text-soft border-s-2 border-accent ps-4 max-w-xl">
            {c.based}
          </p>
        </div>

        <ul className="space-y-3">
          {rows.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-accent"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface2 text-accent-ink">
                  <Icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-soft">{label}</span>
                  <span className="ltr-isolate block font-medium break-all">
                    {value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
