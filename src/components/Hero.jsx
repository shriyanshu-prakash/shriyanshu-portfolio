import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            border: "1px solid #22d3ee",
            color: "#22d3ee",
            marginBottom: "25px",
            fontSize: "0.9rem",
          }}
        >
          Available for Internships
        </div>

        {/* Intro */}
        <p
          style={{
            color: "#9ca3af",
            marginBottom: "10px",
          }}
        >
          Hi, I'm
        </p>

        {/* Name */}
        <h1
          className="gradient-text"
          style={{
            fontSize: "4.5rem",
            marginBottom: "15px",
            fontWeight: "800",
          }}
        >
          Shriyanshu Prakash
        </h1>

        {/* Role */}
        <h2
          style={{
            color: "#22d3ee",
            marginBottom: "15px",
            fontSize: "1.8rem",
          }}
        >
          AI Engineer • Data Analyst • Full Stack Developer
        </h2>

        {/* Internship */}
        <p
          style={{
            color: "#9ca3af",
            marginBottom: "25px",
          }}
        >
          Data Analytics Intern @ Bandhan Life Insurance
        </p>

        {/* Description */}
        <p
          style={{
            maxWidth: "750px",
            margin: "auto",
            opacity: 0.85,
            lineHeight: "1.8",
            marginBottom: "30px",
            fontSize: "1.05rem",
          }}
        >
          Building AI-powered solutions, web applications, and data-driven
          systems. Passionate about Artificial Intelligence, Data Analytics,
          and solving real-world problems through technology.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            marginBottom: "35px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.8rem" }}>9.3</h3>
            <p style={{ color: "#9ca3af" }}>CGPA</p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.8rem" }}>5+</h3>
            <p style={{ color: "#9ca3af" }}>Projects</p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.8rem" }}>1</h3>
            <p style={{ color: "#9ca3af" }}>Internship</p>
          </div>
        </div>

        {/* External Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <a
            href="https://github.com/shriyanshu-prakash"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <FaGithub /> GitHub
            </button>
          </a>

          <a
            href="https://linkedin.com/in/shriyanshu-prakash-533280278"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <FaLinkedin /> LinkedIn
            </button>
          </a>

          <button>Resume</button>
        </div>

        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a href="#about">
            <button>About</button>
          </a>

          <a href="#skills">
            <button>Skills</button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <p
          style={{
            marginTop: "50px",
            color: "#9ca3af",
            fontSize: "0.9rem",
          }}
        >
          ↓ Scroll to Explore
        </p>
      </div>
    </section>
  );
}

export default Hero;