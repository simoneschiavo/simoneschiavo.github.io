# Product Requirements Document: Career Section for About Page

## Introduction/Overview

This feature will enhance the About page by replacing the current "Expertise" section with a comprehensive "Career" section that showcases professional experiences in a timeline format. The section will display career experiences with job titles, companies, employment dates, descriptions, and technology skills, along with a separate subsection for education and certifications. The design will maintain consistency with the existing dark theme and typography while providing an engaging user experience through subtle hover effects.

## Goals

1. **Professional Showcase**: Create a visually appealing timeline that effectively communicates career progression and professional experience
2. **User Engagement**: Implement subtle hover effects that enhance user interaction without being distracting
3. **Mobile Responsiveness**: Ensure the timeline works seamlessly across all device sizes
4. **Maintainability**: Structure the data in a way that allows for easy future updates and additions
5. **Design Consistency**: Maintain the existing website's dark theme, typography, and visual hierarchy

## User Stories

1. **As a potential employer/client**, I want to see a clear timeline of career experiences so that I can understand the candidate's professional background and progression.

2. **As a recruiter**, I want to quickly scan through job titles, companies, and skills so that I can assess if the candidate matches our requirements.

3. **As a fellow developer**, I want to see the technologies and skills used in each role so that I can understand the candidate's technical expertise.

4. **As a mobile user**, I want the career timeline to be easily readable and navigable on my phone so that I can review the information on any device.

5. **As the website owner**, I want to easily update career information without touching complex code so that I can keep my professional information current.

## Functional Requirements

### Career Timeline Section

1. **Timeline Layout**: The system must display career experiences in a left-aligned vertical timeline format without connecting lines.

2. **Career Experience Cards**: Each career experience must include:

   - Job title (prominently displayed)
   - Company name with external link icon
   - Employment dates (start date - end date or "Present")
   - Job description (2-3 sentences)
   - List of technologies/skills used

3. **Hover Effects**: The system must implement subtle hover effects:

   - Background color change on card hover (similar to existing project cards)
   - Smooth transition animations (200ms duration)
   - Skills tags should have individual hover effects

4. **Skills Display**: Skills must be displayed as:

   - Individual tags/badges
   - Consistent styling across all skills
   - Hover effect on individual skill tags
   - Responsive wrapping for different screen sizes

5. **Responsive Design**: The timeline must:
   - Display as vertical timeline on desktop (left-aligned)
   - Stack as simple cards on mobile devices
   - Maintain readability across all screen sizes
   - Use existing responsive breakpoints

### Education & Certifications Section

6. **Separate Subsection**: The system must include a dedicated "Education & Certifications" subsection below the career timeline.

7. **Education Display**: Each education entry must include:
   - Degree/certification name
   - Institution name
   - Year of completion
   - Relevant details (if applicable)

### Data Management

8. **Data Structure**: Career and education data must be stored in a separate, easily editable data file.

9. **Component Architecture**: The career section must be implemented as reusable components that can be easily maintained.

### Integration

10. **Page Integration**: The career section must replace the existing "Expertise" section on the About page.

11. **Style Consistency**: The section must use existing CSS classes and maintain visual consistency with the current design system.

## Non-Goals (Out of Scope)

1. **Interactive Filtering**: No filtering or sorting functionality for career experiences
2. **Detailed Project Showcases**: No embedded project details within career cards
3. **Social Media Integration**: No direct social media links within career cards
4. **Animation Libraries**: No external animation libraries; use CSS transitions only
5. **Search Functionality**: No search capability within the career section
6. **Print Optimization**: No specific print stylesheet considerations
7. **Accessibility Enhancements**: Beyond existing website accessibility standards

## Design Considerations

### Visual Hierarchy

- Use existing typography scale (h2 for section title, h3 for job titles)
- Maintain consistent spacing using existing utility classes
- Follow current color scheme (white text, zinc-400 for secondary text)

### Layout Structure

- Desktop: Left-aligned timeline with cards extending to the right
- Tablet: Simplified timeline maintaining visual hierarchy
- Mobile: Stacked card layout without timeline visual elements

### Hover States

- Card background: Subtle color change (similar to existing project cards)
- Skills: Individual hover effects with color/opacity changes
- Smooth transitions using existing 200ms duration standard

### Typography

- Job titles: Use existing h3 styling with white color
- Company names: Use existing link styling with hover effects
- Dates: Use zinc-400 color for secondary information
- Descriptions: Use existing paragraph styling (zinc-300)

## Technical Considerations

### Data Structure

- Create `src/data/career.js` file for career and education data
- Use JavaScript objects/arrays for easy maintenance
- Include all required fields for each experience

### Component Architecture

- Create `CareerSection.jsx` component
- Create `CareerCard.jsx` for individual experiences
- Create `EducationSection.jsx` for education/certifications
- Maintain existing component patterns and naming conventions

### CSS Implementation

- Extend existing CSS classes where possible
- Add minimal new CSS for timeline-specific styling
- Use existing hover effect patterns
- Maintain responsive design principles

### Dependencies

- No new external dependencies required
- Use existing React, Tailwind CSS, and routing setup

## Success Metrics

1. **User Engagement**: Increased time spent on About page (measurable through analytics)
2. **Professional Inquiries**: Increase in contact form submissions or LinkedIn connections
3. **Mobile Usage**: Maintain current mobile user experience scores
4. **Page Performance**: No degradation in page load times
5. **Maintainability**: Ability to add/update career information in under 5 minutes

## Open Questions

1. **Company Links**: Should company names link to company websites or LinkedIn company pages?
2. **Date Format**: Preferred date format (e.g., "Jan 2020 - Present" vs "2020 - Present")?
3. **Skills Limit**: Maximum number of skills to display per role to maintain clean design?
4. **Animation Preferences**: Any specific animation preferences beyond the basic hover effects?
5. **Content Priority**: Should more recent experiences be given more visual prominence?

---

**Target Implementation Timeline**: 1-2 development days
**Primary Developer Audience**: Junior to mid-level React developers
**Design Reference**: Provided timeline image for layout inspiration
