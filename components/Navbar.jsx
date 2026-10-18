"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

const sections = ["about", "skills", "experience", "projects", "resume"];

export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled || open
          ? "bg-bg/85 backdrop-blur-md border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#home"
          aria-label={t.nav.home}
          className="font-display font-bold text-base sm:text-lg tracking-tight whitespace-nowrap"
        >
          Ibtihel Blidaoui
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`text-sm font-medium transition-colors border-b-2 py-1 ${
                active === id
                  ? "text-fg border-accent"
                  : "text-soft border-transparent hover:text-fg"
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center rounded-lg bg-accent text-on-accent text-sm font-semibold px-4 h-9 hover:brightness-105 transition"
          >
            {t.nav.contact}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-fg"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col gap-1">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-soft hover:text-fg"
              >
                {t.nav[id]}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-accent text-on-accent font-semibold px-4 h-11"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
