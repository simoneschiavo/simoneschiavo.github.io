// Import all markdown files from posts directory
const postFiles = import.meta.glob('/src/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

// Simple frontmatter parser (browser-compatible)
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const yamlString = match[1];
  const content = match[2];

  // Parse simple YAML (handles strings, booleans, dates, arrays)
  const data = {};
  const lines = yamlString.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    // Parse booleans
    else if (value === 'true') value = true;
    else if (value === 'false') value = false;
    // Parse arrays like ["item1", "item2"]
    else if (value.startsWith('[') && value.endsWith(']')) {
      try {
        value = JSON.parse(value.replace(/'/g, '"'));
      } catch {
        value = value.slice(1, -1).split(',').map(s => s.trim().replace(/["']/g, ''));
      }
    }

    data[key] = value;
  }

  return { data, content };
}

function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return { words, minutes };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getAllPosts() {
  const posts = Object.entries(postFiles).map(([filepath, content]) => {
    const { data: frontmatter, content: markdownContent } = parseFrontmatter(content);
    const { words, minutes } = calculateReadingTime(markdownContent);

    // Extract slug from filename if not in frontmatter
    const filename = filepath.split('/').pop().replace('.md', '');
    const slug = frontmatter.slug || filename;

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      dateFormatted: formatDate(frontmatter.date),
      published: frontmatter.published !== false, // default to true
      topics: frontmatter.topics || [],
      description: frontmatter.description || '',
      content: markdownContent,
      words,
      readingTime: minutes,
    };
  });

  // Sort by date descending, filter unpublished in production
  return posts
    .filter(post => import.meta.env.DEV || post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}
