import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-gradient pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-10 -left-16 w-72 h-72 bg-blossom-200/60 blur-3xl animate-blob" />
        <div className="absolute top-32 -right-10 w-80 h-80 bg-skyblue-200/60 blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-lavender-200/60 blur-3xl animate-blob" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 mb-8 shadow-soft">
          <Sparkles size={16} className="text-blossom-500" />
          <span className="font-body font-semibold text-sm text-ink-700">
            Open to internship opportunities — remote or on-site          </span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-ink-900">
          Hi, I&rsquo;m <span className="gradient-text">Ibtihel</span>
          <br className="hidden sm:block" />
          and I build secure, AI-powered web applications.
        </h1>

        <p className="mt-6 max-w-2xl mx-auto font-body text-base sm:text-lg text-ink-700">
          Full-stack developer with end-to-end internship experience &mdash; REST APIs in NestJS, responsive interfaces in Next.js and React, and a gesture- and voice-controlled system for operating rooms.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender-400 via-blossom-400 to-skyblue-400 text-white font-display font-semibold px-7 py-3.5 shadow-soft hover:shadow-pink-glow-hover transition-all hover:-translate-y-0.5"
          >
            Explore projects
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

        </div>
      </div>
    </section>
  );
}
