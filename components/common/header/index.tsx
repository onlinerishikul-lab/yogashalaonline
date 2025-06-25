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
          { title: "Yoga Anotomy For Safety", href: "/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
          { title: "Face Yoga TTC", href: "/Yoga-Courses/25-Hrs-Yoga-Courses/face-yoga/" },
        ],
      },
      {
        title: "50 Hrs Yoga Courses",
        href: "/yoga/50-hours",
        subDropdown: [
          { title: "Restorative Yoga TTC", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Restorative-Yoga-TTC/" },
          { title: "Meditation TTC", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Meditation-TTC/" },
          { title: "Pranayama TTC", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Pranayama-TTC/" },
          { title: "Yoga Nidra TTC", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/" },
          { title: "Chair Yoga TTC", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Chair-Yoga/" },
          { title: "Mudra & Mantra Course", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/" },
          { title: "Kundalini Yoga Course", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Kundalini-Yoga-Course/" },
          { title: "Kids Yoga Course", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Kids-Yoga-Course/" },
          { title: "Yoga Therapy Course", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/" },
          { title: "Pregnancy Yoga", href: "/Yoga-Courses/50-Hrs-Yoga-Courses/Pregnancy-Yoga/" },
        ],
      },
      {
        title: "75 Hrs Yoga Courses",
        href: "/yoga/75-hours",
        subDropdown: [
          { title: "Core Concept of Yoga Philosophy", href: "/Yoga-Courses/75-Hrs-Yoga-Courses/Yoga-Philosophy/" },
          { title: "Asana Clinic for Yoga Professionals", href: "/Yoga-Courses/75-Hrs-Yoga-Courses/Asana-Clinic/" },
        ],
      },
      {
        title: "85 Hrs Yoga Courses",
        href: "/yoga/85-hours",
        subDropdown: [
          { title: "Prenatal & Postnatal Yoga Course for Teachers", href: "/Yoga-Courses/85-Hrs-Yoga-Courses/Prenatal-Postnatal/" },
        ],
      },
      {
        title: "95 Hrs Yoga Courses",
        href: "/yoga/95-hours",
        subDropdown: [
          { title: "Kids Yoga Course", href: "/Yoga-Courses/95-Hrs-Yoga-Courses/Kids-Yoga-Course/" },
        ],
      },
      {
        title: "100 Hrs Yoga Courses",
        href: "/yoga/100-hours",
        subDropdown: [
          { title: "Multi Style Yoga TTC", href: "/Yoga-Courses/100-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
          { title: "Vinyasa Flow Yoga TTC", href: "/Yoga-Courses/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/" },
          { title: "Hatha Yoga TTC", href: "/Yoga-Courses/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/" },
          { title: "Advanced Yoga Therapy Course", href: "/Yoga-Courses/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/" },
        ],
      },
      {
        title: "200 Hrs Yoga Courses",
        href: "/yoga/200-hours",
        subDropdown: [
          { title: "Multi Style Yoga TTC", href: "/Yoga-Courses/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
        ],
      },
      {
        title: "300 Hrs Yoga Courses",
        href: "/yoga/300-hours",
        subDropdown: [
          { title: "Multi Style Yoga TTC", href: "/Yoga-Courses/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
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
          { title: "Ayurvedic Basics Course for Beginners", href: "/Ayurveda-Courses/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/" },
          { title: "Ayurvedic Herbal Course", href: "/Ayurveda-Courses/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/" },
        ],
      },
      {
        title: "15 Hrs Ayurveda Courses",
        href: "/yoga/50-hours",
        subDropdown: [
          { title: "Ayurvedic Relationship Course", href: "/Ayurveda-Courses/15-Hrs-Ayurveda-Courses/Ayurvedic-Relationship/" },
          { title: "Ayurveda Garbha Samskara Course", href: "/Ayurveda-Courses/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/" },
        ],
      },
      {
        title: "25 Hrs Ayurveda Courses",
        href: "/yoga/75-hours",
        subDropdown: [
          { title: "Ayurveda Immunity Course", href: "/Ayurveda-Courses/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/" },
          { title: "Ayurveda Skin and Beauty Course", href: "/Ayurveda-Courses/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/" },
        ],
      },
      {
        title: "50 Hrs Ayurveda Courses",
        href: "/yoga/85-hours",
        subDropdown: [
          { title: "Ayurvedic Foundational Course", href: "/Ayurveda-Courses/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/" },
          { title: "Ayurvedic Diet and Nutrition Course", href: "/Ayurveda-Courses/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/" },
          { title: "Ayurvedic Lifestyle Course", href: "/Ayurveda-Courses/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/" },
        ],
      },
    ],
  },
  {
    title: "Yoga Classes",
    dropdown: [
      { title: "Prenatal Yoga", href: "/Yoga-Classes/Prenatal-Yoga/" },
      { title: "Postnatal Yoga", href: "/Yoga-Classes/Postnatal-Yoga/" },
      { title: "Meditation", href: "/Yoga-Classes/Meditation/" },
      { title: "Pranayama", href: "/Yoga-Classes/Pranayama/" },
      { title: "Hatha Yoga", href:"/Yoga-Classes/Hatha-Yoga/" },
      { title: "Vinyasa Flow", href: "/Yoga-Classes/Vinyasa-Flow/" },
      { title: "Power Yoga", href:"/Yoga-Classes/Power-Yoga/" },
      { title: "Diabetic Yoga", href:"/Yoga-Classes/Exclusive-Reversing-Diabetic-Yoga/" },
      { title: "Yoga Nidra", href: "/Yoga-Classes/Yoga Nidra/" },
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

function NavigationMenu({
  navigationItems,
  expandedMobileItems,
  expandedMobileSubItems,
  toggleMobileDropdown,
  toggleMobileSubDropdown,
  setOpen,
  router
}: {
  navigationItems: NavigationItem[];
  expandedMobileItems: string[];
  expandedMobileSubItems: string[];
  toggleMobileDropdown: (title: string) => void;
  toggleMobileSubDropdown: (title: string) => void;
  setOpen: (open: boolean) => void;
  router: ReturnType<typeof useRouter>;
}) {
  // ... (keep this function unchanged)
  // (No changes required for NavigationMenu)
}

export const Header = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [expandedMobileSubItems, setExpandedMobileSubItems] = useState<string[]>([]);
  const [logoScale, setLogoScale] = useState(1); // <-- NEW STATE

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight / 2;
      // Clamp scroll value between 0 and threshold
      const clampedScroll = Math.min(Math.max(scrollY, 0), threshold);
      // Scale from 1 to 0.7 as the user scrolls half the viewport
      const minScale = 0.7;
      const scale =
        1 - ((1 - minScale) * clampedScroll) / threshold;
      setLogoScale(scale);
      setIsScrolled(scrollY >= threshold);
    };
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
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            className="p-2 mr-4 lg:flex hidden"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </Button>
          <div className="flex flex-1 items-center gap-x-8" />
          <Link href="/" className="flex-shrink-0 mx-8">
            <div
              style={{
                transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                transform: `scale(${logoScale})`,
                willChange: "transform",
                display: "inline-block",
              }}
            >
              <Image
                src="/assets/rishikulonlinlogo.png"
                alt="Yoga Logo"
                width={120}
                height={80}
                className="w-auto h-16"
                priority
              />
            </div>
          </Link>
          <div className="flex flex-1 justify-end items-center gap-x-8" />
        </div>
        {/* Sidebar Menu (titles only inside menu) */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
            <div className="bg-[#4377B2] text-white shadow-md w-[340px] max-w-full h-full overflow-y-auto">
              <NavigationMenu
                navigationItems={navigationItems}
                expandedMobileItems={expandedMobileItems}
                expandedMobileSubItems={expandedMobileSubItems}
                toggleMobileDropdown={toggleMobileDropdown}
                toggleMobileSubDropdown={toggleMobileSubDropdown}
                setOpen={setOpen}
                router={router}
              />
            </div>
            <div className="flex-1" onClick={() => setOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="w-full px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="p-2">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </Button>
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <div
              style={{
                transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                transform: `scale(${logoScale})`,
                willChange: "transform",
                display: "inline-block",
              }}
            >
              <Image
                src="/assets/rishikulonlinlogo.png"
                alt="Yoga Logo"
                width={100}
                height={67}
                className="w-auto h-10 sm:h-12"
                priority
              />
            </div>
          </Link>
          <div className="w-10"></div>
        </div>
        {isOpen && (
          <div className="bg-[#4377B2] text-white shadow-md w-full max-h-[80vh] overflow-y-auto overflow-x-hidden z-50 fixed top-0 left-0 min-h-screen">
            <NavigationMenu
              navigationItems={navigationItems}
              expandedMobileItems={expandedMobileItems}
              expandedMobileSubItems={expandedMobileSubItems}
              toggleMobileDropdown={toggleMobileDropdown}
              toggleMobileSubDropdown={toggleMobileSubDropdown}
              setOpen={setOpen}
              router={router}
            />
          </div>
        )}
      </div>
    </header>
  );
};
