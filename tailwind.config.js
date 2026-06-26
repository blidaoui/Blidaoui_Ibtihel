/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#FAF7FE",
          100: "#F1E9FB",
          200: "#E3D4F6",
          300: "#D2BAF0",
          400: "#BC97E6",
          500: "#A374D9",
          600: "#8957C2",
          700: "#6F439D",
        },
        blossom: {
          50: "#FFF6FA",
          100: "#FDE9F1",
          200: "#FBD3E3",
          300: "#F8B6D0",
          400: "#F396BC",
          500: "#E96FA0",
          600: "#D14C81",
        },
        skyblue: {
          50: "#F3FAFE",
          100: "#E2F3FC",
          200: "#C6E7F9",
          300: "#A3D8F5",
          400: "#79C4ED",
          500: "#4EAADD",
          600: "#3489BD",
        },
        ink: {
          600: "#5B5468",
          700: "#453F50",
          800: "#332E3C",
          900: "#241F2C",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(140, 100, 180, 0.25)",
        glow: "0 0 0 0 rgba(121, 196, 237, 0.0)",
        "glow-hover": "0 8px 26px -4px rgba(121, 196, 237, 0.55)",
        "pink-glow-hover": "0 8px 26px -4px rgba(233, 111, 160, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #E3D4F6 0%, #FBD3E3 50%, #C6E7F9 100%)",
        "soft-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6), transparent 60%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 64% 36% / 45% 45% 55% 55%" },
          "50%": { borderRadius: "60% 40% 36% 64% / 55% 60% 40% 45%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        blob: "blob 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
