import { EyeOff, ShieldCheck, GitBranch } from "lucide-react";
import "./values.css";

function Values() {
  return (
    <section className="values-section">

      {/* Heading */}
      <div className="values-heading">
        <h2>What we believe about ops</h2>

        <p>
          Principles that guide every playbook we ship.
        </p>
      </div>


      {/* Cards */}
      <div className="values-grid">

        {/* Card 1 */}
        <div className="value-card value-card-light">

          <div className="value-icon value-icon-gray">
            <EyeOff size={24} />
          </div>

          <div className="value-content">
            <h3>Automation should be invisible</h3>

            <p>
              The best playbook is the one you forget is running.
              It handles the complexity so you can focus on creativity.
            </p>
          </div>

        </div>


        {/* Card 2 */}
        <div className="value-card value-card-blue">

          <div className="value-icon value-icon-white">
            <ShieldCheck size={24} />
          </div>

          <div className="value-content">
            <h3>Reliability is a feature</h3>

            <p>
              A workflow that fails silently is worse than no
              workflow at all. We build for 99.97% execution uptime.
            </p>
          </div>

        </div>


        {/* Card 3 */}
        <div className="value-card value-card-light">

          <div className="value-icon value-icon-green">
            <GitBranch size={24} />
          </div>

          <div className="value-content">
            <h3>PMs should own the Ops</h3>

            <p>
              If your product manager can't maintain it, we haven't
              done our job. Ops belongs to the product, not just infra.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Values;