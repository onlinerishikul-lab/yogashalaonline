"use client";
import { useState } from "react";
import { onlineYogaTrainingMenu } from "@/constants/course-data";  // ✅ import courses

// Country list with ISO codes for flag + dial codes
const countries = [
  { code: "+1", name: "United States", iso: "us" },
  { code: "+44", name: "United Kingdom", iso: "gb" },
  { code: "+91", name: "India", iso: "in" },
  { code: "+61", name: "Australia", iso: "au" },
  { code: "+81", name: "Japan", iso: "jp" },
  { code: "+49", name: "Germany", iso: "de" },
  { code: "+33", name: "France", iso: "fr" },
  { code: "+39", name: "Italy", iso: "it" },
  { code: "+971", name: "UAE", iso: "ae" },
  { code: "+86", name: "China", iso: "cn" },
  { code: "+7", name: "Russia", iso: "ru" },
  { code: "+34", name: "Spain", iso: "es" },
  { code: "+55", name: "Brazil", iso: "br" },
  { code: "+27", name: "South Africa", iso: "za" },
  { code: "+62", name: "Indonesia", iso: "id" },
  { code: "+63", name: "Philippines", iso: "ph" },
  { code: "+60", name: "Malaysia", iso: "my" },
  { code: "+65", name: "Singapore", iso: "sg" },
  { code: "+92", name: "Pakistan", iso: "pk" },
  { code: "+94", name: "Sri Lanka", iso: "lk" },
  { code: "+880", name: "Bangladesh", iso: "bd" },
  { code: "+968", name: "Oman", iso: "om" },
  { code: "+966", name: "Saudi Arabia", iso: "sa" },
  { code: "+20", name: "Egypt", iso: "eg" },
  { code: "+212", name: "Morocco", iso: "ma" },
  { code: "+234", name: "Nigeria", iso: "ng" },
  { code: "+82", name: "South Korea", iso: "kr" },
  { code: "+90", name: "Turkey", iso: "tr" },
  { code: "+31", name: "Netherlands", iso: "nl" },
  { code: "+41", name: "Switzerland", iso: "ch" },
  { code: "+46", name: "Sweden", iso: "se" },
  { code: "+47", name: "Norway", iso: "no" },
  { code: "+358", name: "Finland", iso: "fi" },
];

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    iso: "in",
    phone: "",
    month: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "countryCode") {
      const selected = countries.find((c) => c.code === value);
      setFormData({ ...formData, countryCode: value, iso: selected?.iso || "in" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Country Code + Phone */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-1/2 md:w-1/3 p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name} ({c.code})
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            className="w-1/2 md:w-2/3 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Phone number"
            required
          />
        </div>
        {/* Show selected flag + code */}
        <div className="flex items-center gap-2 mt-2">
          <img
            src={`https://flagcdn.com/w20/${formData.iso}.png`}
            alt="flag"
            className="w-6 h-4 object-cover rounded"
          />
          <span className="text-gray-700">{formData.countryCode}</span>
        </div>
      </div>

      {/* Select Month */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Preferred Month</label>
        <select
          name="month"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a month</option>
          {months.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* Select Course */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Select Course</label>
        <select
          name="course"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a course</option>
          {onlineYogaTrainingMenu.map((c) => (
            <option key={c.id} value={c.title}>{c.title}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          name="message"
          onChange={handleChange}
          rows={4}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your message"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-[#4377B2] text-white font-semibold rounded-lg hover:bg-[#35608f] transition"
      >
        Submit
      </button>
    </form>
  );
}
