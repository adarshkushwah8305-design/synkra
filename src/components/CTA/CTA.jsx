import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="newsletter-card">

        {/* Decorative circles */}
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>

        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-6"></div>

        {/* Orange glow */}
        <div className="orange-glow"></div>

        {/* Teal glow */}
        <div className="teal-glow"></div>


        {/* Content */}
        <div className="newsletter-content">

          <p className="newsletter-label">
            NEWSLETTER
          </p>

          <h3>
            Ops thinking, once a week. No noise.
          </h3>

          <p className="newsletter-description">
            Join 4,000+ engineers and product leaders receiving our weekly
            teardown of the best SaaS ops practices.
          </p>


          {/* Form */}
          <form className="newsletter-form">

            <input
              type="email"
              placeholder="work@email.com"
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default CTA;