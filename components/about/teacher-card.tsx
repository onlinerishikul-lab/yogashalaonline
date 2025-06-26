"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface TeacherCardProps {
  image: string;
  name: string;
}

export function TeacherCard({ image, name }: TeacherCardProps) {
  return (
    <Link href="/our-teachers">
      <motion.div
        className="relative w-[280px] h-[380px] rounded-3xl overflow-hidden mx-2 group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-[#4377B2]/90 transition-colors duration-300" />

        {/* Name overlay */}
        <div className="absolute bottom-4 left-4 text-white text-xl font-medium group-hover:opacity-0 transition-opacity duration-300">
          {name}
        </div>

        {/* Read More overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg border border-white px-6 py-2 rounded-full">
            READ MORE
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
