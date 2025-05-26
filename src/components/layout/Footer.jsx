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
    <footer className="section-spacing bg-light-navy/50" role="contentinfo">
      <div className="container-narrow">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lightest-slate font-semibold text-lg mb-4">
              Get In Touch
            </h3>
            <p className="text-slate text-sm leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-slate hover:text-green transition-colors duration-300 text-sm group"
              >
                <svg
                  className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300"
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
              <div className="flex items-center text-slate text-sm">
                <svg
                  className="w-4 h-4 mr-2"
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
          <div className="space-y-4">
            <h3 className="text-lightest-slate font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
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
                  className="block text-slate hover:text-green transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate hover:text-green transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform"
              >
                Resume
              </a>
            </nav>
          </div>

          {/* Social & Connect */}
          <div className="space-y-4">
            <h3 className="text-lightest-slate font-semibold text-lg mb-4">
              Connect
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-4">
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
        <div className="border-t border-lightest-navy/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Attribution */}
            <div className="text-center md:text-left">
              <p className="text-slate text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-slate text-xs mt-1">
                Built with <span className="text-green">React</span> &{' '}
                <span className="text-green">Tailwind CSS</span>. Deployed on{' '}
                <span className="text-green">GitHub Pages</span>.
              </p>
            </div>

            {/* Design Credit */}
            <div className="text-center md:text-right">
              <p className="text-slate text-xs">
                Design inspired by{' '}
                <a
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green hover:text-green/80 transition-colors duration-300"
                >
                  Brittany Chiang
                </a>
              </p>
              <button
                onClick={handleScrollToTop}
                className="text-slate hover:text-green transition-colors duration-300 text-xs mt-1 flex items-center mx-auto md:mx-0 group"
              >
                <span>Back to top</span>
                <svg
                  className="w-3 h-3 ml-1 group-hover:-translate-y-1 transition-transform duration-300"
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
        <div className="text-center mt-8 pt-8 border-t border-lightest-navy/10">
          <p className="text-slate text-xs font-mono">
            <span className="text-green">console.log</span>("Thanks for
            visiting! 🚀")
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
