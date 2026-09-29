import "./Team.css";

function Team() {
  const members = [
    {
      name: "pablo Thompson",
      role: "Founder & Chief visionary ",
      image: "pablo.jpg ",
    },
    {
      name: "Elena Thorne",
      role: "CEO & Co-Founder  ",
      image: "Elena.jpg",
    },
    {
      name: "Marcus Lee",
      role: "CTO & Co-founder",
      image: "Marcus.jpg  ",
    },
    {
      name: "Sofia Patel",
      role: "Head of Product",
      image: "Sofia.jpg ",
    },
    {
      name: "James Kim",
      role: "Product Lead",
      image: "James.jpg ",
    },
    {
      name: "Oliver Chen",
      role: "QA Specialist",
      image: "Oliver.jpg ",
    },
    {
      name: "Aisha Gomez",
      role: "Staff Engineer",
      image: " Aisha.jpg   ",
    },
    {
      name: "Natalie Brown",
      role: "Staff Engineerg",
      image: "Natalie.jpg ",
    },
  ];

  return (
    <section className="team-section">

      <div className="team-heading">
        <h2>The Digital Craftmen of Synkra</h2>
        <p>Former builders from Stripe, Linear, and HubSpot.</p>
      </div>

      <div className="team-grid">
        {members.map((member) => (
          <div className="team-card" key={member.name}>

            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>

            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Team;