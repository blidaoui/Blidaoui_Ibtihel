import { MapPin, GraduationCap, Languages } from "lucide-react";

const chips = [
  { icon: MapPin, label: "Kebili, Tunisia" },
  { icon: GraduationCap, label: "Software Engineering, ESSAT" },
  { icon: Languages, label: "Arabic · French · English" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <span className="font-display font-semibold text-sm uppercase tracking-wide text-blossom-500">
            About me
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-ink-900">
            Secure full-stack development with real project impact
          </h2>
        </div>

        <div className="glass-card-soft rounded-5xl shadow-soft p-6 sm:p-10 md:p-12 grid md:grid-cols-[auto_1fr] gap-10 items-center bg-gradient-to-br from-lavender-50 via-blossom-50 to-skyblue-50">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-lavender-300 via-blossom-300 to-skyblue-300 p-1.5 shadow-soft animate-floaty">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="PhotoBlidaoui.jpg"
                  alt="Ibtihel Blidaoui"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="font-body text-ink-700 text-base sm:text-lg leading-relaxed">
              Software engineering student with hands-on full-stack experience across two internships, building production features end-to-end &mdash; from REST APIs in NestJS to responsive interfaces in Next.js and React, backed by PostgreSQL.
            </p>
            <p className="mt-4 font-body text-ink-700 text-base sm:text-lg leading-relaxed">
              Built a contact-free, gesture- and voice-controlled system for operating-room equipment, combining computer vision and speech recognition. Comfortable owning a feature across the stack, working in Agile teams, and writing secure, maintainable code.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {chips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-lavender-200 px-4 py-2 text-sm font-body font-medium text-ink-700 shadow-sm"
                >
                  <Icon size={15} className="text-blossom-500" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
