"use client";
import { useState } from "react";

const countries = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+91", name: "India" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+39", name: "Italy" },
  { code: "+971", name: "UAE" },
  { code: "+86", name: "China" },
  { code: "+7", name: "Russia" },
  // 👉 You can extend this with a full ISO country code list
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
    phone: "",
    month: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            className="w-1/3 p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
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
            className="w-2/3 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Phone number"
            required
          />
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
