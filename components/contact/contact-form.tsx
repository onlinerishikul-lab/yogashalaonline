"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { onlineYogaTrainingMenu } from "@/constants/course-data";

// You can also fetch country list from an API if needed
const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Japan", "China", "Brazil", "South Africa", "Italy", "Netherlands", "New Zealand", "Singapore", "Mexico", "Spain", "Russia", "Switzerland", "Sweden", "Norway", "Denmark", "Ireland", "UAE", "Saudi Arabia", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Thailand", "Malaysia", "Indonesia"
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  courseName: z.string().min(1, "Please select a course"),
  courseDate: z.string().min(1, "Please select a date"),
  gender: z.string().min(1, "Please select gender"),
  country: z.string().min(1, "Please select country"),
  message: z.string().optional(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      courseName: "",
      courseDate: "",
      gender: "",
      country: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // TODO: Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Carter"
                    {...field}
                    className="rounded-full border-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email address"
                    {...field}
                    className="rounded-full border-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="(123) 456 - 7890"
                    {...field}
                    className="rounded-full border-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Course Name */}
          <FormField
            control={form.control}
            name="courseName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Name</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-full border-gray-200">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {onlineYogaTrainingMenu.map((course) => (
                      <SelectItem key={course.title} value={course.title}>
                        {course.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Course Date */}
          <FormField
            control={form.control}
            name="courseDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    className="rounded-full border-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-full border-gray-200">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-full border-gray-200">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country.toLowerCase()}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a comment..."
                  className="min-h-[120px] rounded-[24px] border-gray-200"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-[#4377B2] hover:bg-[#285384] text-white rounded-full px-8 py-6 text-lg font-medium"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
