import { useState } from "react";
import FadeIn from "./FadeIn";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data";
import { colors, fonts, sharedStyles } from "../styles/theme";
import { supabase } from "../lib/supabaseClient";

export default function Contact() {
  const [form, setForm]       = useState({ dni: "", nombre: "", correo: "", telefono: "", cargo: "" });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: sbError } = await supabase
      .from("contactos")
      .insert([
        {
          dni:      form.dni,
          nombre:   form.nombre,
          correo:   form.correo,
          telefono: form.telefono,
          cargo:    form.cargo,
        },
      ]);

    setLoading(false);

    if (sbError) {
      setError("Ocurrió un error al enviar. Por favor intenta de nuevo.");
      console.error("Supabase error:", sbError);
    } else {
      setSent(true);
    }
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${colors.borderLight}`,
    padding: "0.8rem 0",
    color: colors.text,
    fontFamily: fonts.mono,
    fontSize: "0.85rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: fonts.mono,
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    color: "rgba(240,237,230,0.4)",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "0.6rem",
  };

  return (
    <section id="contacto" style={sharedStyles.section}>
      <FadeIn>
        <div style={sharedStyles.sectionTag}>// Inicia Tu Proyecto</div>
        <h2 style={sharedStyles.sectionTitle}>
          Hablemos de lo que
          <br />
          <em style={sharedStyles.italicMuted}>quieres construir</em>
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          marginTop: "4rem",
        }}
      >
        {/* Form */}
        <FadeIn delay={100}>
          {sent ? (
            <SuccessMessage />
          ) : (
            <form onSubmit={handleSubmit}>
              <FormField label="DNI *">
                <input
                  required
                  name="dni"
                  value={form.dni}
                  onChange={handleChange}
                  placeholder="12345678"
                  maxLength={8}
                  style={inputStyle}
                />
              </FormField>

              <FormField label="Nombre Completo *">
                <input
                  required
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  style={inputStyle}
                />
              </FormField>

              <FormField label="Correo Electrónico *">
                <input
                  required
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="tu@empresa.com"
                  style={inputStyle}
                />
              </FormField>

              <FormField label="Teléfono *">
                <input
                  required
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+51 999 999 999"
                  style={inputStyle}
                />
              </FormField>

              <FormField label="Cargo *">
                <input
                  required
                  name="cargo"
                  value={form.cargo}
                  onChange={handleChange}
                  placeholder="Ej. Gerente de TI, CTO, Desarrollador…"
                  style={inputStyle}
                />
              </FormField>

              {error && (
                <div style={{
                  fontFamily: fonts.mono,
                  fontSize: "0.72rem",
                  color: "#ff6b6b",
                  border: "1px solid rgba(255,107,107,0.3)",
                  padding: "0.8rem 1rem",
                  marginBottom: "1rem",
                }}>
                  ⚠ {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  ...sharedStyles.btnPrimary,
                  marginTop: "1rem",
                  width: "100%",
                  textAlign: "center",
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = colors.accentHover; }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = colors.accent; }}
              >
                {loading ? "Enviando…" : "Iniciar Asociación →"}
              </button>
            </form>
          )}
        </FadeIn>

        {/* Contact info */}
        <FadeIn delay={200}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <h3 style={{ fontFamily: fonts.serif, fontSize: "1.5rem", fontWeight: 400 }}>
              Canales Directos
            </h3>

            {CONTACT_INFO.map((item) => (
              <div key={item.label} style={{ borderLeft: `2px solid ${colors.accent}`, paddingLeft: "1.5rem" }}>
                <div style={labelStyle}>{item.label}</div>
                <div style={{ fontFamily: fonts.serif, fontSize: "1.3rem" }}>{item.value}</div>
              </div>
            ))}

            {/* Social links */}
            <div style={{ paddingTop: "1rem", borderTop: `1px solid ${colors.borderFaint}` }}>
              <div style={labelStyle}>Conecta con Nosotros</div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: "0.68rem",
                      color: colors.accent,
                      letterSpacing: "0.1em",
                      border: "1px solid rgba(200,245,98,0.3)",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    {link.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FormField({ label, children }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label
        style={{
          fontFamily: fonts.mono,
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "rgba(240,237,230,0.4)",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "0.6rem",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function SuccessMessage() {
  return (
    <div
      style={{
        padding: "2rem",
        border: "1px solid rgba(200,245,98,0.3)",
        background: "rgba(200,245,98,0.05)",
        textAlign: "center",
      }}
    >
      <div style={{ fontFamily: fonts.serif, fontSize: "1.5rem", marginBottom: "0.5rem" }}>
        ¡Mensaje enviado!
      </div>
      <p style={{ fontFamily: fonts.mono, fontSize: "0.75rem", color: colors.textMuted }}>
        Nos pondremos en contacto contigo pronto.
      </p>
    </div>
  );
}
