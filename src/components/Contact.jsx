import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);

  const gmailComposeUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=prakashshriyanshu@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "prakashshriyanshu@gmail.com"
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        maxWidth: "1000px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2
        className="gradient-text"
        style={{
          fontSize: "2.8rem",
          marginBottom: "15px",
        }}
      >
        Contact
      </h2>

      <p
        style={{
          color: "#9ca3af",
          marginBottom: "50px",
        }}
      >
        Interested in collaborating, internships, projects, or opportunities?
        Feel free to reach out.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <a
          href={gmailComposeUrl}
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <FaEnvelope />
            Email Me
          </button>
        </a>

        <a
          href="https://linkedin.com/in/shriyanshu-prakash-533280278"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <FaLinkedin />
            LinkedIn
          </button>
        </a>

        <a
          href="https://github.com/shriyanshu-prakash"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <FaGithub />
            GitHub
          </button>
        </a>
      </div>

      <p
        onClick={copyEmail}
        style={{
          marginTop: "25px",
          color: copied ? "#22d3ee" : "#9ca3af",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "all 0.3s ease",
          userSelect: "none",
        }}
      >
        {copied
          ? "✅ Email copied!"
          : "📧 prakashshriyanshu@gmail.com"}
      </p>

      <p
        style={{
          marginTop: "60px",
          color: "#64748b",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Shriyanshu Prakash. Built with React &
        Vite.
      </p>
    </section>
  );
}

export default Contact;