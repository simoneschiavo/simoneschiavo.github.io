import React from 'react';
import { Link } from 'react-router-dom';
import Articles from '../components/Articles.jsx';

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="section-spacing">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            {/* Back to home */}
            <Link
              to="/"
              className="inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-200 mb-8"
            >
              ← Back to Home
            </Link>

            {/* Page Header */}
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Articles
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                Insights and strategies for B2B SaaS product growth, user
                acquisition, and data-driven optimization.
              </p>
            </header>

            {/* Articles Component */}
            <Articles showTitle={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
