import React from 'react';
import { writing } from '../data/content.js';

const Writing = () => {
  return (
    <section
      id="writing"
      className="section-spacing"
      aria-labelledby="writing-heading"
      role="region"
    >
      <div className="container-narrow">
        <h2 id="writing-heading" className="section-heading">
          <span className="text-green font-mono responsive-text-sm">04.</span>
          <span className="ml-2">Things I've Written</span>
        </h2>

        <div className="max-w-4xl">
          <p className="text-slate responsive-text-base leading-relaxed mb-12">
            I enjoy sharing insights about growth marketing, data-driven
            strategies, and the evolving landscape of digital marketing. Here
            are some of my recent thoughts and learnings.
          </p>

          {/* Featured Articles */}
          <div className="space-y-8 mb-16">
            {writing.map((article, index) => (
              <article
                key={index}
                className="group cursor-pointer"
                tabIndex="0"
                role="article"
                aria-labelledby={`article-${index}-title`}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Future: Navigate to article
                    window.open(article.link, '_blank');
                  }
                }}
                onClick={() => window.open(article.link, '_blank')}
              >
                <div className="bg-light-navy rounded-lg p-6 lg:p-8 border border-lightest-navy/20 hover:border-green/20 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
                    {/* Article Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-green font-mono text-sm">
                          {article.date}
                        </span>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-slate"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          <span className="text-slate text-sm">5 min read</span>
                        </div>
                      </div>

                      <h3
                        id={`article-${index}-title`}
                        className="text-lightest-slate text-xl lg:text-2xl font-semibold mb-3 group-hover:text-green transition-colors duration-300"
                      >
                        {article.title}
                      </h3>

                      <p className="text-slate leading-relaxed mb-4">
                        {article.description}
                      </p>

                      {/* Article Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags &&
                          article.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-navy text-green text-sm font-mono rounded border border-green/20 hover:border-green/40 transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>

                      {/* Read More Link */}
                      <div className="flex items-center text-green font-mono text-sm group-hover:translate-x-2 transition-transform duration-300">
                        <span>Read article</span>
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
                      </div>
                    </div>

                    {/* Article Icon/Visual */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green/10 rounded-lg flex items-center justify-center group-hover:bg-green/20 transition-colors duration-300">
                        <svg
                          className="w-8 h-8 lg:w-10 lg:h-10 text-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Additional Writing Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Growth Marketing Insights */}
            <div className="bg-light-navy rounded-lg p-6 border border-lightest-navy/20">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-green mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <h3 className="text-lightest-slate font-semibold">
                  Growth Marketing Insights
                </h3>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                Deep dives into growth strategies, conversion optimization, and
                scaling marketing efforts for B2B SaaS companies.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-slate text-sm">
                  <span className="text-green mr-2">•</span>
                  <span>15+ articles published</span>
                </div>
                <div className="flex items-center text-slate text-sm">
                  <span className="text-green mr-2">•</span>
                  <span>50K+ total views</span>
                </div>
                <div className="flex items-center text-slate text-sm">
                  <span className="text-green mr-2">•</span>
                  <span>Featured on Growth Hackers</span>
                </div>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="bg-light-navy rounded-lg p-6 border border-lightest-navy/20">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-green mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="text-lightest-slate font-semibold">
                  Data & Analytics
                </h3>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                Practical guides on marketing analytics, attribution modeling,
                and making data-driven decisions in marketing.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-slate text-sm">
                  <span className="text-green mr-2">•</span>
                  <span>10+ technical guides</span>
                </div>
                <div className="flex items-center text-slate text-sm">
                  <span className="text-green mr-2">•</span>
                  <span>Analytics community favorite</span>
                </div>
                <div className="flex items-center text-slate text-sm">
                  <span className="text-green mr-2">•</span>
                  <span>SQL & Python tutorials</span>
                </div>
              </div>
            </div>
          </div>

          {/* Speaking & Podcasts */}
          <div className="bg-light-navy rounded-lg p-6 lg:p-8 border border-lightest-navy/20 mb-16">
            <h3 className="text-lightest-slate text-xl font-semibold mb-6 flex items-center">
              <svg
                className="w-6 h-6 text-green mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
              Speaking & Podcasts
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-2 border-green pl-4">
                  <h4 className="text-lightest-slate font-semibold mb-1">
                    Growth Marketing Summit 2024
                  </h4>
                  <p className="text-slate text-sm mb-2">
                    "Building Scalable Attribution Models for B2B SaaS"
                  </p>
                  <span className="text-green font-mono text-xs">
                    Keynote Speaker
                  </span>
                </div>

                <div className="border-l-2 border-green pl-4">
                  <h4 className="text-lightest-slate font-semibold mb-1">
                    The Growth Show Podcast
                  </h4>
                  <p className="text-slate text-sm mb-2">
                    "From 0 to $10M ARR: A Growth Marketing Playbook"
                  </p>
                  <span className="text-green font-mono text-xs">
                    Guest Episode
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-green pl-4">
                  <h4 className="text-lightest-slate font-semibold mb-1">
                    SaaS Marketing Meetup
                  </h4>
                  <p className="text-slate text-sm mb-2">
                    "The Future of Marketing Attribution"
                  </p>
                  <span className="text-green font-mono text-xs">
                    Panel Discussion
                  </span>
                </div>

                <div className="border-l-2 border-green pl-4">
                  <h4 className="text-lightest-slate font-semibold mb-1">
                    Marketing Analytics Weekly
                  </h4>
                  <p className="text-slate text-sm mb-2">
                    "Advanced Google Analytics 4 for Growth Marketers"
                  </p>
                  <span className="text-green font-mono text-xs">
                    Workshop Leader
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center bg-navy/50 rounded-lg p-8 border border-lightest-navy/20">
            <h3 className="text-lightest-slate text-xl font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-slate mb-6 max-w-2xl mx-auto">
              Get the latest insights on growth marketing, data analytics, and
              conversion optimization delivered to your inbox. No spam, just
              actionable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-light-navy border border-lightest-navy/20 rounded-lg text-lightest-slate placeholder-slate focus:outline-none focus:border-green/50 focus:ring-2 focus:ring-green/20 transition-colors duration-300"
                aria-label="Email address for newsletter"
              />
              <button className="btn px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-slate text-sm mt-4">
              Join 2,500+ growth marketers who read my weekly insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;
