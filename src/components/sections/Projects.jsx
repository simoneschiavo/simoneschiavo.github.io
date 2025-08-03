import React from 'react';
import { projects } from '../data/content.js';

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-spacing bg-black"
      aria-labelledby="projects-heading"
      role="region"
    >
      <div className="container-narrow">
        <h2
          id="projects-heading"
          className="section-heading animate-fade-in-up"
        >
          <span className="section-number">02.</span>
          <span>Some Things I've Built</span>
        </h2>

        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`project-featured project-featured-${index + 1} grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group ${
                index % 2 === 1 ? 'lg:text-right' : ''
              }`}
            >
              {/* Enhanced Project Image */}
              <div
                className={`lg:col-span-7 relative ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="project-image-container">
                  {/* Enhanced Image Placeholder with Resend styling */}
                  <div className="project-image-placeholder project-image-scale aspect-video bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden relative group hover:border-blue-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-20 h-20 text-blue-500/60 mx-auto mb-6 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <p className="text-blue-500/60 text-sm font-medium group-hover:text-blue-500 transition-colors duration-300">
                          Project Dashboard
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div
                className={`lg:col-span-5 space-y-6 project-content-reveal ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                {/* Enhanced Featured Project Label */}
                <p className="featured-project-label text-blue-500 font-semibold text-sm tracking-wide">
                  Featured Project
                </p>

                {/* Enhanced Project Title */}
                <h3 className="project-title text-white text-3xl lg:text-4xl font-bold leading-tight">
                  {project.title}
                </h3>

                {/* Enhanced Project Description */}
                <div className="project-description-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Enhanced Technologies */}
                <div
                  className={`flex flex-wrap gap-3 ${
                    index % 2 === 1 ? 'lg:justify-end' : ''
                  }`}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="project-tech-tag text-gray-300 font-medium text-sm px-4 py-2 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Project Links */}
                <div
                  className={`flex items-center space-x-6 ${
                    index % 2 === 1 ? 'lg:justify-end' : ''
                  }`}
                >
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link text-gray-400 hover:text-blue-500 transition-all duration-300 group"
                      aria-label={`View ${project.title} source code`}
                    >
                      <svg
                        className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link text-gray-400 hover:text-blue-500 transition-all duration-300 group"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <svg
                        className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Other Notable Projects */}
        <div className="mt-32 notable-projects-grid">
          <h3 className="text-white text-2xl lg:text-3xl font-bold mb-16 text-center">
            Other Notable Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enhanced Additional Project Cards */}
            <div className="notable-project-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <svg
                  className="notable-project-icon w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="project-link text-gray-400 hover:text-blue-500 transition-all duration-300"
                    aria-label="View project source"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="project-link text-gray-400 hover:text-blue-500 transition-all duration-300"
                    aria-label="View project demo"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <h4 className="notable-project-title text-white font-bold text-xl mb-4 transition-all duration-300 group-hover:text-blue-500">
                Email Marketing Automation
              </h4>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Built automated email sequences that increased customer lifetime
                value by{' '}
                <span className="text-blue-500 font-semibold">45%</span> through
                personalized nurture campaigns and behavioral triggers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="notable-tech-tag text-gray-300 font-medium text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  Mailchimp
                </span>
                <span className="notable-tech-tag text-gray-300 font-medium text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  Zapier
                </span>
                <span className="notable-tech-tag text-gray-300 font-medium text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  Segment
                </span>
              </div>
            </div>

            <div className="notable-project-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <svg
                  className="notable-project-icon w-10 h-10 text-purple-500 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="project-link text-gray-400 hover:text-purple-500 transition-all duration-300"
                    aria-label="View project source"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="project-link text-gray-400 hover:text-purple-500 transition-all duration-300"
                    aria-label="View project demo"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <h4 className="notable-project-title text-white font-bold text-xl mb-4 transition-all duration-300 group-hover:text-purple-500">
                A/B Testing Framework
              </h4>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Developed a systematic testing framework that standardized
                experimentation across teams, resulting in{' '}
                <span className="text-purple-500 font-semibold">
                  60% faster
                </span>{' '}
                test cycles and more reliable results.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="notable-tech-tag text-gray-300 font-medium text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  Optimizely
                </span>
                <span className="notable-tech-tag text-gray-300 font-medium text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  Google Optimize
                </span>
                <span className="notable-tech-tag text-gray-300 font-medium text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  Mixpanel
                </span>
              </div>
            </div>

            <div className="notable-project-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <svg
                  className="notable-project-icon w-10 h-10 text-green-500 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="project-link text-gray-400 hover:text-green-500 transition-all duration-300"
                    aria-label="View project source"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="project-link text-gray-400 hover:text-green-500 transition-all duration-300"
                    aria-label="View project demo"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <h4 className="notable-project-title text-white font-bold text-xl mb-4 transition-all duration-300 group-hover:text-green-500">
                Performance Marketing Dashboard
              </h4>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Created a real-time dashboard that consolidates performance data
                from multiple ad platforms, enabling{' '}
                <span className="text-green-500 font-semibold">
                  faster optimization
                </span>
                decisions and budget allocation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="notable-tech-tag text-gray-300 font-medium text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  Data Studio
                </span>
                <span className="notable-tech-tag text-gray-300 font-medium text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  Google Ads API
                </span>
                <span className="notable-tech-tag text-gray-300 font-medium text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  Facebook API
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="projects-cta mt-20 text-center">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-12">
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Want to see more of my work or discuss a potential collaboration?
            </p>
            <a
              href="mailto:hello@example.com"
              className="btn btn-primary group"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">
                Get In Touch
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
