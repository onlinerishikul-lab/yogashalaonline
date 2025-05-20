"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

type SubDropdownItem = {
  title: string;
  href: string;
};

type DropdownItem = {
  title: string;
  href: string;
  subDropdown?: SubDropdownItem[];
};

type NavigationItem =
  | {
      title: string;
      href: string;
    }
  | {
      title: string;
      dropdown: DropdownItem[];
    };

export const Header = () => {
  const router = useRouter();

  const navigationItems: NavigationItem[] = [
    // Your existing navigationItems here (unchanged)
    // For brevity, omitted here but use the same as your original data
  ];

  const [isOpen, setIsOpen] = useState(false); // Mobile menu open/close
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Desktop dropdown open
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null); // Desktop subdropdown open

  // Mobile dropdown and subdropdown expanded states as arrays for multiple expansions
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [expandedMobileSubItems, setExpandedMobileSubItems] = useState<string[]>([]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY >= window.innerHeight / 2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const dropdowns = document.querySelectorAll(".dropdown-parent");
      if ([...dropdowns].every((d) => !d.contains(e.target as Node))) {
        setActiveDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Toggle desktop dropdown (only one open at a time)
  const toggleDropdown = (title: string) =>
    setActiveDropdown((prev) => (prev === title ? null : title));

  // Toggle desktop subdropdown
  const toggleSubDropdown = (title: string) =>
    setOpenSubDropdown((prev) => (prev === title ? null : title));

  // Toggle mobile main dropdown items (accordion style)
  const toggleMobileDropdown = (title: string) => {
    setExpandedMobileItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  // Toggle mobile sub dropdown items (accordion style)
  const toggleMobileSubDropdown = (title: string) => {
    setExpandedMobileSubItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#4377B2] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/assets/rishikulonlinlogo.png"
            alt="Yoga Logo"
            width={120}
            height={80}
            priority
          />
        </Link>

        {/* Desktop Left Navigation (first 3 items) */}
        <nav className="hidden lg:flex flex-1 items-center gap-x-8 text-white text-sm font-medium">
          {navigationItems.slice(0, 3).map((item) =>
            "dropdown" in item ? (
              <div
                key={item.title}
                className="relative dropdown-parent"
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setOpenSubDropdown(null);
                }}
              >
                <button
                  className="flex items-center gap-1 hover:text-white/80"
                  onClick={() => toggleDropdown(item.title)}
                  aria-expanded={activeDropdown === item.title}
                  aria-haspopup="true"
                >
                  {item.title} <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === item.title && (
                  <div className="absolute bg-white shadow-lg top-full mt-2 rounded-md w-64 z-50 p-2 space-y-1">
                    {item.dropdown.map((subItem, idx) => (
                      <div key={subItem.title} className="relative group">
                        {idx > 0 && <hr className="border-gray-200 my-1" />}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (subItem.subDropdown) {
                              toggleSubDropdown(subItem.title);
                            } else {
                              router.push(subItem.href);
                              setActiveDropdown(null);
                              setOpenSubDropdown(null);
                            }
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 flex justify-between items-center"
                        >
                          {subItem.title}
                          {subItem.subDropdown && (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>

                        {openSubDropdown === subItem.title &&
                          subItem.subDropdown && (
                            <div className="absolute top-0 left-full ml-1 bg-white shadow-lg rounded-md min-w-[300px] z-50 p-2 space-y-1 whitespace-nowrap">
                              {subItem.subDropdown.map((nestedItem, nestedIdx) => (
                                <div key={nestedItem.title}>
                                  {nestedIdx > 0 && (
                                    <hr className="border-gray-200 my-1" />
                                  )}
                                  <Link
                                    href={nestedItem.href}
                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                                  >
                                    {nestedItem.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-white/80"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Right Navigation (remaining items) */}
        <nav className="hidden lg:flex flex-1 justify-end items-center gap-x-8 text-white text-sm font-medium">
          {navigationItems.slice(3).map((item) =>
            "dropdown" in item ? (
              <div
                key={item.title}
                className="relative dropdown-parent"
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setOpenSubDropdown(null);
                }}
              >
                <button
                  className="flex items-center gap-1 hover:text-white/80"
                  onClick={() => toggleDropdown(item.title)}
                  aria-expanded={activeDropdown === item.title}
                  aria-haspopup="true"
                >
                  {item.title} <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === item.title && (
                  <div className="absolute bg-white shadow-lg top-full mt-2 rounded-md w-64 z-50 p-2 space-y-1">
                    {item.dropdown.map((subItem, idx) => (
                      <div key={subItem.title} className="relative group">
                        {idx > 0 && <hr className="border-gray-200 my-1" />}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (subItem.subDropdown) {
                              toggleSubDropdown(subItem.title);
                            } else {
                              router.push(subItem.href);
                              setActiveDropdown(null);
                              setOpenSubDropdown(null);
                            }
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 flex justify-between items-center"
                        >
                          {subItem.title}
                          {subItem.subDropdown && (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>

                        {openSubDropdown === subItem.title &&
                          subItem.subDropdown && (
                            <div className="absolute top-0 left-full ml-1 bg-white shadow-lg rounded-md min-w-[300px] z-50 p-2 space-y-1 whitespace-nowrap">
                              {subItem.subDropdown.map((nestedItem, nestedIdx) => (
                                <div key={nestedItem.title}>
                                  {nestedIdx > 0 && (
                                    <hr className="border-gray-200 my-1" />
                                  )}
                                  <Link
                                    href={nestedItem.href}
                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                                  >
                                    {nestedItem.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-white/80"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden bg-[#4377B2] text-white fixed top-[60px] left-0 w-full max-h-[calc(100vh-60px)] overflow-auto transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } z-40`}
      >
        <ul className="flex flex-col px-4 py-4 space-y-1">
          {navigationItems.map((item) =>
            "dropdown" in item ? (
              <li key={item.title} className="border-b border-white/30 pb-2">
                <button
                  onClick={() => toggleMobileDropdown(item.title)}
                  className="w-full flex justify-between items-center text-left font-semibold"
                  aria-expanded={expandedMobileItems.includes(item.title)}
                >
                  {item.title}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedMobileItems.includes(item.title) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedMobileItems.includes(item.title) && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {item.dropdown.map((subItem) =>
                      subItem.subDropdown ? (
                        <li key={subItem.title}>
                          <button
                            onClick={() => toggleMobileSubDropdown(subItem.title)}
                            className="w-full flex justify-between items-center text-left font-medium"
                            aria-expanded={expandedMobileSubItems.includes(subItem.title)}
                          >
                            {subItem.title}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                expandedMobileSubItems.includes(subItem.title)
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {expandedMobileSubItems.includes(subItem.title) && (
                            <ul className="mt-1 ml-4 space-y-1">
                              {subItem.subDropdown.map((nestedItem) => (
                                <li key={nestedItem.title}>
                                  <Link
                                    href={nestedItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-2 py-1 hover:bg-white/20 rounded"
                                  >
                                    {nestedItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ) : (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-2 py-1 font-medium hover:bg-white/20 rounded"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.title} className="border-b border-white/30">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-2 py-2 font-semibold"
                >
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};
