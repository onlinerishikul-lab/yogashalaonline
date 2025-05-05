"use client";

const TeachingApproach = () => {
  const items = [
    { id: 1, text: "Lorem ipsum odor amet, consectetuer adipiscing elite" },
    {
      id: 2,
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris inceptos aliquam augue tristique convallis leo cursus lectus. Sodales malesuada curabitur primis consequat cras ligula.",
    },
    { id: 3, text: "Lorem ipsum odor amet, consectetuer adipiscing elite" },
    { id: 4, text: "Lorem ipsum odor amet, consectetuer adipiscing elite" },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10">
        Our Teaching Approach
      </h2>
      <div className="relative max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 z-10">
          {items.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="bg-[#4D5475] p-4 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="bg-[#6E7497] w-7 h-7 rounded-full flex items-center justify-center font-bold">
                {item.id}
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="relative z-0">
          <img
            src="/your-image.jpg" // Replace with actual path or import if using next/image
            alt="Teacher"
            className="rounded-[40px] shadow-lg w-full h-auto object-cover"
          />
        </div>

        <div className="space-y-6 z-10">
          {items.slice(2).map((item) => (
            <div
              key={item.id}
              className="bg-[#4D5475] p-4 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="bg-[#6E7497] w-7 h-7 rounded-full flex items-center justify-center font-bold">
                {item.id}
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-12 bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
        Learn From Experts
      </button>
    </section>
  );
};

export default TeachingApproach;
