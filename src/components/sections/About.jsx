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
        <h2 id="about-heading" className="section-heading animate-fade-in-up">
          <span className="section-number">01.</span>
          <span className="ml-2">About Me</span>
        </h2>

        <div className="grid-responsive-2 items-start gap-8 lg:gap-12">
          {/* Content Column */}
          <div className="about-content space-y-6 text-slate">
            <div className="about-intro">
              <p className="responsive-text-base animate-slide-in-left about-paragraph-1">
                Hello! I'm {personalInfo.name}, a passionate Growth Marketer who
                thrives on turning data into actionable insights and experiments
                into scalable growth engines. My journey in marketing began when
                I discovered the perfect intersection of creativity and
                analytics – where art meets science.
              </p>
            </div>

            <p className="responsive-text-base animate-slide-in-left about-paragraph-2">
              Over the years, I've had the privilege of working with startups
              and established companies, helping them unlock sustainable growth
              through strategic marketing initiatives. I specialize in building
              comprehensive growth frameworks that encompass everything from
              customer acquisition to retention optimization.
            </p>

            <p className="responsive-text-base animate-slide-in-left about-paragraph-3">
              My approach combines rigorous experimentation with creative
              problem-solving. I believe that the best growth strategies emerge
              from understanding your customers deeply, testing hypotheses
              systematically, and iterating based on real data. Whether it's
              optimizing conversion funnels, launching new acquisition channels,
              or developing retention campaigns, I'm always excited to tackle
              the next challenge.
            </p>

            <p className="responsive-text-base animate-slide-in-left about-paragraph-4">
              When I'm not diving into analytics dashboards or designing
              experiments, you can find me exploring the latest marketing
              technologies, reading about behavioral psychology, or sharing
              insights with the growth marketing community.
            </p>

            <div className="animate-slide-in-left about-skills">
              <p className="responsive-text-base mb-4">
                Here are some of the technologies and methodologies I work with
                regularly:
              </p>

              {/* Enhanced Skills Grid */}
              <div className="skills-grid mt-6 p-4 rounded-lg">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <li
                      key={index}
                      className="skill-item flex items-center text-slate hover:text-green transition-all duration-300"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <svg
                        className="w-3 h-3 text-green mr-3 flex-shrink-0"
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
                      <span className="font-mono text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="animate-slide-in-right about-image">
            <div className="about-image-container">
              {/* Enhanced Profile Image Placeholder */}
              <div className="aspect-square profile-image-placeholder rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <svg
                      className="w-20 h-20 text-green/60 mx-auto mb-4"
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
            </div>

            {/* Enhanced Fun Fact Card */}
            <div className="animate-fade-in-scale about-fun-fact">
              <div className="mt-8 fun-fact-card p-6 bg-light-navy rounded-lg border border-lightest-navy/30 shadow-navy">
                <h3 className="text-lightest-slate font-semibold mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 text-green mr-3"
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
                  <span className="font-mono text-green text-sm">Fun Fact</span>
                </h3>
                <p className="text-slate leading-relaxed">
                  I've run over 500+ A/B tests across different industries and
                  have a personal spreadsheet tracking the most surprising
                  results. Spoiler alert: the smallest changes often have the
                  biggest impact!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="animate-fade-in-scale about-cta">
          <div className="mt-16 about-cta-section">
            <div className="text-center">
              <h3 className="text-lightest-slate font-semibold text-xl mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-slate responsive-text-base mb-8 max-w-2xl mx-auto">
                Interested in collaborating on growth initiatives or learning
                more about my approach to data-driven marketing? I'd love to
                connect and explore how we can drive meaningful results
                together.
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
        </div>
      </div>
    </section>
  );
};

export default About;
