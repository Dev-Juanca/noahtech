import { useScrolled } from "../hooks/useScrolled";
import { NAV_LINKS } from "../data";
import { fonts, colors, sharedStyles } from "../styles/theme";

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.2rem 3rem",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        borderBottom: scrolled ? `1px solid ${colors.borderFaint}` : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <a href="#">
        <img src="logo.png" alt="Noah Tech" style={{ height: "40px", objectFit: "contain", backgroundColor:"white" }} />
      </a>

      {/* Links */}
      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{
                fontFamily: fonts.mono,
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                color: "rgba(240,237,230,0.55)",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = colors.text)}
              onMouseLeave={(e) => (e.target.style.color = "rgba(240,237,230,0.55)")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href=""
      
      >
      </a>
    </nav>
  );
}
