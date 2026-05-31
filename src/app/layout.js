import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Salman Shaikh | Frontend & Full-Stack Developer",
  description: "Personal portfolio of Salman Shaikh, a Frontend-focused Computer Engineering student. Showcasing full-stack projects, responsive design, and mobile apps.",
  keywords: ["Salman Shaikh", "Software Engineer", "Frontend Developer", "Portfolio", "Next.js", "React", "PHP", "Flutter", "Mumbai", "India"],
  authors: [{ name: "Salman Shaikh" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {/* Background grid pattern */}
        <div className="bg-grid"></div>
        
        {/* Floating glowing background blobs */}
        <div className="glow-blob blob-1"></div>
        <div className="glow-blob blob-2"></div>
        <div className="glow-blob blob-3"></div>
        
        {children}
      </body>
    </html>
  );
}
