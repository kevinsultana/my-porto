import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "Kevin Sultana Herman | Senior Software Engineer & DevOps Enthusiast",
    template: "%s | Kevin Sultana Herman",
  },
  description:
    "Portfolio of Kevin Sultana Herman, a senior software Engineer, full-stack developer, and DevOps enthusiast building modern web experiences and resilient infrastructure.",
  keywords: [
    "Kevin Sultana Herman",
    "Senior Software Engineer",
    "Full-stack Developer",
    "DevOps Enthusiast",
    "Next.js",
    "React",
    "Linux",
    "Proxmox",
    "Self-hosting",
  ],
  authors: [{ name: "Kevin Sultana Herman" }],
  creator: "Kevin Sultana Herman",
  publisher: "Kevin Sultana Herman",
  openGraph: {
    title:
      "Kevin Sultana Herman | Senior Software Engineer & DevOps Enthusiast",
    description:
      "Explore Kevin Sultana Herman's portfolio, featured projects, and approach to full-stack development, infrastructure, and self-hosted systems.",
    type: "website",
    siteName: "Kevin Sultana Herman Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title:
      "Kevin Sultana Herman | Senior Software Engineer & DevOps Enthusiast",
    description:
      "Portfolio of Kevin Sultana Herman, a full-stack developer focused on Next.js, React, and DevOps.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
