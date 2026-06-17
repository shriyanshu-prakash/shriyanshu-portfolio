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
      }}
    >
      <div>

        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            border: "1px solid #00ffff",
            color: "#00ffff",
            marginBottom: "25px",
            fontSize: "0.9rem",
          }}
        >
          Available for Internships
        </div>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "10px",
          }}
        >
          Hi, I'm
        </p>

        <h1
          style={{
            fontSize: "4.5rem",
            marginBottom: "15px",
          }}
        >
          Shriyanshu Prakash
        </h1>

        <h2
          style={{
            color: "#00ffff",
            marginBottom: "20px",
          }}
        >
          AI Engineer • Data Analyst • Full Stack Developer
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            opacity: 0.8,
            lineHeight: "1.7",
            marginBottom: "30px",
          }}
        >
          Building AI-powered solutions, web applications,
          and data-driven systems.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
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

          <button>
            Resume
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;