import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { personalInfo } from '../../data/personalInfo';
import Container from '../ui/Container';
import NavLink from '../ui/NavLink';
import SocialLink from '../ui/SocialLink';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { icon: BookOpen, href: personalInfo.medium, label: 'Medium Blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
            {personalInfo.name.split(' ')[0]}
            <span className="text-blue-600">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 
                     dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} mobile onClick={() => setIsOpen(false)} />
            ))}
            <div className="flex items-center gap-4 px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}