"use client";

import { useState } from "react";
import Image from "next/image";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { onlineYogaTrainingMenu } from "@/constants/course-data";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  courseInterest: z.string().min(1, "Please select a course"),
});

type FormData = z.infer<typeof schema>;

export default function GetInTouch() {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    courseInterest: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      setErrors(
        Object.fromEntries(
          result.error.errors.map((err) => [err.path[0], err.message])
        )
      );
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mkgbkgyg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          course: data.courseInterest,
        }),
      });

      if (response.ok) {
        alert("Thank you! Your enrollment has been submitted.");
        setData({ name: "", email: "", courseInterest: "" });
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Name"
              aria-label="Name"
              className="p-3 border border-gray-300 rounded-md text-sm w-full"
            />
            {errors.name && (
              <span className="text-xs text-red-600">{errors.name}</span>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
              aria-label="Email"
              className="p-3 border border-gray-300 rounded-md text-sm w-full"
            />
            {errors.email && (
              <span className="text-xs text-red-600">{errors.email}</span>
            )}
          </div>

          <div>
            <select
              name="courseInterest"
              value={data.courseInterest}
              onChange={handleChange}
              aria-label="Course interest"
              className="p-3 border border-gray-300 rounded-md text-sm w-full"
            >
              <option value="">Select a Course</option>
              {onlineYogaTrainingMenu.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
            {errors.courseInterest && (
              <span className="text-xs text-red-600">
                {errors.courseInterest}
              </span>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="bg-[#0982FE] hover:bg-[#056fd4] w-full py-3 rounded-lg font-semibold text-sm text-white transition-colors"
          >
            {loading ? "Submitting..." : "Enrol Now"}
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
