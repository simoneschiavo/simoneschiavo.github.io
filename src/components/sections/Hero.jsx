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
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Resend-inspired background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0, 163, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 163, 255, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        {/* Floating geometric shapes with Resend colors */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 opacity-[0.02] animate-pulse">
          <div className="w-full h-full border border-blue-500/20 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-1/3 left-1/4 w-40 h-40 opacity-[0.03] animate-pulse"
          style={{ animationDelay: '1s' }}
        >
          <div className="w-full h-full border border-purple-500/30 rotate-45"></div>
        </div>
        <div
          className="absolute top-1/2 right-1/6 w-20 h-20 opacity-[0.04] animate-pulse"
          style={{ animationDelay: '2s' }}
        >
          <div className="w-full h-full bg-blue-500/10 rounded-xl rotate-12"></div>
        </div>

        {/* Additional floating elements */}
        <div
          className="absolute top-1/3 left-1/6 w-16 h-16 opacity-[0.02] animate-pulse"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="w-full h-full bg-purple-500/10 rounded-lg"></div>
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 w-24 h-24 opacity-[0.03] animate-pulse"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="w-full h-full border border-blue-500/15 rounded-full"></div>
        </div>
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-none">
          {/* Content Container with Resend-inspired spacing */}
          <div className="space-y-8 sm:space-y-10">
            {/* Greeting with Resend blue accent */}
            <div className="animate-fade-in-up">
              <p className="hero-greeting font-semibold tracking-wide">
                Hi, my name is
              </p>
            </div>

            {/* Name with Resend-inspired typography */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <h1
                id="hero-heading"
                className="hero-name font-black tracking-tight"
              >
                {personalInfo.name}.
              </h1>
            </div>

            {/* Tagline with improved typography */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <h2 className="hero-tagline font-semibold tracking-wide">
                {personalInfo.tagline}
              </h2>
            </div>

            {/* Description with Resend-inspired styling */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="max-w-2xl">
                <p
                  id="hero-description"
                  className="hero-description text-gray-400 leading-relaxed"
                >
                  {personalInfo.description}
                </p>
              </div>
            </div>

            {/* Call to Action with Resend button styling */}
            <div
              className="animate-fade-in-up pt-6 sm:pt-8"
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
                className="btn btn-primary group relative overflow-hidden"
                role="button"
                aria-describedby="hero-description"
              >
                <span className="relative z-10 flex items-center font-bold">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Get to know me
                  </span>
                  <svg
                    className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1"
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
              className="pt-10 sm:pt-12 lg:hidden animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <SocialLinks size="large" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Resend styling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent opacity-60"></div>
          <button
            onClick={e => handleNavClick(e, '#about')}
            className="text-gray-400 hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-full p-3 hover:transform hover:scale-110 animate-bounce hover:bg-gray-900/50"
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
      </div>
    </section>
  );
};

export default Hero;
