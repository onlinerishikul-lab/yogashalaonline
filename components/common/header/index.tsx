"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, MoveRight, X, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
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
            { title: "Yoga Anotomy For Safety", href: "/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
            { title: "Face Yoga TTC", href: "/25-Hrs-Yoga-Courses/face-yoga/" },
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
      dropdown: [
        {
          title: "10 Hrs Ayurveda Courses",
          href: "/yoga/25-hours",
          subDropdown: [
            { title: "Ayurvedic Basics Course for Beginners", href: "/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
            { title: "Ayurvedic Herbal Course", href: "/yoga/25-hours/face-yoga" },
          ],
        },
        {
          title: "15 Hrs Ayurveda Courses",
          href: "/yoga/50-hours",
          subDropdown: [
            { title: "Ayurvedic Sexual Relationship Course", href: "/yoga/50-hours/restorative-yoga" },
            { title: "Ayurveda Garbha Samskara Course", href: "/yoga/50-hours/meditation" },
          ],
        },
        {
          title: "25 Hrs Ayurveda Courses",
          href: "/yoga/75-hours",
          subDropdown: [
            { title: "Ayurveda Immunity Course", href: "/yoga/75-hours/yoga-philosophy" },
            { title: "Ayurveda Skin and Beauty Course", href: "/yoga/75-hours/asana-clinic" },
          ],
        },
        {
          title: "50 Hrs Ayurveda Courses",
          href: "/yoga/85-hours",
          subDropdown: [
            { title: "Ayurvedic Foundational Course", href: "/yoga/85-hours/prenatal-postnatal" },
            { title: "Ayurvedic Diet and Nutrition Course", href: "/yoga/85-hours/prenatal-postnatal" },
            { title: "Ayurvedic Lifestyle Course", href: "/yoga/85-hours/prenatal-postnatal" },
          ],
        },
      ],
    },
    {
      title: "Online Yoga Classes",
      dropdown: [
        { title: "Prenatal Yoga", href: "/daily-classes/prenatal-yoga" },
        { title: "Postnatal Yoga", href: "/daily-classes/postnatal-yoga" },
        { title: "Meditation", href: "/daily-classes/meditation" },
        { title: "Pranayama", href: "/daily-classes/pranayama" },
        { title: "Hatha Yoga", href: "/daily-classes/hatha-yoga" },
        { title: "Vinyasa Flow", href: "/daily-classes/vinyasa-flow" },
      ],
    },
    {
      title: "About Us",
      dropdown: [
        { title: "Our Teachers", href: "/our-teachers" },
        { title: "Our Blogs", href: "/blog" },
        { title: "Our Testimonials", href: "/home/testimonial" },
      ],
    },
    { title: "Contact Us", href: "/contact" },
    { title: "Payment", href: "/payment" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  
  // Mobile dropdown states
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [expandedMobileSubItems, setExpandedMobileSubItems] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= window.innerHeight / 2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const dropdowns = document.querySelectorAll(".dropdown-parent");
      if ([...dropdowns].every((d) => !d.contains(e.target as Node))) {
        setActiveDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (title: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title) 
        : [...prev, title]
    );
  };

  // Toggle mobile subdropdown
  const toggleMobileSubDropdown = (title: string) => {
    setExpandedMobileSubItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title) 
        : [...prev, title]
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#4377B2] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Nav */}
        <div className="hidden lg:flex flex-1 items-center gap-x-8 text-white text-sm font-medium">
          {navigationItems.slice(0, 3).map((item) =>
            "dropdown" in item ? (
              <div key={item.title} className="relative dropdown-parent">
                <button
                  className="flex items-center gap-1 hover:text-white/80"
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === item.title ? null : item.title))
                  }
                >
                  {item.title}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === item.title && (
                  <div className="absolute bg-white shadow-lg top-full mt-2 rounded-md w-64 z-50 p-2 space-y-1">
                    {item.dropdown.map((subItem, idx) => (
                      <div key={subItem.title} className="relative group">
                        {idx > 0 && <div className="border-t border-gray-200 my-1"></div>}
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
                          className="w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 flex justify-between items-center"
                        >
                          {subItem.title}
                          {subItem.subDropdown && <ChevronRight className="w-4 h-4" />}
                        </button>
                        {openSubDropdown === subItem.title && subItem.subDropdown && (
                          <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md z-50 p-2 flex flex-col space-y-1 whitespace-nowrap">

                            {subItem.subDropdown.map((nestedItem, nestedIdx) => (
                              <div key={nestedItem.title}>
                                {nestedIdx > 0 && <div className="border-t border-gray-200 my-1"></div>}
                                <Link
  href={nestedItem.href}
  className="inline-block px-4 py-2 text-sm text-black hover:bg-gray-100 whitespace-nowrap"
>
  {nestedItem.title}
</Link>

                              </div>
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
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/assets/rishikulonlinlogo.png" alt="Yoga Logo" width={120} height={80} />
        </Link>

        {/* Right Nav */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-x-8 text-white text-sm font-medium">
          {navigationItems.slice(3).map((item) =>
            "dropdown" in item ? (
              <div key={item.title} className="relative dropdown-parent">
                <button
                  className="flex items-center gap-1 hover:text-white/80"
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === item.title ? null : item.title))
                  }
                >
                  {item.title}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === item.title && (
                  <div className="absolute top-0 left-full ml-1 bg-white shadow-lg rounded-md z-50 p-2 flex whitespace-nowrap space-x-2 overflow-x-auto">
                    {item.dropdown.map((subItem, idx) => (
                      <div key={subItem.title}>
                        {idx > 0 && <div className="border-t border-gray-200 my-1"></div>}
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
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

          {/* Login Button */}
          <Button
            onClick={() => router.push("/login")}
            className="text-sm font-medium text-white bg-[#ffffff78] hover:bg-[#285384] px-4 py-2 rounded-full"
          >
            Sign In / Log In
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#4377B2] text-white shadow-md w-full absolute top-full left-0 z-40 max-h-[80vh] overflow-y-auto">
          <div className="p-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-white/20 pb-2">
                {"href" in item ? (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-lg py-2 hover:text-white/80"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                    <MoveRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-lg py-2 hover:text-white/80"
                      onClick={() => toggleMobileDropdown(item.title)}
                    >
                      {item.title}
                      {expandedMobileItems.includes(item.title) ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    
                    {expandedMobileItems.includes(item.title) && (
                      <div className="pl-4 space-y-2 mt-2 border-l-2 border-white/20">
                        {item.dropdown.map((subItem, subIdx) => (
                          <div key={subItem.title} className="py-1">
                            {subIdx > 0 && <div className="border-t border-white/10 my-2"></div>}
                            {subItem.subDropdown ? (
                              <div>
                                <button
                                  className="flex items-center justify-between w-full text-base hover:text-white/80"
                                  onClick={() => toggleMobileSubDropdown(subItem.title)}
                                >
                                  {subItem.title}
                                  {expandedMobileSubItems.includes(subItem.title) ? (
                                    <ChevronUp className="w-4 h-4" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4" />
                                  )}
                                </button>
                                
                                {expandedMobileSubItems.includes(subItem.title) && (
                                  <div className="pl-4 mt-2 space-y-2 border-l border-white/20">
                                    {subItem.subDropdown.map((nestedItem, nestedIdx) => (
                                      <div key={nestedItem.title}>
                                        {nestedIdx > 0 && <div className="border-t border-white/10 my-2"></div>}
                                        <Link
                                          href={nestedItem.href}
                                          className="block text-sm hover:text-white/80 py-1"
                                          onClick={() => setOpen(false)}
                                        >
                                          {nestedItem.title}
                                        </Link>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={subItem.href}
                                className="block text-base hover:text-white/80"
                                onClick={() => setOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
