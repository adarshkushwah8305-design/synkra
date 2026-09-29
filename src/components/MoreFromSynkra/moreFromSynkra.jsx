import "./moreFromSynkra.css";

function MoreFromSynkra() {
  const articles = [
    {
      image: "/editorial.png",
      category: "OPS STRATEGY",
      title: "The 5 workflows every SaaS team should automate first.",
      description:
        "The real gains aren't in the flashy overhauls, but in targeting those repetitive tasks that drain your team's time. Here's a proven automation sequence to get started.",
      name: "Elena Marsh",
      date: "12 min read • March 28, 2026",
      avatar: "EM",
    },

    {
      image: "/platfrom-logic-image.png",
      category: "PRODUCT UPDATES",
      title: "Synkra AI v2: Event-based triggers & 3x faster runs.",
      description:
        "Synkra AI v2 is here, and it's a game-changer. We've completely overhauled our trigger engine based on your feedback.",
      name: "Dev Team",
      date: "12 min read • March 28, 2026",
      avatar: "DT",
    },

    {
      image: "/editorial-card.png",
      category: "SCALABILITY",
      title: "Zapier vs Make vs Synkra: The honest breakdown.",
      description:
        "We surveyed teams who migrated from other platforms to understand their reasons for switching to Synkra.",
      name: "Sam Okafor",
      date: "10 min read • April 5, 2026",
      avatar: "SO",
    },

    {
      image: "/editorial-card.png",
      category: "CULTURE",
      title: "Why PMs should own the ops, not just the roadmap.",
      description:
        "Product Managers embracing operational ownership can create stronger collaboration between product and engineering teams.",
      name: "Sam Okafor",
      date: "10 min read • April 5, 2026",
      avatar: "SO",
    },

    {
      image: "/editorial-large.png",
      category: "ENGINEERING",
      title: "Building systems that scale with your team.",
      description:
        "Modern SaaS teams need operational systems that grow alongside their products without adding unnecessary complexity.",
      name: "Dev Team",
      date: "8 min read • April 10, 2026",
      avatar: "DT",
    },
  ];

  return (
    <section className="more-from-synkra">

      {/* HEADER */}
      <div className="more-from-header">

        <div>
          <h2>More from Synkra</h2>

          <p>
            More ideas, insights and stories from the Synkra team.
          </p>
        </div>

        {/* ARROWS */}
        <div className="more-from-arrows">
          <button
            type="button"
            onClick={() => {
              document
                .querySelector(".more-from-cards")
                ?.scrollBy({
                  left: -392,
                  behavior: "smooth",
                });
            }}
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => {
              document
                .querySelector(".more-from-cards")
                ?.scrollBy({
                  left: 392,
                  behavior: "smooth",
                });
            }}
          >
            →
          </button>
        </div>

      </div>


      {/* CARDS */}
      <div className="more-from-cards">

        {articles.map((article, index) => (
          <article
            className="more-from-card"
            key={index}
          >

            {/* IMAGE */}
            <div className="more-from-image">
              <img
                src={article.image}
                alt={article.title}
              />
            </div>


            {/* CATEGORY */}
            <div className="more-from-category">
              {article.category}
            </div>


            {/* TITLE */}
            <h3>
              {article.title}
            </h3>


            {/* DESCRIPTION */}
            <p className="more-from-description">
              {article.description}
            </p>


            {/* AUTHOR */}
            <div className="more-from-author">

              <div className="more-from-avatar">
                {article.avatar}
              </div>

              <div className="more-from-author-info">

                <strong>
                  {article.name}
                </strong>

                <span>
                  {article.date}
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