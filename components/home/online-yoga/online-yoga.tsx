"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
    <div>
      <div className="container mx-auto w-full pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:w-full md:justify-center">
          <div className='h-[200px] bg-[url("/assets/contact-image.png")] bg-cover md:w-full md:h-auto'></div>
          <div className="bg-[#4377B2] p-2 py-6 md:p-16">
            <div className='bg-[url("/assets/yogavector.png")] bg-center bg-contain bg-no-repeat'>
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <h1 className="uppercase font-bold text-white text-xl">
                  Want to learn more about our Yoga Teacher Training? Just fill
                  out the form below, and we&apos;ll provide you with all the
                  details.
                </h1>

                <div className="grid grid-cols-1 gap-2 pt-4 md:w-3/4">
                  <label
                    htmlFor="name"
                    className="text-white text-base upercase font-semibold uppercase"
                  >
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="outline-none p-1 bg-transparent text-white border-white border-2"
                  />
                  {errors.name && (
                    <span className="text-white text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-2 pt-4 md:w-3/4">
                  <label
                    htmlFor="email"
                    className="text-white text-base upercase font-semibold uppercase"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="outline-none p-1 bg-transparent text-white border-white border-2"
                  />
                  {errors.email && (
                    <span className="text-white text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-2 pt-4 md:w-3/4">
                  <label
                    htmlFor="phoneNumber"
                    className="text-white text-base upercase font-semibold uppercase"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phoneNumber")}
                    type="tel"
                    id="phoneNumber"
                    className="outline-none p-1 bg-transparent text-white border-white border-2"
                  />
                  {errors.phoneNumber && (
                    <span className="text-white text-sm">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-2 pt-4">
                  <Button
                    type="submit"
                    className="bg-white text-[#4377B2] py-3 text-xl font-semibold md:w-min md:px-5 rounded-none"
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
    </div>
  );
};

export default OnlineYoga;
