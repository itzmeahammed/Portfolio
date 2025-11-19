import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AdvancedAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views with enhanced data
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title,
        timestamp: new Date().toISOString(),
      });
    }
  }, [location.pathname]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (window.gtag) {
        if (scrollPercentage >= 25 && !sessionStorage.getItem('scroll_25')) {
          window.gtag('event', 'scroll_depth', { depth: '25%' });
          sessionStorage.setItem('scroll_25', 'true');
        }
        if (scrollPercentage >= 50 && !sessionStorage.getItem('scroll_50')) {
          window.gtag('event', 'scroll_depth', { depth: '50%' });
          sessionStorage.setItem('scroll_50', 'true');
        }
        if (scrollPercentage >= 75 && !sessionStorage.getItem('scroll_75')) {
          window.gtag('event', 'scroll_depth', { depth: '75%' });
          sessionStorage.setItem('scroll_75', 'true');
        }
        if (scrollPercentage >= 100 && !sessionStorage.getItem('scroll_100')) {
          window.gtag('event', 'scroll_depth', { depth: '100%' });
          sessionStorage.setItem('scroll_100', 'true');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track button clicks
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('button, a');
      if (target) {
        const buttonText = target.textContent?.trim() || target.getAttribute('aria-label') || 'Unknown';
        const buttonType = target.tagName.toLowerCase();
        
        if (window.gtag) {
          window.gtag('event', 'button_click', {
            button_text: buttonText,
            button_type: buttonType,
            page: location.pathname,
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [location.pathname]);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (window.gtag && timeOnPage > 5) {
        window.gtag('event', 'time_on_page', {
          time_seconds: timeOnPage,
          page: location.pathname,
        });
      }
    };
  }, [location.pathname]);

  return null;
};

export default AdvancedAnalytics;
