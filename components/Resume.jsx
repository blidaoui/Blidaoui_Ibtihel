import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-24 sm:py-32 bg-gradient-to-b from-lavender-50/60 to-white"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="glass-card-soft rounded-5xl shadow-soft p-10 sm:p-14 bg-gradient-to-br from-skyblue-50 via-white to-blossom-50">
          <div className="w-16 h-16 mx-auto rounded-full bg-skyblue-100 flex items-center justify-center mb-6 text-skyblue-600">
            <FileText size={28} />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900">
            Download the full resume
          </h2>
          <p className="mt-4 font-body text-ink-700 text-base sm:text-lg max-w-xl mx-auto">
            Get the complete background on my experience, technical skills, and projects in a polished PDF format.
          </p>

          <a
            href="/BlidaouiCv.pdf"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-skyblue-300 hover:bg-skyblue-400 text-ink-900 font-display font-semibold px-8 py-3.5 shadow-soft hover:shadow-glow-hover transition-all hover:-translate-y-0.5"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
