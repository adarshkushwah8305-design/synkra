import "./Features.css";

import analyticsImage from "../../assets/Overlay.png";
import intelligenceImage from "../../assets/Overlay1.png";

function Features() {
    return (
        <section className="features-section">

            {/* TOP INTRO */}
            <div className="features-intro">

                <div className="features-intro-left">
                    <h2>
                        An Ops Brain that Actually
                        <br />
                        Shows its Work
                    </h2>

                    <div className="blue-line"></div>
                </div>

                <div className="features-intro-right">

                    <div className="difference-pill">
                        ⚙ What makes Synkra different %
                    </div>

                    <p>
                        Most tools fire automations and hope for the best.
                        <b> Synkra</b> treats every workflow as a first class
                        system, it listens, decides, acts, and records exactly
                        what happened. So your team can trust the result.
                    </p>

                </div>

            </div>


            {/* ROW 1 */}
            <div className="features-row-one">

                {/* ANALYTICS */}
                <div className="analytics-card">

                    <div className="feature-pill blue-pill">
                        ⚙ &nbsp; ANALYTICS
                    </div>

                    <h3>
                        Live Workflow Analytics
                    </h3>

                    <p>
                        See where work is queuing, which playbooks save the most
                        time, and how many incidents were prevented. Track runs,
                        latency, and failure patterns over time.
                    </p>

                    <img
                        src={analyticsImage}
                        alt="Workflow Analytics"
                    />

                </div>


                {/* RECOVERY */}
                <div className="recovery-card">

                    <div className="feature-pill green-pill">
                        ♻ &nbsp; RECOVERY
                    </div>

                    <h3>
                        Built-In Recovery
                        <br />
                        & Replays
                    </h3>

                    <p>
                        When something fails, Synkra doesn't go silent.
                        It retries with backoff, logs the error with full
                        context, and alerts the right person. Once fixed,
                        replay the run with one click.
                    </p>

                    <div className="recovery-number">
                        99.99%
                    </div>

                </div>

            </div>


            {/* ROW 2 */}
            <div className="intelligence-card">

                <div className="intelligence-content">

                    <div className="feature-pill dark-green-pill">
                        ⚙ &nbsp; OPS INTELLIGENCE
                    </div>

                    <h3>
                        Your tools generate signals.
                        <br />
                        Synkra turns them into decisions.
                    </h3>

                    <p>
                        <b><i>Synkra</i></b> takes the logic that currently lives
                        in spreadsheets, Slack threads, and someone's head,
                        and turns it into explicit playbooks. When the right
                        signal fires, Synkra runs the play the same way,
                        every time.
                    </p>

                    <div className="check-list">
                        <span>✓ No-Code Logic</span>
                        <span>✓ Version Control</span>
                    </div>

                </div>

                <div className="intelligence-image">
                    <img
                        src={intelligenceImage}
                        alt="Ops Intelligence"
                    />
                </div>

            </div>


            {/* ROW 3 */}
            <div className="features-row-three">

                {/* VISUAL BUILDER */}
                <div className="visual-card">

                    <div className="feature-pill white-pill">
                        ⚙ &nbsp; VISUAL BUILDER
                    </div>

                    <h3>
                        Visual Workflow
                        <br />
                        Playbooks
                    </h3>

                    <p>
                        Design end-to-end playbooks on a canvas your PMs can own.
                        Define conditions, branches, and fallbacks without code.
                        Engineers stay in the loop, not stuck wiring everything
                        together.
                    </p>

                </div>


                {/* INTEGRATIONS */}
                <div className="integration-card">

                    <div className="feature-pill light-green-pill">
                        ▣ &nbsp; INTEGRATIONS
                    </div>

                    <h3>
                        50+ Deep SaaS
                        <br />
                        Integrations
                    </h3>

                    <p>
                        Native connectors for Slack, Notion, Linear, GitHub,
                        Stripe, HubSpot, Jira, Salesforce, and more. Two-way
                        sync, typed payloads, and opinionated defaults so you
                        don't live in API docs.
                    </p>

                </div>


                {/* ACCESS CONTROL */}
                <div className="access-card">

                    <div className="feature-pill light-red-pill">
                        🔒 &nbsp; ACCESS CONTROL
                    </div>

                    <h3>
                        Granular Access &
                        <br />
                        Guardrails
                    </h3>

                    <p>
                        Control who can design playbooks, who can publish them,
                        and who can only see outcomes. Ships with sensible
                        defaults for growing teams and scales to stricter
                        enterprise policies.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Features;