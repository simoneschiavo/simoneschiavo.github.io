import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header.jsx';
import Articles from './components/Articles.jsx';
import ArticlePage from './components/ArticlePage.jsx';
import { personalInfo } from './data/content.js';
import { trackWebVitals, trackPageView } from './utils/analytics.js';

// Home page component
const HomePage = () => {
  // Handle smooth scroll navigation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle skip link navigation
  const handleSkipToContent = e => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Skip Links */}
      <div className="fixed top-0 left-0 z-50">
        <a
          href="#main-content"
          onClick={handleSkipToContent}
          className="absolute -top-40 left-6 bg-white text-black px-4 py-2 rounded font-medium text-sm transition-all duration-300 focus:top-6 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Skip to main content
        </a>
      </div>

      {/* Main Content */}
      <main
        id="main-content"
        tabIndex="-1"
        role="main"
        aria-label="Main content"
        className="pt-16"
      >
        {/* Hero Section */}
        <section id="hero" className="section-spacing">
          <div className="container-responsive">
            <div className="fade-in text-center">
              <h1 className="hero-name">{personalInfo.name}</h1>
              <p className="hero-title">{personalInfo.title}</p>
              <p className="hero-description mx-auto">
                {personalInfo.description}
              </p>

              {/* Keyboard shortcut like Zeno's design */}
              <div className="keyboard-shortcut justify-center">
                <span>Press</span>
                <span className="keyboard-key">⌘</span>
                <span className="keyboard-key">K</span>
                <span>to start →</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-spacing">
          <div className="container-responsive">
            <h2 className="section-title text-center">About</h2>
            <div className="slide-up">
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto text-center">
                I'm a Product Growth Professional with a passion for building
                scalable growth systems that drive meaningful business impact. I
                specialize in the intersection of product development and growth
                marketing, focusing on data-driven strategies that improve user
                acquisition, activation, and retention.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-spacing">
          <div className="container-responsive">
            <h2 className="section-title text-center">Projects</h2>
            <div className="grid grid-auto-fit gap-8">
              <div className="project-card hover-lift">
                <h3 className="project-title">Product-Led Growth Framework</h3>
                <p className="project-description">
                  Developed a comprehensive PLG framework that helps B2B SaaS
                  companies transition from sales-led to product-led growth.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="project-tech">Product Analytics</span>
                  <span className="project-tech">A/B Testing</span>
                  <span className="project-tech">Growth Modeling</span>
                </div>
                <a href="#" className="project-link">
                  View Case Study →
                </a>
              </div>

              <div className="project-card hover-lift">
                <h3 className="project-title">Growth Analytics Dashboard</h3>
                <p className="project-description">
                  Built a comprehensive growth analytics dashboard that tracks
                  key product metrics, user behavior, and growth experiments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="project-tech">SQL</span>
                  <span className="project-tech">Python</span>
                  <span className="project-tech">Mixpanel</span>
                </div>
                <a href="#" className="project-link">
                  View Demo →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <Articles />
      </main>

      {/* Footer */}
      <footer id="contact" className="section-spacing-sm">
        <div className="container-responsive text-center">
          <div className="footer-links">
            <a href="mailto:simone.schiavo@example.com" className="footer-link">
              email
            </a>
            <a href="https://twitter.com/simoneschiavo" className="footer-link">
              twitter
            </a>
            <a href="https://github.com/simoneschiavo" className="footer-link">
              github
            </a>
            <a
              href="https://linkedin.com/in/simoneschiavo"
              className="footer-link"
            >
              linkedin
            </a>
            <a
              href="https://instagram.com/simoneschiavo"
              className="footer-link"
            >
              instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Analytics wrapper component
const AnalyticsWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return children;
};

function App() {
  useEffect(() => {
    // Initialize performance tracking
    trackWebVitals();
  }, []);

  return (
    <Router>
      <AnalyticsWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
        </Routes>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
