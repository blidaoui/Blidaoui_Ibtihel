"use client";

import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "blidaouiibtihel22@gmail.com",
    href: "mailto:blidaouiibtihel22@gmail.com",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/ibtihel-blidaoui",
    href: "https://linkedin.com/in/ibtihel-blidaoui",
  },
  {
    icon: Github,
    label: "github.com/blidaoui",
    href: "https://github.com/blidaoui",
  },
  {
    icon: Phone,
    label: "+216 99 985 908",
    href: "tel:+21699985908",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <span className="font-display font-semibold text-sm uppercase tracking-wide text-blossom-500">
            Contact
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-ink-900">
            Let&rsquo;s build something together
          </h2>
          <p className="mt-4 font-body text-ink-700 max-w-xl mx-auto">
            I&rsquo;mlooking for an international internship, remote or on-site, in full-stack or AI-driven development. If your team needs a developer comfortable across the stack, with a growing focus on AI, I&rsquo;d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-4 w-full max-w-lg">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-3xl border border-lavender-100 bg-gradient-to-br from-skyblue-50 to-white px-6 py-5 shadow-soft hover:shadow-glow-hover hover:-translate-y-0.5 transition-all"
              >
                <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-lavender-600 shrink-0">
                  <Icon size={18} />
                </span>
                <span className="font-body font-medium text-ink-800 text-sm sm:text-base break-all">
                  {label}
                </span>
              </a>
            ))}

            <div className="rounded-3xl border border-blossom-100 bg-gradient-to-br from-blossom-50 to-white px-6 py-5 shadow-soft">
              <p className="font-body text-sm text-ink-700 text-center">
                <span className="font-semibold text-ink-800">Based in</span>{" "}
                Kebili, Tunisie &mdash;open to remote and on-site internships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
