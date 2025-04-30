"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight / 2;
      setIsScrolled(currentScrollY >= viewportHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-40 fixed top-0 left-0 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#4377B2] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto min-h-20 flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/assets/yrlog-01.png" alt="yoga logo" height={250} width={170} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title} className="relative">
                  {item.dropdown ? (
                    <>
                      <NavigationMenuTrigger className="text-white text-sm font-medium bg-transparent hover:bg-white/10">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="mt-2 bg-white shadow-lg rounded-md p-2 w-56">
                        <div className="flex flex-col gap-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="text-sm text-black hover:underline"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="text-white text-sm font-medium hover:text-white/70"
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Sign In */}
        <div className="hidden lg:block">
          <Button
            className="text-white font-medium bg-[#ffffff78] hover:bg-[#285384] rounded-full"
            onClick={() => router.push("/login")}
          >
            Sign In / Log In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-[#4377B2] px-4 py-6">
          <div className="flex flex-col gap-6">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.href && (
                  <Link
                    href={item.href}
                    className="text-white text-lg flex items-center justify-between"
                  >
                    {item.title}
                    <MoveRight className="w-4 h-4" />
                  </Link>
                )}
                {item.dropdown && (
                  <>
                    <p className="text-white text-lg">{item.title}</p>
                    <div className="pl-4 flex flex-col gap-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="text-sm text-white hover:text-white/70"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
