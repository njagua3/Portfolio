import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">John Developer</h1>
        <div className="flex gap-4">
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:john@example.com" className="text-gray-600 hover:text-gray-900">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}