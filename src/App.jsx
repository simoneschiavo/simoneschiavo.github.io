import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header.jsx';
import ArticlePage from './components/ArticlePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ArticlesPage from './pages/ArticlesPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { personalInfo } from './data/content.js';
import { trackWebVitals, trackPageView } from './utils/analytics.js';

// Home page component - simplified to just hero
const HomePage = () => {
  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Main Content - takes up available space */}
      <main className="flex-1 flex items-center justify-center pt-16">
        {/* Hero Section */}
        <div className="container-responsive">
          <div className="fade-in text-center">
            <h1 className="hero-name">{personalInfo.name}</h1>
            <p className="hero-title">{personalInfo.title}</p>
            <p className="hero-description mx-auto">
              {personalInfo.description}
            </p>

            {/* Learn More Button */}
            <div className="mt-8">
              <a
                href="/about"
                className="btn-primary inline-flex items-center px-6 py-3 font-medium rounded-lg transition-all duration-200 hover:scale-105"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - stays at bottom */}
      <footer className="py-8">
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
      <ScrollToTop />
      <AnalyticsWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
