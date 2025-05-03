"use client";
import React from 'react';
import { BookOpen, Clock, Calendar, Video } from 'lucide-react';

const CourseInfo = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#4377b2] mb-4">About the 25-Hour Anatomy Course</h2>
          <p className="text-lg text-[#4377b2] max-w-3xl mx-auto">
            This focused course is designed to give yoga practitioners and teachers a clear understanding of anatomy and biomechanics related to yoga practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#4377b2] mb-6 leading-relaxed">
              Gain essential knowledge about how the body works during movement, with a focus on safety, alignment, and longevity in your yoga journey. Ideal for both aspiring and experienced teachers.
            </p>
            
            <p className="text-[#4377b2] mb-6 leading-relaxed">
              This course blends self-paced video lectures, visuals, and interactive quizzes to deepen your anatomical awareness and teaching precision.
            </p>
            
            <p className="text-[#4377b2] leading-relaxed">
              You&apos;ll leave with a solid foundation in yoga anatomy and a certificate of completion, plus lifetime access to all materials to revisit anytime.
            </p>
          </div>
          
          <div className="bg-[#4377b2]/10 p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-[#4377b2] mb-6">Course Highlights</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <BookOpen className="text-[#4377b2] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#4377b2] mb-1">Anatomy-Focused Curriculum</h4>
                  <p className="text-[#4377b2] text-sm">Learn about bones, muscles, joints, and their roles in yoga</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Clock className="text-[#4377b2] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#4377b2] mb-1">Self-Paced Learning</h4>
                  <p className="text-[#4377b2] text-sm">Study on your own time with full flexibility</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Calendar className="text-[#4377b2] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#4377b2] mb-1">25-Hour Certificate</h4>
                  <p className="text-[#4377b2] text-sm">Earn a certificate upon successful completion</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Video className="text-[#4377b2] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#4377b2] mb-1">Lifetime Access</h4>
                  <p className="text-[#4377b2] text-sm">All videos and downloadable content available anytime</p>
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
