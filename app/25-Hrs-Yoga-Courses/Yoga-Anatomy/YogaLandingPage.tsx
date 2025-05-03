import React from "react";

const YogaLandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
              Yoga Courses For Beginners
            </h1>
            <p className="mb-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
              Join Now
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold">20+</h3>
              <p className="text-sm text-gray-600 mt-1">
                Transformative yoga courses designed to grow your mind, body,
                and soul.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-sm font-semibold text-gray-500">Course Language</p>
              <p className="text-lg text-gray-800 mt-1">English</p>
            </div>

            <div className="col-span-2 bg-orange-500 text-white rounded-xl p-6 mt-2">
              <h4 className="font-bold text-lg mb-2">Skills You’ll Learn</h4>
              <p className="text-sm">
                Yoga Poses for Beginners | The Science of Yoga | Anatomy | Light
                Effects | Meditation | Focus | Mind & Body Harmony
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block">
            <img
              src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg"
              alt="Yoga pose"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 shadow-xl text-center w-3/4">
                <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-2 border-2 border-orange-500">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                  urna, porttitor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values and Why Yogshala Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Core Values */}
          <h2 className="text-center text-3xl font-bold text-orange-600 mb-10">
            Core Values
          </h2>
          <div className="grid grid-cols-3 gap-8 items-center text-center mb-16">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 flex items-center justify-center rounded-full mb-2 text-xl">
                🚀
              </div>
              <p className="text-gray-700">Lorem ipsum</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 w-4 h-4 rounded-full mb-2"></div>
              <p className="text-gray-700">Lorem ipsum</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 flex items-center justify-center rounded-full mb-2 text-xl">
                🔄
              </div>
              <p className="text-gray-700">Lorem ipsum</p>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 flex items-center justify-center rounded-full mb-2 text-xl">
                🚀
              </div>
              <p className="text-gray-700">Lorem ipsum</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 w-4 h-4 rounded-full mb-2"></div>
              <p className="text-gray-700">Lorem ipsum</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 flex items-center justify-center rounded-full mb-2 text-xl">
                🔄
              </div>
              <p className="text-gray-700">Lorem ipsum</p>
            </div>
          </div>

          {/* Why Yogshala */}
          <h2 className="text-center text-3xl font-bold text-orange-600 mb-10">
            Why Yogshala?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div className="flex items-center bg-orange-500 rounded-lg px-5 py-4 gap-4">
              <div className="bg-white text-orange-500 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                🎓
              </div>
              <span>Top Indian Academy</span>
            </div>
            <div className="flex items-center bg-orange-500 rounded-lg px-5 py-4 gap-4">
              <div className="bg-white text-orange-500 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                ⭐
              </div>
              <span>5-Star Ratings</span>
            </div>
            <div className="flex items-center bg-orange-500 rounded-lg px-5 py-4 gap-4">
              <div className="bg-white text-orange-500 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                📜
              </div>
              <span>Globally Recognized Certifications</span>
            </div>
            <div className="flex items-center bg-orange-500 rounded-lg px-5 py-4 gap-4">
              <div className="bg-white text-orange-500 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                👨‍🏫
              </div>
              <span>Expert Instructors</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaLandingPage;
