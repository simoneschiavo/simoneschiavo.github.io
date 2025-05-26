/**
 * Analytics and performance monitoring utilities
 */

// Track Core Web Vitals
export function trackWebVitals() {
  if (typeof window === 'undefined') return;

  // Track page load performance
  window.addEventListener('load', () => {
    // Track First Contentful Paint (FCP)
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime);
        }
      }
    });
    observer.observe({ entryTypes: ['paint'] });

    // Track Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  });
}

// Track page views
export function trackPageView(path) {
  if (typeof window === 'undefined') return;

  console.log('Page view:', path);

  // Here you could integrate with analytics services like:
  // - Google Analytics 4
  // - Plausible
  // - Simple Analytics
  // - etc.
}

// Track article reads
export function trackArticleRead(articleSlug, readingTime) {
  if (typeof window === 'undefined') return;

  console.log('Article read:', { articleSlug, readingTime });

  // Track reading progress
  let maxScroll = 0;
  const trackScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;

      // Track reading milestones
      if (maxScroll >= 25 && maxScroll < 50) {
        console.log('Article 25% read:', articleSlug);
      } else if (maxScroll >= 50 && maxScroll < 75) {
        console.log('Article 50% read:', articleSlug);
      } else if (maxScroll >= 75 && maxScroll < 100) {
        console.log('Article 75% read:', articleSlug);
      } else if (maxScroll >= 100) {
        console.log('Article 100% read:', articleSlug);
        window.removeEventListener('scroll', trackScroll);
      }
    }
  };

  window.addEventListener('scroll', trackScroll, { passive: true });
}

// Track user interactions
export function trackInteraction(action, element) {
  if (typeof window === 'undefined') return;

  console.log('Interaction:', { action, element });
}
