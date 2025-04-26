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
  const sectionRef = useRef(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasShown]);

  return (
    <div className="relative" ref={sectionRef}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div
            className={`bg-[#333333] text-white text-[10px] md:text-xs py-4 md:py-6 px-2 md:px-4 writing-mode-vertical uppercase tracking-wider font-medium absolute top-10 right-0 cursor-pointer hover:bg-[#444444] transition-colors`}
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yoga leading-tight text-[#4377B2]">
              Yoga Courses For Beginners
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl">{data.body}</p>
            <Button
              size="lg"
              className="group bg-yoga hover:bg-yoga-muted text-yoga-foreground rounded-full px-8 py-6 text-lg bg-[#4377B2] text-white"
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Course Language Card - Spans 1 column */}
              <div className="relative z-0 bg-[rgb(250,249,246)] rounded-tl-full p-6 flex flex-col items-start justify-end">
                <h3 className="text-2xl font-semibold">Course Language</h3>
                <p className="text-lg">{data.courseLanguage}</p>
                <div className="absolute -top-12 right-0 z-10">
                  <div className="bg-yoga rounded-full p-3 text-white w-20 h-20 flex items-center justify-center shadow-lg bg-[#4377B2]">
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

              {/* Stats Card - Spans 1 column */}
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

              {/* Skills Card - Spans full width */}
              <div className="md:col-span-2 bg-gradient-to-r from-yoga-gradient-from to-yoga-gradient-to rounded-[2rem] p-8 text-white mt-4 bg-[#4377B2]">
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
