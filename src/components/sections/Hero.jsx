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
      className="min-h-screen flex items-center relative overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-[0.03] hero-bg-element">
          <div className="w-full h-full border border-green/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 opacity-[0.05] hero-bg-element">
          <div className="w-full h-full border border-green/30 rotate-45"></div>
        </div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 opacity-[0.04] hero-bg-element">
          <div className="w-full h-full bg-green/10 rounded-lg rotate-12"></div>
        </div>
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-none">
          {/* Content Container with enhanced spacing */}
          <div className="space-y-6 sm:space-y-8 hero-content-spacing">
            {/* Greeting */}
            <div className="animate-fade-in-up">
              <p className="hero-greeting">Hi, my name is</p>
            </div>

            {/* Name with enhanced styling */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <h1
                id="hero-heading"
                className="hero-name hero-name-shadow relative"
              >
                <span className="relative z-10">{personalInfo.name}.</span>
                {/* Subtle text shadow effect */}
                <span
                  className="absolute inset-0 text-green/10 blur-sm"
                  aria-hidden="true"
                >
                  {personalInfo.name}.
                </span>
              </h1>
            </div>

            {/* Tagline with enhanced spacing */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <h2 className="hero-tagline">{personalInfo.tagline}</h2>
            </div>

            {/* Description with better container */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="max-w-lg">
                <p id="hero-description" className="hero-description">
                  {personalInfo.description}
                </p>
              </div>
            </div>

            {/* Call to Action with enhanced styling */}
            <div
              className="animate-fade-in-up pt-4 sm:pt-6"
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
                className="btn group relative overflow-hidden hero-cta"
                role="button"
                aria-describedby="hero-description"
              >
                <span className="relative z-10 flex items-center">
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
                </span>
              </a>
            </div>

            {/* Social Links - Mobile Only with enhanced spacing */}
            <div
              className="pt-8 sm:pt-12 lg:hidden animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <SocialLinks size="large" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate to-transparent opacity-50"></div>
          <button
            onClick={e => handleNavClick(e, '#about')}
            className="text-slate hover:text-green transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green/50 rounded-full p-2 hover:transform hover:scale-110 animate-bounce"
            aria-label="Scroll to about section"
          >
            <svg
              className="w-5 h-5"
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
      </div>
    </section>
  );
};

export default Hero;
