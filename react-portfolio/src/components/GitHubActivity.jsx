import { useMemo, useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './GitHubActivity.css';

const GitHubActivity = () => {
  const username = 'kevaleaditya1';
  const [refreshKey, setRefreshKey] = useState(0);
  const currentYear = new Date().getFullYear();
  const availableYears = [currentYear, currentYear - 1, currentYear - 2];
  const [selectedYears, setSelectedYears] = useState(availableYears);

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
          {selectedYears.map((year) => (
            <div key={year} className="year-column">
              <h4>{year}</h4>
              <div className="calendar-wrap">
                <GitHubCalendar
                  key={`${refreshKey}-${year}`}
                  username={username}
                  year={year}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                  colorScheme="dark"
                  theme={theme}
                  showWeekdayLabels={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
