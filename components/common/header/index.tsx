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
    { title: "Home", href: "/" },
    { title: "Online Yoga Training", href: "/yoga-training" },
    { title: "Online Ayurveda Courses", href: "/ayurveda-courses" },
    { title: "Online Yoga Courses", href: "/yoga-courses" },
    { title: "About Us", href: "" }, // dropdown
    { title: "Contact Us", href: "/contact" },
    { title: "Payment", href: "/payment" },
  ];

  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight / 2;
      setIsScrolled(currentScrollY >= viewportHeight);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full z-40 fixed top-0 left-0 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#4377B2] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex lg:justify-start ps-4 md:ps-0">
          <Image src="/assets/yrlog-01.png" alt="yoga logo" height={250} width={170} />
        </div>

        <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-center items-center">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) =>
                item.title === "About Us" ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="font-medium text-sm text-white hover:text-white/70 hover:bg-transparent">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-[#4377B2] p-4 shadow-md rounded-md mt-2">
                      <ul className="grid gap-3 p-2 w-56">
                        <li>
                          <Link href="/our-teachers" className="text-white text-sm hover:text-white/70">
                            Our Teachers
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-blogs" className="text-white text-sm hover:text-white/70">
                            Our Blogs
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-testimonials" className="text-white text-sm hover:text-white/70">
                            Our Testimonials
                          </Link>
                        </li>
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-[#4377B2] shadow-lg py-4">
              <div className="container mx-auto px-4">
                <div className="flex flex-col gap-8">
                  {navigationItems.map((item) =>
                    item.title === "About Us" ? (
                      <div key={item.title} className="flex flex-col gap-2 text-white">
                        <span className="text-lg">About Us</span>
                        <Link href="/our-teachers" className="pl-4 text-sm hover:text-white/70">Our Teachers</Link>
                        <Link href="/our-blogs" className="pl-4 text-sm hover:text-white/70">Our Blogs</Link>
                        <Link href="/our-testimonials" className="pl-4 text-sm hover:text-white/70">Our Testimonials</Link>
                      </div>
                    ) : (
                      <div key={item.title}>
                        <Link
                          href={item.href}
                          className="flex justify-between items-center text-white hover:text-white/70"
                        >
                          <span className="text-lg">{item.title}</span>
                          <MoveRight className="w-4 h-4 stroke-1 text-white" />
                        </Link>
                      </div>
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
