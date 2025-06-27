"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { onlineYogaTrainingMenu } from "@/constants/course-data";

export default function GetInTouch() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    courseInterest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full px-4 py-5 flex justify-center">
      <div className="w-full max-w-xl">
        <h1 className="text-[#4377B2] text-2xl sm:text-3xl font-semibold mb-4 text-center">
          CONTACT&nbsp;US
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-700 mb-6">
          Let&nbsp;Rishikul&nbsp;Online support you on your path to becoming a
          certified yoga teacher. Stay connected with our vibrant community and
          embrace the transformative power of these practices.
        </p>

        <form
          action="https://formsubmit.co/rishikulonline108@gmail.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          {/* Prevent spam via Formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Enrollment - Rishikul Online"
          />
          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <div>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Name"
              aria-label="Name"
              required
              className="p-3 border border-gray-300 rounded-md text-sm w-full"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email"
              aria-label="Email"
              required
              className="p-3 border border-gray-300 rounded-md text-sm w-full"
            />
          </div>

          <div>
            <select
              name="courseInterest"
              value={formValues.courseInterest}
              onChange={handleChange}
              aria-label="Course interest"
              required
              className="p-3 border border-gray-300 rounded-md text-sm w-full"
            >
              <option value="">Select a Course</option>
              {onlineYogaTrainingMenu.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            className="bg-[#0982FE] hover:bg-[#056fd4] w-full py-3 rounded-lg font-semibold text-sm text-white transition-colors"
          >
            Enrol&nbsp;Now
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <div className="flex gap-3 items-start">
            <Image
              src="/assets/icons/phone.png"
              alt="phone"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
            />
            <div className="text-sm">
              <p className="font-semibold">Phone</p>
              <a href="tel:+919845271423" className="text-[#4377B2] text-xs">
                +91&nbsp;98452&nbsp;71423
              </a>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Image
              src="/assets/icons/mail.png"
              alt="mail"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
            />
            <div className="text-sm">
              <p className="font-semibold">E-Mail</p>
              <a
                href="mailto:rishikulonline108@gmail.com"
                className="text-[#4377B2] text-xs break-all"
              >
                rishikulonline108@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
