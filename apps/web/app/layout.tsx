import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior Full-Stack Portfolio | TypeScript, Next.js, DevOps",
  description:
    "Production-grade full-stack portfolio built with Next.js, Express, PostgreSQL, Prisma, Docker, and CI/CD pipelines.",
  keywords: [
    "Full-stack developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "DevOps",
    "Docker",
    "AWS"
  ],
  openGraph: {
    title: "Senior Full-Stack Portfolio",
    description:
      "Production-ready portfolio with modern web architecture, API integration, and cloud deployment workflows.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
