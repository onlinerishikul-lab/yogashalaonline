import React from "react";
import { Header } from "@/components/common/header";

type Testimonial = {
  rating: number;
  author: string;
  date: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    rating: 5,
    author: "Dimple Malkan",
    date: "May 20, 2025",
    review:
      "Rishikul Yogshala was absolutely amazing. I am very fortunate that I did my 200 hours there. I gained much more than just asana training. The yogic philosophy taught by Krishna is part of my daily life now. Every class and every teacher is extremely knowledgeable and always available to help and answer questions. Highly recommend! 🙏😊",
  },
  {
    rating: 5,
    author: "Alejandro Godinez",
    date: "May 20, 2025",
    review:
      "The school is amazing! The lineage of the teachers is incredible and the teachings are very traditional and complete. Super grateful of studying with them.",
  },
  {
    rating: 5,
    author: "Natalia Solange Castrege",
    date: "May 20, 2025",
    review: "",
  },
  {
    rating: 3,
    author: "Leanne Hayter",
    date: "May 19, 2025",
    review: "Excellent teachers.",
  },
  {
    rating: 5,
    author: "RAMKISHAN KUGATHAS",
    date: "May 07, 2025",
    review:
      "I recently completed the Prenatal Yoga course at Rishikul Yogshala and it was a truly enriching experience. The teachers were kind, knowledgeable, and supportive throughout. I learned safe and effective yoga practices for pregnancy, along with breathing techniques and relaxation methods. The environment was peaceful and well-organized. I highly recommend Rishikul Yogshala for anyone seeking authentic and caring yoga education.",
  },
  {
    rating: 4.5,
    author: "Varsha Ambardekar",
    date: "May 01, 2025",
    review:
      "Very good school! They have provided detailed training. Teachers and instructor are well trained and knowledgeable.",
  },
  {
    rating: 4,
    author: "Charmaine Wardenberg",
    date: "Apr 03, 2025",
    review:
      "Absolutely loved my experience at this yoga training school. The quality of the teachers is exceptional — each one brings deep knowledge, passion, and a truly supportive presence to the training. I also really appreciated the flexibility in their approach, allowing space for different styles of yoga teaching and encouraging us to find our own unique voice as instructors. A warm, inspiring environment to grow in.",
  },
  {
    rating: 5,
    author: "Aurora Proyecto",
    date: "Mar 10, 2025",
    review:
      "It was a very good experience overall. The teachers were very nice and the learning environment is very good.",
  },
  {
    rating: 4.5,
    author: "Nerea García Villajos",
    date: "Mar 06, 2025",
    review: "",
  },
  {
    rating: 5,
    author: "jan",
    date: "Mar 06, 2025",
    review:
      "Rishikul Yogshala is a professionally run school for yoga teachers in Rishikesh. It is not a retreat but rather an open university for yoga. Class after class, you'll get saturated with detailed information represented in an easily digestible way – leaving you in awe of the teachers' expertise. From the first contact to the certification, everything oozes professionalism. Their facilities are well maintained, and students get pretty much everything they need on-site from the staff. No need to look anywhere else – go and experience it yourself!",
  },
  {
    rating: 4.5,
    author: "Takhmina Usmanova",
    date: "Jan 19, 2025",
    review:
      "Great education and training. School director Bipin is the best! Very deep knowledge of yoga philosophy and yoga physics.",
  },
  {
    rating: 5,
    author: "Pooja Chaudhary",
    date: "Jan 14, 2025",
    review:
      "The School was amazing and the trainers were professional and knowledgeable.",
  },
  {
    rating: 5,
    author: "bpjv",
    date: "Dec 16, 2024",
    review: "",
  },
  {
    rating: 4,
    author: "Avnita",
    date: "Dec 10, 2024",
    review: "Very good program. The course was relevant and helped me a lot.",
  },
  {
    rating: 5,
    author: "Alchemy Of Fire",
    date: "Nov 04, 2024",
    review:
      "I truly enjoyed my 500 Hours program at Rishikul Yogshala. Beautiful spaces, beautiful teachers, beautiful teachings. It was the start of a beautiful career as a Yoga Teacher that will always stay in my heart.",
  },
  {
    rating: 4,
    author: "Kaili Prescott",
    date: "Nov 01, 2024",
    review:
      "My time at Rishikul Yogshala will be cherished forever. There was a variety of classes and studies we went through, from pranayama and meditation to anatomy and ayurvedic cooking. I connected with most of my teachers very well. I would say it would be helpful if all of the teachers were on the same page on what we were studying and the timing of everything, I feel we did not get to everything that was planned. I left feeling confident to come home and share my knowledge and teachings with students.",
  },
  {
    rating: 4.5,
    author: "Carmelo Moliné",
    date: "Sep 23, 2024",
    review: "Yoga desde los orígenes, con grandes maestros.",
  },
  {
    rating: 4,
    author: "Arvind Singh Negi",
    date: "Sep 18, 2024",
    review:
      "I completed a Prenatal Yoga Teacher Training (TTC) and found it to be an enriching experience. The program covered essential topics, including anatomy, safe posture modifications, breathing techniques, and meditation tailored for expectant mothers.",
  },
];

const TestimonialCard = ({ rating, author, date, review }: Testimonial) => (
  <div className="bg-white text-[#4377b2] rounded-xl shadow-md p-6 mb-6">
    <div className="flex items-center justify-between mb-2">
      <div className="font-semibold text-lg">{author}</div>
      <span className="text-sm">{date}</span>
    </div>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-xl ${
            i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm">{rating} out of 5</span>
    </div>
    <p className="text-sm">{review || "No full review provided."}</p>
  </div>
);

export default function TestimonialPage() {
  return (
    <div className="bg-[#4377b2] min-h-screen text-white px-4 py-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-center">Student Testimonials</h1>
      <div className="max-w-4xl mx-auto">
        {testimonials.map((t, index) => (
          <TestimonialCard
            key={index}
            rating={t.rating}
            author={t.author}
            date={t.date}
            review={t.review}
          />
        ))}
      </div>
    </div>
  );
}
