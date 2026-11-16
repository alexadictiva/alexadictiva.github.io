# Portafolio Personal - React + TypeScript + TailwindCSS

Un portafolio personal moderno y responsive construido con React, TypeScript, TailwindCSS, React Router y Framer Motion.

## 🚀 Características

- **Diseño Responsive**: Mobile-first con breakpoints optimizados
- **Tema Oscuro/Claro**: Toggle automático con persistencia
- **Animaciones Suaves**: Framer Motion para transiciones elegantes
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesible**: Cumple con estándares de accesibilidad web
- **TypeScript**: Tipado completo para mejor desarrollo
- **TailwindCSS**: Estilos modernos y mantenibles

## 📱 Diseño Responsive

- **Mobile**: 360-430px (diseño principal)
- **Desktop**: Layout optimizado con max-width 1200px
- **Grids Adaptativos**: 1-5 columnas según breakpoint
- **Navegación**: Header sticky con menú hamburguesa en mobile

## 🛠️ Tecnologías

- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- Framer Motion

## 📦 Instalación

1. **Clona el repositorio**:
```bash
git clone https://github.com/alexadictiva/alexadictiva.github.io.git
cd alexadictiva.github.io
```

2. **Instala las dependencias**:
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo**:
```bash
npm run dev
```

4. **Abre tu navegador** en `http://localhost:5173`

## 🎨 Personalización

### Editar Datos Personales

Todo el contenido se encuentra en `/src/data/profile.ts`. Edita este archivo para personalizar:

```typescript
export const profile: Profile = {
  name: "Tu Nombre",
  role: "Tu Rol",
  avatar: "/images/avatar.jpg",
  about: "Tu descripción personal",
  email: "tu@email.com",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  // ... resto de datos
};
```

### Cambiar Colores

Los colores principales se definen en `/src/index.css`:

```css
:root {
  --accent: #3b82f6; /* Color principal */
}

.dark {
  --accent: #60a5fa; /* Color principal en modo oscuro */
}
```

### Agregar Imágenes

1. **Avatar**: Reemplaza `/public/images/avatar.jpg`
2. **Proyectos**: Reemplaza las imágenes en `/public/images/projects/`
3. **Formatos recomendados**: JPG, 400x400px para avatar, 800x600px para proyectos

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Avatar.tsx
│   ├── CertCard.tsx
│   ├── ProjectCard.tsx
│   ├── Section.tsx
│   ├── SkillBadge.tsx
│   ├── ThemeToggle.tsx
│   └── TopNav.tsx
├── contexts/           # Contextos de React
│   └── ThemeContext.tsx
├── data/              # Datos del perfil
│   └── profile.ts
├── pages/             # Páginas de la aplicación
│   ├── About.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Home.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── App.tsx            # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales

public/
├── images/            # Imágenes del proyecto
│   ├── avatar.jpg
│   └── projects/
└── index.html         # HTML principal
```

## 🎯 Páginas Disponibles

- **Inicio** (`/`): Hero section con información principal
- **Sobre mí** (`/sobre-mi`): Información personal detallada
- **Habilidades** (`/habilidades`): Grid de habilidades con filtros
- **Educación** (`/educacion`): Formación académica
- **Certificados** (`/certificados`): Certificaciones profesionales
- **Proyectos** (`/proyectos`): Portfolio de proyectos
- **Contacto** (`/contacto`): Información de contacto

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linting del código
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 columna)
- **Tablet**: 640px - 1024px (2 columnas)
- **Desktop**: > 1024px (3-5 columnas)

## 🎨 Componentes Principales

### TopNav
Navegación superior con menú responsive y toggle de tema.

### Section
Wrapper para secciones con animaciones automáticas.

### SkillBadge
Tarjeta de habilidad con nivel y categoría.

### ProjectCard
Tarjeta de proyecto con imagen, stack y enlaces.

### CertCard
Tarjeta de certificado con emisor y fecha.

## 🌙 Tema Oscuro/Claro

- **Automático**: Detecta preferencia del sistema
- **Persistente**: Guarda preferencia en localStorage
- **Toggle**: Botón en la navegación para cambiar manualmente

## ♿ Accesibilidad

- **Focus visible**: Contornos claros para navegación por teclado
- **Alt text**: Imágenes con texto alternativo
- **Semántica**: HTML semántico correcto
- **Reduced motion**: Respeta preferencias de movimiento

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `dist`

### GitHub Pages
1. Ejecuta `npm run build`
2. Sube el contenido de `dist` a la rama `gh-pages`

## 📝 Licencia

MIT License - Libre para uso personal y comercial.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

---

**¡Disfruta creando tu portafolio personal!** 🎉
