"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#4377b2] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold">Rishikul</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="/Ayurveda-Courses" className="hover:text-gray-200">
            Ayurveda
          </Link>
          <Link href="/Yoga-Courses" className="hover:text-gray-200">
            Yoga
          </Link>
          <Link href="/Wellness" className="hover:text-gray-200">
            Wellness
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#4377b2] px-6 py-4 space-y-3">
          <Link href="/Ayurveda-Courses" className="block hover:text-gray-200">
            Ayurveda
          </Link>
          <Link href="/Yoga-Courses" className="block hover:text-gray-200">
            Yoga
          </Link>
          <Link href="/Wellness" className="block hover:text-gray-200">
            Wellness
          </Link>
          <Link href="/contact" className="block hover:text-gray-200">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
