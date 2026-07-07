import './GitHubActivity.css';

const GitHubActivity = () => {
  const accounts = ['kevaleaditya1'];

  return (
    <section className="github-activity" id="contributions">
      <div className="activity-card">
        <div className="activity-header">
          <h3>GitHub Contributions</h3>
        </div>

        <div className="accounts-grid">
          {accounts.map((username) => (
            <div className="account-card" key={username}>
              <p>@{username}</p>
              <img
                src={`https://ghchart.rshah.org/2ea043/${encodeURIComponent(username)}`}
                alt={`${username} GitHub contributions`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
