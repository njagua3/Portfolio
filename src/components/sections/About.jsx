import PropTypes from 'prop-types';
import { personalInfo } from '../../data/personalInfo';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

// About section component - Personal information and background
export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <Container>
        <SectionTitle title="About Me" />
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {personalInfo.about}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {personalInfo.education}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Interests
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {personalInfo.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}