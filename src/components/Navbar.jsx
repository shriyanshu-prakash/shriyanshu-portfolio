function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(5, 8, 22, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "18px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          className="gradient-text"
          style={{
            fontSize: "1.3rem",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Shriyanshu
        </a>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;