import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Rayhan Khan | Software Engineer",
  description: "Software Engineer portfolio of Rayhan Khan. Specializing in AI/ML, Full-Stack Development, and intelligent systems.",
  keywords: ["Software Engineer", "AI/ML", "React", "Python", "Rayhan Khan", "Full-Stack Developer"],
  openGraph: {
    title: "Rayhan Khan | Software Engineer",
    description: "Building intelligent, scalable applications with modern software engineering and artificial intelligence.",
    url: "https://rayhank.vercel.app",
    siteName: "Rayhan Khan Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030406",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
