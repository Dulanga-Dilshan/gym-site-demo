import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from '../assets/logo.jpg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="FitPro logo" className="h-14 w-auto" />
              <h2 className="text-2xl font-bold text-primary">FitPro</h2>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-md">
              Transform your body and mind at FitPro. Join our community of fitness enthusiasts and start your journey to a healthier, stronger you.
            </p>
            <div className="flex gap-4">
              <button className="social-btn">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="social-btn">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="social-btn">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="social-btn">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="link-secondary"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="link-secondary"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('trainers')}
                  className="link-secondary"
                >
                  Trainers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('membership')}
                  className="link-secondary"
                >
                  Membership
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="link-secondary"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Fitness Sports Center. All rights reserved. Built with passion for fitness.
          </p>
        </div>
      </div>
    </footer>
  );
}