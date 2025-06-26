import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RishikulOnline",
  description: "RishikulOnline - Yoga & Wellness Learning Platform",
  keywords: ["Yoga", "Online Yoga", "RishikulOnline", "Wellness", "Courses"],
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#ffffff",
  openGraph: {
    title: "RishikulOnline",
    description: "Join yoga and wellness courses anytime, anywhere.",
    url: "#https://rishikulonline.com",
    siteName: "RishikulOnline",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Updated Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yovtIEwXRYb0vSol8Du18IqfAWLv2oSwEtyzgKzySkQ"
        />

        {/* Optional: Link to HTML verification file */}
        <link
          rel="alternate"
          href="/google98b10a7b33e90200.html"
          type="text/html"
        />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#f9f9f9] text-[#171717] min-h-screen m-0 p-0`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
