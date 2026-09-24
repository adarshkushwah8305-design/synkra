import React from "react";
import "./platfrom.css";
import Features from "../components/Features/Features.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PlatformCTA from "../components/PlatformCTA/PlatformCTA.jsx";
function Platform() {
  return (
    <>
      {/* =========================
          PLATFORM HERO
      ========================= */}

      <section className="platform-hero">

        {/* Badge */}
        <div className="platform-badge">
          <span>▣</span>
          PRECISION ENGINEERING
        </div>

        {/* Heading */}
        <h1 className="platform-title">
          Precision Engineering for
          <br />
          the <span>Modern</span> Web.
        </h1>

        {/* Description */}
        <p className="platform-description">
          <strong>Synkra</strong> isn't just a workflow tool. It's a
          high-performance runtime layer designed for
          <br />
          technical teams who treat operations as primary infrastructure. Deploy logic that listens,
          <br />
          adapts, and executes with millisecond latency.
        </p>

        {/* Buttons */}
        <div className="platform-buttons">

          <button className="platform-primary">
            Start Building Now
            <span>↗</span>
          </button>

          <button className="platform-secondary">
            Read the Documentation
          </button>

        </div>
        <img
          src="/platfrom-image.png"
          alt="Synkra Platform"
        />
      </section>

      <Features />
      
      


      <section className="platfrom-logic-section">

        {/* LEFT IMAGE */}
        <div className="platfrom-logic-image-container">

          <div className="platfrom-logic-image">
            <img
              src="/platfrom-logic-image.png"
              alt="Synkra Logic Core"
            />
          </div>

          {/* IMAGE OVERLAY */}
          <div className="platfrom-logic-overlay">
            <div className="platfrom-logic-overlay-title">
        // LOGIC_CORE_V2.1
            </div>

            <div className="platfrom-logic-overlay-text">
              "Every playbook in Synkra is a compiled
              graph, ensuring zero-overhead execution
              even at scale."
            </div>
          </div>

        </div>


        {/* RIGHT CONTENT */}
        <div className="platfrom-logic-content">

          {/* BADGE */}
          <div className="platfrom-logic-badge">
            <span>◉</span>
            OPS INTELLIGENCE
          </div>


          {/* HEADING */}
          <h2>
            Your tools generate signals.
            <br />
            Synkra turns them into decisions.
          </h2>


          {/* DESCRIPTION */}
          <p className="platfrom-logic-description">
            <strong>Synkra</strong> takes the logic that currently lives in
            spreadsheets, Slack threads, and someone's head, and turns it
            into explicit playbooks. When the right signal fires, Synkra
            runs the play the same way, every time.
          </p>


          {/* LIST */}
          <div className="platfrom-logic-list">

            <div className="platfrom-logic-item">
              <span className="platfrom-check">✓</span>
              <p>
                Automatically assign new sign-ups to sales reps based on
                custom criteria.
              </p>
            </div>

            <div className="platfrom-logic-item">
              <span className="platfrom-check">✓</span>
              <p>
                Alert your team when key accounts show signs of reduced
                engagement.
              </p>
            </div>

            <div className="platfrom-logic-item">
              <span className="platfrom-check">✓</span>
              <p>
                Automatically resolve Jira tickets and update user access
                after offboarding.
              </p>
            </div>

          </div>


          {/* BUTTON */}
          <button className="platfrom-logic-button">
            <span>Browse all playbook templates</span>
            <span className="platfrom-arrow">↗</span>
          </button>

        </div>

      </section>
      <PlatformCTA /> 
      
     

<Footer />
 


    </>
  );
}

export default Platform;