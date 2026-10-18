/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme tokens (switch between dark and light via CSS variables)
        bg: token("bg"),
        surface: token("surface"),
        surface2: token("surface2"),
        fg: token("fg"),
        soft: token("soft"),
        line: token("line"),
        "accent-ink": token("accent-ink"),
        // Fixed brand colors
        accent: "#F2A541",
        "on-accent": "#0F2236",
      },
      fontFamily: {
        display: [
          '"Space Grotesk"',
          '"IBM Plex Sans Arabic"',
          "system-ui",
          "sans-serif",
        ],
        body: [
          '"IBM Plex Sans"',
          '"IBM Plex Sans Arabic"',
          "system-ui",
          "sans-serif",
        ],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        "accent-glow":
          "0 0 0 1px rgb(242 165 65 / 0.25), 0 14px 40px -14px rgb(242 165 65 / 0.35)",
      },
    },
  },
  plugins: [],
};
