import PropTypes from 'prop-types';
import { experiences } from '../../data/experience';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

// Experience section component - Display work history and achievements
export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" />
        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.title}>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}