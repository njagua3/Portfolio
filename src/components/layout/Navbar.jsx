import { useState } from 'react';
import { Menu } from 'lucide-react';
import Container from '../ui/Container';
import NavLink from './NavLink';
import MobileNavLink from './MobileNavLink';
import Logo from '../ui/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <Logo />
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden md:flex space-x-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#portfolio">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#about">About</MobileNavLink>
              <MobileNavLink href="#skills">Skills</MobileNavLink>
              <MobileNavLink href="#experience">Experience</MobileNavLink>
              <MobileNavLink href="#portfolio">Projects</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}