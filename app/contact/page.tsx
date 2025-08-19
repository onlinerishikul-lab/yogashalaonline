"use client";

import { useState } from "react";

// 🌍 Country codes list
const countryCodes = [
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+971", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+7", name: "Russia", flag: "🇷🇺" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+52", name: "Mexico", flag: "🇲🇽" },
  { code: "+82", name: "South Korea", flag: "🇰🇷" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "+880", name: "Bangladesh", flag: "🇧🇩" },
  { code: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "+90", name: "Turkey", flag: "🇹🇷" },
  { code: "+98", name: "Iran", flag: "🇮🇷" },
  { code: "+964", name: "Iraq", flag: "🇮🇶" },
  { code: "+20", name: "Egypt", flag: "🇪🇬" },
  { code: "+212", name: "Morocco", flag: "🇲🇦" },
  { code: "+254", name: "Kenya", flag: "🇰🇪" },
  { code: "+255", name: "Tanzania", flag: "🇹🇿" },
  { code: "+250", name: "Rwanda", flag: "🇷🇼" },
  // 👉 Add more or load from external JSON if needed
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    month: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone with Country Code */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <div className="flex space-x-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
          >
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name} ({c.code})
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="9876543210"
            className="flex-1 rounded-md border-gray-300 shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Select Month */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Month</label>
        <select
          name="month"
          value={formData.month}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Month --</option>
          {[
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
          ].map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#4377B2] text-white py-2 px-4 rounded-md hover:bg-[#35608f] transition"
      >
        Submit
      </button>
    </form>
  );
}
