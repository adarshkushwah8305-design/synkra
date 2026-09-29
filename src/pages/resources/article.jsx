import "./article.css";
import Footer from "../../components/Footer/Footer.jsx";
import MoreFromSynkr from "../../components/MoreFromSynkra/moreFromSynkra.jsx";

function Article() {
  return (
    <main className="article-page">

      <section className="article-main">

        {/* LEFT CONTENT */}
        <div className="article-left">

          {/* HEADER */}
          <div className="article-header">

            <div className="article-heading">
              <span className="article-category">
                SCALABILITY
              </span>

              <h1>
                The Architecture of
                <br />
                Information: Shaping Digital
                <br />
                Experiences.
              </h1>
            </div>

            <div className="article-author">
              <img
                src="/blog-author.jpg"
                alt="Marcus Chen"
              />

              <div className="article-author-info">
                <strong>Marcus Chen</strong>
                <span>12 min read · March 28, 2026</span>
              </div>
            </div>

          </div>

          {/* ARTICLE BODY */}
          <article className="article-body">

            <img
              className="article-image"
              src="/article.png"
              alt="Digital infrastructure"
            />

            <p className="article-intro">
              Most teams treat information architecture as a post-launch cleanup task.
              In reality, the way you structure your data defines the ceiling of your
              product's operational efficiency.
            </p>

            <h2>The Cost of Silent Entropy</h2>

            <p>
              When the scale feels low, teams aren't just talking about architecture.
              They are talking about the hidden layer of your company.
            </p>

            <p>
              Every SaaS team starts with a clean stack and a clean Stripe.
              Within six months, the data gets messy.
            </p>

            <p>
              Context shifts. Workflows change. What was once simple becomes difficult
              to understand.
            </p>

            <blockquote className="article-blue-quote">
              "A workflow that feels slightly too manual at Reliability starts
              with the moment you give your data."
            </blockquote>

            <h2>Mapping the Decision Chain</h2>

            <p>
              At Synkra we've analyzed over 14 million runs across 2,400 teams.
              The most successful teams don't have more automation.
            </p>

            <p>
              They have more explicit playbooks. They have mapped their information
              architecture.
            </p>

            <p>
              The best systems make the translation perfectly so information is clear
              when decisions happen.
            </p>

            {/* BIG QUOTE */}
            <div className="article-highlight">
              <div className="article-highlight-box">
                <blockquote>
                  "Data architecture is not about databases, it's about decision
                  architecture. If your tooling can't tell you the right place at
                  the right time."
                </blockquote>

                <cite>
                  — The operations team, 2025
                </cite>
              </div>
            </div>

            <h2>Structuring for Scale</h2>

            <p>
              The transition from a 3-person team to a 50-person product org is where
              most information architecture systems collapse.
            </p>

            <p>
              Visual knowledge is the memory of operations. When your PM can't find
              a playbook and understand exactly why a tool was routed to a specific
              event, you haven't built a system—you've built a website.
            </p>

            {/* POINTS */}
            <div className="article-points">

              <div className="article-point">
                <span>1</span>

                <div>
                  <h3>Inclusive Layout</h3>
                  <p>
                    Clear visual cues guide users, ensuring a seamless and intuitive experience.
                  </p>
                </div>
              </div>

              <div className="article-point">
                <span>2</span>

                <div>
                  <h3>Scannable Navigation</h3>
                  <p>
                    Easy-to-use navigation ensures users can quickly find the features they need.
                  </p>
                </div>
              </div>

            </div>

            {/* TAGS */}
            <div className="article-tags">
              <span>Information Architecture</span>
              <span>Data Ops</span>
              <span>Product Strategy</span>
            </div>

            {/* CTA */}
            <section className="article-cta">

              <div className="article-cta-box">

                <h2>
                  Try Synkra free for 14 days
                </h2>

                <p className="article-cta-subtitle">
                  No setup call. No credit card. First playbook in 15 minutes.
                </p>

                <div className="article-cta-buttons">

                  <button className="article-cta-primary">
                    Create an Account
                  </button>

                  <button className="article-cta-secondary">
                    Talk to our team instead
                    <span>↗</span>
                  </button>

                </div>

                <p className="article-cta-note">
                  *Ship your first live playbook in 10 minutes.
                </p>

              </div>

            </section>

          </article>

        </div>


        {/* RIGHT SIDEBAR */}
        <aside className="article-sidebar">

          {/* TABLE OF CONTENTS */}
          <div className="article-toc">

            <p>IN THIS ARTICLE</p>
            

            <nav>
              <a className="active" href="#intro">
                The Cost of Silent Entropy
              </a>

              <a href="#decision">
                Mapping the Decision Chain
              </a>

              <a href="#scale">
                Structuring for Scale
              </a>
            </nav>

          </div>


          {/* NEWSLETTER */}
          <div className="article-newsletter">

            <span>NEWSLETTER</span>

            <h3>
              One thing.
              <br />
              No noise.
            </h3>

            <p>
              Join 4,000+ operators and product leaders
              reading our weekly strategy and execution notes.
            </p>

            <input
              type="email"
              placeholder="your@email.com"
            />

            <button>
              Subscribe
            </button>

          </div>

        </aside>

      </section>
      <MoreFromSynkr />    

      <Footer />

    </main>
  );
}

export default Article;