"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { links } from "@/lib/content";

export default function Footer() {
  const { t } = useLang();

  const social = [
    { icon: Github, label: "GitHub", href: links.github, external: true },
    { icon: Linkedin, label: "LinkedIn", href: links.linkedin, external: true },
    { icon: Mail, label: t.contact.email, href: `mailto:${links.email}` },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display font-bold text-lg">Ibtihel Blidaoui</p>

        <div className="flex items-center gap-3">
          {social.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-soft hover:text-fg hover:border-accent transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-sm text-soft">
          © {new Date().getFullYear()} Ibtihel Blidaoui. {t.footer.made}
        </p>
      </div>
    </footer>
  );
}
