import React from "react";
import TestimonialSlider from "./experiences-slider";

const Testimonial = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FCF6F3]">
      {/* Optional: Add a heading */}
      {/* <h2 className="text-center text-2xl md:text-4xl font-bold text-[#4377B2] mb-12">Testimonials</h2> */}
      <TestimonialSlider />
    </section>
  );
};

export default Testimonial;
