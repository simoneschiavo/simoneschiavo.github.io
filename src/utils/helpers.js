// Smooth scroll to element with header offset
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

// Enhanced smooth scroll with easing
export const smoothScrollTo = (elementId, duration = 800, offset = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  // Easing function for smooth animation
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

// Format date for display
export const formatDate = dateString => {
  const options = { year: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Check if element is in viewport
export const isInViewport = element => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Get currently active section based on scroll position
export const getActiveSection = (sections, offset = 100) => {
  const scrollPosition = window.scrollY + offset;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }

  return sections[0]; // Default to first section
};

// Generate unique ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Keyboard navigation detection
export const initKeyboardNavigation = () => {
  let isKeyboardUser = false;

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      isKeyboardUser = true;
      document.body.classList.add('keyboard-nav-active');
      document.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    }
  };

  const handleMouseDown = () => {
    isKeyboardUser = false;
    document.body.classList.remove('keyboard-nav-active');
    document.removeEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);
  };

  document.addEventListener('keydown', handleKeyDown);
  
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('mousedown', handleMouseDown);
  };
};

// Focus management utilities
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Announce content changes to screen readers
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};
