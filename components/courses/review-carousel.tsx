'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { Testimonial } from '@/types/course'

// interface Review {
//   id: number
//   name: string
//   text: string
//   image: string
//   avatar: string
// }

// const reviews: Review[] = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
//     image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop",
//     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1600&auto=format&fit=crop"
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
//     image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1600&auto=format&fit=crop",
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1600&auto=format&fit=crop"
//   },
//   {
//     id: 3,
//     name: "Emma Williams",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
//     image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop",
//     avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop"
//   }
// ]

interface ReviewCarouselProps {
  testimonials: Testimonial[]
}

export function ReviewCarousel({ testimonials }: ReviewCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // Only set up interval if we have more than one testimonial
    if (testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  if (!testimonials.length) return null;

  // If there's only one testimonial, render it without carousel functionality
  if (testimonials.length === 1) {
    const testimonial = testimonials[0];
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our Students Say
          </h2>
           */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-4xl relative drop-shadow-xl">
              <div className="pb-32">
                <div className="relative rounded-3xl overflow-hidden aspect-[2/1] bg-black">
                  <Image
                    src={testimonial.coverImage}
                    alt={`Review by ${testimonial.body}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-xl">
                  <div className="bg-white rounded-xl relative pt-14 pb-8 px-8">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                        <Image
                          src={testimonial.profileImage}
                          alt={testimonial.body}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-medium text-lg text-gray-900">
                        {testimonial.body}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Regular carousel for multiple testimonials
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Students Say
        </h2>
        
        <div className="relative h-[600px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => {
            const position = (index - activeIndex + testimonials.length) % testimonials.length
            
            return (
              <div
                key={index}
                className={cn(
                  "absolute w-full max-w-4xl transition-all duration-700 ease-in-out",
                  position === 0 && "z-20 opacity-100 scale-100",
                  position === 1 && "z-10 opacity-40 scale-90 translate-x-[50%]",
                  position === testimonials.length - 1 && "z-10 opacity-40 scale-90 -translate-x-[50%]",
                  position !== 0 && position !== 1 && position !== testimonials.length - 1 && "opacity-0"
                )}
              >
                {/* Main Container with padding for review box overflow */}
                <div className="pb-32">
                  {/* Image Container */}
                  <div className="relative rounded-3xl overflow-hidden aspect-[2/1] bg-black">
                    <Image
                      src={testimonial.coverImage}
                      alt={`Review by ${testimonial.body}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Review Box - Positioned absolutely relative to the padded container */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-xl">
                    <div className="bg-white rounded-xl relative pt-14 pb-8 px-8">
                      {/* Avatar */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                          <Image
                            src={testimonial.profileImage}
                            alt={testimonial.body}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="text-center">
                        <p className="text-[17px] leading-relaxed text-gray-700 mb-4">
                          {testimonial.body}
                        </p>
                        <h3 className="font-medium text-lg text-gray-900">
                          {testimonial.body}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

