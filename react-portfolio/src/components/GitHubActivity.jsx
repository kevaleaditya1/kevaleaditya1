import { useMemo } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './GitHubActivity.css';

const GitHubActivity = () => {
  const username = 'kevaleaditya1';

  // Match site colors
  const theme = useMemo(() => ({
    dark: [
      'rgba(255,255,255,0.06)',
      '#1f2937',
      '#374151',
      '#4b5563',
      '#22d3ee',
    ],
    light: [
      'rgba(0,0,0,0.06)',
      '#e5e7eb',
      '#d1d5db',
      '#9ca3af',
      '#06b6d4',
    ],
  }), []);

  return (
    <section className="github-activity">
      <div className="activity-card">
        <div className="activity-header">
          <h3>GitHub Activity</h3>
          <span className="activity-note">Auto-updates with your contributions</span>
        </div>
        <div className="calendar-wrap">
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            colorScheme="dark"
            theme={theme}
            showWeekdayLabels={false}
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
