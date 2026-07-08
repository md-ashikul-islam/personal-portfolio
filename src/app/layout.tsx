import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollBackground } from "@/components/layout/ScrollBackground";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashikul Islam — Software QA Engineer",
  description:
    "Portfolio of MD Ashikul Islam — Software QA Engineer proficient in Manual Testing, Automation, and API Testing. Domain expertise in FinTech & AI.",
  keywords: [
    "Software QA Engineer",
    "Manual Testing",
    "Test Automation",
    "API Testing",
    "FinTech",
    "AI",
    "Ashikul Islam",
  ],
  authors: [{ name: "MD Ashikul Islam" }],
  openGraph: {
    title: "Ashikul Islam — Software QA Engineer",
    description:
      "Quality engineered across manual, automation & API testing — with deep FinTech & AI domain expertise.",
    type: "website",
  },
};

const themeScript = `
  (function () {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored || 'light';
      document.documentElement.classList.add(theme);
      document.documentElement.style.colorScheme = theme;
    } catch (e) {
      document.documentElement.classList.add('light');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <SmoothScroll>
            <ScrollBackground />
            <ScrollProgress />
            <Navbar />
            <main className="relative z-0">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
