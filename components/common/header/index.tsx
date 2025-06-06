"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Menu,
  MoveRight,
  X,
  ChevronDown,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
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
  | { title: string; href: string }
  | { title: string; dropdown: DropdownItem[] };

const navigationItems: NavigationItem[] = [
  {
    title: "Yoga Courses",
    dropdown: [
      {
        title: "25 Hrs Yoga Courses",
        href: "/yoga/25-hours",
        subDropdown: [
          { title: "Yoga Anotomy For Safety", href: "/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
          { title: "Face Yoga TTC", href: "/25-Hrs-Yoga-Courses/face-yoga/" },
        ],
      },
      {
        title: "50 Hrs Yoga Courses",
        href: "/yoga/50-hours",
        subDropdown: [
          { title: "Restorative Yoga TTC", href: "/50-Hrs-Yoga-Courses/Restorative-Yoga-TTC/" },
          { title: "Meditation TTC", href: "/50-Hrs-Yoga-Courses/Meditation-TTC/" },
          { title: "Pranayama TTC", href: "/50-Hrs-Yoga-Courses/Pranayama-TTC/" },
          { title: "Yoga Nidra TTC", href: "/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/" },
          { title: "Chair Yoga TTC", href: "/50-Hrs-Yoga-Courses/Chair-Yoga/" },
          { title: "Mudra & Mantra Course", href: "/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/" },
          { title: "Kundalini Yoga Course", href: "/50-Hrs-Yoga-Courses/Kundalini-Yoga-Course/" },
          { title: "Kids Yoga Course", href: "/50-Hrs-Yoga-Courses/Kids-Yoga-Course/" },
          { title: "Yoga Therapy Course", href: "/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/" },
          { title: "Pregnancy Yoga", href: "/50-Hrs-Yoga-Courses/Pregnancy-Yoga/" },
        ],
      },
      {
        title: "75 Hrs Yoga Courses",
        href: "/yoga/75-hours",
        subDropdown: [
          { title: "Core Concept of Yoga Philosophy", href: "/75-Hrs-Yoga-Courses/Yoga-Philosophy/" },
          { title: "Asana Clinic for Yoga Professionals", href: "/75-Hrs-Yoga-Courses/Asana-Clinic/" },
        ],
      },
      {
        title: "85 Hrs Yoga Courses",
        href: "/yoga/85-hours",
        subDropdown: [
          { title: "Prenatal & Postnatal Yoga Course for Teachers", href: "/85-Hrs-Yoga-Courses/Prenatal-Postnatal/" },
        ],
      },
      {
        title: "95 Hrs Yoga Courses",
        href: "/yoga/95-hours",
        subDropdown: [
          { title: "Kids Yoga Course", href: "/95-Hrs-Yoga-Courses/Kids-Yoga-Course/" },
        ],
      },
      {
        title: "100 Hrs Yoga Courses",
        href: "/yoga/100-hours",
        subDropdown: [
          { title: "Multi Style Yoga TTC", href: "/100-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
          { title: "Vinyasa Flow Yoga TTC", href: "/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/" },
          { title: "Hatha Yoga TTC", href: "/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/" },
          { title: "Advanced Yoga Therapy Course", href: "/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/" },
        ],
      },
      {
        title: "200 Hrs Yoga Courses",
        href: "/yoga/200-hours",
        subDropdown: [
          { title: "Multi Style Yoga TTC", href: "/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
        ],
      },
      {
        title: "300 Hrs Yoga Courses",
        href: "/yoga/300-hours",
        subDropdown: [
          { title: "Multi Style Yoga TTC", href: "/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
        ],
      },
    ],
  },
  {
    title: "Ayurveda Courses",
    dropdown: [
      {
        title: "10 Hrs Ayurveda Courses",
        href: "/yoga/25-hours",
        subDropdown: [
          { title: "Ayurvedic Basics Course for Beginners", href: "/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/" },
          { title: "Ayurvedic Herbal Course", href: "/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/" },
        ],
      },
      {
        title: "15 Hrs Ayurveda Courses",
        href: "/yoga/50-hours",
        subDropdown: [
          { title: "Ayurvedic Relationship Course", href: "/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/" },
          { title: "Ayurveda Garbha Samskara Course", href: "/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/" },
        ],
      },
      {
        title: "25 Hrs Ayurveda Courses",
        href: "/yoga/75-hours",
        subDropdown: [
          { title: "Ayurveda Immunity Course", href: "/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/" },
          { title: "Ayurveda Skin and Beauty Course", href: "/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/" },
        ],
      },
      {
        title: "50 Hrs Ayurveda Courses",
        href: "/yoga/85-hours",
        subDropdown: [
          { title: "Ayurvedic Foundational Course", href: "/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/" },
          { title: "Ayurvedic Diet and Nutrition Course", href: "/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/" },
          { title: "Ayurvedic Lifestyle Course", href: "/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/" },
        ],
      },
    ],
  },
  {
    title: "Yoga Classes",
    dropdown: [
      { title: "Prenatal Yoga", href: "/Online-Yoga-Classes/Prenatal-Yoga/" },
      { title: "Postnatal Yoga", href: "/Online-Yoga-Classes/Postnatal-Yoga/" },
      { title: "Meditation", href: "/Online-Yoga-Classes/Meditation/" },
      { title: "Pranayama", href: "/Online-Yoga-Classes/Pranayama/" },
      { title: "Hatha Yoga", href:"/Online-Yoga-Classes/Hatha-Yoga/" },
      { title: "Vinyasa Flow", href: "/Online-Yoga-Classes/Vinyasa-Flow/" },
      { title: "Power Yoga", href:"/Online-Yoga-Classes/Power Yoga/" },
      { title: "Exclusive Reversing Diabetic Yoga", href:"/Online-Yoga-Classes/Exclusive Reversing Diabetic Yoga/" },
      { title: "Yoga Nidra", href: "/Online-Yoga-Classes/Yoga Nidra/" },
    ],
  },
  {
    title: "About Us",
    dropdown: [
      { title: "Our Teachers", href: "/our-teachers" },
      { title: "Our Blogs", href: "/blog" },
      { title: "Our Testimonials", href: "/testimonial" },
    ],
  },
  { title: "Contact Us", href: "/contact" },
  { title: "Payment", href: "/payments" },
];

export const Header = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [expandedMobileSubItems, setExpandedMobileSubItems] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY >= window.innerHeight / 2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

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

  const toggleMobileDropdown = (title: string) => {
    setExpandedMobileItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const toggleMobileSubDropdown = (title: string) => {
    setExpandedMobileSubItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#4377B2] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between relative">
          {/* Left Nav */}
          <div className="flex flex-1 items-center gap-x-8 text-white text-sm font-medium">
            {navigationItems.slice(0, 3).map((item) =>
              "dropdown" in item ? (
                <div key={item.title} className="relative dropdown-parent">
                  <button
                    className="flex items-center gap-1 hover:text-white/80 whitespace-nowrap"
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
                          {idx > 0 && <div className="border-t border-gray-200 my-1" />}
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
                            <div className="absolute top-0 left-full ml-1 bg-white shadow-lg rounded-md min-w-[300px] z-50 p-2 space-y-1 whitespace-nowrap">
                              {subItem.subDropdown.map((nestedItem, nestedIdx) => (
                                <div key={nestedItem.title}>
                                  {nestedIdx > 0 && <div className="border-t border-gray-200 my-1" />}
                                  <Link
                                    href={nestedItem.href}
                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
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
                <Link key={item.title} href={item.href} className="hover:text-white/80 whitespace-nowrap">
                  {item.title}
                </Link>
              )
            )}
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mx-8">
            <Image
              src="/assets/rishikulonlinlogo.png"
              alt="Yoga Logo"
              width={120}
              height={80}
              className="w-auto h-16"
            />
          </Link>

          {/* Right Nav */}
          <div className="flex flex-1 justify-end items-center gap-x-8 text-white text-sm font-medium">
            {navigationItems.slice(3).map((item) =>
              "dropdown" in item ? (
                <div key={item.title} className="relative dropdown-parent">
                  <button
                    className="flex items-center gap-1 hover:text-white/80 whitespace-nowrap"
                    onClick={() =>
                      setActiveDropdown((prev) => (prev === item.title ? null : item.title))
                    }
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute bg-white shadow-lg top-full mt-2 rounded-md w-64 z-50 p-2 space-y-1 right-0">
                      {item.dropdown.map((subItem, idx) => (
                        <div key={subItem.title}>
                          {idx > 0 && <div className="border-t border-gray-200 my-1" />}
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
                <Link key={item.title} href={item.href} className="hover:text-white/80 whitespace-nowrap">
                  {item.title}
                </Link>
              )
            )}

            <Button
              onClick={() => router.push("/login")}
              className="text-sm font-medium text-white bg-[#ffffff78] hover:bg-[#285384] px-4 py-2 rounded-full whitespace-nowrap"
            >
              Sign In / Log In
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="w-full px-4 py-3 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="p-2">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </Button>

          {/* Logo - Centered */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/assets/rishikulonlinlogo.png"
              alt="Yoga Logo"
              width={100}
              height={67}
              className="w-auto h-10 sm:h-12"
              priority
            />
          </Link>

          {/* Empty space for balance */}
          <div className="w-10"></div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-[#4377B2] text-white shadow-md w-full max-h-[80vh] overflow-y-auto">
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
                        <span className="truncate">{item.title}</span>
                        {expandedMobileItems.includes(item.title) ? (
                          <ChevronUp className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 flex-shrink-0" />
                        )}
                      </button>

                      {expandedMobileItems.includes(item.title) && (
                        <div className="pl-4 space-y-2 mt-2 border-l-2 border-white/20">
                          {item.dropdown.map((subItem, subIdx) => (
                            <div key={subItem.title} className="py-1">
                              {subIdx > 0 && <div className="border-t border-white/10 my-2" />}
                              {subItem.subDropdown ? (
                                <div>
                                  <button
                                    className="flex items-center justify-between w-full text-base hover:text-white/80"
                                    onClick={() => toggleMobileSubDropdown(subItem.title)}
                                  >
                                    <span className="truncate">{subItem.title}</span>
                                    {expandedMobileSubItems.includes(subItem.title) ? (
                                      <ChevronUp className="w-4 h-4 flex-shrink-0" />
                                    ) : (
                                      <ChevronDown className="w-4 h-4 flex-shrink-0" />
                                    )}
                                  </button>

                                  {expandedMobileSubItems.includes(subItem.title) && (
                                    <div className="pl-4 mt-2 space-y-2 border-l border-white/20">
                                      {subItem.subDropdown.map((nestedItem, nestedIdx) => (
                                        <div key={nestedItem.title}>
                                          {nestedIdx > 0 && <div className="border-t border-white/10 my-2" />}
                                          <Link
                                            href={nestedItem.href}
                                            className="block text-sm hover:text-white/80 py-1 truncate"
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
                                  className="block text-base hover:text-white/80 truncate"
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
      </div>
    </header>
  );
};
