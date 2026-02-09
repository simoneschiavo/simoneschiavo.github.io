---
title: "Example Post: How Frontmatter Works"
slug: "example-post"
date: 2026-02-09
published: false
topics: ["meta", "example"]
description: "A sample post showing the frontmatter structure."
---

This is an example post to show the markdown + frontmatter structure.

## Frontmatter Fields

Your posts support these frontmatter fields:

- **title**: The post title (required)
- **slug**: URL slug, defaults to filename if not provided
- **date**: Publication date in YYYY-MM-DD format
- **published**: Set to `false` to hide from production (still visible in dev)
- **topics**: Array of topic tags
- **description**: Short description for previews

## Auto-calculated Fields

These are calculated automatically from the content:

- **words**: Total word count
- **readingTime**: Estimated minutes to read (200 wpm)

## Markdown Features

You can use standard markdown:

- **Bold** and *italic* text
- [Links](https://example.com)
- `inline code`
- Lists, blockquotes, etc.

```javascript
// Code blocks with syntax highlighting
const greeting = "Hello, world!";
```

> Blockquotes work too.

Delete this file when you're ready to publish your first real post.
