import "./PlatformCTA.css";

function PlatformCTA() {
  return (
    <section className="platfrom-cta-section">

      {/* CTA CONTENT */}
      <div className="platfrom-cta-content">

        {/* LEFT ELLIPSES */}
        <div className="cta-ellipses cta-ellipses-left">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* RIGHT ELLIPSES */}
        <div className="cta-ellipses cta-ellipses-right">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* CTA MAIN */}
        <div className="platfrom-cta-main">

          <h2>
            Your team is spending hours on work
            <br />
            that <em>Synkra</em> can run in seconds
          </h2>

          <div className="platfrom-cta-buttons">

            <button className="platfrom-cta-primary">
              Create an Account
            </button>

            <button className="platfrom-cta-secondary">
              Talk to our team instead
              <span>↗</span>
            </button>

          </div>

          <p className="platfrom-cta-note">
            *Ship your first live playbook in 10 minutes. No credit card, no setup call required.
          </p>

        </div>

        {/* CTA BOTTOM */}
        <div className="platfrom-cta-bottom">

          <p>
            “We don’t just build software, we cultivate an ecosystem where every
            operational detail is treated with the reverence of fine art.
            Reliability is our ultimate aesthetic.”
          </p>

          <div className="platfrom-cta-author">
            <strong>PABLO THOMPSON</strong>
            <span>CO-FOUNDER & CHIEF VISIONARY</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default PlatformCTA;