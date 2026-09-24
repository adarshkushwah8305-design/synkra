import "./Team.css";

function Team() {
  const members = [
    {
      name: "Alex Morgan",
      role: "Co-Founder & CEO",
      image: "https://i.pravatar.cc/600?img=12",
    },
    {
      name: "Sarah Chen",
      role: "Head of Product",
      image: "https://i.pravatar.cc/600?img=47",
    },
    {
      name: "Daniel Kim",
      role: "Lead Engineer",
      image: "https://i.pravatar.cc/600?img=11",
    },
    {
      name: "Emily Stone",
      role: "Product Designer",
      image: "https://i.pravatar.cc/600?img=44",
    },
    {
      name: "Michael Brown",
      role: "Backend Engineer",
      image: "https://i.pravatar.cc/600?img=33",
    },
    {
      name: "Olivia Smith",
      role: "Operations Lead",
      image: "https://i.pravatar.cc/600?img=32",
    },
    {
      name: "James Wilson",
      role: "Frontend Engineer",
      image: "https://i.pravatar.cc/600?img=68",
    },
    {
      name: "Sophia Davis",
      role: "Growth & Marketing",
      image: "https://i.pravatar.cc/600?img=49",
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