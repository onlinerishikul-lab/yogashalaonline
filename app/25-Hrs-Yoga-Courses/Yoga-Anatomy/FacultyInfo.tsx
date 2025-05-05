import Image from "next/image";

const FacultyInfo = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
            Know About Your Faculty
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Venenatis et aliquet magna
            nullam lacinia morbi. Duis vehicula eget tincidunt pulvinar ipsum. Quis gravida
            sem erat volutpat porttitor, consectetur hac tincidunt eros.
          </p>

          <div className="bg-orange-600 text-white p-6 rounded-lg w-60 text-center">
            <div className="text-4xl font-bold">920+</div>
            <div className="mt-2">Project finish with superbly</div>

            <div className="flex justify-center mt-4 space-x-[-10px]">
              {/* Replace with actual images */}
              {["1", "2", "3", "4"].map((_, idx) => (
                <Image
                  key={idx}
                  src={`/faculty-avatar-${idx + 1}.png`}
                  alt={`Faculty ${idx + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-white text-orange-600 font-bold flex items-center justify-center border-2 border-orange-600">
                +
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/faculty-main.png" // Save the image you uploaded as this
            alt="Faculty"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FacultyInfo;
