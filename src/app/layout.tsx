import type { Metadata } from "next";
import { Inter, Outfit, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


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
  metadataBase: new URL("https://rayhank.vercel.app"),
  title: {
    default: "Rayhan Khan | AI & Full Stack Engineer",
    template: "%s | Rayhan Khan"
  },
  description: "Architecting scalable web platforms and engineering intelligent, data-driven AI solutions. Specializing in Generative AI, Machine Learning, and Full-Stack Development.",
  keywords: [
    "Rayhan Khan",
    "AI Engineer Portfolio",
    "Machine Learning Portfolio",
    "Full Stack AI Developer",
    "Generative AI Developer",
    "Agentic AI Engineer",
    "Data Science Portfolio",
    "Python Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Rayhan Khan", url: "https://rayhank.vercel.app" }],
  creator: "Rayhan Khan",
  publisher: "Rayhan Khan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rayhan Khan | AI & Full Stack Engineer",
    description: "Architecting scalable web platforms and engineering intelligent, data-driven AI solutions.",
    url: "https://rayhank.vercel.app",
    siteName: "Rayhan Khan Portfolio",
    images: [
      {
        url: "/rayhan-headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Rayhan Khan | AI Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayhan Khan | AI & Full Stack Engineer",
    description: "Architecting scalable web platforms and engineering intelligent, data-driven AI solutions.",
    images: ["/rayhan-headshot.jpg"],
    creator: "@rayhankhan",
  },
  verification: {
    google: "AnPPTYLx-KFhoUjgFzM-YMOfc0VMyEQHK8OORhDYxZg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://rayhank.vercel.app/#person",
                  "name": "Rayhan Khan",
                  "url": "https://rayhank.vercel.app",
                  "image": "https://rayhank.vercel.app/rayhan-headshot.jpg",
                  "jobTitle": "AI & Full Stack Engineer",
                  "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name": "Dr. A.P.J. Abdul Kalam Technical University (AKTU)"
                  },
                  "sameAs": [
                    "https://github.com/Rayhan-099/",
                    "https://www.linkedin.com/in/rayhan-khan-081851340/"
                  ],
                  "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Generative AI", "Full Stack Development", "React", "Next.js", "Python"]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://rayhank.vercel.app/#website",
                  "url": "https://rayhank.vercel.app",
                  "name": "Rayhan Khan Portfolio",
                  "description": "Portfolio of Rayhan Khan, AI & Full Stack Engineer.",
                  "publisher": {
                    "@id": "https://rayhank.vercel.app/#person"
                  }
                }
              ]
            })
          }}
        />
      </head>
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
