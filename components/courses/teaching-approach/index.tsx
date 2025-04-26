import type { TeachingApproachProps } from "@/types/course";
import Image from "next/image";

export default function TeachingApproach({
  points = [],
  title = "Our Teaching Approach",
  centerImage = "https://images.unsplash.com/photo-1466378743612-9da217f53e55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  buttonText = "Learn From Experts",
}: TeachingApproachProps) {
  // Split points into left and right sections
  const midPoint = Math.ceil(points.length / 2);
  const leftPoints = points.slice(0, midPoint);
  const rightPoints = points.slice(midPoint);

  const ContentBox = ({ id, content }: { id: number; content: string }) => (
    <div className="bg-gray-100 p-6 rounded-lg relative shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center absolute -top-4 left-4">
        {id}
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );

  return (
    <div className='bg-[url("/assets/CoreValues.svg")] bg-cover bg-no-repeat min-h-screen bg-white px-4 py-16 relative'>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#4377B2]">
          {title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* Left side content */}
          <div className="space-y-8 md:py-8 flex flex-col justify-between relative z-10">
            {leftPoints.map((point, index) => (
              <div
                key={index}
                className="transform hover:translate-x-4 transition-transform duration-300"
                style={{ marginRight: "-10%" }}
              >
                <ContentBox id={index + 1} content={point} />
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="flex items-center justify-center relative -mx-4 md:-mx-12">
            <div className="relative w-[120%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={centerImage || "/placeholder.svg"}
                alt="Teaching approach illustration"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="space-y-8 md:py-8 flex flex-col justify-between relative z-10">
            {rightPoints.map((point, index) => (
              <div
                key={index + midPoint}
                className="transform hover:translate-x-[-1rem] transition-transform duration-300"
                style={{ marginLeft: "-10%" }}
              >
                <ContentBox
                  key={index + midPoint}
                  id={index + midPoint + 1}
                  content={point}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-[#4377B2] text-white px-8 py-3 rounded-full hover:bg-[#285384] transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
