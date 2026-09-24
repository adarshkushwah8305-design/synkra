import "./Stats.css";

function Stats() {
  return (
    <section className="stats-section">

      <div className="stats-container">

        {/* HEADING */}
        <div className="stats-heading">
          <h2>Synkra teams move reliably, and faster.</h2>

          <p>
            Measured across live teams using Synkra's built-in run tracking
            and time saved reports, not estimated.
          </p>
        </div>

        {/* STAT CARDS */}
        <div className="stats-grid">

          <div className="stat-item">
            <div className="stat-number">240+</div>
            <div className="stat-label">Active Teams Member</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">1M+</div>
            <div className="stat-label">Workflows executed</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">8.4 hrs</div>
            <div className="stat-label">Saved per team / week</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">12ms</div>
            <div className="stat-label">Global Latency</div>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="stats-actions">

          <button className="stats-primary-btn">
            Create an Account
          </button>

          <button className="stats-secondary-btn">
            Talk to our team instead
            <span>♧</span>
          </button>

        </div>

        {/* NOTE */}
        <p className="stats-note">
          *Ship your first live playbook in 10 minutes. No credit card, no setup call required.
        </p>

      </div>

    </section>
  );
}

export default Stats;