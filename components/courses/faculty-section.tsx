import Image from "next/image";

export default function FacultySection() {
  const facultyMembers = [
    { image: "/placeholder.svg?height=40&width=40", alt: "Faculty member 1" },
    { image: "/placeholder.svg?height=40&width=40", alt: "Faculty member 2" },
    { image: "/placeholder.svg?height=40&width=40", alt: "Faculty member 3" },
    { image: "/placeholder.svg?height=40&width=40", alt: "Faculty member 4" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Text and Stats */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-[#4377B2] mb-6">
              Know About Your Faculty
            </h2>
            <p className="text-gray-600 text-lg">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis et
              aliquet magnis nulla ut himenaeos. Duis vehicula imperdiet sed
              pulvinar ipsum. Quis primis etiam natoque parturient, consectetur
              hac tincidunt eros. Senectus sed augue purus blandit potenti purus
              phasellus vulputate.
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-[#4377B2] p-8 rounded-3xl">
            <div className="space-y-6">
              <h3 className="text-6xl md:text-7xl font-bold text-white">
                920+
              </h3>
              <p className="text-white/90 text-lg">
                Project finish with superbly
              </p>
              <div className="flex -space-x-3">
                {facultyMembers.map((member, index) => (
                  <div
                    key={index}
                    className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white">
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Large Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/course-faculty.jpg"
              alt="Faculty member portrait"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative Circle */}
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#4377B2] rounded-full" />
        </div>
      </div>
    </section>
  );
}
