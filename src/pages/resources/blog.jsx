import "./blog.css";
import PlatformCTA from "../../components/PlatformCTA/PlatformCTA.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Blog() {
  const categories = [
    "All",
    "Engineering",
    "Product Design",
    "Scalability",
    "Culture",
    "Ops Strategy",
    "User Experience",
    "Quality Assurance",
    "Marketing",
    "Customer Support",
    "Data Analysis",
  ];

  return (
    <main className="blog-page">

      {/* ================= HERO HEADER ================= */}
      <section className="blog-header">

        <div className="blog-heading-left">

          <div className="blog-badge">
            <span>▣</span>
            FROM THE SYNKRA BLOG
          </div>

          <h1>The Synkra Blog</h1>

          <div className="blog-blue-line"></div>

        </div>

        <div className="blog-description">
          Ops strategy, product thinking, and honest stories
          <br />
          about how SaaS teams actually run.
        </div>

      </section>


      {/* ================= CATEGORY FILTER ================= */}
      <div className="blog-categories">

        {categories.map((category, index) => (
          <button
            key={category}
            className={`blog-category ${
              index === 0 ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}

      </div>


      {/* ================= FEATURED STORY ================= */}
      <section className="blog-featured">

        {/* LEFT IMAGE */}
        <div className="blog-featured-image">
          <img
            src="/blog-building.png"
            alt="Digital infrastructure"
          />
        </div>


        {/* RIGHT CONTENT */}
        <div className="blog-featured-content">

          <div className="blog-featured-category">
            SCALABILITY
          </div>

          <h2>
            The Future of Digital
            <br />
            Infrastructure is
            <br />
            Intentional
          </h2>

          <p>
            As we move beyond reactive DevOps, the next
            era of infrastructure belongs to the architects
            who build for intent, not just availability.
          </p>


          {/* AUTHOR */}
          <div className="blog-author">

            <img
              src="/blog-author.jpg"
              alt="Marcus Chen"
            />

            <div className="blog-author-info">

              <strong>Marcus Chen</strong>

              <span>
                12 min read • March 28, 2026
              </span>

            </div>

          </div>

        </div>

      </section>
      {/* =====================================================
    MAIN EDITORIAL GRID
===================================================== */}

<section className="blog-editorial-grid">


  


  {/* ================= ARTICLE 2 ================= */}

  <article className="editorial-card">

    <div className="editorial-image">
      <img
        src="/blog-building.png"
        alt="Product Design"
      />
    </div>

    <div className="editorial-category">
      PRODUCT DESIGN
    </div>

    <h3>
      Designing Products
      People Actually Love
    </h3>

    <p>
      Product design is about more than visual polish.
      The best experiences remove friction and make
      complex workflows feel simple and natural.
    </p>

    <div className="editorial-author">

      <div className="author-avatar author-gray">
        MC
      </div>

      <div className="author-details">
        <strong>Marcus Chen</strong>

        <span>
          7 min read · March 18, 2026
        </span>
      </div>

    </div>

  </article>


  {/* ================= ARTICLE 3 ================= */}

  <article className="editorial-card">

    <div className="editorial-image">
      <img
        src="/scalability.png"
        alt="Scalability"
      />
    </div>

    <div className="editorial-category">
      SCALABILITY
    </div>

    <h3>
      Infrastructure Should
      Scale With Your Ambition
    </h3>

    <p>
      Scaling a SaaS company requires more than
      adding servers. Teams need systems and
      operational thinking that can grow alongside
      the business.
    </p>

    <div className="editorial-author">

      <div className="author-avatar author-teal">
        PT
      </div>

      <div className="author-details">
        <strong>Pablo Thompson</strong>

        <span>
          10 min read · March 12, 2026
        </span>
      </div>

    </div>

  </article>


  {/* ================= ARTICLE 4 ================= */}

  <article className="editorial-card">

    <div className="editorial-image">
      <img
        src="/editorial-card.png"
        alt="Operations Strategy"
      />
    </div>

    <div className="editorial-category">
      OPS STRATEGY
    </div>

    <h3>
      The Operating Systems
      Behind Great Teams
    </h3>

    <p>
      Strong teams build systems that make everyday
      operations predictable, measurable and easier
      to improve over time.
    </p>

    <div className="editorial-author">

      <div className="author-avatar author-teal">
        PT
      </div>

      <div className="author-details">
        <strong>Pablo Thompson</strong>

        <span>
          9 min read · March 15, 2026
        </span>
      </div>

    </div>

  </article>


  {/* =================================================
      LARGE ARTICLE
  ================================================= */}

  <article className="editorial-large-card">

    <div className="editorial-large-image">

      <img
        src="/editorial-large.png  "
        alt="Digital Infrastructure"
      />

    </div>


    <div className="editorial-large-content">

      <div>

        <div className="editorial-category">
          CLUTURE
        </div>

        <h3>
          Infrastructure Should
          Scale With Your Ambition
        </h3>

      </div>


      <p>
        Scaling a SaaS company requires more than
        adding servers. Teams need systems, processes
        and operational thinking that can grow alongside
        the business without creating unnecessary
        complexity.
      </p>


      <div className="editorial-author">

        <div className="author-avatar author-teal">
          PT
        </div>

        <div className="author-details">

          <strong>
            Pablo Thompson
          </strong>

          <span>
            10 min read · March 12, 2026
          </span>

        </div>

      </div>

    </div>

  </article>


  {/* =================================================
      NEWSLETTER
  ================================================= */}

  <aside className="blog-newsletter">

    <div className="newsletter-glow"></div>

    <div className="newsletter-content">

      <div className="newsletter-category">
        STAY IN THE LOOP
      </div>

      <h3>
        Get the latest
        <br />
        from Synkra
      </h3>

      <p>
        Insights, stories and practical ideas
        for modern SaaS teams.
      </p>


      <div className="newsletter-form">


        <input
          type="email"
          placeholder="Your email address"
        />

        <button>
          Subscribe
        </button>

      </div>

    </div>

  </aside>


  {/* =================================================
      PAGINATION
  ================================================= */}

  <div className="blog-pagination">

    <div className="pagination-info">
      Showing 1–4 of 12
    </div>


    <div className="pagination-controls">

      <button>
        ←
      </button>

      <button className="active">
        1
      </button>

      <span>
        of
      </span>

      <button>
        3
      </button>

      <button>
        →
      </button>

    </div>

  </div>


</section>
<PlatformCTA />
<Footer />  
      

    </main>
  );
}

export default Blog;