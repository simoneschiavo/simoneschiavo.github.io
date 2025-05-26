import React from 'react';
import { projects } from '../data/content.js';

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-spacing"
      aria-labelledby="projects-heading"
      role="region"
    >
      <div className="container-narrow">
        <h2 id="projects-heading" className="section-heading">
          <span className="text-green font-mono responsive-text-sm">03.</span>
          <span className="ml-2">Some Things I've Built</span>
        </h2>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group ${
                index % 2 === 1 ? 'lg:text-right' : ''
              }`}
            >
              {/* Project Image */}
              <div
                className={`lg:col-span-7 relative ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="relative">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-green/10 rounded-lg overflow-hidden relative group-hover:transform group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green/20 to-navy/60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-16 h-16 text-green/60 mx-auto mb-4"
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
                        <p className="text-green/60 text-sm font-mono">
                          Project Dashboard
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-green/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`lg:col-span-5 space-y-4 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                {/* Featured Project Label */}
                <p className="text-green font-mono text-sm">Featured Project</p>

                {/* Project Title */}
                <h3 className="text-lightest-slate text-2xl lg:text-3xl font-semibold group-hover:text-green transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <div className="bg-light-navy rounded-lg p-6 shadow-lg relative z-10">
                  <p className="text-slate leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 1 ? 'lg:justify-end' : ''
                  }`}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-slate font-mono text-sm hover:text-green transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div
                  className={`flex items-center space-x-4 ${
                    index % 2 === 1 ? 'lg:justify-end' : ''
                  }`}
                >
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green transition-colors duration-300 hover:transform hover:scale-110"
                      aria-label={`View ${project.title} source code`}
                    >
                      <svg
                        className="w-6 h-6"
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
                      className="text-slate hover:text-green transition-colors duration-300 hover:transform hover:scale-110"
                      aria-label={`View ${project.title} live demo`}
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

        {/* Other Notable Projects */}
        <div className="mt-24">
          <h3 className="text-lightest-slate text-xl lg:text-2xl font-semibold mb-12 text-center">
            Other Notable Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Additional Project Cards */}
            <div className="bg-light-navy rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 group border border-lightest-navy/20 hover:border-green/20">
              <div className="flex items-center justify-between mb-4">
                <svg
                  className="w-8 h-8 text-green"
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
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-slate hover:text-green transition-colors duration-300"
                    aria-label="View project source"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate hover:text-green transition-colors duration-300"
                    aria-label="View project demo"
                  >
                    <svg
                      className="w-5 h-5"
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

              <h4 className="text-lightest-slate font-semibold mb-2 group-hover:text-green transition-colors duration-300">
                Email Marketing Automation
              </h4>
              <p className="text-slate text-sm leading-relaxed mb-4">
                Built automated email sequences that increased customer lifetime
                value by 45% through personalized nurture campaigns and
                behavioral triggers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-slate font-mono text-xs">Mailchimp</span>
                <span className="text-slate font-mono text-xs">Zapier</span>
                <span className="text-slate font-mono text-xs">Segment</span>
              </div>
            </div>

            <div className="bg-light-navy rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 group border border-lightest-navy/20 hover:border-green/20">
              <div className="flex items-center justify-between mb-4">
                <svg
                  className="w-8 h-8 text-green"
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
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-slate hover:text-green transition-colors duration-300"
                    aria-label="View project source"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate hover:text-green transition-colors duration-300"
                    aria-label="View project demo"
                  >
                    <svg
                      className="w-5 h-5"
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

              <h4 className="text-lightest-slate font-semibold mb-2 group-hover:text-green transition-colors duration-300">
                A/B Testing Framework
              </h4>
              <p className="text-slate text-sm leading-relaxed mb-4">
                Developed a systematic testing framework that standardized
                experimentation across teams, resulting in 60% faster test
                cycles and more reliable results.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-slate font-mono text-xs">Optimizely</span>
                <span className="text-slate font-mono text-xs">
                  Google Optimize
                </span>
                <span className="text-slate font-mono text-xs">Mixpanel</span>
              </div>
            </div>

            <div className="bg-light-navy rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 group border border-lightest-navy/20 hover:border-green/20">
              <div className="flex items-center justify-between mb-4">
                <svg
                  className="w-8 h-8 text-green"
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
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-slate hover:text-green transition-colors duration-300"
                    aria-label="View project source"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate hover:text-green transition-colors duration-300"
                    aria-label="View project demo"
                  >
                    <svg
                      className="w-5 h-5"
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

              <h4 className="text-lightest-slate font-semibold mb-2 group-hover:text-green transition-colors duration-300">
                Performance Marketing Dashboard
              </h4>
              <p className="text-slate text-sm leading-relaxed mb-4">
                Created a real-time dashboard that consolidates performance data
                from multiple ad platforms, enabling faster optimization
                decisions and budget allocation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-slate font-mono text-xs">
                  Data Studio
                </span>
                <span className="text-slate font-mono text-xs">
                  Google Ads API
                </span>
                <span className="text-slate font-mono text-xs">
                  Facebook API
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-slate responsive-text-base mb-6">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <a href="mailto:hello@example.com" className="btn group">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Get In Touch
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
      </div>
    </section>
  );
};

export default Projects;
