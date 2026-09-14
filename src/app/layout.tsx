import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Rayhan Khan | AI / Full-Stack Engineer",
  description: "Portfolio of Rayhan Khan, a Software Engineer specializing in AI/ML, Backend, and Full-Stack Development.",
  keywords: ["Software Engineer", "AI/ML", "React", "Python", "Rayhan Khan", "Full-Stack Developer"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} ${mono.variable} font-sans antialiased bg-background text-foreground selection:bg-accent/30 selection:text-accent`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
