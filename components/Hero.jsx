"use client";

import { Fragment } from "react";
import { ArrowRight, Download } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { heroLayers, CV_FILE } from "@/lib/content";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div aria-hidden="true" className="absolute inset-0 dot-grid" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-sm text-soft">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {t.hero.status}
          </p>

          <h1 className="mt-8 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            {t.hero.name}
          </h1>

          <p className="mt-6 max-w-xl font-display font-medium text-xl sm:text-2xl leading-snug">
            {t.hero.lead}
          </p>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-soft">
            {t.hero.text}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent text-on-accent font-semibold px-6 h-12 hover:brightness-105 transition"
            >
              {t.hero.ctaProjects}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
              />
            </a>
            <a
              href={CV_FILE}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/70 font-semibold px-6 h-12 hover:border-accent transition-colors"
            >
              <Download size={18} />
              {t.hero.ctaCv}
            </a>
          </div>
        </div>

        <StackDiagram />
      </div>
    </section>
  );
}

function StackDiagram() {
  const { t } = useLang();

  return (
    <figure className="rounded-2xl border border-line bg-surface/70 p-5 sm:p-7 backdrop-blur-sm">
      <figcaption className="text-sm text-soft mb-5">
        {t.hero.diagramCaption}
      </figcaption>

      <div>
        {heroLayers.map((layer, i) => (
          <Fragment key={layer.key}>
            <div
              className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3.5 ${
                layer.highlight
                  ? "border-accent bg-surface2 shadow-accent-glow"
                  : "border-line bg-bg/60"
              }`}
            >
              <span className="font-display font-semibold">
                {t.hero.layers[layer.key]}
              </span>
              <span
                dir="ltr"
                className="font-mono text-xs sm:text-[13px] text-soft text-end"
              >
                {layer.tech}
              </span>
            </div>
            {i < heroLayers.length - 1 && (
              <div
                aria-hidden="true"
                className="flow"
                style={{ "--flow-delay": `${i * 0.7}s` }}
              />
            )}
          </Fragment>
        ))}
      </div>
    </figure>
  );
}
