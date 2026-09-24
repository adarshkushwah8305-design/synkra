import "./resources.css";

import Values from "../../components/values/values.jsx";
import Team from "../../components/Team/Team.jsx";
import ResourcesStats from "../../components/ResourcesStats/ResourcesStats.jsx";
import PlatformCTA from "../../components/PlatformCTA/PlatformCTA.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Resources() {
  return (
    <div className="resources-page">

      {/* ================= HERO ================= */}
      <section className="resources-hero">

        {/* TOP CONTENT */}
        <div className="resources-top">

          {/* LEFT */}
          <div className="resources-heading">

            <div className="resources-badge">
              <span className="resources-badge-icon">✦</span>
              ABOUT SYNKRA
            </div>

            <h1>
              Crafting Structural
              <span>Elegance.</span>
            </h1>

            <div className="resources-blue-line"></div>

          </div>

          {/* RIGHT */}
          <div className="resources-description">
            We built Synkra because we couldn't find the tool we
            actually needed. We believe ops shouldn't be a
            bottleneck—it should be a brain.
          </div>

        </div>

        {/* IMAGE */}
        <div className="resources-image">

          <img
            src="/resources-image.png"
            alt="Synkra Headquarters"
          />

          <div className="resources-image-gradient"></div>

          {/* LOCATION CARD */}
          <div className="resources-location-card">

            <div className="resources-location-label">
              Headquarters
            </div>

            <div className="resources-location">
              San Francisco, CA
            </div>

          </div>

        </div>

      </section>

      {/* ================= OTHER SECTIONS ================= */}

      <ResourcesStats />

      <Values />

      <Team />

      <PlatformCTA />

      <Footer />

    </div>
  );
}

export default Resources;