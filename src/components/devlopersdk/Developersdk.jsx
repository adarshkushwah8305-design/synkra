import "./Developersdk.css";

function Developersdk() {
  return (
    <section className="developer-sdk-section">
      <div className="developer-sdk-container">

        {/* LEFT SIDE */}
        <div className="developer-sdk-content">

          {/* Badge */}
          <div className="developer-sdk-badge">
            <span className="badge-icon">⚙</span>
            <span>BUILT FOR REAL TEAMS</span>
          </div>

          {/* Heading + Description */}
          <div className="developer-sdk-heading">
            <h2>
              Set it up once. Trust it every time it runs.
            </h2>

            <p>
              Most teams don't have a dedicated ops engineer.{" "}
              <strong>Synkra</strong> is designed for PMs and founders who need
              to design workflows once and trust them to run for months.{" "}
              <strong>Synkra</strong> handles execution, monitoring, and
              recovery you handle the rules.
            </p>
          </div>

          {/* FEATURES */}
          <div className="developer-sdk-list">

            <div className="developer-sdk-item">
              <span className="check-icon">✓</span>

              <span>
                Visual canvas for designing playbooks without writing code
              </span>
            </div>

            <div className="developer-sdk-item">
              <span className="check-icon">✓</span>

              <span>
                Synkra suggests new steps when it spots recurring manual work
                in your logs
              </span>
            </div>

            <div className="developer-sdk-item">
              <span className="check-icon">✓</span>

              <span>
                Version history and one-click rollback for every playbook you
                build
              </span>
            </div>

          </div>

          {/* BUTTON */}
          <button className="developer-sdk-button">
            <span>Explore the template library</span>
            <span className="button-icon">◫</span>
          </button>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="developer-sdk-image">
          <img
            src="/developer-sdk.png"
            alt="Developer SDK"
          />
        </div>

      </div>
    </section>
  );
}

export default Developersdk;