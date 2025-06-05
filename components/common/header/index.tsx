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

// Navigation items configuration
const navigationItems: NavigationItem[] = [
  {
    title: "Yoga Courses",
    dropdown: [
      {
        title: "25 Hrs Yoga Courses",
        href: "/yoga/25-hours",
        subDropdown: [
          { title: "Yoga Anatomy For Safety", href: "/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
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
        href: "/ayurveda/10-hours",
        subDropdown: [
          { title: "Ayurvedic Basics Course for Beginners", href: "/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/" },
          { title: "Ayurvedic Herbal Course", href: "/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/" },
        ],
      },
      {
        title: "15 Hrs Ayurveda Courses",
        href: "/ayurveda/15-hours",
        subDropdown: [
          { title: "Ayurvedic Relationship Course", href: "/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/" },
          { title: "Ayurveda Garbha Samskara Course", href: "/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/" },
        ],
      },
      {
        title: "25 Hrs Ayurveda Courses",
        href: "/ayurveda/25-hours",
        subDropdown: [
          { title: "Ayurveda Immunity Course", href: "/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/" },
          { title: "Ayurveda Skin and Beauty Course", href: "/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/" },
        ],
      },
      {
        title: "50 Hrs Ayurveda Courses",
        href: "/ayurveda/50-hours",
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
      { title: "Hatha Yoga", href: "/Online-Yoga-Classes/Hatha-Yoga/" },
      { title: "Vinyasa Flow", href: "/Online-Yoga-Classes/Vinyasa-Flow/" },
      { title: "Power Yoga", href: "/Online-Yoga-Classes/Power-Yoga/" },
      { title: "Exclusive Reversing Diabetic Yoga", href: "/Online-Yoga-Classes/Exclusive-Reversing-Diabetic-Yoga/" },
      { title: "Yoga Nidra", href: "/Online-Yoga-Classes/Yoga-Nidra/" },
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
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [expandedMobileSubItems, setExpandedMobileSubItems] = useState<string[]>([]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body overflow when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle click outside to close dropdowns
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
    setExpandedMobileItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  // Toggle mobile sub-dropdown
  const toggleMobileSubDropdown = (title: string) => {
    setExpandedMobileSubItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
    setExpandedMobileItems([]);
    setExpandedMobileSubItems([]);
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setOpenSubDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#4377B2] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Main header container */}
      <div className="w-full max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          
          {/* Left Navigation - Desktop only */}
          <nav className="hidden lg:flex flex-1 items-center gap-x-4 xl:gap-x-6 text-white">
            {navigationItems.slice(0, 3).map((item) =>
              "dropdown" in item ? (
                <div key={item.title} className="relative dropdown-parent">
                  <button
                    className="flex items-center gap-1 text-sm xl:text-base font-medium hover:text-white/80 transition-colors duration-200 py-2 px-2"
                    onClick={() =>
                      setActiveDropdown((prev) => (prev === item.title ? null : item.title))
                    }
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </button>
                  
                  {/* Desktop dropdown */}
                  {activeDropdown === item.title && (
                    <div className="absolute bg-white shadow-xl top-full mt-2 rounded-lg w-72 xl:w-80 z-50 p-3 border border-gray-100">
                      {item.dropdown.map((subItem, idx) => (
                        <div key={subItem.title} className="relative group">
                          {idx > 0 && <div className="border-t border-gray-100 my-2" />}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (subItem.subDropdown) {
                                setOpenSubDropdown((prev) =>
                                  prev === subItem.title ? null : subItem.title
                                );
                              } else {
                                router.push(subItem.href);
                                closeAllDropdowns();
                              }
                            }}
                            className="w-full text-left px-4 py-3 text-sm xl:text-base text-gray-700 hover:bg-gray-50 rounded-md flex justify-between items-center transition-colors duration-200"
                          >
                            <span className="font-medium">{subItem.title}</span>
                            {subItem.subDropdown && <ChevronRight className="w-4 h-4 text-gray-400" />}
                          </button>
                          
                          {/* Sub-dropdown */}
                          {openSubDropdown === subItem.title && subItem.subDropdown && (
                            <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-lg min-w-[320px] xl:min-w-[360px] z-50 p-3 border border-gray-100">
                              {subItem.subDropdown.map((nestedItem, nestedIdx) => (
                                <div key={nestedItem.title}>
                                  {nestedIdx > 0 && <div className="border-t border-gray-100 my-2" />}
                                  <Link
                                    href={nestedItem.href}
                                    onClick={closeAllDropdowns}
                                    className="block px-4 py-3 text-sm xl:text-base text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
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
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm xl:text-base font-medium hover:text-white/80 transition-colors duration-200 py-2 px-2"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Logo - Centered */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="block" onClick={closeMobileMenu}>
              <Image
                src="/assets/rishikulonlinlogo.png"
                alt="Rishikul Online Yoga Logo"
                width={100}
                height={60}
                className="w-20 h-12 sm:w-24 sm:h-14 lg:w-28 lg:h-16 xl:w-32 xl:h-18 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Navigation - Desktop only */}
          <nav className="hidden lg:flex flex-1 justify-end items-center gap-x-4 xl:gap-x-6 text-white">
            {navigationItems.slice(3).map((item) =>
              "dropdown" in item ? (
                <div key={item.title} className="relative dropdown-parent">
                  <button
                    className="flex items-center gap-1 text-sm xl:text-base font-medium hover:text-white/80 transition-colors duration-200 py-2 px-2"
                    onClick={() =>
                      setActiveDropdown((prev) => (prev === item.title ? null : item.title))
                    }
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </button>
                  
                  {/* Desktop dropdown */}
                  {activeDropdown === item.title && (
                    <div className="absolute bg-white shadow-xl top-full mt-2 rounded-lg w-64 xl:w-72 z-50 p-3 right-0 border border-gray-100">
                      {item.dropdown.map((subItem, idx) => (
                        <div key={subItem.title}>
                          {idx > 0 && <div className="border-t border-gray-100 my-2" />}
                          <Link
                            href={subItem.href}
                            onClick={closeAllDropdowns}
                            className="block px-4 py-3 text-sm xl:text-base text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {subItem.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm xl:text-base font-medium hover:text-white/80 transition-colors duration-200 py-2 px-2"
                >
                  {item.title}
                </Link>
              )
            )}

            {/* Sign In Button */}
            <Button
              onClick={() => router.push("/login")}
              className="text-sm xl:text-base font-medium text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 xl:px-6 py-2 xl:py-2.5 rounded-full transition-all duration-200 border border-white/20 hover:border-white/30"
            >
              Sign In / Log In
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden z-50">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#4377B2] text-white shadow-xl w-full absolute top-full left-0 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-4 sm:p-6 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-white/10 pb-3 last:border-b-0">
                {"href" in item ? (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-base sm:text-lg py-3 px-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    <span className="font-medium">{item.title}</span>
                    <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                ) : (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-base sm:text-lg py-3 px-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                      onClick={() => toggleMobileDropdown(item.title)}
                    >
                      <span className="font-medium">{item.title}</span>
                      {expandedMobileItems.includes(item.title) ? (
                        <ChevronUp className="w-5 h-5 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="w-5 h-5 transition-transform duration-200" />
                      )}
                    </button>

                    {/* Mobile dropdown content */}
                    {expandedMobileItems.includes(item.title) && (
                      <div className="pl-4 sm:pl-6 space-y-1 mt-2 border-l-2 border-white/20">
                        {item.dropdown.map((subItem, subIdx) => (
                          <div key={subItem.title} className="py-1">
                            {subIdx > 0 && <div className="border-t border-white/10 my-2" />}
                            {subItem.subDropdown ? (
                              <div>
                                <button
                                  className="flex items-center justify-between w-full text-sm sm:text-base py-2 px-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                                  onClick={() => toggleMobileSubDropdown(subItem.title)}
                                >
                                  <span>{subItem.title}</span>
                                  {expandedMobileSubItems.includes(subItem.title) ? (
                                    <ChevronUp className="w-4 h-4 transition-transform duration-200" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                                  )}
                                </button>

                                {/* Mobile sub-dropdown content */}
                                {expandedMobileSubItems.includes(subItem.title) && (
                                  <div className="pl-4 mt-2 space-y-1 border-l border-white/20">
                                    {subItem.subDropdown.map((nestedItem, nestedIdx) => (
                                      <div key={nestedItem.title}>
                                        {nestedIdx > 0 && <div className="border-t border-white/10 my-2" />}
                                        <Link
                                          href={nestedItem.href}
                                          className="block text-xs sm:text-sm py-2 px-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                                          onClick={closeMobileMenu}
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
                                className="block text-sm sm:text-base py-2 px-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                                onClick={closeMobileMenu}
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

            {/* Mobile Sign In Button */}
            <Button
              onClick={() => {
                closeMobileMenu();
                router.push("/login");
              }}
              className="w-full mt-6 text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full py-3 border border-white/20 hover:border-white/30 transition-all duration-200"
            >
              Sign In / Log In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
