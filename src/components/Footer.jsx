import { NAV_LINKS } from "../data";
import { colors, fonts } from "../styles/theme";
import AdminPanel from "./AdminPanel";

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
        <img src="/logo.png" alt="Noah Tech" style={{ height: "36px", objectFit: "contain", marginBottom: "0.4rem" }} />
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

      {/* Nav links + Admin */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
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
        <AdminPanel />
      </div>
    </footer>
  );
}
