"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, MoveRight, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const router = useRouter();

  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
   {
  title: "Yoga Teacher Training Courses (TTC)",
  dropdown: [
    {
      category: "25 Hr Courses",
      items: [
        { title: "Yoga Anatomy for a Safe Journey", href: "/yoga/25hr-anatomy" },
        { title: "Face Yoga", href: "/yoga/25hr-face-yoga" },
      ],
    },
    {
      category: "50 Hr Courses",
      items: [
        { title: "Restorative Yoga TTC", href: "/yoga/50hr-restorative" },
        { title: "Meditation TTC", href: "/yoga/50hr-meditation" },
        { title: "Pranayama TTC", href: "/yoga/50hr-pranayama" },
        { title: "Yoga Nidra TTC", href: "/yoga/50hr-yoga-nidra" },
        { title: "Chair Yoga", href: "/yoga/50hr-chair-yoga" },
        { title: "Mudra & Mantra Course", href: "/yoga/50hr-mudra-mantra" },
        { title: "Kundalini Yoga Course", href: "/yoga/50hr-kundalini" },
        { title: "Kids Yoga Course", href: "/yoga/50hr-kids" },
        { title: "Yoga Therapy Course", href: "/yoga/50hr-therapy" },
        { title: "Pregnancy Yoga", href: "/yoga/50hr-pregnancy" },
      ],
    },
    {
      category: "75 Hr Courses",
      items: [
        { title: "Core Concepts of Yoga Philosophy", href: "/yoga/75hr-philosophy" },
        { title: "Asana Clinic for Yoga Professionals", href: "/yoga/75hr-asana-clinic" },
      ],
    },
    {
      category: "85–95 Hr Courses",
      items: [
        { title: "Prenatal & Postnatal Yoga for Teachers", href: "/yoga/85hr-prenatal" },
        { title: "Advanced Kids Yoga Course", href: "/yoga/95hr-kids" },
      ],
    },
    {
      category: "100 Hr Courses",
      items: [
        { title: "Multi-Style Yoga TTC", href: "/yoga/100hr-multistyle" },
        { title: "Vinyasa Flow Yoga TTC", href: "/yoga/100hr-vinyasa" },
        { title: "Hatha Yoga TTC", href: "/yoga/100hr-hatha" },
        { title: "Advanced Yoga Therapy Course", href: "/yoga/100hr-therapy" },
      ],
    },
    {
      category: "200 Hr Courses",
      items: [
        { title: "Multi-Style Yoga TTC", href: "/yoga/200hr-multistyle" },
      ],
    },
    {
      category: "300 Hr Courses",
      items: [
        { title: "Multi-Style Yoga TTC", href: "/yoga/300hr-multistyle" },
      ],
    }
  ]
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
        <Link href="/">
          <Image
            src="/assets/yrlog-01.png"
            alt="Yoga Logo"
            width={150}
            height={80}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10 text-white text-sm font-medium">
          {navigationItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.title}
                className="relative dropdown-parent"
                onClick={() =>
                  setActiveDropdown((prev) =>
                    prev === item.title ? null : item.title
                  )
                }
              >
                <button className="flex items-center gap-1 hover:text-white/80">
                  {item.title}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === item.title && (
                  <div className="absolute bg-white shadow-lg top-full mt-2 rounded-md p-2 w-44 z-50">
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
                className="hover:text-white/80 transition"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Login Button */}
        <div className="hidden lg:block">
          <Button
            onClick={() => router.push("/login")}
            className="text-sm font-medium text-white bg-[#ffffff78] hover:bg-[#285384] px-4 py-2 rounded-full"
          >
            Sign In / Log In
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#4377B2] text-white shadow-md w-full absolute top-full left-0 z-40">
          <div className="p-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.href && (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-lg py-2 hover:text-white/80"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                    <MoveRight className="w-4 h-4" />
                  </Link>
                )}
                {item.dropdown && (
                  <>
                    <p className="text-lg mt-2">{item.title}</p>
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block text-sm hover:text-white/80"
                          onClick={() => setOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <Button
              onClick={() => {
                setOpen(false);
                router.push("/login");
              }}
              className="w-full mt-4 text-white bg-[#ffffff78] hover:bg-[#285384] rounded-full py-2"
            >
              Sign In / Log In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
