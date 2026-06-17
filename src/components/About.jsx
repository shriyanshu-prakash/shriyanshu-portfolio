function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 20px",
        maxWidth: "1100px",
        margin: "auto",
      }}
    >
      {/* Heading */}
      <h2
        className="gradient-text"
        style={{
          fontSize: "2.8rem",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        About Me
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          marginBottom: "60px",
          fontSize: "1rem",
        }}
      >
        A brief introduction about my academic journey, interests, and
        experience.
      </p>

      {/* Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* Left Card */}
        <div
          style={{
            padding: "35px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 25px rgba(168,85,247,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p style={{ marginBottom: "20px", fontSize: "1.05rem" }}>
            🎓 B.Tech CSE (AIML)
          </p>

          <p style={{ marginBottom: "20px", fontSize: "1.05rem" }}>
            📍 SRM Institute of Science & Technology
          </p>

          <p style={{ marginBottom: "20px", fontSize: "1.05rem" }}>
            📊 Data Analytics Intern
          </p>

          <p style={{ fontSize: "1.05rem" }}>
            💻 AI • Data • Full Stack
          </p>
        </div>

        {/* Right Side */}
        <div>
          <p
            style={{
              lineHeight: "2",
              fontSize: "1.1rem",
              color: "#d1d5db",
            }}
          >
            I'm{" "}
            <span style={{ color: "#22d3ee" }}>
              Shriyanshu Prakash
            </span>
            , a Computer Science student specializing in{" "}
            <span style={{ color: "#22d3ee" }}>
              Artificial Intelligence and Machine Learning
            </span>{" "}
            at SRM Institute of Science and Technology.
            <br />
            <br />
            I enjoy building AI-powered applications, web platforms, and
            data-driven solutions that solve real-world problems. My interests
            include{" "}
            <span style={{ color: "#22d3ee" }}>
              Generative AI, Data Analytics, Full Stack Development
            </span>{" "}
            and intelligent automation.
            <br />
            <br />
            Currently, I am working as a{" "}
            <span style={{ color: "#22d3ee" }}>
              Data Analytics Intern at Bandhan Life Insurance
            </span>
            , contributing to a GenAI-powered medical underwriting risk
            assessment system involving OCR, multimodal AI, and document
            intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;