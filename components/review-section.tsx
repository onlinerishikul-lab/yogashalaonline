"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/config/constants";

export function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((current) =>
      current === TESTIMONIALS.length - 1 ? 0 : current + 1
    );
  }, []);

  const previous = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((current) =>
      current === 0 ? TESTIMONIALS.length - 1 : current - 1
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (shift: number) => {
    return (currentIndex + shift + TESTIMONIALS.length) % TESTIMONIALS.length;
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.5 },
    }),
  };

  const TestimonialCard = ({
    testimonial,
    isActive = false,
    className = "",
  }: {
    testimonial: {
      quote: string;
      name: string;
      location: string;
      context: string;
    };
    isActive?: boolean;
    className?: string;
  }) => (
    <Card className={`bg-[#2A2A2A] text-white border-none w-full max-w-md mx-auto ${className}`}>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-sm text-gray-400">{testimonial.location}</p>
        </div>
        <blockquote className={`${isActive ? "text-lg" : "text-sm"} italic line-clamp-4`}>
          &quot;{testimonial.quote}&quot;
        </blockquote>
        <p className="mt-2 text-xs text-gray-500 italic">({testimonial.context})</p>
      </CardContent>
    </Card>
  );

  return (
    <section className="relative bg-[#4377B2] py-32 md:py-48 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-48 bg-white transform -skew-y-3 -translate-y-24" />

      <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <div className="bg-[#2A2A2A] text-white py-12 px-3 -translate-x-1/2 rotate-180 [writing-mode:vertical-lr] tracking-wider font-semibold text-sm">
          STUDENT CORNER
        </div>
      </div>

      <div className="absolute top-24 left-12 text-white/20">
        <StarIcon className="w-16 h-16" />
      </div>
      <div className="absolute top-24 right-12 text-white/20">
        <StarIcon className="w-16 h-16" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-white transform -skew-y-3 translate-y-24" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Straight from Our Trainees:
            <br />
            Experiences That Inspire
          </h2>
          <p className="text-lg md:text-xl">
            Read through our student comments to see why they love learning with
            us and how we can help you achieve your goals through yoga teaching.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto h-[400px] md:h-[300px]">
          <div className="absolute top-8 left-0 w-full md:w-1/3 opacity-50 scale-90 hidden md:block">
            <TestimonialCard testimonial={TESTIMONIALS[getIndex(-1)]} />
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute top-0 left-0 right-0 md:left-1/3 md:right-1/3 md:-top-4"
            >
              <TestimonialCard
                testimonial={TESTIMONIALS[currentIndex]}
                isActive={true}
                className="shadow-xl"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-8 right-0 w-full md:w-1/3 opacity-50 scale-90 hidden md:block">
            <TestimonialCard testimonial={TESTIMONIALS[getIndex(1)]} />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outline"
            size="icon"
            onClick={previous}
            className="bg-white/10 border-white/20 hover:bg-white/20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
            <span className="sr-only">Previous review</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="bg-white/10 border-white/20 hover:bg-white/20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
            <span className="sr-only">Next review</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}
