import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer K.",
      location: "New York, USA",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The Yoga Anatomy program at House of OM transformed my understanding of the human body in asana practice. The instructors' detailed explanations made anatomy fascinating and practical. I now feel confident in my ability to teach with anatomical precision.",
      stars: 5,
      year: 2023
    },
    {
      name: "Miguel R.",
      location: "Barcelona, Spain",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "I never imagined that learning yoga anatomy could be so engaging and insightful. The course deepened my practice and helped me understand how the body moves in every pose. It was an essential part of my yoga journey.",
      stars: 5,
      year: 2024
    },
    {
      name: "Aisha T.",
      location: "Dubai, UAE",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The Yoga Anatomy program provided me with the knowledge and confidence to teach my students safely and effectively. The anatomical concepts are presented in a way that's easy to grasp, and the visual aids are extremely helpful.",
      stars: 5,
      year: 2023
    },
    {
      name: "Thomas W.",
      location: "Melbourne, Australia",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "House of OM's Yoga Anatomy course was a game-changer for me. It helped me to not only deepen my understanding of the body but also to connect more meaningfully with my students' needs and limitations.",
      stars: 5,
      year: 2024
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-4">Student Experiences in Yoga Anatomy</h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Hear from our graduates about their transformative journeys through our Yoga Anatomy program.
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-medium text-primary-800">{testimonials[activeIndex].name}</h3>
                  <p className="text-primary-600 text-sm">{testimonials[activeIndex].location}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-500 fill-accent-500" />
                    ))}
                  </div>
                  <p className="text-primary-500 text-xs mt-1">Graduate, {testimonials[activeIndex].year}</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote>
                  <p className="text-primary-700 italic leading-relaxed">"{testimonials[activeIndex].quote}"</p>
                </blockquote>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white text-primary-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white text-primary-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${activeIndex === index ? 'bg-primary-600' : 'bg-primary-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium"
          >
            Read More Student Stories
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
