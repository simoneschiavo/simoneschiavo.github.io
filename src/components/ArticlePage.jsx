import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import {
  getArticleBySlug,
  getRelatedArticles,
  loadArticleContent,
} from '../data/articles.js';
import { parseMarkdown } from '../utils/markdown.js';
import { trackArticleRead } from '../utils/analytics.js';
import InfoBox from './InfoBox.jsx';

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const articleData = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug);

  useEffect(() => {
    const loadArticle = async () => {
      if (articleData && articleData.markdownFile) {
        setLoading(true);
        try {
          const rawContent = await loadArticleContent(articleData.markdownFile);
          if (rawContent) {
            // Parse markdown to extract content without frontmatter
            const { content } = parseMarkdown(rawContent);
            setMarkdownContent(content);
            setArticle(articleData);
          }
        } catch (error) {
          console.error('Error loading article:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setArticle(articleData);
        setLoading(false);
      }
    };

    loadArticle();
  }, [articleData]);

  useEffect(() => {
    if (article) {
      trackArticleRead(article.slug, article.readingTime);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-black pt-16">
        <div className="container-responsive">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-white mb-4">
              Article Not Found
            </h1>
            <p className="text-zinc-400 mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-16 article-page">
      <article className="section-spacing">
        <div className="container-responsive">
          {/* Article Header */}
          <header className="mb-12 max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map(tag => (
                <span key={tag} className="project-tech text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-bold mb-4 leading-tight text-white">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-zinc-400">
              <time dateTime={article.date}>{article.formattedDate}</time>
              <span>•</span>
              <span>{article.readingTime} min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-3xl mx-auto">
            {loading ? (
              <div className="text-center py-12">
                <div className="text-zinc-400">Loading article...</div>
              </div>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-white">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-white article-content-h2">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-white">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-zinc-300 mb-4 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="text-zinc-300 mb-4 space-y-2 list-disc list-inside">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="text-zinc-300 mb-4 space-y-2 list-decimal list-inside">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-zinc-300">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-white font-semibold">
                      {children}
                    </strong>
                  ),
                  code: ({ inline, children }) =>
                    inline ? (
                      <code className="bg-zinc-800 text-zinc-200 px-1.5 py-0.5 rounded text-sm">
                        {children}
                      </code>
                    ) : (
                      <code className="block bg-zinc-900 text-zinc-200 p-4 rounded-lg overflow-x-auto">
                        {children}
                      </code>
                    ),
                  pre: ({ children }) => (
                    <pre className="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-6">
                      {children}
                    </pre>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-zinc-600 pl-4 italic text-zinc-400 mb-4">
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-zinc-300 underline hover:text-white transition-colors duration-200"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={
                        href?.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {children}
                    </a>
                  ),
                  div: ({ className, children, ...props }) => {
                    // Check if this is an info box
                    if (className && className.includes('info-box')) {
                      return <InfoBox>{children}</InfoBox>;
                    }
                    return (
                      <div className={className} {...props}>
                        {children}
                      </div>
                    );
                  },
                }}
              >
                {markdownContent}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-spacing-sm border-t border-zinc-800">
          <div className="container-responsive">
            <h2 className="text-2xl font-bold mb-8 text-white">
              Related Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedArticles.map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  to={`/articles/${relatedArticle.slug}`}
                  className="article-card hover-lift block"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {relatedArticle.tags.map(tag => (
                      <span key={tag} className="project-tech text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="article-title">{relatedArticle.title}</h3>

                  <p className="article-excerpt">{relatedArticle.excerpt}</p>

                  <div className="article-meta">
                    {relatedArticle.formattedDate} •{' '}
                    {relatedArticle.readingTime} min read
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;
