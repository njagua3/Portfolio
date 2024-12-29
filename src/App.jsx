import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ThemeToggle from './components/ui/ThemeToggle';
import ScrollToTop from './components/ui/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© {new Date().getFullYear()} Kevin Nyingi. All rights reserved.</p>
          </div>
        </footer>
        <ThemeToggle />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}