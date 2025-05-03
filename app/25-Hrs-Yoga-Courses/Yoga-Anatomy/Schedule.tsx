import React from 'react';

const Schedule = () => {
  const modules = [
    {
      week: "Weeks 1-2",
      title: "Introduction to Yoga Anatomy",
      description: "Learn the basics of human anatomy as it relates to yoga. Understand how the body moves and how to apply anatomical principles to your practice.",
      topics: ["Skeletal System", "Muscular System", "Joint Mobility", "Basic Posture Alignment"]
    },
    {
      week: "Weeks 3-4",
      title: "The Muscular System in Yoga",
      description: "Dive deeper into the muscular system and how specific muscle groups are activated during yoga postures. Learn how to engage muscles for better alignment and protection.",
      topics: ["Major Muscle Groups", "Muscle Activation", "Strength vs Flexibility", "Breathing and Muscle Relaxation"]
    },
    {
      week: "Weeks 5-6",
      title: "The Spine & Nervous System",
      description: "Understand the structure and function of the spine and how it relates to yoga. Explore how different postures affect spinal health and the nervous system.",
      topics: ["Spinal Anatomy", "Nerve Pathways", "Postures for Spine Health", "The Role of the Nervous System"]
    },
    {
      week: "Weeks 7-8",
      title: "The Respiratory & Cardiovascular Systems",
      description: "Examine the respiratory and cardiovascular systems and their connection to breathwork in yoga. Learn how to regulate breath for optimal yoga practice.",
      topics: ["Lung Capacity & Breath Control", "Pranayama Techniques", "Heart Rate and Blood Flow", "Breath and Movement Synchronization"]
    },
    {
      week: "Weeks 9-10",
      title: "Yoga Anatomy in Practice & Injury Prevention",
      description: "Apply anatomical knowledge to yoga practice and explore injury prevention strategies. Learn how to modify postures for different body types and limitations.",
      topics: ["Posture Modifications", "Injury Prevention", "Body Awareness in Practice", "Advanced Anatomy for Teachers"]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">Yoga Anatomy Program Schedule & Curriculum</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Our 10-week Yoga Anatomy program is designed to give you a deep understanding of how the body functions during yoga practice, ensuring safe and effective teaching.
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
