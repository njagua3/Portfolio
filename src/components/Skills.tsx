import React from 'react';

const skills = [
  { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { category: "DevOps & Tools", items: ["Git", "Docker", "AWS", "CI/CD"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}