import { NAV_LINKS } from "../data";
import { colors, fonts } from "../styles/theme";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "3rem",
        borderTop: `1px solid ${colors.borderFaint}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {/* Brand */}
      <div>
        <div style={{ fontFamily: fonts.serif, fontSize: "1.2rem", marginBottom: "0.4rem" }}>
          Noah<span style={{ color: colors.accent }}>.</span>
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: "0.65rem",
            color: "rgba(240,237,230,0.3)",
            letterSpacing: "0.1em",
          }}
        >
          © 2024 Noah Tech · Excelencia en ingeniería desde 2018
        </div>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "2rem" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: fonts.mono,
              fontSize: "0.65rem",
              color: "rgba(240,237,230,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
