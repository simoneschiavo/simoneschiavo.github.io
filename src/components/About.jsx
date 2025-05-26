import React from 'react';
import { personalInfo, socialLinks } from '../data/content.js';

const About = () => {
  const skills = [
    'Growth Strategy',
    'Digital Marketing',
    'Data Analytics',
    'A/B Testing',
    'SEO/SEM',
    'Content Marketing',
    'Email Marketing',
    'Social Media',
    'Marketing Automation',
    'Customer Acquisition',
    'Conversion Optimization',
    'Product Marketing',
  ];

  return (
    <section
      id="about"
      className="section-spacing"
      aria-labelledby="about-heading"
      role="region"
    >
      <div className="container-narrow">
        <h2 id="about-heading" className="section-heading">
          <span className="text-green font-mono responsive-text-sm">01.</span>
          <span className="ml-2">About Me</span>
        </h2>

        <div className="grid-responsive-2 items-start gap-8 lg:gap-12">
          {/* Content Column */}
          <div className="space-y-4 text-slate">
            <p className="responsive-text-base leading-relaxed">
              Hello! I'm {personalInfo.name}, a passionate Growth Marketer who
              thrives on turning data into actionable insights and experiments
              into scalable growth engines. My journey in marketing began when I
              discovered the perfect intersection of creativity and analytics –
              where art meets science.
            </p>

            <p className="responsive-text-base leading-relaxed">
              Over the years, I've had the privilege of working with startups
              and established companies, helping them unlock sustainable growth
              through strategic marketing initiatives. I specialize in building
              comprehensive growth frameworks that encompass everything from
              customer acquisition to retention optimization.
            </p>

            <p className="responsive-text-base leading-relaxed">
              My approach combines rigorous experimentation with creative
              problem-solving. I believe that the best growth strategies emerge
              from understanding your customers deeply, testing hypotheses
              systematically, and iterating based on real data. Whether it's
              optimizing conversion funnels, launching new acquisition channels,
              or developing retention campaigns, I'm always excited to tackle
              the next challenge.
            </p>

            <p className="responsive-text-base leading-relaxed">
              When I'm not diving into analytics dashboards or designing
              experiments, you can find me exploring the latest marketing
              technologies, reading about behavioral psychology, or sharing
              insights with the growth marketing community.
            </p>

            <p className="responsive-text-base leading-relaxed">
              Here are some of the technologies and methodologies I work with
              regularly:
            </p>

            {/* Skills Grid */}
            <div className="mt-6">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-slate hover:text-green transition-colors duration-300"
                  >
                    <svg
                      className="w-3 h-3 text-green mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-mono">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative group">
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="aspect-square bg-green/10 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green/20 to-navy/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-green/60 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-green/60 text-sm font-mono">
                      Profile Photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute -inset-4 border-2 border-green rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </div>

            {/* Fun Fact Card */}
            <div className="mt-6 p-4 bg-light-navy rounded-lg border border-lightest-navy/20">
              <h3 className="text-lightest-slate font-semibold mb-2 flex items-center">
                <svg
                  className="w-4 h-4 text-green mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Fun Fact
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                I've run over 500+ A/B tests across different industries and
                have a personal spreadsheet tracking the most surprising
                results. Spoiler alert: the smallest changes often have the
                biggest impact!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-slate responsive-text-base mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={socialLinks.find(s => s.name === 'LinkedIn')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn group"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Connect on LinkedIn
              </span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn group">
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Send an Email
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
