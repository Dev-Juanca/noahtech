# Noah Tech — Landing Page

Landing page construida con **React + Vite**.

## Estructura del Proyecto

```
noahtech/
├── index.html               # HTML base (Vite entry point)
├── vite.config.js           # Configuración de Vite
├── package.json
└── src/
    ├── main.jsx             # Punto de entrada React
    ├── App.jsx              # Componente raíz — orquesta secciones
    │
    ├── data/
    │   └── index.js         # Todos los datos (servicios, proyectos, stack…)
    │
    ├── styles/
    │   ├── global.css       # Reset global + scrollbar + ::selection
    │   └── theme.js         # Tokens de diseño (colores, fuentes, estilos compartidos)
    │
    ├── hooks/
    │   ├── useInView.js     # IntersectionObserver para animaciones
    │   └── useScrolled.js   # Detecta si el usuario hizo scroll
    │
    └── components/
        ├── FadeIn.jsx       # Componente de animación reutilizable
        ├── Navbar.jsx       # Barra de navegación fija con blur al scroll
        ├── Hero.jsx         # Sección hero con estadísticas
        ├── Services.jsx     # Grid de servicios
        ├── Projects.jsx     # Proyectos con tabs interactivos
        ├── Standards.jsx    # Estándares de calidad
        ├── TechStack.jsx    # Pills del stack tecnológico
        ├── Contact.jsx      # Formulario + info de contacto
        └── Footer.jsx       # Pie de página
```

## Cómo correrlo

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Build para producción
npm run build

# 4. Preview del build
npm run preview
```

## Personalización

| Qué cambiar          | Dónde                        |
|----------------------|------------------------------|
| Textos y datos       | `src/data/index.js`          |
| Colores y fuentes    | `src/styles/theme.js`        |
| Estilos globales     | `src/styles/global.css`      |
| Lógica de secciones  | `src/components/*.jsx`       |
| Orden de secciones   | `src/App.jsx`                |
