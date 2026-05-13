import { useState } from "react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data";
import { colors, fonts, sharedStyles } from "../styles/theme";

export default function Projects() {
  const [active, setActive] = useState(0);
  const proj = PROJECTS[active];

  return (
    <section id="proyectos" style={{ padding: "7rem 3rem" }}>
      <FadeIn>
        <div style={sharedStyles.sectionTag}>// Proyectos Destacados</div>
        <h2 style={sharedStyles.sectionTitle}>
          Resultados que
          <br />
          <em style={sharedStyles.italicMuted}>hablan solos</em>
        </h2>
      </FadeIn>

      {/* Tab navigation */}
      <div
        style={{
          display: "flex",
          gap: 0,
          marginTop: "3rem",
          borderBottom: `1px solid ${colors.borderFaint}`,
          overflowX: "auto",
        }}
      >
        {PROJECTS.map((p, i) => (
          <button
            key={p.title}
            onClick={() => setActive(i)}
            style={{
              fontFamily: fonts.mono,
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              padding: "1rem 1.8rem",
              background: "transparent",
              border: "none",
              borderBottom: i === active ? `2px solid ${colors.accent}` : "2px solid transparent",
              color: i === active ? colors.accent : "rgba(240,237,230,0.4)",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {p.category} {p.year}
          </button>
        ))}
      </div>

      {/* Project display */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          marginTop: "3rem",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
          <img
            src={proj.img}
            alt={proj.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)" }}
          />
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: colors.bg,
              padding: "0.4rem 0.8rem",
              fontFamily: fonts.mono,
              fontSize: "0.6rem",
              color: proj.color,
              letterSpacing: "0.15em",
            }}
          >
            {proj.category}
          </div>
        </div>

        {/* Info */}
        <div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: colors.accent,
              marginBottom: "1rem",
            }}
          >
            {proj.category} · {proj.year}
          </div>

          <h3
            style={{
              fontFamily: fonts.serif,
              fontSize: "2.5rem",
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: "1.2rem",
            }}
          >
            {proj.title}
          </h3>

          <p
            style={{
              fontFamily: fonts.mono,
              fontSize: "0.78rem",
              color: colors.textMuted,
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}
          >
            {proj.desc}
          </p>

          <a
            href="#contacto"
            style={sharedStyles.btnPrimary}
            onMouseEnter={(e) => (e.currentTarget.style.background = colors.accentHover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = colors.accent)}
          >
            Ver Caso de Estudio →
          </a>
        </div>
      </div>
    </section>
  );
}
