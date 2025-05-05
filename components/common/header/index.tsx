"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  | { title: string; href: string }
  | { title: string; dropdown: DropdownItem[] };

export const Header = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  const navigationItems: NavigationItem[] = [
    {
      title: "Online Yoga Training",
      dropdown: [
        {
          title: "25 Hrs Yoga Courses",
          href: "/yoga/25-hours",
          subDropdown: [
            { title: "Yoga Anatomy for Safe Journey", href: "/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
            { title: "Face Yoga", href: "/yoga/25-hours/face-yoga" },
          ],
        },
        {
          title: "50 Hrs Yoga Courses",
          href: "/yoga/50-hours",
        },
      ],
    },
    { title: "Online Ayurveda Courses", href: "/courses" },
    { title: "Online Yoga Courses", href: "/courses" },
    {
      title: "About Us",
      dropdown: [
        { title: "Our Teachers", href: "/our-teachers" },
        { title: "Our Blogs", href: "/blog" },
        { title: "Our Testimonials", href: "/home/testimonial" },
      ],
    },
    { title: "Contact Us", href: "/contact" },
    { title: "Payment", href: "/payment" },
  ];

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY >= window.innerHeight / 2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const dropdowns = document.querySelectorAll(".dropdown-parent");
      if ([...dropdowns].every((d) => !d.contains(e.target as Node))) {
        setActiveDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#4377B2] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/rishikulonlinlogo.png"
            alt="Logo"
            width={120}
            height={80}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-between items-center text-white text-sm font-medium">
          <div className="flex gap-x-8">
            {navigationItems.slice(0, 3).map((item) =>
              "dropdown" in item ? (
                <div key={item.title} className="relative dropdown-parent">
                  <button
                    onClick={() =>
                      setActiveDropdown((prev) =>
                        prev === item.title ? null : item.title
                      )
                    }
                    className="flex items-center gap-1 hover:text-white/80"
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-64 z-50 p-2 space-y-1">
                      {item.dropdown.map((sub) => (
                        <div key={sub.title} className="relative group">
                          <button
                            onClick={() => {
                              if (sub.subDropdown) {
                                setOpenSubDropdown((prev) =>
                                  prev === sub.title ? null : sub.title
                                );
                              } else {
                                router.push(sub.href);
                                setActiveDropdown(null);
                              }
                            }}
                            className="w-full flex justify-between items-center text-black hover:bg-gray-100 px-4 py-2 text-left"
                          >
                            {sub.title}
                            {sub.subDropdown && <ChevronRight className="w-4 h-4" />}
                          </button>
                          {openSubDropdown === sub.title && sub.subDropdown && (
                            <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-md w-64 z-50 p-2 space-y-1">
                              {sub.subDropdown.map((nested) => (
                                <Link
                                  key={nested.title}
                                  href={nested.href}
                                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                                >
                                  {nested.title}
                                </Link>
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
          </div>

          <div className="flex items-center gap-x-6">
            {navigationItems.slice(3).map((item) =>
              "dropdown" in item ? (
                <div key={item.title} className="relative dropdown-parent">
                  <button
                    onClick={() =>
                      setActiveDropdown((prev) =>
                        prev === item.title ? null : item.title
                      )
                    }
                    className="flex items-center gap-1 hover:text-white/80"
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-64 z-50 p-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
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

            <Button
              onClick={() => router.push("/login")}
              className="text-sm font-medium text-white bg-[#ffffff78] hover:bg-[#285384] px-4 py-2 rounded-full"
            >
              Sign In / Log In
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle (Right Side) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#4377B2] text-white px-4 pb-4 space-y-2">
          {navigationItems.map((item) =>
            "dropdown" in item ? (
              <div key={item.title}>
                <button
                  className="w-full text-left py-2 flex justify-between items-center"
                  onClick={() =>
                    setActiveDropdown((prev) =>
                      prev === item.title ? null : item.title
                    )
                  }
                >
                  {item.title}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === item.title &&
                  item.dropdown.map((sub) => (
                    <div key={sub.title} className="pl-4">
                      <Link href={sub.href} className="block py-1">
                        {sub.title}
                      </Link>
                      {sub.subDropdown &&
                        sub.subDropdown.map((nested) => (
                          <Link
                            key={nested.title}
                            href={nested.href}
                            className="block py-1 pl-4 text-sm text-white/80"
                          >
                            {nested.title}
                          </Link>
                        ))}
                    </div>
                  ))}
              </div>
            ) : (
              <Link key={item.title} href={item.href} className="block py-2">
                {item.title}
              </Link>
            )
          )}
          <Button
            onClick={() => router.push("/login")}
            className="w-full mt-2 text-white bg-[#ffffff78] hover:bg-[#285384] px-4 py-2 rounded-full"
          >
            Sign In / Log In
          </Button>
        </div>
      )}
    </header>
  );
};
