import { colors, fonts, sharedStyles } from "../styles/theme";
import { HERO_STATS } from "../data";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 3rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <Blob style={{ top: "-100px", left: "-200px", background: "radial-gradient(circle, rgba(200,245,98,0.04) 0%, transparent 70%)" }} />
      <Blob style={{ bottom: "-150px", right: "20%", background: "radial-gradient(circle, rgba(123,158,255,0.04) 0%, transparent 70%)" }} />

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        {/* LEFT — texto */}
        <div>
          {/* Tag line */}
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              color: colors.accent,
              textTransform: "uppercase",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ display: "inline-block", width: "40px", height: "1px", background: colors.accent }} />
            Ingeniería Moderna · Diseño Humano
          </div>

          {/* Main title */}
          <h1
            style={{
              fontFamily: fonts.serif,
              fontSize: "clamp(2.8rem, 5vw, 6rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: "0 0 2.5rem",
            }}
          >
            Código que
            <br />
            <em style={{ color: colors.accent, fontStyle: "italic" }}>Eleva</em> tu
            <br />
            Marca
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: fonts.mono,
              fontSize: "0.85rem",
              color: colors.textMuted,
              lineHeight: 1.8,
              maxWidth: "400px",
              marginBottom: "3rem",
              letterSpacing: "0.02em",
            }}
          >
            Construimos aplicaciones web de alto rendimiento y productos digitales
            sofisticados para empresas modernas que exigen excelencia.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#proyectos"
              style={sharedStyles.btnPrimary}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.accentHover)}
              onMouseLeave={(e) => (e.currentTarget.style.background = colors.accent)}
            >
              Ver Proyectos →
            </a>
            <a href="#contacto" style={sharedStyles.btnSecondary}>
              Contáctanos
            </a>
          </div>
        </div>

        {/* RIGHT — video */}
        <div style={{
          position: "relative", 
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          }}>
          <video
            src="../public/promo.mp4"
            controls
            loop
            playsInline
            style={{
              maxwidth: "50%",
              margin: "0 auto", 
              borderRadius: "2px",
              display: "block",
              objectFit: "cover",
              maxHeight: "520px",
              border: `1px solid ${colors.borderFaint}`,
            }}
          />
          {/* Badge "En vivo" */}
        </div>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          gap: "3rem",
          marginTop: "3rem",
          paddingTop: "3rem",
          borderTop: `1px solid ${colors.borderFaint}`,
          flexWrap: "wrap",
        }}
      >
        {HERO_STATS.map(({ num, label }) => (
          <div key={label}>
            <div style={{ fontFamily: fonts.serif, fontSize: "2rem", color: colors.accent }}>
              {num}
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: "0.62rem",
                color: colors.textFaint,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: "0.3rem",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

function Blob({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
