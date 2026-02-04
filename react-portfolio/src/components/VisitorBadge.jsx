import { useState, useEffect, useRef } from 'react';
import './VisitorBadge.css';

const VisitorBadge = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      const storedCount = parseInt(localStorage.getItem('visitorCount') || '0');
      const newCount = storedCount + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      setVisitorCount(newCount);
    }
  }, []);

  return (
    <div className="visitor-badge-floating">
      <span className="visitor-count">👤 {visitorCount}</span>
    </div>
  );
};

export default VisitorBadge;
