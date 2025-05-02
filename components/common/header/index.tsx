"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";
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
    {
      title: "Online Yoga Training",
      dropdown: [
        {
          title: "25 Hrs Yoga Courses",
          href: "/yoga/25-hours",
          subDropdown: [
            { title: "Yoga Anatomy for Safe Journey", href: "/yoga/25-hours/yoga-anatomy" },
            { title: "Face Yoga", href: "/yoga/25-hours/face-yoga" },
          ],
        },
        {
          title: "50 Hrs Yoga Courses",
          href: "/yoga/50-hours",
          subDropdown: [
            { title: "Restorative Yoga TTC", href: "/yoga/50-hours/restorative-yoga" },
            { title: "Meditation TTC", href: "/yoga/50-hours/meditation" },
            { title: "Pranayama TTC", href: "/yoga/50-hours/pranayama" },
            { title: "Yoga Nidra TTC", href: "/yoga/50-hours/yoga-nidra" },
            { title: "Chair Yoga", href: "/yoga/50-hours/chair-yoga" },
            { title: "Mudra & Mantra Course", href: "/yoga/50-hours/mudra-mantra" },
            { title: "Kundalini Yoga Course", href: "/yoga/50-hours/kundalini-yoga" },
            { title: "Kids Yoga Course", href: "/yoga/50-hours/kids-yoga" },
            { title: "Yoga Therapy Course", href: "/yoga/50-hours/yoga-therapy" },
            { title: "Pregnancy Yoga", href: "/yoga/50-hours/pregnancy-yoga" },
          ],
        },
        {
          title: "75 Hrs Yoga Courses",
          href: "/yoga/75-hours",
          subDropdown: [
            { title: "Core Concept of Yoga Philosophy", href: "/yoga/75-hours/yoga-philosophy" },
            { title: "Asana Clinic for Yoga Professionals", href: "/yoga/75-hours/asana-clinic" },
          ],
        },
        {
          title: "85 Hrs Yoga Courses",
          href: "/yoga/85-hours",
          subDropdown: [
            { title: "Prenatal & Postnatal Yoga Course for Teachers", href: "/yoga/85-hours/prenatal-postnatal" },
          ],
        },
        {
          title: "95 Hrs Yoga Courses",
          href: "/yoga/95-hours",
          subDropdown: [
            { title: "Advanced Kids Yoga Course", href: "/yoga/95-hours/advanced-kids-yoga" },
          ],
        },
        {
          title: "100 Hrs Yoga Courses",
          href: "/yoga/100-hours",
          subDropdown: [
            { title: "Multi Style Yoga TTC", href: "/yoga/100-hours/multi-style" },
            { title: "Vinyasa Flow Yoga TTC", href: "/yoga/100-hours/vinyasa-flow" },
            { title: "Hatha Yoga TTC", href: "/yoga/100-hours/hatha-yoga" },
            { title: "Advanced Yoga Therapy Course", href: "/yoga/100-hours/advanced-yoga-therapy" },
          ],
        },
        {
          title: "200 Hrs Yoga Courses",
          href: "/yoga/200-hours",
          subDropdown: [
            { title: "Multi Style Yoga TTC", href: "/yoga/200-hours/multi-style" },
          ],
        },
        {
          title: "300 Hrs Yoga Courses",
          href: "/yoga/300-hours",
          subDropdown: [
            { title: "Multi Style Yoga TTC", href: "/yoga/300-hours/multi-style" },
          ],
        },
      ],
    },
    {
      title: "Online Ayurveda Courses",
      href: "/courses",
    },
    {
      title: "Online Yoga Courses",
      href: "/courses",
    },
    {
      title: "About Us",
      dropdown: [
        { title: "Our Teachers", href: "/our-teachers" },
        { title: "Our Blogs", href: "/blog" },
        { title: "Our Testimonials", href: "/home/testimonial" },
      ],
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
    {
      title: "Payment",
      href: "/payment",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const dropdowns = document.querySelectorAll(".dropdown-parent");
      if (
        Array.from(dropdowns).every(
          (dropdown) => !dropdown.contains(e.target as Node)
        )
      ) {
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
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/rishikulonlinlogo.png"
            alt="Yoga Logo"
            width={120}
            height={80}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-white text-sm font-medium">
          {navigationItems.map((item) =>
            "dropdown" in item ? (
              <div key={item.title} className="relative dropdown-parent">
                <button
                  className="flex items-center gap-1 hover:text-white/80"
                  onClick={() =>
                    setActiveDropdown((prev) =>
                      prev === item.title ? null : item.title
                    )
                  }
                >
                  {item.title}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === item.title && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md z-50 w-56">
                    {item.dropdown.map((subItem) => (
                      <div key={subItem.title} className="relative border-b border-gray-200">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (subItem.subDropdown) {
                              setOpenSubDropdown((prev) =>
                                prev === subItem.title ? null : subItem.title
                              );
                            } else {
                              router.push(subItem.href);
                              setActiveDropdown(null);
                              setOpenSubDropdown(null);
                            }
                          }}
                          className="w-full flex justify-between items-center px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          {subItem.title}
                          {subItem.subDropdown && <ChevronRight className="w-4 h-4" />}
                        </button>

                        {openSubDropdown === subItem.title && subItem.subDropdown && (
                          <div className="absolute top-0 left-full ml-1 bg-white shadow-lg rounded-md w-56 z-50">
                            {subItem.subDropdown.map((nestedItem) => (
                              <Link
                                key={nestedItem.title}
                                href={nestedItem.href}
                                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 border-b border-gray-200"
                              >
                                {nestedItem.title}
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
                className="hover:text-white/80 transition"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Login Button */}
        <div className="hidden lg:block ml-6">
          <Button onClick={() => router.push("/login")} className="text-sm">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};
