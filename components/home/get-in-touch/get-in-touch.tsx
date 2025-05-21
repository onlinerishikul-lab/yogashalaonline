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
    <div className="flex justify-center py-4 px-4 sm:px-6 lg:px-12">
      <div className="max-w-screen-2xl w-full bg-[#FCF6F3] rounded-3xl p-4 sm:p-10 md:p-16 flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[#4377B2] text-3xl sm:text-4xl font-semibold mb-4">CONTACT US</h1>
          <p className="text-sm sm:text-base leading-relaxed">
            Let Rishikul Online support you on your path to Become Certified Yoga Teacher Training.
            Stay connected with our vibrant community and embrace the transformative power of these amazing yoga practices.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border-b-[1.5px] border-[#737B7D] bg-transparent outline-none text-sm"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border-b-[1.5px] border-[#737B7D] bg-transparent outline-none text-sm"
              placeholder="Email"
            />
            <select
              name="courseInterest"
              value={formData.courseInterest}
              onChange={handleChange}
              className="p-3 border-b-[1.5px] border-[#737B7D] bg-transparent outline-none text-sm"
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
          <div className="flex flex-col sm:flex-row gap-6 mt-10">
            <div className="flex gap-4 items-start">
              <Image
                alt="phone"
                src="/assets/icons/phone.png"
                width={24}
                height={24}
              />
              <div>
                <h4 className="font-semibold text-sm">Phone</h4>
                <p className="text-xs text-[#4377B2]">+91 74486 77761</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Image
                alt="mail"
                src="/assets/icons/mail.png"
                width={24}
                height={24}
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

        {/* Right Section - Map */}
        {/* Right Section - Map */}
<div className="w-full md:w-1/2 h-[300px] md:h-auto">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.1123005915!2d77.30127814132629!3d12.95379021332858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1747747101265!5m2!1sen!2sin"
   className="h-[300px] md:h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
  />
</div>

      </div>
    </div>
  );
};

export default GetInTouch;
