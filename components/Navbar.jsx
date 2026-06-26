"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 mt-4">
        <div className="flex items-center justify-between rounded-full glass-card shadow-soft px-5 py-3">
          <a
            href="#home"
            className="font-display font-bold text-lg sm:text-xl gradient-text"
          >
            Ibtihel Blidaoui
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body font-semibold text-sm text-ink-700 hover:text-lavender-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-lavender-400 to-blossom-400 text-white text-sm font-semibold px-5 py-2 shadow-soft hover:shadow-pink-glow-hover transition-shadow"
          >
            Contact me
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-ink-700 hover:bg-white/60 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 glass-card rounded-3xl shadow-soft px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body font-semibold text-ink-700 hover:text-lavender-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lavender-400 to-blossom-400 text-white text-sm font-semibold px-5 py-2.5 shadow-soft"
            >
              Contact me
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
