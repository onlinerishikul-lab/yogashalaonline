"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { onlineYogaTrainingMenu } from "@/constants/course-data";
import { Phone, Mail, Calendar, MapPin } from "lucide-react";

export default function GetInTouch() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    courseInterest: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleIframeLoad = () => {
    setSubmitted(true);
    setFormValues({ name: "", email: "", courseInterest: "" });
  };

  return (
    <section className="w-full px-4 py-10 flex justify-center bg-gray-50">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-[#4377B2] text-2xl sm:text-3xl font-semibold mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            Let Rishikul Online support you on your path to becoming a
            certified yoga teacher. Stay connected with our vibrant community and
            embrace the transformative power of these practices.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#4377B2]" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+919845271423" className="text-gray-600 hover:text-[#4377B2]">
                  +91 98452 71423
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#4377B2]" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:rishikulonline108@gmail.com" className="text-gray-600 hover:text-[#4377B2]">
                  rishikulonline108@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="w-6 h-6 text-[#4377B2]" />
              <div>
                <p className="font-semibold">Hours</p>
                <p className="text-gray-600">Mon - Fri: 9am - 6pm</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-[#4377B2]" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">Rishikesh, India</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {submitted && (
            <div className="text-green-600 text-center mb-4">
              ✅ Thank you! Your form has been submitted.
            </div>
          )}

          <form
            ref={formRef}
            action="https://formsubmit.co/rishikulonline108@gmail.com"
            method="POST"
            target="formTarget"
            onSubmit={() => setTimeout(handleIframeLoad, 1000)}
            className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Enrollment - Rishikul Online"
            />
            <input type="hidden" name="_template" value="table" />

            <div>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Name"
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
                required
                className="p-3 border border-gray-300 rounded-md text-sm w-full"
              />
            </div>

            <div>
              <select
                name="courseInterest"
                value={formValues.courseInterest}
                onChange={handleChange}
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
              Enrol Now
            </Button>
          </form>

          {/* Hidden iframe for background submission */}
          <iframe
            name="formTarget"
            style={{ display: "none" }}
            onLoad={handleIframeLoad}
          />
        </div>
      </div>
    </section>
  );
}
