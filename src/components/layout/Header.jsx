import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/content.js';
import SocialLinks from './SocialLinks.jsx';
import {
  smoothScrollTo,
  getActiveSection,
  debounce,
} from '../utils/helpers.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle scroll effect for header background and active section
  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'writing'];

    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
      setActiveSection(getActiveSection(sections, 100));
    }, 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle escape key to close mobile menu and focus management
  useEffect(() => {
    const handleKeyDown = event => {
      if (!isMenuOpen) return;

      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        buttonRef.current?.focus();
      }

      // Tab trapping within mobile menu
      if (event.key === 'Tab') {
        const focusableElements = menuRef.current?.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (event.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open and manage focus
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';

      // Focus first menu item when menu opens
      setTimeout(() => {
        const firstMenuItem = menuRef.current?.querySelector('a[href]');
        firstMenuItem?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle smooth scroll navigation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const sectionId = targetId.replace('#', '');
    smoothScrollTo(sectionId, 800, 80);
    setIsMenuOpen(false); // Close mobile menu

    // Clear focus from the clicked element
    e.target.blur();
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#writing', label: 'Writing', id: 'writing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50'
          : 'bg-black/90 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav
        id="navigation"
        className="container-narrow py-4 sm:py-5"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo/Name with Resend styling */}
          <div className="text-blue-500 font-bold text-lg hover:text-blue-400 transition-colors duration-300">
            <a href="#hero" onClick={e => handleNavClick(e, '#hero')}>
              {personalInfo.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <ul className="flex items-center space-x-8 lg:space-x-10">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className={`nav-link transition-all duration-300 font-semibold text-sm tracking-wide ${
                      activeSection === link.id
                        ? 'text-blue-500'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  className="btn btn-secondary text-sm px-6 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>

            {/* Desktop Social Links */}
            <div className="border-l border-gray-700/50 pl-8">
              <SocialLinks size="medium" />
            </div>
          </div>

          {/* Mobile Menu Button with Resend styling */}
          <button
            ref={buttonRef}
            className="md:hidden relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`absolute block w-6 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '0' }}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div
            ref={menuRef}
            id="mobile-menu"
            className={`relative h-full flex flex-col justify-center items-center transform transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-8 opacity-0'
            }`}
          >
            <nav className="text-center">
              <ul className="space-y-10">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`transform transition-all duration-300 ease-out ${
                      isMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen
                        ? `${index * 100 + 100}ms`
                        : '0ms',
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={e => handleNavClick(e, link.href)}
                      className={`block text-3xl sm:text-4xl font-bold transition-all duration-300 hover:transform hover:scale-105 ${
                        activeSection === link.id
                          ? 'text-blue-500'
                          : 'text-white hover:text-blue-400'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li
                  className={`transform transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${navLinks.length * 100 + 100}ms`
                      : '0ms',
                  }}
                >
                  <a
                    href="/resume.pdf"
                    className="btn btn-secondary text-lg px-10 py-4 mt-12 inline-block hover:transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social Links in Mobile Menu */}
            <div
              className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen
                  ? `${(navLinks.length + 1) * 100 + 100}ms`
                  : '0ms',
              }}
            >
              <SocialLinks size="large" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
