import "./Testimonials.css";

function Testimonials() {
  const topTestimonials = [
    {
      text: "Our transition to a centralized data management tool has streamlined reporting processes, reducing the time spent on manual entries by 75%. Now, we can focus on strategic analysis instead of data gathering.",
      name: "Lisa Tran",
      role: "DATA ANALYST, ACME CORP",
      avatar: "LT",
    },
    {
      text: "Our PMs own the workflows. Engineering reviews the critical ones, but we're not involved in every change. That separation of concerns is huge for a team our size — we stopped being a bottleneck in our own ops.",
      name: "Jamal Carter",
      role: "PRODUCT MANAGER, TECHNOVATE",
      avatar: "JC",
    },
    {
      text: "By adopting a microservices architecture, we have improved our deployment speed and reduced downtime. This shift has empowered our teams to release features bi-weekly instead of quarterly.",
      name: "Sofia Chen",
      role: "SOFTWARE ARCHITECT, NEXTGEN SOLUTIONS",
      avatar: "SC",
    },
  ];

  const bottomTestimonials = [
    {
      text: "Switched from Make after hitting API limits constantly. Synkra's reliability is in a different class — 99.97% execution uptime is real. We've had zero critical failures in 5 months. The run logs make debugging trivial.",
      name: "Alex Kim",
      role: "HR MANAGER, INNOVATE LLC",
      avatar: "AK",
    },
    {
      text: "The integration of AI-driven analytics has transformed our customer feedback loop. We're now able to respond in real-time, resulting in a 40% increase in customer satisfaction scores over the last quarter.",
      name: "David Wong",
      role: "CTO, CLOUDTECH INC",
      avatar: "DW",
    },
    {
      text: "Utilizing design sprints has accelerated our product development cycle. By validating ideas quickly, we've managed to cut project timelines in half while increasing collaboration across departments.",
      name: "Emma Johnson",
      role: "UX DESIGNER, CREATIVE LABS",
      avatar: "EJ",
    },
  ];

  const TestimonialCard = ({ item }) => (
    <div className="testimonial-card">
      <p className="testimonial-text">{item.text}</p>

      <div className="testimonial-author">
        <div className="avatar">{item.avatar}</div>

        <div className="author-info">
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="testimonials-section">

      {/* TOP HEADER */}
      <div className="testimonials-header">

        <div className="testimonials-title">
          <h2>
            Built for the world's most
            <br />
            demanding engineering teams.
          </h2>

          <div className="blue-line"></div>
        </div>

        <div className="testimonials-description">

          <div className="love-badge">
            ♡ &nbsp; WALL OF LOVE
          </div>

          <p>
            Most tools fire automations and hope for the best.{" "}
            <b>Synkra</b> treats every workflow as a first class system,
            it listens, decides, acts, and records exactly what happened.
            So your team can trust the result.
          </p>

        </div>

      </div>


      {/* TOP 3 CARDS */}
      <div className="testimonial-row">
        {topTestimonials.map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </div>


      {/* BIG QUOTE */}
      <div className="big-quote-section">

        <div className="big-quote">
          Synkra cut 60% of our manual revenue ops in the first month.
          The best part isn't the time saved — it's knowing exactly why
          something failed when it does. That observability alone is worth
          the subscription
        </div>

        <div className="quote-author">

          <div className="quote-avatar">
            PS
          </div>

          <strong>Pamela Schmidt</strong>

          <span>
            CO-FOUNDER, STACKLY (B2B SAAS) ·
            <br />
            12-PERSON TEAM
          </span>

          <div className="quote-button">
            "
          </div>

        </div>

      </div>


      {/* BOTTOM 3 CARDS */}
      <div className="testimonial-row bottom-row">
        {bottomTestimonials.map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </div>

    </section>
  );
}

export default Testimonials;