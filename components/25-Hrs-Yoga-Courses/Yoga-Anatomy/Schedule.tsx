import React from 'react';

const Schedule = () => {
  const modules = [
    {
      week: "Weeks 1-2",
      title: "Foundations of Yoga Practice",
      description: "Introduction to yoga history, philosophy, and essential asanas. Learn proper alignment principles and begin to develop your teaching voice.",
      topics: ["History of Yoga", "Foundational Asanas", "Basic Anatomy", "Introduction to Pranayama"]
    },
    {
      week: "Weeks 3-4",
      title: "Deepening Practice & Teaching Methodology",
      description: "Expand your asana practice and develop teaching skills including sequencing, adjustments, and modifications.",
      topics: ["Sequencing Principles", "Props & Modifications", "Teaching Methodology", "Hands-on Adjustments"]
    },
    {
      week: "Weeks 5-6",
      title: "Philosophy & Subtle Body",
      description: "Explore yoga philosophy through key texts and understand the subtle body including chakras, nadis, and koshas.",
      topics: ["Yoga Sutras", "Chakra System", "Meditation Techniques", "Sanskrit Basics"]
    },
    {
      week: "Weeks 7-8",
      title: "Specialized Teaching & Advanced Asanas",
      description: "Learn to teach specialized populations and explore more advanced asana variations and sequencing.",
      topics: ["Prenatal Yoga", "Yoga for Seniors", "Advanced Asanas", "Injury Prevention"]
    },
    {
      week: "Weeks 9-10",
      title: "Teaching Practicum & Business of Yoga",
      description: "Refine your teaching through practice teaching sessions and learn the business aspects of being a yoga teacher.",
      topics: ["Practice Teaching", "Building Your Brand", "Marketing Basics", "Ethics & Professionalism"]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">Program Schedule & Curriculum</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Our 10-week program is designed to progressively build your knowledge, skills, and confidence as a yoga teacher.
          </p>
        </div>
        
        <div className="space-y-8">
          {modules.map((module, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 py-2">
              <div className="bg-primary-light p-6 rounded-r-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-serif font-medium text-primary">{module.title}</h3>
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {module.week}
                  </span>
                </div>
                <p className="text-primary mb-4">{module.description}</p>
                <div className="flex flex-wrap gap-2">
                  {module.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="bg-white text-primary px-3 py-1 rounded-md text-sm border border-primary">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-primary-light p-8 rounded-lg">
          <h3 className="text-2xl font-serif text-primary mb-4 text-center">Weekly Schedule Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-primary mb-2">Live Sessions</h4>
              <ul className="space-y-3 text-primary">
                <li className="flex justify-between">
                  <span>Tuesday</span>
                  <span className="text-primary">7:00 PM - 9:00 PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Thursday</span>
                  <span className="text-primary">7:00 PM - 9:00 PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-primary">10:00 AM - 1:00 PM EST</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-primary">All live sessions are recorded for those unable to attend.</p>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Self-Paced Components</h4>
              <ul className="space-y-3 text-primary">
                <li className="flex justify-between">
                  <span>Daily Practice</span>
                  <span className="text-primary">30-60 minutes</span>
                </li>
                <li className="flex justify-between">
                  <span>Reading & Study</span>
                  <span className="text-primary">3-5 hours weekly</span>
                </li>
                <li className="flex justify-between">
                  <span>Assignments</span>
                  <span className="text-primary">2-3 hours weekly</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-primary">Estimated time commitment: 12-15 hours per week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;