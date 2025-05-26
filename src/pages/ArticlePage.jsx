import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticlePage = () => {
  const { slug } = useParams();

  // This will be populated with actual article data later
  const article = null;

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-700 transition-colors mb-8"
        >
          ← Back to home
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center text-gray-600">
            <time dateTime={article.date}>{article.formattedDate}</time>
            <span className="mx-2">•</span>
            <span>{article.readingTime}</span>
          </div>
        </header>
      </div>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
};

export default ArticlePage;
