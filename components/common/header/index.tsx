"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

type SubDropdown = {
  title: string;
  href: string;
};

type DropdownItem = {
  title: string;
  href: string;
  subDropdown?: SubDropdown[];
};

type NavigationItem = {
  title: string;
  href?: string;
  dropdown?: DropdownItem[];
};

const navigationItems: NavigationItem[] = [
  {
    title: "Online Yoga Training",
    dropdown: [
      {
        title: "25 Hrs Yoga Courses",
        href: "/yoga/25-hours",
        subDropdown: [
          { title: "Yoga Anatomy", href: "/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
          { title: "Face Yoga", href: "/yoga/25-hours/face-yoga" },
        ],
      },
      {
        title: "50 Hrs Yoga Courses",
        href: "/yoga/50-hours",
        subDropdown: [
          { title: "Restorative Yoga", href: "/yoga/50-hours/restorative-yoga" },
          { title: "Meditation", href: "/yoga/50-hours/meditation" },
        ],
      },
    ],
  },
  { title: "Online Ayurveda Courses", href: "/courses" },
  { title: "Online Yoga Courses", href: "/courses" },
  {
    title: "About Us",
    dropdown: [
      { title: "Our Teachers", href: "/our-teachers" },
      { title: "Blogs", href: "/blog" },
      { title: "Testimonials", href: "/home/testimonial" },
    ],
  },
  { title: "Contact Us", href: "/contact" },
  { title: "Payment", href: "/payment" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-700">
          Yoga School
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navigationItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`hover:text-green-600 ${
                    pathname === item.href ? "text-green-600 font-semibold" : ""
                  }`}
                >
                  {item.title}
                </Link>
              ) : (
                <span className="cursor-pointer hover:text-green-600">
                  {item.title}
                </span>
              )}
              {/* Dropdown */}
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  {item.dropdown.map((sub, subIdx) => (
                    <div key={subIdx} className="relative group/sub">
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.title}
                      </Link>
                      {/* Sub Dropdown */}
                      {sub.subDropdown && (
                        <div className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200 z-50">
                          {sub.subDropdown.map((s, sIdx) => (
                            <Link
                              key={sIdx}
                              href={s.href}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          {navigationItems.map((item, idx) => (
            <div key={idx}>
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 ${
                    pathname === item.href ? "text-green-600 font-semibold" : ""
                  }`}
                >
                  {item.title}
                </Link>
              ) : (
                <details className="group">
                  <summary className="cursor-pointer py-2 font-medium">
                    {item.title}
                  </summary>
                  {item.dropdown?.map((sub, subIdx) => (
                    <div key={subIdx} className="pl-4">
                      <Link
                        href={sub.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1 text-sm"
                      >
                        {sub.title}
                      </Link>
                      {sub.subDropdown?.map((s, sIdx) => (
                        <Link
                          key={sIdx}
                          href={s.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1 pl-4 text-xs text-gray-600"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </details>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
