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
    { title: "Home", href: "/" },
    { title: "Online Yoga Training", href: "/online-yoga-training" },
    { title: "Online Ayurveda Courses", href: "/online-ayurveda-courses" },
    { title: "Online Yoga Courses", href: "/online-yoga-courses" },
    {
      title: "About Us",
      dropdown: [
        { title: "Our Teachers", href: "/our-teachers" },
        { title: "Our Blogs", href: "/our-blogs" },
        { title: "Our Testimonials", href: "/our-testimonials" },
      ],
    },
    { title: "Contact Us", href: "/contact" },
    { title: "Payment", href: "/payment" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#4377B2] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/yrlog-01.png" alt="Yoga Logo" width={150} height={80} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-white text-sm font-medium">
          {navigationItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-white/80">
                  {item.title}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {dropdownOpen && (
                  <div className="absolute bg-white shadow-lg top-full mt-2 rounded-md p-2 w-52 z-50">
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
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
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
