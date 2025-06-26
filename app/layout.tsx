// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    "online yoga certification",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
