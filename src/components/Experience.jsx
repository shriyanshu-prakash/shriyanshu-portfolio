function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 20px",
        maxWidth: "1000px",
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
        Experience
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          marginBottom: "60px",
        }}
      >
        Professional experience, internships, and industry exposure.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {/* Bandhan Life */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "35px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 20px rgba(34,211,238,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <h3
              style={{
                color: "#22d3ee",
                fontSize: "1.4rem",
              }}
            >
              Data Analytics Intern
            </h3>

            <span
              style={{
                color: "#9ca3af",
              }}
            >
              June 2026 – Present
            </span>
          </div>

          <h4
            style={{
              marginBottom: "15px",
            }}
          >
            Bandhan Life Insurance
          </h4>

          <span
            style={{
              background: "rgba(34,211,238,0.15)",
              color: "#22d3ee",
              border: "1px solid rgba(34,211,238,0.4)",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: "600",
              display: "inline-block",
              marginBottom: "25px",
            }}
          >
            Internship
          </span>

          <ul
            style={{
              color: "#d1d5db",
              lineHeight: "2",
              paddingLeft: "20px",
            }}
          >
            <li>
              Working on a GenAI-powered Medical Underwriting Risk Assessment
              System for insurance workflows.
            </li>

            <li>
              Researching OCR solutions for extracting information from scanned
              medical reports and documents.
            </li>

            <li>
              Evaluating multimodal AI models for document understanding and
              medical information analysis.
            </li>

            <li>
              Exploring structured information extraction techniques for
              underwriting decision support.
            </li>

            <li>
              Contributing to AI-driven document intelligence and risk
              assessment workflows.
            </li>
          </ul>
        </div>

        {/* JPMorgan */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "35px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 20px rgba(168,85,247,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <h3
              style={{
                color: "#a855f7",
                fontSize: "1.4rem",
              }}
            >
              Software Engineering Virtual Experience
            </h3>

            <span
              style={{
                color: "#9ca3af",
              }}
            >
              May 2026
            </span>
          </div>

          <h4
            style={{
              marginBottom: "15px",
            }}
          >
            JPMorgan Chase & Co. (Forage)
          </h4>

          <span
            style={{
              background: "rgba(168,85,247,0.15)",
              color: "#a855f7",
              border: "1px solid rgba(168,85,247,0.4)",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: "600",
              display: "inline-block",
              marginBottom: "25px",
            }}
          >
            Virtual Experience
          </span>

          <ul
            style={{
              color: "#d1d5db",
              lineHeight: "2",
              paddingLeft: "20px",
            }}
          >
            <li>
              Completed JPMorgan Chase Software Engineering Virtual Experience
              Program through Forage.
            </li>

            <li>
              Worked with Spring Boot, REST APIs, SQL databases, and Apache
              Kafka.
            </li>

            <li>
              Implemented backend functionality and event-driven workflows for
              a simulated banking environment.
            </li>

            <li>
              Applied software engineering concepts including testing,
              persistence, and API development.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;