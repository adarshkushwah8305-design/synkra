import "./Changelog.css";
import PlatformCTA from "../PlatformCTA/PlatformCTA.jsx";
import Footer from "../Footer/Footer.jsx";

function Changelog() {
  return (
    <>
      <section className="changelog">

        {/* TOP HEADER */}
        <div className="changelog-container">

          <div className="changelog-header">

            <div className="changelog-heading">
              <span className="changelog-badge">◉ CHANGELOG</span>

              <h1>
                What's new in
                <br />
                Synkra
              </h1>

              <div className="changelog-blue-line"></div>
            </div>

            <div className="changelog-description">
              Refining modern workflows with precision and intelligence.
              Explore the evolution of Synkra as we build the future of
              collaborative productivity.
            </div>

          </div>


          {/* TIMELINE */}
          <div className="changelog-timeline">

            <div className="timeline-line"></div>


            {/* 1 - INTELLIGENCE UPDATE */}
            <div className="changelog-item left-item">

              <div className="timeline-content timeline-left">
                <span className="version-badge green">
                  v6.0 · Current System
                </span>

                <h2>The Intelligence Update</h2>

                <p className="release-date">
                  Released: May 24, 2024
                </p>
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-card white-card">

                <span className="card-heading blue">
                  NEW FEATURES
                </span>

                <div className="feature-row">
                  <span>✓</span>
                  <p>
                    Enhanced Automation Engine: Native support for multi-step
                    conditional workflows and cross-platform hooks.
                  </p>
                </div>

                <div className="feature-row">
                  <span>✓</span>
                  <p>
                    Synkra AI v2: Context-aware assistant capable of drafting
                    entire project briefs based on raw notes.
                  </p>
                </div>

                <span className="card-heading green-text">
                  IMPROVEMENTS
                </span>

                <div className="feature-row">
                  <span>↗</span>
                  <p>
                    Integrated Design System documentation directly within the
                    editor for real-time brand alignment.
                  </p>
                </div>

              </div>

            </div>


            {/* 2 - DIGITAL ARCHITECT */}
            <div className="changelog-item right-item">

              <div className="timeline-card grey-card">

                <span className="card-heading blue">
                  NEW FEATURES
                </span>

                <div className="feature-row">
                  <span>✓</span>
                  <p>
                    Visual Overhaul: Complete redesign of the interface
                    focusing on focus-modes and structural logic layers.
                  </p>
                </div>

                <div className="feature-row">
                  <span>✓</span>
                  <p>
                    Real-time Observation: Live tracking of infrastructure
                    health and workflow throughput.
                  </p>
                </div>

              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content timeline-right">

                <span className="version-badge grey">
                  v5.0
                </span>

                <h2>Digital Architect</h2>

                <p className="release-date">
                  Released: February 12, 2024
                </p>

              </div>

            </div>


            {/* 3 - EDITORIAL STUDIO */}
            <div className="changelog-item left-item">

              <div className="timeline-content timeline-left">

                <span className="version-badge grey">
                  v4.0
                </span>

                <h2>Editorial Studio</h2>

                <p className="release-date">
                  Released: October 06, 2023
                </p>

              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-card grey-card">

                <span className="card-heading blue">
                  NEW FEATURES
                </span>

                <div className="feature-row">
                  <span>✓</span>
                  <p>
                    Editorial Studio: A dedicated space for long-form
                    documentation and collaborative writing.
                  </p>
                </div>

                <span className="card-heading red-text">
                  BUG FIXES
                </span>

                <div className="feature-row">
                  <span className="red-icon">✥</span>
                  <p>
                    Resolved precision UI component rendering issues on
                    high-DPI displays.
                  </p>
                </div>

              </div>

            </div>


            {/* 4 - FOUNDATION ERA */}
            <div className="changelog-item right-item">

              <div className="timeline-card grey-card">

                <span className="card-heading blue">
                  CORE INFRASTRUCTURE
                </span>

                <p className="card-description">
                  The building blocks that made Synkra possible. Initial focus
                  was on stability, core logic triggers, and secure data
                  handling.
                </p>

                <div className="feature-row">
                  <span>⚡</span>
                  <p>
                    Initial platform launch with workspace management.
                  </p>
                </div>

                <div className="feature-row">
                  <span>ϟ</span>
                  <p>
                    Basic workflow triggers and integration layer.
                  </p>
                </div>

              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content timeline-right">

                <span className="version-badge grey">
                  v1.0 → v3.0
                </span>

                <h2>Foundation Era</h2>

                <p className="release-date">
                  2022 - Early 2023
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* REUSABLE CTA */}
      <PlatformCTA />


      {/* REUSABLE FOOTER */}
      <Footer />

    </>
  );
}

export default Changelog;