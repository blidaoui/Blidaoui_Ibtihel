"use client";

import { Download, FileText } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { CV_FILE } from "@/lib/content";

export default function Resume() {
  const { t } = useLang();

  return (
    <section id="resume" className="py-24 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-line bg-surface p-8 sm:p-12 text-center">
          <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-surface2 text-accent-ink">
            <FileText size={26} />
          </span>
          <h2 className="mt-6 font-display font-bold text-3xl sm:text-4xl tracking-tight">
            {t.resume.title}
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-soft text-base sm:text-lg">
            {t.resume.text}
          </p>
          <a
            href={CV_FILE}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent text-on-accent font-semibold px-7 h-12 hover:brightness-105 transition"
          >
            <Download size={18} />
            {t.resume.button}
          </a>
          <p className="mt-4 text-xs text-soft">{t.resume.note}</p>
        </div>
      </div>
    </section>
  );
}
