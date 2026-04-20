import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToElement()) {
        // If not found, retry a few times (useful for pages with loading/animations)
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          if (scrollToElement() || attempts > 10) {
            clearInterval(interval);
          }
        }, 100);
        return () => clearInterval(interval);
      }
    } else {
      // If no hash, scroll to top on path change
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
