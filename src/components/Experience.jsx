import React, { useState } from 'react';
import { experience } from '../data/content.js';
import { formatDate } from '../utils/helpers.js';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="section-spacing"
      aria-labelledby="experience-heading"
      role="region"
    >
      <div className="container-narrow">
        <h2 id="experience-heading" className="section-heading">
          <span className="text-green font-mono responsive-text-sm">02.</span>
          <span className="ml-2">Where I've Worked</span>
        </h2>

        <div className="max-w-4xl">
          {/* Desktop/Tablet Layout */}
          <div className="hidden sm:block">
            <div className="flex">
              {/* Company Tabs */}
              <div className="flex flex-col border-l-2 border-lightest-navy">
                {experience.map((job, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`relative px-6 py-4 text-left transition-all duration-300 border-l-2 -ml-0.5 ${
                      activeTab === index
                        ? 'border-green text-green bg-green/5'
                        : 'border-transparent text-slate hover:text-green hover:bg-green/5'
                    }`}
                    aria-selected={activeTab === index}
                    role="tab"
                  >
                    <span className="font-mono text-sm font-medium">
                      {job.company}
                    </span>
                  </button>
                ))}
              </div>

              {/* Job Details */}
              <div className="flex-1 ml-8 lg:ml-12">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      activeTab === index
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-4 absolute'
                    }`}
                    role="tabpanel"
                    aria-hidden={activeTab !== index}
                  >
                    <h3 className="text-lightest-slate text-xl lg:text-2xl font-semibold mb-2">
                      {job.role}
                      <span className="text-green"> @ {job.company}</span>
                    </h3>

                    <p className="text-slate font-mono text-sm mb-6">
                      {job.period}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start group">
                        <svg
                          className="w-3 h-3 text-green mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-slate leading-relaxed group-hover:text-light-slate transition-colors duration-300">
                          {job.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills/Technologies for this role */}
                    {job.technologies && job.technologies.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-lightest-slate font-semibold mb-3">
                          Key Technologies & Tools:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-light-navy text-green text-sm font-mono rounded border border-green/20 hover:border-green/40 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="sm:hidden space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-lightest-navy"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green rounded-full border-4 border-navy"></div>

                <div className="pb-8">
                  <h3 className="text-lightest-slate text-lg font-semibold mb-1">
                    {job.role}
                  </h3>

                  <p className="text-green font-mono text-sm mb-2">
                    {job.company}
                  </p>

                  <p className="text-slate font-mono text-xs mb-4">
                    {job.period}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg
                        className="w-3 h-3 text-green mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-slate text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills/Technologies for this role */}
                  {job.technologies && job.technologies.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lightest-slate font-semibold mb-2 text-sm">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-light-navy text-green text-xs font-mono rounded border border-green/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Career Highlights */}
          <div className="bg-light-navy rounded-lg p-6 border border-lightest-navy/20">
            <h3 className="text-lightest-slate font-semibold mb-4 flex items-center">
              <svg
                className="w-5 h-5 text-green mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Career Highlights
            </h3>
            <ul className="space-y-2 text-slate text-sm">
              <li className="flex items-start">
                <span className="text-green mr-2">•</span>
                Led growth initiatives that resulted in 300%+ user acquisition
                increase
              </li>
              <li className="flex items-start">
                <span className="text-green mr-2">•</span>
                Managed marketing budgets exceeding $2M annually
              </li>
              <li className="flex items-start">
                <span className="text-green mr-2">•</span>
                Built and mentored high-performing marketing teams
              </li>
              <li className="flex items-start">
                <span className="text-green mr-2">•</span>
                Implemented data-driven processes that improved ROI by 150%
              </li>
            </ul>
          </div>

          {/* Education & Certifications */}
          <div className="bg-light-navy rounded-lg p-6 border border-lightest-navy/20">
            <h3 className="text-lightest-slate font-semibold mb-4 flex items-center">
              <svg
                className="w-5 h-5 text-green mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Education & Certifications
            </h3>
            <ul className="space-y-2 text-slate text-sm">
              <li className="flex items-start">
                <span className="text-green mr-2">•</span>
                Google Analytics & Google Ads Certified
              </li>
              <li className="flex items-start">
                <span className="text-green mr-2">•</span>
                HubSpot Growth-Driven Design Certification
              </li>
              <li className="flex items-start">
                <span className="text-green mr-2">•</span>
                Facebook Blueprint Marketing Certification
              </li>
              <li className="flex items-start">
                <span className="text-green mr-2">•</span>
                Bachelor's in Marketing & Business Analytics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
