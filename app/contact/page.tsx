export default function ContactPage() {
  return (
    <div className="article">
      <h1>Contact</h1>
      <p>
        For speaking invitations, collaboration, or academic inquiries, please
        contact me by email.
      </p>

      <div className="card" style={{ marginTop: 14 }}>
        <div className="small">Email</div>
        <div style={{ fontSize: 16, marginTop: 6 }}>
          <a href="mailto:contact@joaquinvizcarra.com">contact@joaquinvizcarra.com</a>
        </div>
        <div className="small" style={{ marginTop: 14 }}>
          Social
        </div>
        <div style={{ marginTop: 6, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="https://x.com/VizcarraJA" target="_blank" rel="noreferrer">
            X (Twitter)
          </a>
          <a
            href="https://www.linkedin.com/in/joaquin-vizcarra/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
