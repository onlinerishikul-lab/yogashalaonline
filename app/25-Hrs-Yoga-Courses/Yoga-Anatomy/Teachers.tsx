"use client";
import React from 'react';
import Image from 'next/image';

const Teachers = () => {
  const teachers = [
    {
      name: "Dr. Maya Patel",
      role: "Lead Anatomy Instructor & Program Director",
      image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Dr. Maya Patel is a leading expert in Yoga Anatomy with over 15 years of experience in anatomy and yoga teaching. She specializes in the integration of anatomy with yoga asanas and functional movement.",
      certifications: ["E-RYT 500", "Doctor of Anatomy", "Yoga Anatomy Specialist"]
    },
    {
      name: "Dr. David Chen",
      role: "Yoga Anatomy & Physiology Specialist",
      image: "https://images.pexels.com/photos/4057839/pexels-photo-4057839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "David brings an in-depth understanding of human anatomy and its relation to yoga postures. His expertise lies in functional anatomy and movement patterns, ensuring safe and effective practice.",
      certifications: ["E-RYT 200", "Doctor of Physical Therapy", "Certified Yoga Anatomy Instructor"]
    },
    {
      name: "Dr. Lakshmi Sharma",
      role: "Yoga Philosophy & Anatomy Integration Instructor",
      image: "https://images.pexels.com/photos/7991662/pexels-photo-7991662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Dr. Lakshmi Sharma combines the ancient wisdom of yoga philosophy with the modern understanding of the body. She explores the integration of anatomical principles with yogic teachings.",
      certifications: ["E-RYT 500", "PhD in Anatomy", "Traditional Yoga Anatomy Instructor"]
    },
    {
      name: "James Wilson",
      role: "Advanced Anatomy & Asana Alignment Instructor",
      image: "https://images.pexels.com/photos/10922942/pexels-photo-10922942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "James is a leading instructor in advanced asana alignment, focusing on the anatomical alignment in poses. His approach combines anatomical precision with mindful yoga practice.",
      certifications: ["E-RYT 500", "Certified Yoga Anatomy Teacher", "Master of Anatomy & Physiology"]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#4377b2] mb-4">
            Meet Your Yoga Anatomy Instructors
          </h2>
          <p className="text-lg text-[#4377b2] max-w-3xl mx-auto">
            Learn from our experienced instructors who combine anatomical expertise with the practice of yoga, offering a comprehensive understanding of how the body moves and functions in asana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-[#f0f4fa] rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-2/5 relative h-64 md:h-auto">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <h3 className="text-xl font-serif font-medium text-[#4377b2]">{teacher.name}</h3>
                <p className="text-[#2d5168] mb-3">{teacher.role}</p>
                <p className="text-[#4377b2] text-sm mb-4">{teacher.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {teacher.certifications.map((cert, certIndex) => (
                    <span
                      key={certIndex}
                      className="bg-white text-[#4377b2] px-2 py-1 rounded-md text-xs border border-[#4377b2]"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#4377b2] italic">
            &quot;Our mission is to empower you with the anatomical knowledge that enhances your yoga practice and teaching, offering insights into how the body works in every posture.&quot;
          </p>
          <p className="mt-2 text-[#4377b2] font-medium">— The Yoga Anatomy Faculty</p>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
