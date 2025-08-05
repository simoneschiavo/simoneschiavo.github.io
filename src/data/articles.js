import { formatDate, generateSlug } from '../utils/markdown.js';

// Article metadata only - content will be loaded from markdown files
export const articles = [
  {
    id: 1,
    title: 'Building a Product-Led Growth Framework for B2B SaaS',
    slug: 'product-led-growth-framework',
    excerpt:
      'A comprehensive guide to implementing PLG strategies that drive sustainable growth through product value and user experience.',
    date: '2024-01-15',
    readingTime: 8,
    tags: ['Product Growth', 'SaaS', 'Strategy'],
    featured: true,
    markdownFile: 'product-led-growth-framework.md',
  },
  {
    id: 2,
    title: 'Optimizing User Activation: From Sign-up to First Value',
    slug: 'optimizing-user-activation',
    excerpt:
      'Learn how to design onboarding experiences that get users to their "aha moment" faster and improve activation rates.',
    date: '2024-01-08',
    readingTime: 6,
    tags: ['User Experience', 'Conversion', 'Analytics'],
    featured: true,
    markdownFile: 'optimizing-user-activation.md',
  },
  {
    id: 3,
    title: 'Growth Metrics That Actually Matter for B2B SaaS',
    slug: 'growth-metrics-b2b-saas',
    excerpt:
      'Cut through the noise and focus on the metrics that truly drive sustainable growth in B2B SaaS businesses.',
    date: '2024-01-01',
    readingTime: 7,
    tags: ['Analytics', 'SaaS', 'KPIs'],
    featured: false,
    markdownFile: 'growth-metrics-b2b-saas.md',
  },
];

// Process articles to add computed fields
export const processedArticles = articles.map(article => ({
  ...article,
  formattedDate: formatDate(article.date),
  readingTime: article.readingTime || 5, // Default reading time
  slug: article.slug || generateSlug(article.title),
}));

// Get featured articles
export const featuredArticles = processedArticles.filter(
  article => article.featured
);

// Get article by slug
export function getArticleBySlug(slug) {
  return processedArticles.find(article => article.slug === slug);
}

// Get related articles (excluding current article)
export function getRelatedArticles(currentSlug, limit = 2) {
  return processedArticles
    .filter(article => article.slug !== currentSlug)
    .slice(0, limit);
}

// Function to load markdown content dynamically
export async function loadArticleContent(markdownFile) {
  try {
    const response = await fetch(`/articles/${markdownFile}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${markdownFile}`);
    }
    const markdownContent = await response.text();
    return markdownContent;
  } catch (error) {
    console.error('Error loading article content:', error);
    return null;
  }
}
