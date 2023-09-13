import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Counter = ({ start, end }) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  // Use Intersection Observer to track when the component becomes visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current);
        }
      });
    }, options);

    observer.observe(counterRef.current);

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={counterRef}>
      {isVisible && <CountUp start={start} end={end} duration={2} />}
    </div>
  );
};

export default Counter;