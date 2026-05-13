import FadeIn from "./FadeIn";
import { STANDARDS } from "../data";
import { colors, fonts, sharedStyles } from "../styles/theme";

export default function Standards() {
  return (
    <section style={{ ...sharedStyles.section, background: colors.bgAlt }}>
      <FadeIn>
        <div style={sharedStyles.sectionTag}>// El Estándar Noah Tech</div>
        <h2 style={sharedStyles.sectionTitle}>
          Startup mindset.
          <br />
          <em style={sharedStyles.italicMuted}>Enterprise stability.</em>
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1px",
          background: colors.borderFaint,
          marginTop: "4rem",
        }}
      >
        {STANDARDS.map((item, i) => (
          <FadeIn key={item.title} delay={i * 100}>
            <div style={{ background: colors.bgAlt, padding: "2.5rem 2rem" }}>
              <span style={{ fontSize: "1.5rem", marginBottom: "1.2rem", display: "block" }}>
                {item.icon}
              </span>
              <div
                style={{
                  fontFamily: fonts.serif,
                  fontSize: "1.3rem",
                  marginBottom: "0.8rem",
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  fontFamily: fonts.mono,
                  fontSize: "0.72rem",
                  color: "rgba(240,237,230,0.45)",
                  lineHeight: 1.8,
                }}
              >
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
