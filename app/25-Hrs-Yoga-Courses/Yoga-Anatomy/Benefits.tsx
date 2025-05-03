"use client";
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    "Understand key muscles, bones, and joints used in yoga practice",
    "Enhance your teaching with safe and effective anatomical cues",
    "Learn to prevent common injuries through proper alignment",
    "Lifetime access to all video content and downloadable materials",
    "Study at your own pace from anywhere in the world",
    "Taught by experienced professionals in yoga anatomy",
    "Includes quizzes and assignments to reinforce your learning",
    "Certificate of completion upon successfully finishing the course"
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-primary-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">Why Take This Anatomy Course?</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            This in-depth course is designed to help you understand how the human body works during yoga, empowering you to teach and practice more intelligently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="text-primary w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-primary">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-primary mb-2">Student Feedback</h3>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          
          <blockquote className="italic text-primary text-center max-w-3xl mx-auto">
            &quot;This anatomy course helped me bridge the gap between movement and understanding. It gave me so much clarity in my own practice and confidence as a yoga teacher. The format was easy to follow, and I loved the visual explanations.&quot;
            <footer className="mt-4 text-primary font-medium not-italic">
              — Priya R., Graduate 2024
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
