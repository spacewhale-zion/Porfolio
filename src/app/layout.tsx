import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Developer & Designer",
  description: "Professional portfolio showcasing web development, design, and creative projects",
  keywords: ["portfolio", "web development", "design", "developer", "frontend", "react", "nextjs"],
  authors: [{ name: "Aryan Raj" }],
  creator: "Aryan Raj",
  openGraph: {
    title: "Portfolio | Developer & Designer",
    description: "Professional portfolio showcasing web development, design, and creative projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
