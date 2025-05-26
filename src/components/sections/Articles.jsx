import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  // This will be populated with actual articles data later
  const articles = [];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Articles</h2>

        {articles.length === 0 ? (
          <div className="text-gray-600">
            <p>Articles coming soon...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {articles.map(article => (
              <article key={article.slug} className="group">
                <Link
                  to={`/articles/${article.slug}`}
                  className="block p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime={article.date}>{article.formattedDate}</time>
                    <span className="mx-2">•</span>
                    <span>{article.readingTime}</span>
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
