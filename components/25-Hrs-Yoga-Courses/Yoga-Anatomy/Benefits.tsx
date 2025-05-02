import React from 'react';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    "Internationally recognized certification through Yoga Alliance",
    "Learn to teach confidently in various styles and settings",
    "Deepen your personal practice and understanding of yoga",
    "Connect with a global community of like-minded practitioners",
    "Study at your own pace with lifetime access to materials",
    "Personalized feedback on your teaching and practice",
    "Learn the business aspects of becoming a successful yoga teacher",
    "Explore ancient yogic philosophy and how to apply it in modern life"
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-primary-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">Why Choose Our Online Training?</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Transform your practice and your life through our comprehensive, accessible, and authentic approach to yoga education.
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
            <h3 className="text-2xl font-serif text-primary mb-2">What Our Students Say</h3>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          
          <blockquote className="italic text-primary text-center max-w-3xl mx-auto">
            &quot;The House of OM Online 200 training exceeded all my expectations. The curriculum was thorough, the teachers were incredibly knowledgeable and supportive, and the community aspect made me feel connected despite being physically distant. This training has completely transformed my practice and given me the confidence to teach.&quot;
            <footer className="mt-4 text-primary font-medium not-italic">
              — Sarah J., Graduate 2024
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
