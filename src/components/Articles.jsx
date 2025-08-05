import React from 'react';
import { Link } from 'react-router-dom';
import { processedArticles } from '../data/articles.js';

const Articles = ({ showTitle = true, noSpacing = false }) => {
  return (
    <section className={noSpacing ? '' : 'section-spacing'}>
      <div className="container-responsive">
        {showTitle && (
          <h2 className="section-title text-center gradient-text-rainbow">
            Articles
          </h2>
        )}
        <div className="grid grid-auto-fit gap-6">
          {processedArticles.map(article => (
            <article key={article.id} className="article-card hover-lift">
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.map(tag => (
                  <span key={tag} className="project-tech text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="article-title">
                <Link
                  to={`/articles/${article.slug}`}
                  className="hover:no-underline"
                >
                  {article.title}
                </Link>
              </h3>

              <p className="article-excerpt">{article.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="article-meta">
                  {article.formattedDate} • {article.readingTime} min read
                </div>

                <Link to={`/articles/${article.slug}`} className="project-link">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
