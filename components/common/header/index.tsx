"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, MoveRight, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const navigationItems = [
    { title: "Home", href: "/" },
    {
      title: "Online Yoga Training",
      dropdown: [
        {
          title: "25 Hrs Yoga Courses",
          href: "/yoga/25-hours",
          subDropdown: [
            { title: "Yoga anatomy for safe journey", href: "/yoga/25-hours/yoga-anatomy" },
            { title: "Face Yoga", href: "/yoga/25-hours/face-yoga" },
          ],
        },
        {
          title: "50 Hrs Yoga Courses",
          href: "/yoga/50-hours",
          subDropdown: [
            { title: "Restorative Yoga TTC", href: "/yoga/50-hours/restorative" },
            { title: "Meditation TTC", href: "/yoga/50-hours/meditation" },
            { title: "Pranayama TTC", href: "/yoga/50-hours/pranayama" },
            { title: "Yoga Nidra TTC", href: "/yoga/50-hours/yoga-nidra" },
            { title: "Chair Yoga", href: "/yoga/50-hours/chair-yoga" },
            { title: "Mudra & Mantra", href: "/yoga/50-hours/mudra-mantra" },
            { title: "Kundalini Yoga", href: "/yoga/50-hours/kundalini" },
            { title: "Kids Yoga", href: "/yoga/50-hours/kids-yoga" },
            { title: "Yoga Therapy", href: "/yoga/50-hours/yoga-therapy" },
            { title: "Pregnancy Yoga", href: "/yoga/50-hours/pregnancy-yoga" },
          ],
        },
        {
          title: "75 Hrs Yoga Courses",
          href: "/yoga/75-hours",
          subDropdown: [
            { title: "Core Concept of Yoga Philosophy", href: "/yoga/75-hours/philosophy" },
            { title: "Asana Clinic for Professionals", href: "/yoga/75-hours/asana-clinic" },
          ],
        },
        {
          title: "85 Hrs Yoga Courses",
          href: "/yoga/85-hours",
          subDropdown: [
            { title: "Prenatal & Postnatal Yoga TTC", href: "/yoga/85-hours/prenatal-postnatal" },
          ],
        },
        {
          title: "95 Hrs Yoga Courses",
          href: "/yoga/95-hours",
          subDropdown: [
            { title: "Advanced Kids Yoga TTC", href: "/yoga/95-hours/advanced-kids-yoga" },
          ],
        },
        {
          title: "100 Hrs Yoga Courses",
          href: "/yoga/100-hours",
          subDropdown: [
            { title: "Multi Style Yoga TTC", href: "/yoga/100-hours/multi-style" },
            { title: "Vinyasa Flow Yoga TTC", href: "/yoga/100-hours/vinyasa" },
            { title: "Hatha Yoga TTC", href: "/yoga/100-hours/hatha" },
            { title: "Advanced Yoga Therapy", href: "/yoga/100-hours/advanced-therapy" },
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
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#4377B2] shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/yrlog-01.png" alt="Yoga Logo" width={150} height={80} />
        </Link>

        <nav className="hidden lg:flex items-center space-x-10 text-white text-sm font-medium">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                className="flex items-center gap-1 hover:text-white/80"
              >
                {item.title}
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
              </button>
              {item.dropdown && activeDropdown === item.title && (
                <div className="absolute top-full mt-2 bg-white text-black shadow-md rounded-md w-64 z-50">
                  {item.dropdown.map((sub) => (
                    <div key={sub.title} className="relative group border-b last:border-0">
                      <button
                        onClick={() => setActiveSubDropdown(activeSubDropdown === sub.title ? null : sub.title)}
                        className="flex justify-between w-full px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.title}
                        {sub.subDropdown && <ChevronRight className="w-4 h-4" />}
                      </button>
                      {sub.subDropdown && activeSubDropdown === sub.title && (
                        <div className="absolute left-full top-0 ml-1 bg-white text-black shadow-md rounded-md w-64 z-50">
                          {sub.subDropdown.map((inner) => (
                            <Link
                              key={inner.title}
                              href={inner.href}
                              className="block px-4 py-2 hover:bg-gray-100 border-b last:border-0"
                            >
                              {inner.title}
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

        <div className="hidden lg:block">
          <Button
            onClick={() => router.push("/login")}
            className="text-sm font-medium text-white bg-[#ffffff78] hover:bg-[#285384] px-4 py-2 rounded-full"
          >
            Sign In / Log In
          </Button>
        </div>

        <div className="lg:hidden flex items-center">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </Button>
        </div>
      </div>
    </header>
  );
};
