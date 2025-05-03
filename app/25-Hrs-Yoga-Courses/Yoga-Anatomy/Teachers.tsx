"use client";
import React from 'react';
import Image from 'next/image';

const Teachers = () => {
  const teachers = [
    {
      name: "Maya Patel",
      role: "Lead Instructor & Program Director",
      image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Maya has been teaching yoga for over 15 years and has trained hundreds of teachers worldwide. Her approach combines traditional yogic wisdom with modern teaching methodologies.",
      certifications: ["E-RYT 500", "YACEP", "Yoga Therapy Certified"]
    },
    {
      name: "David Chen",
      role: "Anatomy & Physiology Specialist",
      image: "https://images.pexels.com/photos/4057839/pexels-photo-4057839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With a background in physical therapy and 10 years of yoga teaching experience, David brings profound anatomical knowledge to help you understand the body in asana practice.",
      certifications: ["E-RYT 200", "Doctor of Physical Therapy", "Functional Anatomy Specialist"]
    },
    {
      name: "Lakshmi Sharma",
      role: "Philosophy & Meditation Instructor",
      image: "https://images.pexels.com/photos/7991662/pexels-photo-7991662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Lakshmi has studied extensively in ashrams throughout India and brings authentic teachings of yoga philosophy, meditation, and the subtle body to our program.",
      certifications: ["E-RYT 500", "MA in Eastern Philosophy", "Traditional Meditation Instructor"]
    },
    {
      name: "James Wilson",
      role: "Sequencing & Teaching Methodology",
      image: "https://images.pexels.com/photos/10922942/pexels-photo-10922942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "James has built successful yoga studios in three countries and specializes in creative sequencing, advanced teaching skills, and the business of yoga.",
      certifications: ["E-RYT 500", "MBA", "Certified Business Coach"]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-4">Meet Your Teachers</h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Learn from our diverse team of experienced and passionate yoga educators who bring their unique expertise to the program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-primary-50 rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <Image 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="h-full w-full object-cover object-center"
                  width={500} 
                  height={500} 
                />
              </div>
              <div className="p-6 md:w-3/5">
                <h3 className="text-xl font-serif font-medium text-primary-800">{teacher.name}</h3>
                <p className="text-accent-600 mb-3">{teacher.role}</p>
                <p className="text-primary-600 text-sm mb-4">{teacher.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {teacher.certifications.map((cert, certIndex) => (
                    <span key={certIndex} className="bg-white text-primary-700 px-2 py-1 rounded-md text-xs border border-primary-200">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-primary-600 italic">
            &quot;Our greatest joy is witnessing the transformation of our students as they develop not only as yoga teachers, but as individuals on their spiritual path.&quot;
          </p>
          <p className="mt-2 text-primary-700 font-medium">— The House of OM Faculty</p>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
