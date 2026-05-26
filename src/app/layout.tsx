import type { Metadata } from "next";
import { Inter, Outfit, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata = {
  verification: {
    google: 'AnPPTYLx-KFhoUjgFzM-YMOfc0VMyEQHK8OORhDYxZg',
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rayhan Khan | Software Engineer",
  description: "Architecting scalable web platforms & engineering data-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${syne.variable} antialiased bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-slate-50 transition-colors duration-300 font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
