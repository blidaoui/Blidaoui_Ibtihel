"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";

export default function ThemeToggle() {
  const { t } = useLang();
  const [theme, setTheme] = useState("dark");

  // The theme is applied before first paint by the inline script in layout.js;
  // here we only read it back so the icon is correct.
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t.nav.toLight : t.nav.toDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-soft hover:text-fg hover:border-accent transition-colors"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
