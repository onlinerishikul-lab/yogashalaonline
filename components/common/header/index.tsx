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
  const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    dropdown: [
      { title: "Our Teachers", href: "/our-teachers" },
      { title: "Our Blogs", href: "/our-blogs" },
      { title: "Our Testimonials", href: "/our-testimonials" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Payment",
    href: "/payment",
  },
];

  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= window.innerHeight / 2);
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
      <div className="container relative mx-auto min-h-20 flex flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex lg:justify-start ps-4 md:ps-0">
          <Image
            src="/assets/yrlog-01.png"
            alt="yoga logo"
            height={250}
            width={170}
          />
        </div>

        {/* Desktop Menu */}
        <div className="justify-center items-center lg:flex hidden flex-row">
{navigationItems.map((item) =>
  item.dropdown ? (
    <NavigationMenuItem key={item.title} className="relative">
      <NavigationMenuTrigger className="font-medium text-sm text-white hover:text-white/70 hover:bg-transparent">
        {item.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="absolute top-full mt-2 bg-[#4377B2] shadow-md rounded-md px-4 py-3 z-50">
        <ul className="flex flex-col gap-2">
          {item.dropdown.map((subItem) => (
            <li key={subItem.title}>
              <Link
                href={subItem.href}
                className="text-white text-sm hover:text-white/70"
              >
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  ) : (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white h-9 px-4 py-2 hover:text-white/70 hover:bg-transparent"
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
)}



        </div>

        {/* Right side button */}
        <div className="flex justify-end w-full gap-4">
          <Button
            className="py-2 px-4 text-sm text-white font-medium bg-[#ffffff78] rounded-full hover:bg-[#285384]"
            onClick={() => router.push("/login")}
          >
            Sign In / Log In
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-[#4377B2] shadow-lg py-4 z-50">
              <div className="container mx-auto px-4">
                <div className="flex flex-col gap-6">
                  {navigationItems.map((item) =>
                    item.dropdown ? (
                      <div key={item.title} className="flex flex-col gap-1">
                        <span className="text-white font-medium text-lg">
                          {item.title}
                        </span>
                        <ul className="pl-4">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="text-white text-sm hover:text-white/70"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex justify-between items-center text-white hover:text-white/70"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-white" />
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
