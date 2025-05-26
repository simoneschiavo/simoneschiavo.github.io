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
import TalksPage from './pages/TalksPage.jsx';
import PodcastsPage from './pages/PodcastsPage.jsx';
import InvestingPage from './pages/InvestingPage.jsx';
import UsesPage from './pages/UsesPage.jsx';
import ReminderPage from './pages/ReminderPage.jsx';
import { personalInfo } from './data/content.js';
import { trackWebVitals, trackPageView } from './utils/analytics.js';

// Home page component - simplified to just hero
const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
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
      </main>

      {/* Footer */}
      <footer className="section-spacing-sm">
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
          <Route path="/talks" element={<TalksPage />} />
          <Route path="/podcasts" element={<PodcastsPage />} />
          <Route path="/investing" element={<InvestingPage />} />
          <Route path="/uses" element={<UsesPage />} />
          <Route path="/reminder" element={<ReminderPage />} />
        </Routes>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
