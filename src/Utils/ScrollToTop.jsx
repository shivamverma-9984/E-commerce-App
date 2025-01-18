import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const navigate =useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, [navigate]);

  return null; // No UI, purely functional
};

export default ScrollToTop;
