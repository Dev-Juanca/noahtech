/* ─── Design Tokens ─────────────────────────────────────── */
export const colors = {
  bg: "#0A0A0A",
  bgAlt: "#0D0D0D",
  text: "#F0EDE6",
  accent: "#C8F562",
  accentHover: "#d5ff6e",
  textMuted: "rgba(240,237,230,0.5)",
  textFaint: "rgba(240,237,230,0.35)",
  borderFaint: "rgba(240,237,230,0.08)",
  borderLight: "rgba(240,237,230,0.15)",
};

export const fonts = {
  serif: "'DM Serif Display', 'Georgia', serif",
  mono: "'Space Mono', monospace",
};

/* ─── Reusable style objects ─────────────────────────────── */
export const sharedStyles = {
  sectionTag: {
    fontFamily: fonts.mono,
    fontSize: "0.65rem",
    letterSpacing: "0.3em",
    color: colors.accent,
    textTransform: "uppercase",
    marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontFamily: fonts.serif,
    fontSize: "clamp(2.2rem, 4vw, 4rem)",
    fontWeight: 400,
    lineHeight: 1.1,
    margin: "0 0 1.5rem",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: colors.borderFaint,
  },
  btnPrimary: {
    padding: "0.9rem 2.2rem",
    background: colors.accent,
    color: colors.bg,
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    transition: "background 0.2s",
  },
  btnSecondary: {
    padding: "0.9rem 2.2rem",
    background: "transparent",
    color: colors.text,
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    border: `1px solid ${colors.borderLight}`,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  },
  section: {
    padding: "7rem 3rem",
  },
  italicMuted: {
    fontStyle: "italic",
    color: "rgba(240,237,230,0.45)",
  },
};
