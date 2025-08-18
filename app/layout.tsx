import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/providers/query-provider";
import Preloader from "@/components/common/preloader";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

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
  description:
    "Join the best online yoga classes at RishikulOnline – a Yoga Alliance certified platform offering authentic yoga courses, online yoga certification, and expert-led virtual yoga sessions for all levels.",
  keywords: [
    "yoga",
    "online yoga classes",
    "yoga classes",
    "best online yoga",
    "yoga course",
    "yoga alliance",
    "online yoga certification"
  ],
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#ffffff",
  openGraph: {
    title: "RishikulOnline",
    description:
      "Join the best online yoga classes at RishikulOnline – a Yoga Alliance certified platform offering authentic yoga courses, online yoga certification, and expert-led virtual yoga sessions for all levels.",
    url: "https://rishikulonline.com",
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
        <Preloader />
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
