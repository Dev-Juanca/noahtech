import FadeIn from "./FadeIn";
import { STACK } from "../data";
import { colors, fonts, sharedStyles } from "../styles/theme";

export default function TechStack() {
  return (
    <section id="stack" style={{ ...sharedStyles.section, background: colors.bgAlt }}>
      <FadeIn>
        <div style={sharedStyles.sectionTag}>// Stack Tecnológico</div>
        <h2 style={sharedStyles.sectionTitle}>
          Las mejores herramientas
          <br />
          <em style={sharedStyles.italicMuted}>para cada problema</em>
        </h2>
      </FadeIn>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "3rem" }}>
        {STACK.map((tech, i) => (
          <FadeIn key={tech} delay={i * 50}>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                padding: "0.6rem 1.4rem",
                border: `1px solid ${colors.borderFaint}`,
                color: "rgba(240,237,230,0.6)",
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.accent;
                e.currentTarget.style.color = colors.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.borderFaint;
                e.currentTarget.style.color = "rgba(240,237,230,0.6)";
              }}
            >
              {tech}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
