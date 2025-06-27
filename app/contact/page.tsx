"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIframeLoad = () => {
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full">
      {submitted && (
        <p className="text-green-600 text-center mb-4">
          ✅ Thank you! Your message has been sent.
        </p>
      )}

      <form
        ref={formRef}
        action="https://formsubmit.co/rishikulonline108@gmail.com"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => setTimeout(handleIframeLoad, 1000)}
        className="flex flex-col gap-4"
      >
        {/* Formsubmit hidden controls */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_subject"
          value="New Contact Query from Rishikul Online"
        />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-sm"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-sm"
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-sm"
        ></textarea>

        <Button
          type="submit"
          className="bg-[#0982FE] hover:bg-[#056fd4] w-full py-3 rounded-lg font-semibold text-sm text-white transition-colors"
        >
          Send Message
        </Button>
      </form>

      {/* Background iframe for no-redirect submission */}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
