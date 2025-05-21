import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@/components/ui/select";

const courses = [
  {
    category: "Online Yoga Training",
    subcategories: [
      {
        title: "25 Hrs Yoga Courses",
        options: [
          { title: "Yoga Anatomy For Safety", href: "/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
          { title: "Face Yoga TTC", href: "/25-Hrs-Yoga-Courses/face-yoga/" },
        ],
      },
      {
        title: "50 Hrs Yoga Courses",
        options: [
          { title: "Restorative Yoga TTC", href: "/50-Hrs-Yoga-Courses/Restorative-Yoga-TTC/" },
          { title: "Meditation TTC", href: "/50-Hrs-Yoga-Courses/Meditation-TTC/" },
        ],
      },
    ],
  },
  {
    category: "Online Ayurveda Courses",
    subcategories: [
      {
        title: "10 Hrs Ayurveda Courses",
        options: [
          { title: "Ayurvedic Basics Course", href: "/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/" },
        ],
      },
    ],
  },
];

const paymentLinks = {
  'one-time': {
    razorpay: 'https://razorpay.me/@Rishikul',
    paypal: 'https://www.paypal.me/rishikulyogshala',
  },
  'two-part': {
    razorpay: 'https://razorpay.me/@Rishikul',
    paypal: 'https://www.paypal.me/rishikulyogshala',
  },
  'three-part': {
    razorpay: 'https://razorpay.me/@Rishikul',
    paypal: 'https://www.paypal.me/rishikulyogshala',
  },
};

export default function PaymentPage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("one-time");

  const handlePayment = () => {
    const links = paymentLinks[plan];
    if (!links) return;
    window.open(links.razorpay, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#ffffff] py-10 px-4 md:px-16">
      <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl">
        <CardContent className="p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4377b2] mb-6 text-center">
            Course Payment
          </h2>
          <div className="grid gap-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="course">Select Course</Label>
              <Select onValueChange={setSelectedCourse}>
                {courses.map((cat, i) => (
                  <optgroup label={cat.category} key={i}>
                    {cat.subcategories.map((sub, j) => (
                      <>
                        {sub.options.map((option, k) => (
                          <SelectItem value={option.title} key={`${i}-${j}-${k}`}>
                            {option.title}
                          </SelectItem>
                        ))}
                      </>
                    ))}
                  </optgroup>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor="plan">Select Payment Plan</Label>
              <Select onValueChange={setPlan} defaultValue="one-time">
                <SelectItem value="one-time">One-Time Payment ($250)</SelectItem>
                <SelectItem value="two-part">Two-Part Payment</SelectItem>
                <SelectItem value="three-part">Three-Part Payment</SelectItem>
              </Select>
            </div>
            <div className="text-center">
              <Button
                className="bg-[#4377b2] text-white hover:brightness-110 transition-all"
                onClick={handlePayment}
              >
                Pay via Razorpay
              </Button>
              <div className="mt-4 text-sm text-gray-600">
                Or pay via{' '}
                <a
                  href={paymentLinks[plan].paypal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4377b2] underline"
                >
                  PayPal
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
