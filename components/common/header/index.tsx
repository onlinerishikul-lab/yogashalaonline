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
// import { authClient } from "@/lib/auth-client";
// import signout from "@/server-actions/auth/signout";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Header = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "About",
      href: "/about",
      description: "",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "",
    },
    {
      title: "Courses",
      href: "/courses",
      description: "",
    },
    // {
    //   title: "Yoga Instructor",
    //   href: "/instructor",
    //   description: "",
    // },
    {
      title: "Contact",
      href: "/contact",
      description: "",
    },
    {
      title: "Payment",
      href: "/contact ",
      description: "",
    },
  ];

  const router = useRouter();
  // const session = authClient.useSession();
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight / 2;

      // Update background color based on viewport height
      if (currentScrollY >= viewportHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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
          <NavigationMenu className="flex justify-center items-center">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white h-9 px-4 py-2 hover:text-white/70  hover:bg-transparent"
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              Book a call today
                            </Button>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-end w-full gap-4">
          {/* <div className="border-r hidden md:inline" /> */}
          {/* {session.data ? (
            <Button variant="outline" onClick={() => signout()}>
              Sign out
            </Button>
          ) : ( */}
          <Button
            className="py-2 px-4 text-sm text-white font-medium bg-[#ffffff78] rounded-full hover:bg-[#285384]"
            onClick={() => router.push("/login")}
          >
            Sign In / Log In
          </Button>
          {/* )} */}
        </div>
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
                          <p className="text-lg text-white">{item.title}</p>
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
