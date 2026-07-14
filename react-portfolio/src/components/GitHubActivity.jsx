import { useMemo, useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './GitHubActivity.css';

const GitHubActivity = () => {
  const username = 'kevaleaditya1';
  const [refreshKey, setRefreshKey] = useState(0);
  const currentYear = new Date().getFullYear();
  const availableYears = [currentYear, currentYear - 1, currentYear - 2];
  const [selectedYears, setSelectedYears] = useState(availableYears);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate responsive block sizes
  const getBlockSize = () => {
    if (typeof window === 'undefined') return 12;
    if (window.innerWidth <= 480) return 6;
    if (window.innerWidth <= 768) return 8;
    return 12;
  };

  const getBlockMargin = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth <= 480) return 2;
    if (window.innerWidth <= 768) return 3;
    return 4;
  };

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  const handleYearChange = (e) => {
    setSelectedYears([parseInt(e.target.value)]);
  };

  // GitHub green theme
  const theme = useMemo(() => ({
    dark: [
      'rgba(255,255,255,0.06)',
      '#0e4429',
      '#006d32',
      '#26a641',
      '#39d353',
    ],
    light: [
      'rgba(0,0,0,0.06)',
      '#d4edda',
      '#a8e6c1',
      '#56d364',
      '#2ea043',
    ],
  }), []);

  return (
    <section className="github-activity">
      <div className="activity-card">
        <div className="activity-header">
          <h3>GitHub Activity</h3>
          <div className="year-selector">
            <div className="year-buttons">
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYears([year])}
                  className={`year-btn ${selectedYears.includes(year) ? 'active' : ''}`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="years-container">
          <div className="year-column">
            <div className="calendar-wrap">
              <GitHubCalendar
                key={`${refreshKey}-${selectedYears[0]}`}
                username={username}
                year={selectedYears[0]}
                blockSize={getBlockSize()}
                blockMargin={getBlockMargin()}
                fontSize={isMobile ? 10 : 12}
                colorScheme="dark"
                theme={theme}
                showWeekdayLabels={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
