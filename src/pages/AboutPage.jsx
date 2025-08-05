import React from 'react';
import { Link } from 'react-router-dom';
import CareerSection from '../components/CareerSection.jsx';
import CertificationsSection from '../components/CertificationsSection.jsx';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="section-spacing">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            {/* Back to home */}
            <Link
              to="/"
              className="inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-200 mb-8"
            >
              ← Back to Home
            </Link>

            {/* Page Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-purple">
                About
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Product Growth Professional specializing in B2B SaaS growth
                strategies, user acquisition, and data-driven optimization.
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Background
                  </h2>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    I'm a Product Growth Professional with a passion for
                    building scalable growth systems that drive meaningful
                    business impact. I specialize in the intersection of product
                    development and growth marketing, focusing on data-driven
                    strategies that improve user acquisition, activation, and
                    retention.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    With extensive experience in B2B SaaS environments, I've
                    helped companies transition from sales-led to product-led
                    growth models, implement comprehensive analytics frameworks,
                    and optimize conversion funnels across the entire customer
                    journey.
                  </p>
                </section>

                <CareerSection />

                <CertificationsSection />

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Let's Connect
                  </h2>
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    I'm always interested in discussing growth strategies,
                    sharing insights, and connecting with fellow professionals
                    in the B2B SaaS space.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:simoneschiavo@icloud.com"
                      className="btn btn-primary inline-flex items-center"
                    >
                      Get in Touch
                    </a>
                    <a
                      href="https://www.linkedin.com/in/simone-schiavo/"
                      className="btn btn-primary inline-flex items-center"
                    >
                      LinkedIn
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
