import React from 'react';
import { personalInfo } from '../data/content.js';
import SocialLinks from './SocialLinks.jsx';
import { smoothScrollTo } from '../utils/helpers.js';

const Hero = () => {
  // Handle smooth scroll navigation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const sectionId = targetId.replace('#', '');
    smoothScrollTo(sectionId, 800, 80);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
      aria-labelledby="hero-heading"
      role="banner"
    >
      <div className="container-narrow">
        <div className="max-w-none sm:max-w-2xl lg:max-w-3xl">
          {/* Greeting */}
          <p className="text-green font-mono responsive-text-sm mb-4 sm:mb-5 animate-fade-in-up">
            Hi, my name is
          </p>

          {/* Name */}
          <h1
            id="hero-heading"
            className="responsive-text-4xl font-bold text-lightest-slate mb-4 sm:mb-5 leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            {personalInfo.name}.
          </h1>

          {/* Tagline */}
          <h2
            className="responsive-text-3xl font-bold text-slate mb-4 sm:mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {personalInfo.tagline}
          </h2>

          {/* Description */}
          <p
            id="hero-description"
            className="text-slate text-container responsive-text-base leading-relaxed mb-8 sm:mb-10 lg:mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {personalInfo.description}
          </p>

          {/* Call to Action */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#about"
              onClick={e => handleNavClick(e, '#about')}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNavClick(e, '#about');
                }
              }}
              className="btn group"
              role="button"
              aria-describedby="hero-description"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Get to know me
              </span>
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Social Links - Mobile Only */}
          <div
            className="mt-12 sm:mt-16 lg:hidden animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <SocialLinks size="large" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={e => handleNavClick(e, '#about')}
          className="text-slate hover:text-green transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green/50 rounded-full p-2"
          aria-label="Scroll to about section"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
