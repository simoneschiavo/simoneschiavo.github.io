import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isMenuOpen &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.menu-button')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/articles', label: 'Articles' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4">
      <nav className="container-responsive">
        <div
          className={`mx-4 md:mx-8 transition-all duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-90'
          }`}
        >
          {/* Main navbar container - pill-shaped like Graphite */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 md:px-8 md:py-4 shadow-2xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  className="text-xl md:text-2xl font-bold text-white hover:text-zinc-300 transition-all duration-200"
                >
                  S<sup>2</sup>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map(item => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white'
                          : 'text-zinc-300 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden menu-button p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300 transform -translate-y-1/2 ${
                      isMenuOpen ? 'rotate-45' : ''
                    }`}
                  ></span>
                  <span
                    className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300 transform -translate-y-1/2 ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span
                    className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300 transform -translate-y-1/2 ${
                      isMenuOpen ? '-rotate-45' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mobile-menu mt-4">
              <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-4 shadow-2xl">
                <div className="space-y-2">
                  {navItems.map(item => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'text-white bg-white/10'
                            : 'text-zinc-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
