import React from 'react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Improved application performance by 40% through code optimization",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Software Engineer",
    company: "StartUp Inc",
    period: "2019 - 2021",
    description: [
      "Developed full-stack features using React and Node.js",
      "Implemented automated testing reducing bugs by 60%",
      "Collaborated with product team to deliver features on schedule"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}