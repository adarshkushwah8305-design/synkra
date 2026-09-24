import "./ResourcesStats.css";

function ResourcesStats() {
  return (
    <section className="resources-stats-section">
      <div className="resources-stats-container">

        {/* TOP CONTENT */}
        <div className="resources-stats-top">

          {/* LEFT */}
          <div className="resources-stats-title-box">
            <h2>
              Synkra teams move reliably, and faster.
            </h2>

            <div className="resources-stats-blue-line"></div>
          </div>

          {/* RIGHT */}
          <div className="resources-stats-sub-box">

            <div className="resources-stats-badge">
              <span className="resources-stats-badge-icon">↗</span>
              <span>Your Text %</span>
            </div>

            <p>
              Measured across live teams using{" "}
              <strong>Synkra's</strong>{" "}
              built-in run tracking and time saved reports, not estimated.
            </p>

          </div>

        </div>


        {/* STATS */}
        <div className="resources-stats-grid">

          {/* 1 */}
          <div className="resources-stat-item">
            <div className="resources-stat-number">
              2.40<span>+</span>
            </div>

            <div className="resources-stat-label">
              Active Teams Member
            </div>
          </div>


          {/* 2 */}
          <div className="resources-stat-item">
            <div className="resources-stat-number">
              1M<span>+</span>
            </div>

            <div className="resources-stat-label">
              Workflows executed
            </div>
          </div>


          {/* 3 */}
          <div className="resources-stat-item">
            <div className="resources-stat-number">
              8.4 hrs
            </div>

            <div className="resources-stat-label">
              Saved per team / week
            </div>
          </div>


          {/* 4 */}
          <div className="resources-stat-item">
            <div className="resources-stat-number">
              12ms
            </div>

            <div className="resources-stat-label">
              Global Latency
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ResourcesStats;