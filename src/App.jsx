import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

/* ── Theme toggle logic ─────────────────────────────────── */

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored || getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return { theme, toggle };
}

/* ── Navigation ─────────────────────────────────────────── */

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/writing', label: 'Writing' },
  { to: '/projects', label: 'Projects' },
];

function Nav() {
  const location = useLocation();

  return (
    <nav className="site-nav">
      <ul>
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={location.pathname === to ? 'active' : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ── Footer ─────────────────────────────────────────────── */

function Footer({ theme, onToggleTheme }) {
  return (
    <footer className="site-footer">
      <small>
        &copy; {new Date().getFullYear()} Simone Schiavo.{' '}
        <a
          href="https://github.com/simoneschiavo/simoneschiavo.github.io"
          target="_blank"
          rel="noreferrer"
        >
          Source code.
        </a>{' '}
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '\u263C' : '\u263E'}
        </button>
      </small>
    </footer>
  );
}

/* ── Scroll to top on route change ──────────────────────── */

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ── Home page ──────────────────────────────────────────── */

function HomePage() {
  return (
    <div className="page-content with-sidebar">
      <div className="main-content">
        <h1>Simone Schiavo</h1>
        <p>
          Experiment-led Growth PM who helps B2B companies grow faster: from
          signup flows to monetization and retention. I love cracking hard
          problems and building iterative solutions.
        </p>

        <div className="section-header">Currently</div>
        <ul>
          <li>Working on product growth and experimentation @ Leadfeeder</li>
          <li>
            Writing about growth strategy and product-led growth (coming soon)
          </li>
          <li>Building side projects</li>
        </ul>

        <div className="section-header">Previously</div>
        <ul>
          <li>
            Growth &amp; Experimentation at{' '}
            <a
              href="https://www.dealfront.com"
              target="_blank"
              rel="noreferrer"
            >
              Dealfront
            </a>
          </li>
          <li>Growth &amp; Automation at BIP Consulting</li>
          <li>
            Growth at{' '}
            <a href="https://www.soldo.com" target="_blank" rel="noreferrer">
              Soldo
            </a>
          </li>
          <li>PM at WAM</li>
        </ul>

        <div className="section-header">Interests</div>
        <ul>
          <li>Product-led growth</li>
          <li>Growth modeling</li>
          <li>Experimentation</li>
          <li>AI-assisted workflows</li>
          <li>Chess</li>
          <li>Fantasy football</li>
          <li>Sci-fi books</li>
        </ul>
      </div>

      <aside className="sidebar">
        <div className="sidebar-section">
          <div className="sidebar-heading">Elsewhere</div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/simone-schiavo/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/simoschiavo"
                target="_blank"
                rel="noreferrer"
              >
                X / Twitter
              </a>
            </li>
            <li>
              <a href="mailto:simoneschiavo@icloud.com">Email</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

/* ── Writing page ───────────────────────────────────────── */

function WritingPage() {
  return (
    <div className="page-content">
      <h1>Writing</h1>
      <p style={{ color: 'var(--text-secondary)' }}>
        No posts yet. Check back soon.
      </p>
    </div>
  );
}

/* ── Projects page ──────────────────────────────────────── */

function ProjectsPage() {
  return (
    <div className="page-content">
      <h1>Projects</h1>
      <p style={{ color: 'var(--text-secondary)' }}>
        No projects yet. Check back soon.
      </p>
    </div>
  );
}

/* ── App ────────────────────────────────────────────────── */

function App() {
  const { theme, toggle } = useTheme();

  return (
    <Router>
      <ScrollToTop />
      <div className="site-wrapper">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer theme={theme} onToggleTheme={toggle} />
      </div>
    </Router>
  );
}

export default App;
