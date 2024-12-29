import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">{personalInfo.name}</h1>
        <div className="flex gap-4">
          <a href={personalInfo.github} className="text-gray-600 hover:text-gray-900">
            <Github className="w-6 h-6" />
          </a>
          <a href={personalInfo.linkedin} className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-gray-900">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}