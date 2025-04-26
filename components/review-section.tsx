"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  country: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alan Baker",
    country: "Russia",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Practicing with Yogshala has been an incredible experience. They truly listened to our needs and provided insightful guidance that exceeded our expectations. We couldn't be happier with the progress we've made through their yoga teaching!",
  },
  {
    id: 2,
    name: "Theresa Webb",
    country: "England",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The transformation I've experienced at Yogshala goes beyond just physical postures. Their holistic approach to yoga has helped me find balance in all aspects of my life.",
  },
  {
    id: 3,
    name: "Sarah Chen",
    country: "Singapore",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "As someone who was completely new to yoga, I found the instructors at Yogshala incredibly patient and supportive. Their teaching methodology makes complex concepts accessible to beginners.",
  },
  {
    id: 4,
    name: "Marcus Rodriguez",
    country: "Spain",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The attention to detail in every class is remarkable. From breathing techniques to advanced asanas, each aspect is taught with precision and care.",
  },
  {
    id: 5,
    name: "Priya Sharma",
    country: "India",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Yogshala's teacher training program has given me the confidence and knowledge to start my own yoga journey as an instructor. The community here is incredibly supportive.",
  },
  {
    id: 6,
    name: "David Anderson",
    country: "Australia",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The blend of traditional yoga philosophy with modern teaching methods at Yogshala creates a unique learning experience. It's exactly what I was looking for in a yoga school.",
  },
  {
    id: 7,
    name: "Emma Thompson",
    country: "Canada",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "I've attended several yoga schools, but Yogshala stands out for their authentic approach and dedication to maintaining the true essence of yoga while making it relevant for modern practitioners.",
  },
  {
    id: 8,
    name: "Yuki Tanaka",
    country: "Japan",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The spiritual and physical aspects of yoga are perfectly balanced in their curriculum. I've gained not just flexibility but also mental clarity and inner peace.",
  },
  {
    id: 9,
    name: "Lars Nielsen",
    country: "Denmark",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The international community at Yogshala adds a wonderful dimension to the learning experience. Sharing perspectives with people from different cultures has enriched my practice.",
  },
  {
    id: 10,
    name: "Sofia Costa",
    country: "Brazil",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "From the moment I joined Yogshala, I knew I had found my yoga family. The personal attention and customized guidance have helped me progress far beyond my expectations.",
  },
];

export function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }, []);

  const previous = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (shift: number) => {
    return (currentIndex + shift + testimonials.length) % testimonials.length;
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
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const TestimonialCard = ({
    testimonial,
    isActive = false,
    className = "",
  }: {
    testimonial: Testimonial;
    isActive?: boolean;
    className?: string;
  }) => (
    <Card
      className={`bg-[#2A2A2A] text-white border-none w-full max-w-md mx-auto ${className}`}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-400">{testimonial.country}</p>
          </div>
        </div>
        <blockquote
          className={`${isActive ? "text-lg" : "text-sm"} italic line-clamp-3`}
        >
          &quot;{testimonial.quote}&quot;
        </blockquote>
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
          {/* Previous Card (Static) */}
          <div className="absolute top-8 left-0 w-full md:w-1/3 opacity-50 scale-90 hidden md:block">
            <TestimonialCard testimonial={testimonials[getIndex(-1)]} />
          </div>

          {/* Active Card (Animated) */}
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
                testimonial={testimonials[currentIndex]}
                isActive={true}
                className="shadow-xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Card (Static) */}
          <div className="absolute top-8 right-0 w-full md:w-1/3 opacity-50 scale-90 hidden md:block">
            <TestimonialCard testimonial={testimonials[getIndex(1)]} />
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
