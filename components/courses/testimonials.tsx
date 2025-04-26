"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StudentCorner } from "@/types/course";

export default function Testimonials({
  testimonials,
}: {
  testimonials: StudentCorner[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }, [testimonials.length]);

  const previous = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#4377B2] mb-4">
          Straight from Our Trainees:
          <br />
          Experiences That Inspire
        </h2>
        <p className="text-gray-600">
          We survey all of our clients, the results of which go directly to our
          CEO.
        </p>
      </div>

      <div className="relative w-fit mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={previous}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 rounded-full bg-[#4377B2] text-white flex items-center justify-center hover:bg-[#4377B2]/90 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 rounded-full bg-[#4377B2] text-white flex items-center justify-center hover:bg-[#4377B2]/90 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Testimonial Card */}
        <Card className="w-full max-w-4xl p-8 flex justify-between items-start gap-8 h-full">
          <div className="h-full flex-1">
            <div className="space-y-6 flex flex-col justify-center h-72">
              <div className="space-y-4 ">
                {/* <h2 className="text-xl font-medium leading-tight">
                  {testimonials[currentIndex].name}
                </h2> */}
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].body}
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium">
                  {testimonials[currentIndex].name}
                </h3>
                {/* <p className="text-muted-foreground">
                  {testimonials[currentIndex].name}
                </p> */}
              </div>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="w-72 h-72 rounded-full overflow-hidden bg-sky-400">
              <Image
                src={testimonials[currentIndex].image}
                alt={`Portrait of ${testimonials[currentIndex].name}`}
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#4377B2]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
