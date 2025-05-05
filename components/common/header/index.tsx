"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const router = useRouter();

  const navigationItems = [
    {
      title: "Online Yoga Training",
      dropdown: [
        {
          title: "25 Hrs Yoga Courses",
          href: "/yoga/25-hours",
          subDropdown: [
            { title: "Yoga Anatomy", href: "/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
            { title: "Face Yoga", href: "/yoga/25-hours/face-yoga" },
          ],
        },
        {
          title: "50 Hrs Yoga Courses",
          href: "/yoga/50-hours",
          subDropdown: [
            { title: "Restorative Yoga", href: "/yoga/50-hours/restorative-yoga" },
            { title: "Meditation", href: "/yoga/50-hours/meditation" },
          ],
        },
      ],
    },
    { title: "Online Ayurveda Courses", href: "/courses" },
    { title: "Online Yoga Courses", href: "/courses" },
    {
      title: "About Us",
      dropdown: [
        { title: "Our Teachers", href: "/our-teachers" },
        { title: "Blogs", href: "/blog" },
        { title: "Testimonials", href: "/home/testimonial" },
      ],
    },
    { title: "Contact Us", href: "/contact" },
    { title: "Payment", href: "/payment" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#4377B2] shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/assets/rishikulonlinlogo.png" alt="Logo" width={120} height={60} />
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!isOpen)} className="text-white lg:hidden z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 text-white font-medium">
          {navigationItems.map((item) =>
            item.dropdown ? (
              <div key={item.title} className="relative group">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                  className="flex items-center gap-1"
                >
                  {item.title}
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-60 z-50">
                    {item.dropdown.map((sub) => (
                      <div key={sub.title} className="group relative">
                        <button
                          onClick={() =>
                            sub.subDropdown
                              ? setOpenSubDropdown(openSubDropdown === sub.title ? null : sub.title)
                              : router.push(sub.href)
                          }
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                        >
                          {sub.title}
                          {sub.subDropdown && <ChevronRight size={16} />}
                        </button>
                        {openSubDropdown === sub.title && (
                          <div className="absolute top-0 left-full ml-1 bg-white shadow-lg rounded-md py-2 w-56 z-50">
                            {sub.subDropdown.map((s) => (
                              <Link key={s.title} href={s.href} className="block px-4 py-2 hover:bg-gray-100">
                                {s.title}
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
              <Link key={item.title} href={item.href} className="hover:text-white/80">
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Login Button */}
        <div className="hidden lg:block">
          <Button onClick={() => router.push("/login")}>Login</Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#4377B2] text-white p-6 pt-20 z-40 overflow-y-auto">
          {navigationItems.map((item) =>
            item.dropdown ? (
              <div key={item.title} className="mb-4">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                  className="flex justify-between items-center w-full text-left text-lg font-semibold"
                >
                  {item.title}
                  <ChevronDown size={20} />
                </button>
                {activeDropdown === item.title && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.dropdown.map((sub) => (
                      <div key={sub.title}>
                        <button
                          onClick={() =>
                            sub.subDropdown
                              ? setOpenSubDropdown(openSubDropdown === sub.title ? null : sub.title)
                              : router.push(sub.href)
                          }
                          className="w-full text-left text-base flex justify-between items-center"
                        >
                          {sub.title}
                          {sub.subDropdown && <ChevronRight size={16} />}
                        </button>
                        {openSubDropdown === sub.title &&
                          sub.subDropdown?.map((nested) => (
                            <Link
                              key={nested.title}
                              href={nested.href}
                              className="block text-sm ml-4 mt-1 hover:underline"
                            >
                              {nested.title}
                            </Link>
                          ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.title} href={item.href} className="block text-lg font-semibold mb-4">
                {item.title}
              </Link>
            )
          )}

          {/* Mobile Login Button */}
          <Button onClick={() => router.push("/login")} className="w-full mt-4">
            Login
          </Button>
        </div>
      )}
    </header>
  );
};
