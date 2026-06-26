import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Ibtihel Blidaoui — Full-Stack Developer",
  description:
    "Portfolio of Ibtihel Blidaoui — Software Engineering student and full-stack developer specializing in scalable web applications and contact-free interaction design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
