import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  // This will be populated with actual articles data later
  const articles = [];

  return (
    <section
      className="section-spacing bg-black"
      role="region"
      aria-labelledby="articles-heading"
    >
      <div className="container-narrow">
        <h2
          id="articles-heading"
          className="section-heading animate-fade-in-up"
        >
          <span className="section-number">03.</span>
          <span>Writing</span>
        </h2>

        {articles.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-12">
              <svg
                className="w-16 h-16 text-blue-500/60 mx-auto mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <h3 className="text-white font-bold text-xl mb-4">
                Articles Coming Soon
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                I'm working on some insightful articles about growth marketing,
                data-driven strategies, and industry insights. Stay tuned!
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {articles.map(article => (
              <article key={article.slug} className="group">
                <Link
                  to={`/articles/${article.slug}`}
                  className="block bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-xl"
                >
                  <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-purple-500 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <time dateTime={article.date} className="font-medium">
                      {article.formattedDate}
                    </time>
                    <span className="mx-3 text-gray-600">•</span>
                    <span className="font-medium">{article.readingTime}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
