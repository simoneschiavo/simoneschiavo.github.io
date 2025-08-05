import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Articles from '../components/Articles.jsx';

const ArticlesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-16">
      <div
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="section-spacing">
          <div className="container-responsive">
            <div className="max-w-6xl mx-auto">
              {/* Page Header */}
              <header className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-blue">
                  Articles
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                  Insights and strategies for B2B SaaS product growth, user
                  acquisition, and data-driven optimization.
                </p>
              </header>

              {/* Articles Component */}
              <Articles showTitle={false} noSpacing={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
