import { useState } from "react";

function Projects() {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      title: "Midas Core Banking Simulation",
      tech: "Java • Spring Boot • Kafka • REST APIs",
      description:
        "Developed a banking backend simulation with transaction processing, embedded Kafka integration, REST APIs, database persistence, and user balance management.",
      link: "https://github.com/shriyanshu-prakash/forage-midas",
    },

    {
      title: "PickMe",
      tech: "React • Node.js • MongoDB • Express",
      description:
        "Built a campus delivery platform featuring order tracking, admin dashboard, secure authentication, and real-time order management.",
      link: "https://pickme-blue.vercel.app/",
      github: "https://github.com/shriyanshu-prakash/PickMe",
    },

    {
      title: "ListenLess",
      tech: "Android Studio • Java • Speech Recognition",
      description:
        "Created an Android application that converts speech into transcripts, allows note management, and improves accessibility for users.",
      link: "https://github.com/shriyanshu-prakash/ListenLess",
    },
  ];

  return (
    <section
      id="projects"
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
        Projects
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          marginBottom: "60px",
        }}
      >
        Projects that showcase my experience in software development,
        AI systems, and data-driven solutions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <div
              onMouseEnter={() => setHovered(project.title)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "25px",
                backdropFilter: "blur(10px)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                height: "100%",
                transform:
                  hovered === project.title
                    ? "translateY(-8px)"
                    : "translateY(0)",
                boxShadow:
                  hovered === project.title
                    ? "0 10px 30px rgba(168,85,247,0.25)"
                    : "0 0 20px rgba(168,85,247,0.08)",
              }}
            >
              <h3
                style={{
                  color: "#22d3ee",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#a855f7",
                  marginBottom: "15px",
                  fontWeight: "600",
                }}
              >
                {project.tech}
              </p>

              <p
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                {project.description}
              </p>

              <p
                style={{
                  color: "#22d3ee",
                  fontWeight: "600",
                }}
              >
                Click to open →
              </p>

              {project.github && (
                <div
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button>GitHub</button>
                  </a>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;