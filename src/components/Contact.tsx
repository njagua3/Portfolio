import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:john@example.com"
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50"
            >
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">john@example.com</p>
              </div>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                <p className="text-gray-600">Connect with me</p>
              </div>
            </a>
            <a
              href="https://github.com"
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50"
            >
              <Github className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">GitHub</h3>
                <p className="text-gray-600">View my repositories</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}