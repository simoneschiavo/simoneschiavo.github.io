import React from 'react';
import { personalInfo } from '../data/content.js';
import SocialLinks from './SocialLinks.jsx';
import { smoothScrollTo } from '../utils/helpers.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Handle smooth scroll to top
  const handleScrollToTop = e => {
    e.preventDefault();
    smoothScrollTo('hero', 800, 0);
  };

  return (
    <footer
      className="section-spacing bg-gray-900/50 border-t border-gray-800/50"
      role="contentinfo"
    >
      <div className="container-narrow">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-xl mb-6">Get In Touch</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-gray-300 hover:text-blue-500 transition-all duration-300 text-base group"
              >
                <svg
                  className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {personalInfo.email}
              </a>
              <div className="flex items-center text-gray-300 text-base">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {personalInfo.location}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
            <nav className="space-y-4">
              {[
                { href: '#about', label: 'About' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#writing', label: 'Writing' },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    const sectionId = link.href.replace('#', '');
                    smoothScrollTo(sectionId, 800, 80);
                  }}
                  className="block text-gray-300 hover:text-blue-500 transition-all duration-300 text-base hover:translate-x-2 transform font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-blue-500 transition-all duration-300 text-base hover:translate-x-2 transform font-medium"
              >
                Resume
              </a>
            </nav>
          </div>

          {/* Social & Connect */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-xl mb-6">Connect</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Follow my journey and connect with me on social media for the
              latest updates on growth marketing insights.
            </p>
            <SocialLinks
              orientation="horizontal"
              size="medium"
              showLabels={false}
              className="justify-start"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Attribution */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-base font-medium">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Built with{' '}
                <span className="text-blue-500 font-semibold">React</span> &{' '}
                <span className="text-blue-500 font-semibold">
                  Tailwind CSS
                </span>
                . Deployed on{' '}
                <span className="text-blue-500 font-semibold">
                  GitHub Pages
                </span>
                .
              </p>
            </div>

            {/* Design Credit */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                Design inspired by{' '}
                <a
                  href="https://resend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors duration-300 font-semibold"
                >
                  Resend
                </a>
              </p>
              <button
                onClick={handleScrollToTop}
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 text-sm mt-2 flex items-center mx-auto md:mx-0 group font-medium"
              >
                <span>Back to top</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Fun Footer Message */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800/30">
          <p className="text-gray-500 text-sm font-medium">
            <span className="text-blue-500 font-semibold">console.log</span>
            ("Thanks for visiting! 🚀")
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
