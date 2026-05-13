import FadeIn from "./FadeIn";
import { SERVICES } from "../data";
import { colors, fonts, sharedStyles } from "../styles/theme";

export default function Services() {
  return (
    <section id="servicios" style={sharedStyles.section}>
      <FadeIn>
        <div style={sharedStyles.sectionTag}>// Servicios</div>
        <h2 style={sharedStyles.sectionTitle}>
          Soluciones que resuelven
          <br />
          <em style={sharedStyles.italicMuted}>desafíos reales</em>
        </h2>
      </FadeIn>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          background: colors.borderFaint,
          marginTop: "4rem",
        }}
      >
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.num} service={service} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${service.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.3s",
          cursor: "default",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {/* Overlay oscuro para legibilidad */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.88) 100%)",
            transition: "background 0.3s",
          }}
        />

        {/* Contenido encima del overlay */}
        <div style={{ position: "relative", zIndex: 1, padding: "3rem 2rem" }}>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: "0.65rem",
              color: "rgba(240,237,230,0.4)",
              letterSpacing: "0.2em",
              marginBottom: "2rem",
            }}
          >
            {service.num}
          </div>

          <span style={{ fontSize: "2rem", marginBottom: "1.5rem", display: "block" }}>
            {service.icon}
          </span>

          <div
            style={{
              fontFamily: fonts.serif,
              fontSize: "1.8rem",
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: "1.2rem",
              whiteSpace: "pre-line",
            }}
          >
            {service.title}
          </div>

          <p
            style={{
              fontFamily: fonts.mono,
              fontSize: "0.75rem",
              color: colors.textMuted,
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            {service.desc}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {service.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  padding: "0.3rem 0.8rem",
                  border: `1px solid ${colors.borderLight}`,
                  color: "rgba(240,237,230,0.4)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
