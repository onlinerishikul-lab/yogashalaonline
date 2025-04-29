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
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Online Yoga Training", href: "/online-yoga-training" },
    { title: "Online Ayurveda Courses", href: "/ayurveda-courses" },
    { title: "Online Yoga Courses", href: "/yoga-courses" },
    {
      title: "About Us",
      dropdown: [
        { title: "Our Teachers", href: "/about/teachers" },
        { title: "Our Blogs", href: "/about/blogs" },
        { title: "Our Testimonial", href: "/about/testimonials" },
      ],
    },
    { title: "Contact Us", href: "/contact" },
    { title: "Payment", href: "/payment" },
  ];

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
          <Image
            src="/assets/yrlog-01.png"
            alt="yoga logo"
            height={250}
            width={170}
          />
        </div>

        <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) =>
                item.dropdown ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="font-medium text-sm text-white hover:text-white/70">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[300px] p-4">
                      <div className="flex flex-col gap-2">
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
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white h-9 px-4 py-2 hover:text-white/70"
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
                  {navigationItems.map((item) => (
                    <div key={item.title}>
                      <div className="flex flex-col gap-2">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="flex justify-between items-center text-white hover:text-white/70"
                          >
                            <span className="text-lg">{item.title}</span>
                            <MoveRight className="w-4 h-4 stroke-1 text-white" />
                          </Link>
                        ) : (
                          <div className="flex flex-col gap-2">
                            <p className="text-lg text-white">{item.title}</p>
                            {item.dropdown?.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                className="text-sm text-white ps-4 hover:text-white/70"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
