"use client";

import { Infinity, Zap, Webhook, Clock, CalendarDays, DollarSign, Settings, Activity, Users } from "lucide-react";

const CourseDetails = () => {
  const features = [
    { id: 1, icon: <Infinity />, title: "On-demand requests" },
    { id: 2, icon: <Zap />, title: "Top-notch quality" },
    { id: 3, icon: <Webhook />, title: "Powered by - Webflow" },
    { id: 4, icon: <Clock />, title: "Fast. Responsive. Reliable." },
    { id: 5, icon: <CalendarDays />, title: "No Lock in contracts" },
    { id: 6, icon: <DollarSign />, title: "Great value for money" },
    { id: 7, icon: <Settings />, title: "Customized for you" },
    { id: 8, icon: <Activity />, title: "Creative paying" },
    { id: 9, icon: <Users />, title: "Expert turnovers" },
  ];

  return (
    <section className="bg-orange-600 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What’s Inside The Course?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis et
          aliquet magnis nulla ut himeneaeos. Duis vehicula imperdiet sed
          pulvinar ipsum.
        </p>
        <button className="mb-12 bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-100 transition">
          Enroll Now
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4">
              <div className="mt-1 text-2xl">{feature.icon}</div>
              <div>
                <h3 className="font-bold mb-1">{feature.id}. {feature.title}</h3>
                <p className="text-sm">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Orci
                  vitae purus porta eu mattis nunc hac vel.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
