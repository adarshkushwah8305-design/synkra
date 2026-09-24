import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <section className="announcement-bar">
      <p className="announcement-label">
        Synkra is now available for early access. Start building reliable
        workflows today.
      </p>

      <div className="announcement-buttons">
        <button className="announcement-learn">
          Learn More
        </button>

        <button className="announcement-start">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default AnnouncementBar;