import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

import logo from '../assets/logo.jpg';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="FitPro logo" className="h-12 w-auto" />
            <span className="ml-3 text-2xl font-bold text-primary">FitPro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('membership')} 
              className="btn-primary"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="mobile-nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="mobile-nav-link"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="mobile-nav-link"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="mobile-nav-link"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('membership')} 
              className="w-full btn-primary"
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}