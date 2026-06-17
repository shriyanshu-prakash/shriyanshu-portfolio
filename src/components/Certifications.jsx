function Certifications() {
  const certifications = [
    {
      title: "Code in Place",
      issuer: "Stanford University",
      year: "2025",
      link: "/certificates/code-in-place.pdf",
    },
    {
      title: "Software Engineering Virtual Experience",
      issuer: "JPMorgan Chase & Co. (Forage)",
      year: "2025",
      link: "/certificates/jpmorgan-forage.pdf",
    },
    {
      title: "AI for Beginners",
      issuer: "Microsoft & Skill India",
      year: "2025",
      link: "/certificates/microsoft-ai.pdf",
    },
    {
      title: "Claude Code 101",
      issuer: "Anthropic",
      year: "2025",
      link: "/certificates/claude-code-101.pdf",
    },
    {
      title: "AI Fluency for Students",
      issuer: "Anthropic",
      year: "2025",
      link: "/certificates/ai-fluency.pdf",
    },
  ];

  const achievements = [
    {
      title: "TechFormers 1.0 Hackathon",
      issuer: "Hackerrank Campus Crew",
      year: "2025",
      link: "/achievements/techformers.png",
    },
    {
      title: "NMS Code For Good 2024",
      issuer: "Hackathon Participant",
      year: "2024",
      link: "/achievements/nms-code-for-good.png",
    },
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: "100px 20px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h2
        className="gradient-text"
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          marginBottom: "15px",
        }}
      >
        Certifications & Achievements
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          marginBottom: "60px",
        }}
      >
        Professional certifications, virtual experiences, hackathons, and
        achievements.
      </p>

      {/* Certifications */}

      <h3
        style={{
          color: "#22d3ee",
          marginBottom: "25px",
        }}
      >
        Certifications
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          marginBottom: "70px",
        }}
      >
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "25px",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(34,211,238,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h4
                style={{
                  color: "#22d3ee",
                  marginBottom: "10px",
                }}
              >
                {cert.title}
              </h4>

              <p
                style={{
                  color: "#d1d5db",
                  marginBottom: "12px",
                }}
              >
                {cert.issuer}
              </p>

              <span
                style={{
                  color: "#a855f7",
                  fontWeight: "600",
                }}
              >
                {cert.year}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Achievements */}

      <h3
        style={{
          color: "#a855f7",
          marginBottom: "25px",
        }}
      >
        Achievements & Hackathons
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {achievements.map((achievement) => (
          <a
            key={achievement.title}
            href={achievement.link}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "25px",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(168,85,247,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h4
                style={{
                  color: "#a855f7",
                  marginBottom: "10px",
                }}
              >
                {achievement.title}
              </h4>

              <p
                style={{
                  color: "#d1d5db",
                  marginBottom: "12px",
                }}
              >
                {achievement.issuer}
              </p>

              <span
                style={{
                  color: "#22d3ee",
                  fontWeight: "600",
                }}
              >
                {achievement.year}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;