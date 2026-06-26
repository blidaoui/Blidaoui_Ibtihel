import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-lavender-50 border-t border-lavender-100">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-display font-semibold gradient-text text-lg">
          Ibtihel Blidaoui
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/blidaoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-ink-700 hover:text-lavender-600 hover:-translate-y-0.5 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ibtihel-blidaoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-ink-700 hover:text-skyblue-600 hover:-translate-y-0.5 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:blidaouiibtihel22@gmail.com"
            aria-label="Email"
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-ink-700 hover:text-blossom-600 hover:-translate-y-0.5 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-body text-sm text-ink-600">
          © {new Date().getFullYear()} Ibtihel Blidaoui. Made with care.
        </p>
      </div>
    </footer>
  );
}
