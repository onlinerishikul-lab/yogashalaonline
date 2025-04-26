import { useRef, useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface CarouselCourse {
  image: string;
  duration: string;
  title: string;
  price: number;
}

export function CarouselSpacing({ courses }: { courses: CarouselCourse[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const [duration, setDuration] = useState(50);

  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = containerRef.current.scrollWidth;
    setDuration((contentWidth / containerWidth) * 30);
  }, []);

  useEffect(() => {
    if (isHovered) {
      // Pause the animation
      controls.stop();
    } else {
      // Resume the animation from current position
      controls.start({
        x: [0, -100 * courses.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        },
      });
    }
  }, [isHovered, controls, courses.length, duration]);

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-hidden py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="flex gap-4" initial={{ x: 0 }} animate={controls}>
        {[...courses, ...courses].map((course, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${course.image})`,
            }}
            className="min-w-[400px] min-h-[350px] overflow-hidden shadow-lg relative  h-[320px] bg-cover bg-center rounded-lg"
          >
            <div className="bg-[#4377B2] absolute top-4 text-sm px-2 py-1 text-white">
              {course.duration}
            </div>
            <div className="absolute bottom-10 w-full px-2 py-1 flex space-x-2 items-end justify-between">
              <div className="text-lg text-white w-2/3">{course.title}</div>
              <div className="text-sm text-white font-bold text-right">
                ${course.price}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
