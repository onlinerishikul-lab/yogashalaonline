// pages/teachers.tsx
import Image from "next/image";

export const teachers = [
  {
    id: 1,
    name: "Gangesha Chaitanya",
    image: "/Gangesha-Chaitanya.jpg",
    Subtitle: "(Yoga Philosophy, Meditation, Pranayama And Spiritual Guidance)",
    description: `Explore the captivating world of Yoga Philosophy, Meditation, and Pranayama with Gangesha Chaitanya, a revered spiritual guide. His wisdom and profound teachings help students connect deeply with their inner selves and embrace the essence of yogic living.`,
  },
  {
    id: 2,
    name: "Sukra Chiatanya",
    image: "/Sukra Chiatanya.png",
    Subtitle: "(Meditation, Mantra And Pranayama)",
    description: `Welcome to the serene world of Sukra Chiatanya, where Meditation, Mantra, and Pranayama are pathways to self-discovery. With a calm presence and deep understanding, he inspires students to find peace and clarity through ancient techniques.`,
  },
  {
    id: 3,
    name: "Yoga Guru Praveen Raj",
    image: "/Praveen Raj.jpg",
    Subtitle: "(Hatha Yoga, Vinyasa Yoga, Ayurveda And Kalaripayattu)",
    description: `A master of movement and healing, Yoga Guru Praveen Raj blends Hatha Yoga, Vinyasa Flow, Ayurveda, and the martial art of Kalaripayattu. His classes are dynamic, energizing, and deeply rooted in traditional Indian wellness practices.`,
  },
  {
    id: 4,
    name: "Jayasree",
    image: "/Jayasree.png",
    Subtitle: "(Meditation, Yoga Nidra, Mantra And Yoga Therapy)",
    description: `Jayasree brings a nurturing energy to her teachings in Meditation, Yoga Nidra, and Yoga Therapy. Her sessions offer gentle guidance, helping students experience deep relaxation, emotional healing, and holistic well-being.`,
  },
  {
    id: 5,
    name: "Dhyana",
    image: "/Dhyana.png",
    Subtitle: "(Hatha Yoga, Vinyasa Yoga And Sound Healing)",
    description: `Dhyana combines the strength of Hatha Yoga and Vinyasa Flow with the transformative power of Sound Healing. Her soulful sessions promote alignment, energy balance, and inner harmony.`,
  },
  {
    id: 6,
    name: "Athira",
    image: "/Athira.png",
    Subtitle: "(Ashtanga Yoga, Prenatal Yoga And Yoga Therapy)",
    description: `With a warm and compassionate approach, Athira guides students through Ashtanga Yoga, Prenatal Yoga, and therapeutic practices. Her deep knowledge and care create a safe space for growth and healing.`,
  },
];

export default function TeachersPage() {
  return (
    <div className="bg-white text-[#4377b2] min-h-screen py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Teachers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-[#4377b2] text-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
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
              <h4 className="italic text-sm mb-3">{teacher.Subtitle}</h4>
              <p className="text-sm leading-relaxed">{teacher.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
