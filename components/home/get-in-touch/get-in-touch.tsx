"use client";

import Image from "next/image";
import React, { useState } from "react";
import * as z from "zod";
import { onlineYogaTrainingMenu } from "@/constants/course-data";

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

  // FIXED: Use the array directly
  const allCourses = [...onlineYogaTrainingMenu];

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
    <div className="w-full px-4 py-5 flex justify-center">
      <div className="w-full max-w-xl">
        <h1 className="text-[#4377B2] text-2xl sm:text-3xl font-semibold mb-4 text-center">
          CONTACT US
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-700 mb-6">
          Let Rishikul Online support you on your path to Become Certified Yoga Teacher Training.
          Stay connected with our vibrant community and embrace the transformative power of these amazing yoga practices.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md text-sm"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md text-sm"
            placeholder="Email"
          />
          <select
            name="courseInterest"
            value={formData.courseInterest}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md text-sm"
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
            className="bg-[#0982FE] p-3 rounded-lg text-white font-semibold text-sm hover:bg-[#056fd4] transition duration-300"
          >
            Enrol Now
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <div className="flex gap-3 items-start">
            <Image
              alt="phone"
              src="/assets/icons/phone.png"
              width={20}
              height={20}
            />
            <div className="text-sm text-left">
              <p className="font-semibold">Phone</p>
              <p className="text-[#4377B2] text-xs">+91 98452 71423</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Image
              alt="mail"
              src="/assets/icons/mail.png"
              width={20}
              height={20}
            />
            <div className="text-sm text-left">
              <p className="font-semibold">E-Mail</p>
              <p className="text-[#4377B2] text-xs">contact@rishikulonline108@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
