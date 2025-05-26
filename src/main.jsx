import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App.jsx';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: '#0a192f',
            color: '#8892b0',
            fontFamily: 'Inter, sans-serif',
            padding: '2rem',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h1 style={{ color: '#64ffda', marginBottom: '1rem' }}>
              Something went wrong
            </h1>
            <p style={{ marginBottom: '1rem' }}>
              The application encountered an error. Please check the browser
              console for more details.
            </p>
            <details
              style={{
                textAlign: 'left',
                background: '#112240',
                padding: '1rem',
                borderRadius: '4px',
              }}
            >
              <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                Error Details
              </summary>
              <pre style={{ fontSize: '0.875rem', overflow: 'auto' }}>
                {this.state.error?.toString()}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

try {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
} catch (error) {
  console.error('Failed to render React app:', error);
  document.getElementById('root').innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a192f; color: #8892b0; font-family: Inter, sans-serif; padding: 2rem;">
      <div style="text-align: center; max-width: 600px;">
        <h1 style="color: #64ffda; margin-bottom: 1rem;">Failed to Load Application</h1>
        <p style="margin-bottom: 1rem;">The React application failed to initialize. Please check the browser console for error details.</p>
        <p style="font-size: 0.875rem; opacity: 0.7;">Error: ${error.message}</p>
      </div>
    </div>
  `;
}
