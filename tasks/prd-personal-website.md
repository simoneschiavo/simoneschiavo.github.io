# Product Requirements Document: Personal Website

## Introduction/Overview

This project involves creating a personal website for a product growth professional in the B2B SaaS industry. The website will serve as a digital presence for job hunting and personal branding, replicating the minimalist design style of Zeno Rocha's website (zenorocha.com). The site will showcase work experience, projects, and articles in a clean, professional manner that appeals to potential employers.

## Goals

1. Create a professional digital presence that effectively showcases product growth expertise in B2B SaaS
2. Replicate Zeno Rocha's minimalist design aesthetic including typography, color scheme, and layout
3. Establish a platform for sharing articles and thought leadership content
4. Build a maintainable static website that can be easily updated with new content
5. Provide a seamless user experience that encourages potential employers to engage with the content

## User Stories

1. **As a hiring manager**, I want to quickly understand the candidate's professional background and expertise so that I can assess their fit for product growth roles.

2. **As a recruiter**, I want to see a clean, professional presentation of the candidate's experience and projects so that I can effectively represent them to clients.

3. **As a potential employer**, I want to read the candidate's articles and insights so that I can evaluate their thought leadership and domain expertise.

4. **As the website owner**, I want to easily add new articles and update my content so that I can maintain an active professional presence.

5. **As a visitor**, I want to navigate the site intuitively and enjoy smooth animations so that I have a positive impression of the candidate's attention to detail.

## Functional Requirements

1. **Homepage**: The website must include a clean homepage with the owner's name, professional title, and brief tagline about their expertise in product growth for B2B SaaS.

2. **Navigation**: The website must include a fixed navigation header with smooth scroll links to main sections (About, Projects, Articles).

3. **About Section**: The website must display an About section with professional background, current focus, and expertise in product growth.

4. **Projects Section**: The website must showcase relevant projects with descriptions, technologies used, and outcomes/metrics where applicable.

5. **Articles Section**: The website must include a dedicated Articles section that displays blog posts hosted directly on the website (not external links).

6. **Article Pages**: The website must support individual article pages with full content, publication dates, and reading time estimates.

7. **Responsive Design**: The website must be fully responsive and work seamlessly across desktop, tablet, and mobile devices.

8. **Typography**: The website must implement typography that matches Zeno Rocha's style with proper hierarchy and readability.

9. **Color Scheme**: The website must use a color palette that replicates Zeno Rocha's minimalist aesthetic.

10. **Gradient Titles**: The website must include section titles with left-to-right gradient effects as seen on the reference site.

11. **Hover Animations**: The website must include subtle hover animations for interactive elements (links, buttons, cards).

12. **Contact Information**: The website must provide a way for visitors to contact the owner (email link or contact section).

## Non-Goals (Out of Scope)

1. **Dynamic Content Management**: No CMS integration - content will be managed through code updates
2. **User Authentication**: No login or user account functionality
3. **Comments System**: No commenting functionality on articles
4. **Newsletter Signup**: No email subscription features for initial version
5. **Analytics Integration**: No analytics tracking for initial version
6. **SEO Optimization**: Basic SEO practices only, no advanced optimization
7. **Multi-language Support**: English only
8. **E-commerce Features**: No payment processing or product sales
9. **Social Media Integration**: No social sharing buttons or feeds
10. **Search Functionality**: No site search feature

## Design Considerations

1. **Visual Style**: Exact replication of Zeno Rocha's design including:

   - Minimalist layout with ample whitespace
   - Clean typography hierarchy
   - Subtle color palette
   - Left-to-right gradient effects on titles
   - Smooth hover animations

2. **Component Structure**: Build reusable React components for:

   - Navigation header
   - Section layouts
   - Project cards
   - Article cards
   - Article page template

3. **Typography**: Implement font choices and sizing that match the reference design

4. **Color Palette**: Use colors that replicate the reference site's aesthetic

5. **Animations**: Implement smooth hover effects and transitions that enhance user experience

## Technical Considerations

1. **Technology Stack**:

   - React for component-based architecture
   - Tailwind CSS for styling and responsive design
   - React Router for navigation between pages
   - Markdown support for article content
   - Vite for build tooling

2. **Static Site Generation**:

   - Build process that generates static HTML/CSS/JS files
   - Markdown-to-HTML conversion for articles
   - Proper routing configuration for GitHub Pages

3. **GitHub Pages Deployment**:

   - Automated build and deployment workflow
   - Proper asset path configuration
   - Support for client-side routing

4. **Performance**:

   - Optimize images and assets for fast loading
   - Minimize bundle size
   - Implement lazy loading where appropriate

5. **Content Management**:
   - Markdown files for article content
   - JSON or JavaScript files for project and experience data
   - Easy-to-update content structure

## Success Metrics

1. **Completion**: Successfully deploy a fully functional website that replicates Zeno Rocha's design
2. **Visual Fidelity**: Achieve close visual replication of the reference design
3. **Content Quality**: Showcase relevant product growth experience and projects effectively
4. **User Experience**: Provide smooth navigation and interactions
5. **Professional Impact**: Create a strong first impression for potential employers

## Open Questions

1. **Article Content**: What topics should the initial articles cover to demonstrate product growth expertise?
2. **Project Details**: What specific projects should be highlighted and what level of detail should be included?
3. **Professional Background**: What key experiences and achievements should be emphasized in the About section?
4. **Content Update Frequency**: How often will new articles be added to maintain an active presence?
5. **Future Enhancements**: What additional features might be added after the initial launch (analytics, contact forms, etc.)?
6. **Brand Evolution**: How might the design evolve over time while maintaining the minimalist aesthetic?

---

**Target Completion**: To be determined based on development timeline
**Primary Stakeholder**: Website owner (Product Growth Professional)
**Development Approach**: Self-built using React and Tailwind CSS, deployed on GitHub Pages
