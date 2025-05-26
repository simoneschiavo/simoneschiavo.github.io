import React from 'react';
import { Link } from 'react-router-dom';

const TalksPage = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="section-spacing">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back to home */}
            <Link
              to="/"
              className="inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-200 mb-8"
            >
              ← Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Talks
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
              Speaking engagements and presentations on product growth and B2B
              SaaS strategies.
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12">
              <p className="text-zinc-400 text-lg">
                Coming soon... I'm working on adding my speaking engagements and
                presentations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalksPage;
