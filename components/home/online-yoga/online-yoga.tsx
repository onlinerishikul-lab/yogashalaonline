"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const onlineYogaSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
});

type OnlineYogaFormData = z.infer<typeof onlineYogaSchema>;

const OnlineYoga = () => {
  const form = useForm<OnlineYogaFormData>({
    resolver: zodResolver(onlineYogaSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: OnlineYogaFormData) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="w-full p-0 m-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Image Section */}
        <div className='h-[200px] md:h-auto bg-[url("/assets/contact-image.png")] bg-cover bg-center w-full' />

        {/* Form Section */}
        <div className="bg-[#4377B2] p-6 sm:p-10 md:p-12 flex items-center justify-center">
          <div className='w-full max-w-xl bg-[url("/assets/yogavector.png")] bg-no-repeat bg-contain bg-center'>
            <form onSubmit={handleSubmit(onSubmit)} className="backdrop-blur-sm bg-[#4377B2]/70 p-4 md:p-6">
              <h1 className="uppercase font-bold text-white text-lg md:text-xl">
                Want to learn more about our Yoga Teacher Training? Just fill
                out the form below, and we&apos;ll provide you with all the
                details.
              </h1>

              {/* Name Field */}
              <div className="pt-4">
                <label
                  htmlFor="name"
                  className="text-white text-base font-semibold uppercase"
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full outline-none p-2 bg-transparent text-white border-white border-2 rounded mt-1"
                />
                {errors.name && (
                  <p className="text-white text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="pt-4">
                <label
                  htmlFor="email"
                  className="text-white text-base font-semibold uppercase"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full outline-none p-2 bg-transparent text-white border-white border-2 rounded mt-1"
                />
                {errors.email && (
                  <p className="text-white text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number Field */}
              <div className="pt-4">
                <label
                  htmlFor="phoneNumber"
                  className="text-white text-base font-semibold uppercase"
                >
                  Phone Number
                </label>
                <input
                  {...register("phoneNumber")}
                  type="tel"
                  id="phoneNumber"
                  className="w-full outline-none p-2 bg-transparent text-white border-white border-2 rounded mt-1"
                />
                {errors.phoneNumber && (
                  <p className="text-white text-sm mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="bg-white text-[#4377B2] text-lg font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Start now
                </Button>
                <p className="text-white text-sm mt-2">
                  * Your privacy is important to us, and we will never share
                  your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineYoga;
