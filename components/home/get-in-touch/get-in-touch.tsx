"use client";
import Image from "next/image";
import React, { useState } from "react";
import * as z from "zod";
import {
  fiftyHourCourses,
  hundredHourCourses,
  twoHundredHourCourses,
  threeHundredHourCourses,
} from "@/constants/course-data";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  courseInterest: z.string().min(1, "Please select a course"),
});

type FormData = z.infer<typeof formSchema>;

const GetInTouch = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    courseInterest: "",
  });

  const allCourses = [
    ...fiftyHourCourses,
    ...hundredHourCourses,
    ...twoHundredHourCourses,
    ...threeHundredHourCourses,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = formSchema.parse(formData);
      console.log("Form data:", validatedData);
      setFormData({ name: "", email: "", courseInterest: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Validation error:", error.errors);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center py-10 px-2">
      <div className="max-w-screen-2xl p-2 md:p-16 w-full rounded-3xl bg-[#FCF6F3] md:flex md:gap-28">
        <div className="md:w-[50%] mb-10">
          <h1 className="text-[#4377B2] text-4xl font-semibold mb-4">CONTACT US</h1>
          <p>
            Let Rishikul Online support you on your path to Become Certified Yoga Teacher Training.
            Stay connected with our vibrant community and embrace the transformative power of these amazing yoga practices.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-10">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border-b-[1.5px] border-[#737B7D] bg-transparent outline-none"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border-b-[1.5px] border-[#737B7D] bg-transparent outline-none"
              placeholder="Email"
            />
            <select
              name="courseInterest"
              value={formData.courseInterest}
              onChange={handleChange}
              className="p-2 border-b-[1.5px] border-[#737B7D] bg-transparent outline-none"
            >
              <option value="">Select a Course</option>
              {allCourses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-[#0982FE] p-3 rounded-lg text-white font-semibold"
            >
              Enrol Now
            </button>
          </form>
          <div className="flex gap-12 flex-col md:flex-row mt-10">
            <div className="flex gap-5 items-center">
              <Image
                alt="phone"
                src="/assets/icons/phone.png"
                width={28}
                height={28}
                className="h-auto w-[20px]"
              />
              <div>
                <h4 className="font-semibold text-sm">Phone</h4>
                <p className="text-xs text-[#4377B2]">+91 74486 77761</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Image
                alt="mail"
                src="/assets/icons/mail.png"
                width={28}
                height={28}
                className="h-auto w-[20px]"
              />
              <div>
                <h4 className="font-semibold text-sm">E-Mail</h4>
                <p className="text-xs text-[#4377B2]">
                  contact@rishikulyogshalaonline.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622052.696491503!2d9.844387287499998!3d50.0750835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b937cc088de5f%3A0xab1a6c291f681d4!2sOffice%20option%2C%20Ltd.!5e0!3m2!1sen!2sin!4v1737019150873!5m2!1sen!2sin"
            className="h-[300px] md:h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
