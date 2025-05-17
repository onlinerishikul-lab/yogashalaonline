"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YogaCoursesForBeginners } from "@/types/course";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "../contact/contact-form";
import { useEffect, useRef, useState } from "react";

export default function CoursesForBeginners({
  data,
}: {
  data: YogaCoursesForBeginners;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
        }
      },
      { threshold: 0.5 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [hasShown]);

  return (
    <div className="relative" ref={sectionRef}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div
            className="bg-[#333333] text-white text-[10px] md:text-xs py-4 md:py-6 px-2 md:px-4 writing-mode-vertical uppercase tracking-wider font-medium absolute top-10 right-0 cursor-pointer hover:bg-[#444444] transition-colors"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
            role="button"
          >
            COURSE HIGHLIGHT
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogTitle>Course Inquiry Form</DialogTitle>
          <DialogHeader>
            <ContactForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4377B2] leading-tight">
              Yoga Courses For Beginners
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl">{data.body}</p>
            <Button
              size="lg"
              className="group bg-[#4377B2] hover:bg-[#365f8e] text-white rounded-full px-8 py-6 text-lg"
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Course Language Card */}
              <div className="relative z-0 bg-[#FAF9F6] rounded-tl-full p-6 flex flex-col items-start justify-end">
                <h3 className="text-2xl font-semibold">Course Language</h3>
                <p className="text-lg">{data.courseLanguage}</p>
                <div className="absolute -top-12 right-0 z-10">
                  <div className="bg-[#4377B2] rounded-full p-3 text-white w-20 h-20 flex items-center justify-center shadow-lg">
                    <Image
                      src="/assets/yogavector-full.png"
                      alt="Yoga Icon"
                      width={50}
                      height={50}
                      className="p-1"
                    />
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-[#FAF9F6] rounded-[2rem] p-6">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl font-bold">20</span>
                    <span className="text-4xl font-bold">+</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      transformative yoga courses designed to elevate your mind,
                      body, and soul.
                    </p>
                    <div className="mt-4 h-1 w-12 bg-black rounded-full" />
                  </div>
                </div>
              </div>

              {/* Skills Card */}
              <div className="md:col-span-2 bg-[#4377B2] rounded-[2rem] p-8 text-white mt-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Skills You&apos;ll Learn
                </h3>
                <p className="leading-relaxed opacity-90">
                  {data.skillsYouWillLearn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
