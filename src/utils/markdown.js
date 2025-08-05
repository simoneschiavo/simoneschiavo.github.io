import { marked } from 'marked';
import fm from 'front-matter';
import { format } from 'date-fns';

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
});

/**
 * Process markdown content and extract frontmatter
 * @param {string} markdownContent - Raw markdown content with frontmatter
 * @returns {object} Processed article data
 */
export const processMarkdown = markdownContent => {
  const { attributes: frontmatter, body: content } = fm(markdownContent);

  // Convert markdown to HTML
  const htmlContent = marked(content);

  // Calculate reading time (average 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Format date
  const formattedDate = frontmatter.date
    ? format(new Date(frontmatter.date), 'MMMM d, yyyy')
    : '';

  return {
    ...frontmatter,
    content: htmlContent,
    wordCount,
    readingTime: `${readingTime} min read`,
    formattedDate,
    excerpt: frontmatter.excerpt || content.substring(0, 150) + '...',
  };
};

/**
 * Parse markdown content with frontmatter
 * @param {string} content - Raw markdown content with frontmatter
 * @returns {object} Parsed content with data and content
 */
export function parseMarkdown(content) {
  const { attributes, body } = fm(content);
  return {
    frontmatter: attributes,
    content: body,
  };
}

/**
 * Calculate reading time for content
 * @param {string} content - Text content
 * @returns {number} Estimated reading time in minutes
 */
export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime;
}

/**
 * Format date for display
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate slug from title
 * @param {string} title - Article title
 * @returns {string} URL-friendly slug
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

/**
 * Extract excerpt from content
 * @param {string} content - Markdown content
 * @param {number} maxLength - Maximum excerpt length
 * @returns {string} Content excerpt
 */
export function extractExcerpt(content, maxLength = 160) {
  // Remove markdown formatting for excerpt
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Find the last complete word within the limit
  const truncated = plainText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }

  return truncated + '...';
}

/**
 * Sort articles by date (newest first)
 * @param {array} articles - Array of article objects
 * @returns {array} Sorted articles
 */
export const sortArticlesByDate = articles => {
  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
};
