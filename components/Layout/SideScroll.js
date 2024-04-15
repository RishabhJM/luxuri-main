// ProgressBar.js

import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener('scroll', updateScrollPercentage);

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full w-2 bg-gray-300">
      <div
        className="absolute bottom-0 bg-blue-500"
        style={{ height: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
