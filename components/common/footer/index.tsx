import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SiteFooter = () => {
  return (
    <footer className="bg-[#4377B2] bg-cover flex justify-center">
      <div className="max-w-screen-2xl w-full px-4 py-8 md:px-8 md:py-12">
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10 gap-8 md:gap-0">
          <div className="flex-shrink-0">
            <Image
              src="/assets/rishikulonlinlogo.png"
              alt="Rishikul Online Yoga Logo"
              height={120}
              width={80}
              className="object-contain"
              priority
            />
          </div>
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-white text-sm md:text-base">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/" className="hover:underline">Our Team</Link>
            <Link href="/blog" className="hover:underline">Blogs</Link>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <Link href="/" className="hover:underline">Privacy Policy</Link>
            <Link href="/" className="hover:underline">Terms & Conditions</Link>
            <Link href="/" className="hover:underline">Refund & Cancellation Policy</Link>
          </nav>
        </div>

        {/* Middle Section: Description and Contact */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 text-white text-sm md:text-base">
          <p className="md:w-2/3 leading-relaxed">
            We at Rishikul Online deliver yoga and not just a skill; it is an ancient practice
            we transfer with thorough knowledge and wisdom, targeting bright intellect,
            understanding of its values, tradition, Yogic philosophy, and scientific explanations
            to our fellow students.
          </p>

          <div className="md:w-1/3 flex flex-col md:items-end space-y-3">
            <h2 className="text-xl font-semibold mb-1">Contact Us</h2>
            <Link href="tel:+919845271423" className="hover:underline">
              +91 98452 71423
            </Link>
            <Link href="mailto:rishikulonline108@gmail.com" className="hover:underline break-words">
              rishikulonline108@gmail.com
            </Link>
          </div>
        </div>

        {/* Bottom Section: Social Icons */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-white text-sm">
          <div className="flex space-x-4">
            <Link
              href="https://www.youtube.com/@rishikul.online"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
              className="rounded-full bg-white/80 p-2 hover:bg-white/20 transition"
            >
              <Youtube className="h-5 w-5 text-[#4377B2]" />
            </Link>
            <Link
              href="https://www.instagram.com/rishikul.online/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
              className="rounded-full bg-white/80 p-2 hover:bg-white/20 transition"
            >
              <Instagram className="h-5 w-5 text-[#4377B2]" />
            </Link>
            <Link
              href="https://x.com/Rishikul_online"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter profile"
              className="rounded-full bg-white/80 p-2 hover:bg-white/20 transition"
            >
              <Twitter className="h-5 w-5 text-[#4377B2]" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61577137894469"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook profile"
              className="rounded-full bg-white/80 p-2 hover:bg-white/20 transition"
            >
              <Facebook className="h-5 w-5 text-[#4377B2]" />
            </Link>
          </div>
          <p className="text-center md:text-right w-full md:w-auto">
            © 2025 — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
