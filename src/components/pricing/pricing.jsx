import { useState } from "react";
import "./pricing.css";
import FAQ from "../FAQ/FAQ.jsx";
import CTA from "../CTA/CTA.jsx";
import Footer from "../Footer/Footer.jsx";

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      {/* PRICING BOX */}
      <section className="pricing">

        {/* HEADER / HERO */}
        <div className="pricing-header">

          {/* PRICING BUTTON */}
          <div className="pricing-label">
            <span className="pricing-label-dot"></span>
            PRICING
          </div>

          <h1>
            <span>Simple</span> pricing.
            <br />
            Serious automation.
          </h1>

          <p>
            Every plan starts with a 14-day Pro trial free, no card.
            Start running playbooks today and upgrade when Synkra becomes
            essential to how you ship.
          </p>
        </div>

        {/* BILLING TOGGLE */}
        <div className="pricing-toggle">

          <span className={!isAnnual ? "active-billing" : ""}>
            Monthly
          </span>

          <button
            className={`toggle ${isAnnual ? "annual" : ""}`}
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle billing period"
          >
            <span></span>
          </button>

          <span className={isAnnual ? "active-billing" : ""}>
            Annual
          </span>

          <small>SAVE 20%</small>
        </div>

        {/* PRICING CARDS */}
        <div className="pricing-cards">

          {/* STARTER */}
          <div className="pricing-card">

            <div className="plan-name">
              STARTER
            </div>

            <h2>
              $0 <small>/ forever</small>
            </h2>

            <p>
              For teams and individuals still validating their first playbooks.
            </p>

            <ul>
              <li>✓ 3 active playbooks</li>
              <li>✓ 10,000 runs/month</li>
              <li>✓ 2 integrations</li>
              <li>✓ 7-day history</li>
            </ul>

            <button className="card-button">
              Try it free →
            </button>

          </div>

          {/* PRO */}
          <div className="pricing-card popular">

            <div className="popular-badge">
              POPULAR
            </div>

            <div className="plan-name">
              PRO
            </div>

            <h2>
              ${isAnnual ? "39" : "49"}
              <small> / month</small>
            </h2>

            <p>
              For teams shipping reliability and scaling their automation stack.
            </p>

            <ul>
              <li>✓ Unlimited playbooks</li>
              <li>✓ 50,000 runs/month</li>
              <li>✓ 10+ integrations</li>
              <li>✓ 30-day history</li>
              <li>✓ Email support</li>
            </ul>

            <button className="card-button blue">
              Try it free →
            </button>

          </div>

          {/* ENTERPRISE */}
          <div className="pricing-card">

            <div className="plan-name">
              ENTERPRISE
            </div>

            <h2 className="custom-price">
              Custom
            </h2>

            <p>
              For teams that need enterprise-grade reliability, scale,
              and dedicated support.
            </p>

            <ul>
              <li>✓ Unlimited playbooks</li>
              <li>✓ Custom integrations</li>
              <li>✓ SOC 2 Type II reporting</li>
              <li>✓ Dedicated account manager</li>
            </ul>

            <button className="card-button">
              Talk to us →
            </button>

          </div>

        </div>

      </section>

      {/* FAQ PRICING BOX KE NICHE */}
      <FAQ />
      <CTA />   
    <Footer />  
    </>
  );
}

export default Pricing;