import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageProvider";

export const metadata = {
  title: "Ibtihel Blidaoui — Full-Stack & AI Developer",
  description:
    "Portfolio of Ibtihel Blidaoui — software engineering student and full-stack developer building secure, AI-powered web applications. Available in English, French and Arabic.",
};

// Runs before first paint: restores the saved theme and language direction
// so the page never flashes the wrong theme or text direction.
const initScript = `
(function () {
  try {
    var d = document.documentElement;
    var theme = localStorage.getItem('theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    d.setAttribute('data-theme', theme);
    var lang = localStorage.getItem('lang');
    if (lang !== 'en' && lang !== 'fr' && lang !== 'ar') {
      var n = (navigator.language || 'en').slice(0, 2);
      lang = (n === 'ar' || n === 'fr') ? n : 'en';
    }
    d.lang = lang;
    d.dir = lang === 'ar' ? 'rtl' : 'ltr';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
