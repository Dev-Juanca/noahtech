import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { colors, fonts } from "../styles/theme";

const PASSWORD = "12345"; // Cambia esto por tu contraseña

export default function AdminPanel() {
  const [open, setOpen]         = useState(false);
  const [authed, setAuthed]     = useState(false);
  const [password, setPassword] = useState("");
  const [pwError, setPwError]   = useState(false);
  const [records, setRecords]   = useState([]);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setAuthed(false);
    setPassword("");
    setPwError(false);
    setRecords([]);
    setError(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password !== PASSWORD) {
      setPwError(true);
      return;
    }
    setAuthed(true);
    fetchRecords();
  };

  const fetchRecords = async () => {
    setLoading(true);
    setError(null);
    const { data, error: sbError } = await supabase
      .from("contactos")
      .select("id, dni, nombre, correo, telefono, cargo, created_at")
      .order("created_at", { ascending: false });

    setLoading(false);
    if (sbError) {
      setError("Error al cargar los registros.");
    } else {
      setRecords(data);
    }
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("es-PE", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };

  return (
    <>
      {/* Botón en el footer */}
      <button
        onClick={handleOpen}
        style={{
          fontFamily: fonts.mono,
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "0.55rem 1.2rem",
          background: "transparent",
          border: `1px solid rgba(200,245,98,0.35)`,
          color: colors.accent,
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = colors.accent;
          e.currentTarget.style.color = colors.bg;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = colors.accent;
        }}
      >
        ⚙ Admin
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
            zIndex: 200,
          }}
        />
      )}

      {/* Panel flotante */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 201,
            background: "#111",
            border: `1px solid ${colors.borderFaint}`,
            width: "min(95vw, 900px)",
            maxHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header del panel */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1.2rem 1.8rem",
              borderBottom: `1px solid ${colors.borderFaint}`,
            }}
          >
            <div style={{ fontFamily: fonts.serif, fontSize: "1.2rem" }}>
              Panel de Registros
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {authed && (
                <button
                  onClick={fetchRecords}
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    padding: "0.4rem 0.9rem",
                    background: "transparent",
                    border: `1px solid ${colors.borderLight}`,
                    color: "rgba(240,237,230,0.5)",
                    cursor: "pointer",
                  }}
                >
                  ↻ Actualizar
                </button>
              )}
              <button
                onClick={handleClose}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: "1rem",
                  background: "transparent",
                  border: "none",
                  color: "rgba(240,237,230,0.4)",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Cuerpo */}
          <div style={{ padding: "1.8rem", overflowY: "auto", flex: 1 }}>
            {/* Login */}
            {!authed && (
              <form
                onSubmit={handleLogin}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.2rem",
                  padding: "2rem 0",
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: "0.7rem", color: "rgba(240,237,230,0.4)", letterSpacing: "0.2em" }}>
                  ACCESO RESTRINGIDO
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setPwError(false); }}
                  placeholder="Contraseña"
                  autoFocus
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: `1px solid ${pwError ? "#ff6b6b" : colors.borderLight}`,
                    padding: "0.7rem 0",
                    color: colors.text,
                    fontFamily: fonts.mono,
                    fontSize: "0.9rem",
                    outline: "none",
                    width: "260px",
                    textAlign: "center",
                    letterSpacing: "0.2em",
                  }}
                />
                {pwError && (
                  <div style={{ fontFamily: fonts.mono, fontSize: "0.65rem", color: "#ff6b6b" }}>
                    Contraseña incorrecta
                  </div>
                )}
                <button
                  type="submit"
                  style={{
                    padding: "0.7rem 2rem",
                    background: colors.accent,
                    color: colors.bg,
                    fontFamily: fonts.mono,
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Ingresar →
                </button>
              </form>
            )}

            {/* Tabla de registros */}
            {authed && (
              <>
                {loading && (
                  <div style={{ fontFamily: fonts.mono, fontSize: "0.75rem", color: "rgba(240,237,230,0.4)", textAlign: "center", padding: "2rem" }}>
                    Cargando registros...
                  </div>
                )}

                {error && (
                  <div style={{ fontFamily: fonts.mono, fontSize: "0.75rem", color: "#ff6b6b", textAlign: "center", padding: "2rem" }}>
                    ⚠ {error}
                  </div>
                )}

                {!loading && !error && records.length === 0 && (
                  <div style={{ fontFamily: fonts.mono, fontSize: "0.75rem", color: "rgba(240,237,230,0.3)", textAlign: "center", padding: "2rem" }}>
                    No hay registros aún.
                  </div>
                )}

                {!loading && records.length > 0 && (
                  <>
                    {/* Contador */}
                    <div style={{ fontFamily: fonts.mono, fontSize: "0.65rem", color: colors.accent, letterSpacing: "0.15em", marginBottom: "1rem" }}>
                      {records.length} REGISTRO{records.length !== 1 ? "S" : ""}
                    </div>

                    {/* Tabla */}
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                          <tr style={{ borderBottom: `1px solid ${colors.borderFaint}` }}>
                            {["DNI", "Nombre", "Correo", "Teléfono", "Cargo", "Fecha"].map((h) => (
                              <th
                                key={h}
                                style={{
                                  fontFamily: fonts.mono,
                                  fontSize: "0.6rem",
                                  letterSpacing: "0.2em",
                                  color: "rgba(240,237,230,0.35)",
                                  textTransform: "uppercase",
                                  padding: "0.6rem 1rem",
                                  textAlign: "left",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {records.map((r, i) => (
                            <tr
                              key={r.id}
                              style={{
                                borderBottom: `1px solid ${colors.borderFaint}`,
                                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                              }}
                            >
                              {[r.dni, r.nombre, r.correo, r.telefono, r.cargo, formatDate(r.created_at)].map((val, j) => (
                                <td
                                  key={j}
                                  style={{
                                    fontFamily: fonts.mono,
                                    fontSize: "0.72rem",
                                    color: j === 5 ? "rgba(240,237,230,0.35)" : "rgba(240,237,230,0.75)",
                                    padding: "0.8rem 1rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}