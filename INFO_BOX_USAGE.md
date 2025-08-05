# Info Box Component Usage

The info box component allows you to highlight important information in your markdown articles with a Resend-inspired design.

## How to Use

### HTML Syntax (Recommended)

Use the HTML `<div>` syntax directly in your markdown files:

```markdown
<div class="info-box">
**Pro Tip**: The first 7 days after sign-up are crucial for user activation. Focus on getting users to their "aha moment" within this window to maximize retention rates.
</div>
```

### Features

- **Dark gray background** with subtle border
- **Information icon** (lowercase "i") in a circular badge
- **Gradient top border** for visual appeal
- **Responsive design** that matches the dark theme
- **Proper typography** with good contrast

### Styling

The info box uses these CSS classes:

- `.info-box` - Main container
- `.info-icon` - Circular icon container
- `.info-content` - Content area

### Example Usage

```markdown
# Article Title

Regular paragraph content here.

<div class="info-box">
**Important**: This is a key point that needs to stand out. You can include **bold text**, *italic text*, and even [links](https://example.com) within the info box.
</div>

More content continues here...
```

### Best Practices

1. **Keep content concise** - Info boxes work best with short, impactful messages
2. **Use for key insights** - Highlight important tips, warnings, or key metrics
3. **Maintain readability** - Don't overuse info boxes in a single article
4. **Use bold text** - Make key phrases stand out within the info box

### Technical Details

- The component is rendered using ReactMarkdown with `rehype-raw` plugin
- Custom CSS styling in `src/styles/globals.css`
- Component definition in `src/components/InfoBox.jsx`
