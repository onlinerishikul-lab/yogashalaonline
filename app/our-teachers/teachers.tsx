"use client";
import { useState } from "react";
import Image from "next/image";

export const teachers = [
  {
    id: 1,
    name: "Gangesha Chaitanya",
    image: "/Gangesha-Chaitanya.jpg",
    Subtitle: "(Yoga Philosophy, Meditation, Pranayama And Spiritual Guidance)",
    description: `Explore the captivating world of Yogi Gangesha Chaitanya, a master of Yoga Philosophy, Meditation, Pranayama, and Spiritual Guidance. Guided by the revered saint Swami Rama from a young age, Yogi Gangesha has become a beacon of wisdom and compassion.
Immerse yourself in the transformative teachings of Yogi Gangesha Chaitanya, a master of Yoga Philosophy, Meditation, Pranayama, and Spiritual Guidance. With guidance from revered saints and immersion in renowned yoga traditions, Yogi Gangesha offers a harmonious blend of ancient wisdom and modern insights. Experience the serene aura of his classes as he leads you on a journey to awaken your kundalini energy and explore higher consciousness. Join him to unlock the limitless potential of your mind and spirit, embracing the magic of meditation and spiritual wisdom. Let Yogi Gangesha illuminate your path to inner harmony and enlightenment.`,
  },
  {
    id: 2,
    name: "Sukra Chiatanya",
    image: "/Sukra Chiatanya.png",
    Subtitle: "(Meditation, Mantra And Pranayama)",
    description: `Welcome to the serene world of Yogi Sukra Chaitanya, hailing from the charming villages of West Odisha, India. He immersed himself in the study of human nature and the environment, mastering educational psychology and environmental sciences at Sambalpur University. Seeking deeper wisdom, he ventured into the spiritual realm, diving into Yoga Sciences and Indian Philosophy at Dev Sanskriti Haridwar University.
Under the guidance of renowned masters like Swami Veda Bharati from the Himalayan Tradition, Yogi Sukra Chaitanya embarked on a journey to greater heights. He further honed his skills in traditional Kriya yoga under the wise mentorship of Swami Sankaranand Giri and Swami Nityanandaji of the Yoga Satsang Society, India.
Yogi Sukra Chaitanya's teachings resonate like a beautiful symphony, bringing harmony to the mind, body, and soul, attracting seekers from around the world. With each breath, his students uncover the profound treasures within themselves, guided by the wisdom of a true master.`,
  },
  {
    id: 3,
    name: "Purnima Ji",
    image: "/Purnima Ji.png",
    Subtitle: "(Pranayama & Meditation)",
    description: `Embark on a transformative journey with Purnima, whose spiritual quest began in the sacred lands of Karnataka, steeped in the teachings of Basavanna. Through her deep-rooted spiritual upbringing, Purnima found herself drawn to the path of inner awakening at an early age. Guided by revered mentors like Sri Ganeswer Avadhut and Swami Veda Bharthi, she delved into the profound practices of pranayama, meditation, and philosophy, enriching her spiritual journey.
Driven by a desire to share her wisdom, Purnima devoted herself to serving in ashrams, touching the lives of countless individuals across 42 villages in Karnataka. Her innate ability to forge deep connections resonated deeply with all those she encountered. Upon her arrival in Rishikesh in 2015, Purnima's passion for yoga soared to new heights as she immersed herself in the teachings of skilled yogis, igniting a divine spark within her soul.`,
  },
  {
    id: 4,
    name: "Himanshu Ji",
    image: "/Himanshu Ji.png",
    Subtitle: "(Philosophy, Pranayama & Meditation)",
    description: `Himanshu Ji is not just a yoga teacher; he's a beacon of knowledge and inspiration in the world of yoga. Born and raised in the serene surroundings of Rishikesh, known as the Capital Yoga world, Himanshu Ji's connection with yoga runs deep in his roots. For several years, he has dedicated himself to teaching Ashtanga and Hatha Yoga at Pankaj Yogpeeth, where his classes are renowned for their energy and power. Himanshu Ji's journey into yoga began with humble steps as he spent years immersing himself in the practice under the guidance of numerous esteemed teachers and gurus. Each encounter enriched his understanding and proficiency in yoga, shaping him into the exceptional teacher he is today. His commitment to continuous learning led him to complete his studies in the very heart of yoga education, the vibrant city of Rishikesh.
In every class, Himanshu Ji infuses his teachings with profound philosophy, guiding students to explore the deeper dimensions of yoga beyond just the physical postures. His deep understanding of yogic philosophy resonates through his words, inspiring practitioners to connect with their inner selves and discover the true essence of yoga.`,
  },
  {
    id: 5,
    name: "Akshay Nautiyal",
    image: "/Akshay Nautiyal.jpg",
    Subtitle: "(Yoga Philosophy, Meditation, Pranayama And Spiritual Guidance)",
    description: `Born in the spiritual heart of yoga, Rishikesh, I have been deeply immersed in the practice of yoga for over two years. My journey began with Hatha yoga and Astanga Vinyasa, which I have honed under the guidance of some of the most esteemed teachers of rishikesh. Alongside yoga, I am also passionate about bodyweight training, integrating strength-building techniques to enhance physical endurance and control.
Currently pursuing my graduation in Yoga, I am continuously expanding my knowledge and refining my practice to guide students with authenticity and precision. My approach blends traditional yogic wisdom with modern movement principles, helping practitioners cultivate strength, flexibility, and inner awareness.
Whether through dynamic Ashtanga sequences or grounding Hatha practices with proper adjustment and alignment, my goal is to make yoga accessible and transformative for all. I believe yoga is not just about physical postures but a journey toward self-discovery, balance, and well-being.
Exploring the depths of yoga, where movement meets mindfulness, and strength merges with serenity.`,
  },
  {
    id: 6,
    name: "Balram Baloni",
    image: "/Balram Baloni.jpg",
    Subtitle: "(Yoga Philosophy, Meditation, Pranayama And Spiritual Guidance)",
    description: `Balram Baloni is a dedicated yoga practitioner and teacher with a deep commitment to the discipline. He began his yoga journey in 2018 in Rishikesh, a renowned hub for spiritual learning and practice. He has completed both 200-hour and 300-hour teacher training courses at Rishikul Yogashala, Rishikesh, in 2019, specializing in Hatha Yoga, adjustment, and alignment techniques. Balram’s expertise is rooted in his extensive training and ongoing study, as he is currently pursuing his Master’s degree at Uttarakhand Sanskrit University, Haridwar (2023/24). With over four years of teaching experience, he has been sharing his knowledge at Rishikul Yogashala since 2021. His teaching focuses on creating a harmonious balance between mind, body, and soul, helping students develop a deeper understanding of yoga's physical and spiritual aspects. Balram’s approach is rooted in careful attention to alignment, ensuring safe and effective practice for students of all levels. He continues to inspire and guide individuals on their path to health, well-being, and self-awareness through yoga.`,
  },
  {
    id: 7,
    name: "Swami Amarna ji",
    image: "/Swami Amarna ji.png",
    Subtitle: "(Yoga Philosophy, Meditation, Pranayama And Spiritual Guidance)",
    description: "John is a certified yoga instructor with 10+ years of experience in Hatha and Vinyasa yoga.",
  },
];

function TeacherCard({ teacher }: { teacher: (typeof teachers)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const preview = teacher.description.slice(0, 250);
  const isLong = teacher.description.length > 250;

  return (
    <div className="bg-[#4377b2] text-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <div className="relative w-full h-72">
        <Image
          src={teacher.image}
          alt={teacher.name}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold">{teacher.name}</h2>
        <h4 className="italic text-sm mb-3 text-white/80">{teacher.Subtitle}</h4>
        <p className="text-sm leading-relaxed">
          {expanded ? teacher.description : preview}
          {isLong && (
            <span
              className="text-yellow-300 ml-2 cursor-pointer font-semibold"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "Read more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default function TeachersPage() {
  return (
    <div className="bg-white text-[#4377b2] min-h-screen py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Teachers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
