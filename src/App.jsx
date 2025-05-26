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

            {/* Keyboard shortcut like Zeno's design */}
            <div className="keyboard-shortcut justify-center">
              <span>Press</span>
              <span className="keyboard-key">⌘</span>
              <span className="keyboard-key">K</span>
              <span>to start →</span>
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
