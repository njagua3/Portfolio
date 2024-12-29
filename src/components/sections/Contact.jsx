import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <SectionTitle title="Get In Touch" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500
                           dark:bg-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500
                           dark:bg-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500
                           dark:bg-gray-600 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                         hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-600 dark:text-gray-200 hover:text-blue-600">
                  <Mail className="w-6 h-6" />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={personalInfo.linkedin} className="flex items-center gap-4 text-gray-600 dark:text-gray-200 hover:text-blue-600">
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href={personalInfo.github} className="flex items-center gap-4 text-gray-600 dark:text-gray-200 hover:text-blue-600">
                  <Github className="w-6 h-6" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}