import React, { useEffect } from 'react';
import { personalInfo } from './data/content.js';
import Header from './components/Header';
import {
  smoothScrollTo,
  initKeyboardNavigation,
  announceToScreenReader,
} from './utils/helpers.js';

// Import components (we'll create these in subsequent tasks)
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Footer from './components/Footer';

function App() {
  // Handle smooth scroll navigation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const sectionId = targetId.replace('#', '');
    smoothScrollTo(sectionId, 800, 80);
  };

  // Initialize keyboard navigation detection
  useEffect(() => {
    const cleanup = initKeyboardNavigation();
    return cleanup;
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = event => {
      // Alt + 1-4 for quick section navigation
      if (event.altKey && !event.ctrlKey && !event.metaKey) {
        const sectionMap = {
          1: { id: 'about', name: 'About' },
          2: { id: 'experience', name: 'Experience' },
          3: { id: 'projects', name: 'Projects' },
          4: { id: 'writing', name: 'Writing' },
          h: { id: 'hero', name: 'Home' },
          H: { id: 'hero', name: 'Home' },
        };

        const section = sectionMap[event.key];
        if (section) {
          event.preventDefault();
          smoothScrollTo(section.id, 800, 80);
          announceToScreenReader(`Navigated to ${section.name} section`);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle skip link navigation
  const handleSkipToContent = e => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkipToNavigation = e => {
    e.preventDefault();
    const navigation = document.querySelector('nav a');
    if (navigation) {
      navigation.focus();
    }
  };

  return (
    <div className="min-h-screen bg-navy">
      {/* Skip Links */}
      <div className="skip-links">
        <a
          href="#main-content"
          onClick={handleSkipToContent}
          className="skip-link"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          onClick={handleSkipToNavigation}
          className="skip-link"
        >
          Skip to navigation
        </a>
      </div>

      <Header />

      {/* Main Content */}
      <main
        id="main-content"
        tabIndex="-1"
        role="main"
        aria-label="Main content"
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
