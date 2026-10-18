"use client";

import { LANGS } from "@/lib/translations";
import { useLang } from "@/lib/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      dir="ltr"
      className="inline-flex rounded-lg border border-line bg-surface p-0.5"
    >
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={l.name}
            lang={l.code}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
              active
                ? "bg-accent text-on-accent"
                : "text-soft hover:text-fg"
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
