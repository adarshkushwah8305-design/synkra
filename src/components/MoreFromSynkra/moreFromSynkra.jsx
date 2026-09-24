import "./moreFromSynkra.css";

function MoreFromSynkra() {
  const articles = [
    {
      image: "/blog-building.png",
      category: "OPS STRATEGY",
      title: "The 5 workflows every SaaS team should automate first.",
      description:
        "The real gains aren't in the flashy overhauls, but in targeting those repetitive tasks that drain your team's time. Here's a proven automation sequence to get started.",
      name: "Elena Marsh",
      date: "March 28, 2026",
      avatar: "EM",
    },

    {
      image: "/blog-building.png",
      category: "PRODUCT UPDATES",
      title: "Synkra AI v2: Event-based triggers & 3x faster runs.",
      description:
        "Synkra AI v2 is here, and it's a game-changer. We've completely overhauled our trigger engine based on your feedback.",
      name: "Dev Team",
      date: "March 28, 2026",
      avatar: "DT",
    },

    {
      image: "/blog-building.png",
      category: "SCALABILITY",
      title: "Zapier vs Make vs Synkra: The honest breakdown.",
      description:
        "We surveyed 40 teams who migrated from other platforms to understand their reasons for switching to Synkra.",
      name: "Sam Okafor",
      date: "April 5, 2026",
      avatar: "SO",
    },

    {
      image: "/blog-building.png",
      category: "ENGINEERING",
      title: "Building reliable automation systems.",
      description:
        "How modern SaaS teams create reliable workflows without adding unnecessary complexity.",
      name: "Synkra Team",
      date: "April 10, 2026",
      avatar: "ST",
    },

    {
      image: "/blog-building.png",
      category: "PRODUCT",
      title: "How teams build better operational workflows.",
      description:
        "A practical look at creating workflows that stay simple, scalable and easy to manage.",
      name: "Alex Morgan",
      date: "April 14, 2026",
      avatar: "AM",
    },
  ];

  return (
    <section className="more-synkra">

      {/* HEADER */}
      <div className="more-synkra-header">

        <div>
          <h2>More from Synkra</h2>

          <p>
            Experts in automation, dedicated to helping your business thrive.
          </p>
        </div>

        <div className="more-synkra-arrows">
          <button type="button">←</button>
          <button type="button">→</button>
        </div>

      </div>


      {/* HORIZONTAL SCROLL AREA */}
      <div className="more-synkra-track">

        {articles.map((article, index) => (

          <article
            className="more-synkra-card"
            key={index}
          >

            <img
              src={article.image}
              alt={article.title}
              className="more-synkra-image"
            />

            <span className="more-synkra-category">
              {article.category}
            </span>

            <h3>
              {article.title}
            </h3>

            <p className="more-synkra-description">
              {article.description}
            </p>

            <div className="more-synkra-author">

              <div className="more-synkra-avatar">
                {article.avatar}
              </div>

              <div className="more-synkra-author-info">

                <strong>
                  {article.name}
                </strong>

                <span>
                  12 min read · {article.date}
                </span>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default MoreFromSynkra;