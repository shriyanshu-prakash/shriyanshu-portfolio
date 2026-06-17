function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "React", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "AI & Data",
      skills: ["Generative AI", "OCR", "Data Analytics"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Professional",
      skills: ["Communication", "Teamwork", "Project Management"],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        maxWidth: "1200px",
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
        Skills
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          marginBottom: "60px",
        }}
      >
        Technologies, tools, and domains I use to build solutions.
      </p>

      {/* Skills Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {skillCategories.map((category) => (
          <div
            key={category.title}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "25px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 20px rgba(34,211,238,0.08)",
              transition: "all 0.3s ease",
            }}
          >
            <h3
              style={{
                color: "#22d3ee",
                marginBottom: "18px",
                fontSize: "1.2rem",
              }}
            >
              {category.title}
            </h3>

            {category.skills.map((skill) => (
              <p
                key={skill}
                style={{
                  marginBottom: "10px",
                  color: "#d1d5db",
                }}
              >
                • {skill}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;