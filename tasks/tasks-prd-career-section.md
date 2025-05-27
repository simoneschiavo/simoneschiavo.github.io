# Task List: Career Section Implementation

Based on the PRD for Career Section for About Page

## Relevant Files

- `src/data/career.js` - Career and education data structure with 4 career experiences and 3 education entries
- `src/components/CareerSection.jsx` - Main career timeline section component with timeline layout
- `src/components/CareerCard.jsx` - Individual career experience card component with hover effects and responsive design
- `src/components/EducationSection.jsx` - Education and certifications subsection component with consistent styling
- `src/pages/AboutPage.jsx` - About page with integrated career and education sections (replaced Expertise section)
- `src/styles/globals.css` - Global styles with timeline-specific CSS classes and career card hover effects

### Notes

- Components follow existing React patterns in the codebase
- CSS extends existing utility classes and design system
- Data structure allows for easy future updates without code changes
- No additional dependencies required beyond existing React and Tailwind setup

## Tasks

- [x] 1.0 Create Career Data Structure
  - [x] 1.1 Create `src/data/career.js` file with career experiences array
  - [x] 1.2 Define career experience object structure (title, company, dates, description, skills)
  - [x] 1.3 Add 4 sample career experiences with realistic data
  - [x] 1.4 Create education array with degree/certification objects
  - [x] 1.5 Export career and education data for component consumption
- [x] 2.0 Build Career Timeline Components
  - [x] 2.1 Create `CareerCard.jsx` component with props for experience data
  - [x] 2.2 Implement job title, company name, and date display
  - [x] 2.3 Add job description paragraph with proper text styling
  - [x] 2.4 Create skills tags with individual hover effects
  - [x] 2.5 Add card hover effects with background color transition
  - [x] 2.6 Ensure responsive design for mobile and desktop layouts
  - [x] 2.7 Create `CareerSection.jsx` component to render timeline
  - [x] 2.8 Map through career data and render CareerCard components
  - [x] 2.9 Add section title and proper spacing using existing classes
- [x] 3.0 Implement Education & Certifications Section
  - [x] 3.1 Create `EducationSection.jsx` component
  - [x] 3.2 Display education entries with degree, institution, and year
  - [x] 3.3 Style education cards consistently with career timeline
  - [x] 3.4 Add proper spacing and typography hierarchy
  - [x] 3.5 Ensure responsive behavior matches career section
- [x] 4.0 Add Timeline-Specific Styling
  - [x] 4.1 Add CSS classes for timeline layout (left-aligned, no connecting lines)
  - [x] 4.2 Implement card hover effects matching existing project cards
  - [x] 4.3 Style skills tags with consistent appearance and hover states
  - [x] 4.4 Add responsive breakpoints for mobile stacked layout
  - [x] 4.5 Ensure smooth transitions (200ms duration) for all hover effects
  - [x] 4.6 Test and refine spacing and visual hierarchy
- [x] 5.0 Integrate Career Section into About Page
  - [x] 5.1 Import CareerSection and EducationSection components
  - [x] 5.2 Remove existing "Expertise" section from AboutPage.jsx
  - [x] 5.3 Add CareerSection component in place of removed Expertise section
  - [x] 5.4 Add EducationSection component below CareerSection
  - [x] 5.5 Test page layout and ensure proper spacing between sections
  - [x] 5.6 Verify mobile responsiveness and cross-browser compatibility
