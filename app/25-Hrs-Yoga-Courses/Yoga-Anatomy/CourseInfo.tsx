"use client";
import React from 'react';
import { BookOpen, Clock, Calendar, Video } from 'lucide-react';

const CourseInfo = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">About the Online 200 Program</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Our comprehensive 200-hour yoga teacher training follows the same rigorous standards as our in-person program, adapted for the online environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary mb-6 leading-relaxed">
              The House of OM&apos;s Online 200-Hour Teacher Training offers a deep immersion into the art and science of yoga. Our curriculum covers asana, pranayama, meditation, philosophy, anatomy, teaching methodology, and the business of yoga.
            </p>
            
            <p className="text-primary mb-6 leading-relaxed">
              The program is designed to be completed part-time over 10 weeks, with a mix of live sessions and self-paced learning. You&apos;ll join a cohort of dedicated practitioners from around the world, creating a supportive community.
            </p>
            
            <p className="text-primary leading-relaxed">
              By the end of the training, you&apos;ll have the confidence and skills to teach yoga safely and effectively, plus lifetime access to our extensive library of resources.
            </p>
          </div>
          
          <div className="bg-primary-light p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-primary mb-6">Program Highlights</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <BookOpen className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Comprehensive Curriculum</h4>
                  <p className="text-primary text-sm">Covers all aspects of yoga required by Yoga Alliance standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Clock className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Flexible Schedule</h4>
                  <p className="text-primary text-sm">Blend of live sessions and self-paced learning</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Calendar className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">10-Week Program</h4>
                  <p className="text-primary text-sm">Structured to fit into your busy lifestyle</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Video className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Lifetime Access</h4>
                  <p className="text-primary text-sm">All recordings and materials available indefinitely</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
