export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'competencies';
    level?: 'basic' | 'learning' | 'basicLearning' | 'basicIntermediate' | 'intermediate' | 'intermediateAdvanced' | 'advanced';
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
    description?: string;
}

export interface Certificate {
    name: string;
    issuer: string;
    date: string;
    link?: string;
    image?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    stack: string[];
    demoUrl?: string;
    repoUrl?: string;
    achievements: string[];
}

export interface Profile {
    name: string;
    role: string;
    avatar: string;
    about: string;
    email: string;
    linkedin: string;
    github: string;
    skills: Skill[];
    education: Education[];
    certificates: Certificate[];
    projects: Project[];
}

export const profile: Profile = {
    name: "L. Alexandra Pérez",
    role: "Desarrolladora frontend",
    avatar: "/portfolio_new_edition/images/me.jpg",
    about: "Soy desarrolladora frontend con más de 4 años de experiencia en aplicaciones SaaS, apasionada por crear interfaces limpias, escalables y centradas en la experiencia de usuario.",
    email: "l.alexandradev@gmail.com",
    linkedin: "https://www.linkedin.com/in/libiaaperezbdev1/",
    github: "https://github.com/alexadictiva",

    skills: [
        { name: "JavaScript", category: "frontend", level: "advanced" },
        { name: "HTML5", category: "frontend", level: "advanced" },
        { name: "CSS3 / SCSS", category: "frontend", level: "advanced" },
        { name: "jQuery", category: "frontend", level: "advanced" },
        { name: "React", category: "frontend", level: "intermediate" },
        { name: "TypeScript", category: "frontend", level: "basic" },
        { name: "Tailwind CSS", category: "frontend", level: "basicIntermediate" },
        { name: "Bootstrap", category: "frontend", level: "intermediateAdvanced" },
        { name: "Node.js", category: "backend", level: "learning" },
        { name: "PHP", category: "backend", level: "basicIntermediate" },
        { name: "CodeIgniter", category: "backend", level: "basicIntermediate" },
        { name: "SQL", category: "backend", level: "basic" },
        { name: "PostgreSQL", category: "backend", level: "basicLearning" },
        { name: "SQLite", category: "backend", level: "basic" },
        { name: "Supabase", category: "backend", level: "basic" },
        { name: "APIs REST / JSON", category: "backend", level: "intermediateAdvanced" },
        { name: "Git / GitHub", category: "tools", level: "intermediate" },
        { name: "Vite", category: "tools", level: "intermediate" },
        { name: "Postman", category: "tools", level: "intermediate" },
        { name: "Chrome DevTools", category: "tools", level: "advanced" },
        { name: "Figma (modo desarrollador)", category: "tools", level: "intermediate" },
        { name: "Vercel / Render", category: "tools", level: "basic" },
        { name: "Cursor / OpenAI Codex", category: "tools", level: "intermediate" },
        { name: "Diseño responsivo", category: "competencies" },
        { name: "Componentes reutilizables", category: "competencies" },
        { name: "Integración de APIs", category: "competencies" },
        { name: "Migración de aplicaciones heredadas", category: "competencies" },
        { name: "Depuración", category: "competencies" },
        { name: "Accesibilidad web", category: "competencies" },
        { name: "Rendimiento web", category: "competencies" },
        { name: "Compatibilidad entre navegadores", category: "competencies" },
        { name: "Validación funcional y trabajo con QA", category: "competencies" },
        { name: "Scrum / metodologías ágiles", category: "competencies" },
    ],

    education: [
        {
            degree: "Curso de Backend con Node.js",
            institution: "Talento Tech - Ciudad de Buenos Aires",
            year: "2026 - En curso",
            description: "Formación en Node.js y Express.js, APIs REST, protocolo HTTP, JSON, Postman, Firebase, autenticación con JWT, middlewares y manejo de errores."
        },
        {
            degree: "Técnico en Programación y Desarrollo Web",
            institution: "Instituto Metropolitano de Altos Estudios ALPI (EMAE)",
            year: "2020-2022",
            description: "Formación técnica especializada en desarrollo web y programación"
        },
        {
            degree: "Técnico Superior Administrativo",
            institution: "Instituto Universitario de Tecnología y Administración",
            year: "2009-2013",
            description: "Fundamentos de administración y gestión contable"
        }
    ],

    certificates: [
        {
            "name": "Aprende SQL desde cero — Curso completo",
            "issuer": "Midudev",
            "date": "2026",
            "link": "https://www.aprendesql.dev/certificado/56528d45-4623-443b-b130-2b14cd254b08"
        },
        {
            "name": "Curso de Supabase",
            "issuer": "Platzi",
            "date": "2026",
            "link": "https://platzi.com/p/alexadictiva/curso/12544-course/diploma/detalle/"
        },
        {
            "name": "Curso de TypeScript",
            "issuer": "Platzi",
            "date": "2025",
            "link": "https://platzi.com/p/alexadictiva/curso/2878-course/diploma/detalle/"
        },
        {
            "name": "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
            "issuer": "Platzi",
            "date": "2024",
            "link": "https://platzi.com/p/alexadictiva/curso/3221-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico sobre los Miembros de la Familia",
            "issuer": "Platzi",
            "date": "2023",
            "link": "https://platzi.com/p/alexadictiva/curso/3230-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico sobre Elementos de Trabajo",
            "issuer": "Platzi",
            "date": "2023",
            "link": "https://platzi.com/p/alexadictiva/curso/3996-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico para Principiantes - (2022)",
            "issuer": "Platzi",
            "date": "2023",
            "link": "https://platzi.com/p/alexadictiva/curso/3093-course/diploma/detalle/"
        },
        {
            "name": "Curso de Gestión de Dependencias y Paquetes con NPM",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/1763-course/diploma/detalle/"
        },
        {
            "name": "Curso de closures y ámbito en JavaScript 2020",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/1807-course/diploma/detalle/"
        },
        {
            "name": "Curso de CSS Grid Básico",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2474-course/diploma/detalle/"
        },
        {
            "name": "Curso de Desarrollo Frontend",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2467-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de Desarrollo Frontend",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2477-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2395-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico A1: Presente Simple y Vocabulario Común (2021)",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2393-course/diploma/detalle/"
        },
        {
            "name": "Curso de aplicaciones de una sola página con JavaScript Vanilla",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1787-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de Maquetación en CSS",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1744-course/diploma/detalle/"
        },
        {
            "name": "Curso de HTML y CSS 2019",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1492-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de JavaScript",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2327-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de Maquetación y Animaciones con CSS",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2338-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico: Conversación 2018",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1371-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico: Gramática 2018",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1370-course/diploma/detalle/"
        },
        {
            "name": "Curso Intermedio de Gramática en Inglés (2020)",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1989-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico para Descripciones Personales (2020)",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2005-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico: Pronunciación 2020",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2002-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico: Gramática 2019",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1500-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico: Conversación 2019",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1501-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico A2: Descripciones y Comparaciones",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2196-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico: Fundamentos 2019",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1499-course/diploma/detalle/"
        },
        {
            "name": "Curso de Figma - 2020",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1961-course/diploma/detalle/"
        },
        {
            "name": "Curso de diseño responsivo: maquetación priorizando dispositivos móviles",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2030-course/diploma/detalle/"
        },
        {
            "name": "Curso de preparación: configuración del entorno de desarrollo en Windows",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2042-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de HTML y CSS",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1758-course/diploma/detalle/"
        },
        {
            "name": "Curso Definitivo de HTML y CSS",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2008-course/diploma/detalle/"
        },
        {
            "name": "Curso Profesional de Git y GitHub",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1557-course/diploma/detalle/"
        },
        {
            "name": "Curso de Asincronismo con JavaScript 2019",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1789-course/diploma/detalle/"
        },
        {
            "name": "Curso de ECMAScript 6+",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1815-course/diploma/detalle/"
        },
        {
            "name": "Fundamentos de JavaScript 2018",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1339-course/diploma/detalle/"
        },
        {
            "name": "Curso de Bootstrap 4",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1331-course/diploma/detalle/"
        },
        {
            "name": "Audiocurso de Desarrollo de Creatividad para tu Vida Profesional",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1634-course/diploma/detalle/"
        },
        {
            "name": "Curso Básico de JavaScript",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1814-course/diploma/detalle/"
        },
        {
            "name": "Curso de Desarrollo Frontend 2019",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1640-course/diploma/detalle/"
        },
        {
            "name": "Curso de preparación: buenas prácticas y entorno de desarrollo en macOS 2019",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1650-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico: Fundamentos 2018",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1358-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico A1: Conversaciones Cortas y Habituales (2020)",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1945-course/diploma/detalle/"
        },
        {
            "name": "Curso de Estrategias para Aprender Inglés Online 2020",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1944-course/diploma/detalle/"
        },
        {
            "name": "Curso Básico de Programación",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1050-course/diploma/detalle/"
        }
    ],

    projects: [
        {
            id: "appstore-facturacion",
            title: "Página de presentación de Facturación para Tiendanube",
            description: "Página informativa para la aplicación de facturación en Tiendanube",
            image: "/portfolio_new_edition/images/project-appstore.png",
            stack: ["HTML", "CSS", "JavaScript"],
            demoUrl: "https://www.tiendanube.com/tienda-aplicaciones-nube/ecommapp-facturacion?q=accounting",
            achievements: ["Integración con Tiendanube", "Diseño responsive", "Optimización SEO"]
        },
        {
            id: "ebook",
            title: "Página de presentación del libro digital",
            description: "Página informativa para el lanzamiento del libro digital de Ecomm-App",
            image: "/portfolio_new_edition/images/ebook-landing.png",
            stack: ["HTML", "CSS", "JavaScript"],
            demoUrl: "https://www.tiendanube.com/tienda-aplicaciones-nube/ecommapp-facturacion?q=accounting",
            achievements: ["Integración con Tiendanube", "Diseño responsive", "Optimización SEO"]
        },
        {
            id: "wetrex-landing",
            title: "Página de presentación de Wetrex con Google Sheets",
            description: "Página de pauta comercial para Wetrex con un formulario conectado a Google Sheets como base de datos",
            image: "/portfolio_new_edition/images/project-wetrex.png",
            stack: ["HTML", "CSS", "JavaScript"],
            demoUrl: "https://ecomm-app.com/landing/wetrex.html",
            achievements: ["Integración con Google Sheets", "Formularios dinámicos", "Diseño responsive"]
        },
        {
            id: "ecommapp-website",
            title: "Sitio web de Ecomm-App",
            description: "Sitio web principal de Ecomm-App con accesos al registro y al inicio de sesión",
            image: "/portfolio_new_edition/images/project-ecommapp.png",
            stack: ["HTML", "CSS", "JavaScript"],
            demoUrl: "https://ecomm-app.com/landing/landing.html",
            achievements: ["Sistema de autenticación", "Diseño corporativo", "Navegación intuitiva"]
        },
        {
            id: "gigena-landing",
            title: "Página de presentación de Gigena",
            description: "Página de presentación para la empresa Gigena",
            image: "/portfolio_new_edition/images/gigena-landing-project.png",
            stack: ["JavaScript", "Twig", "Scss"],
            demoUrl: "https://alexadictiva.github.io/gigenaLandingProject/",
            achievements: ["Diseño moderno", "Optimización de rendimiento", "Experiencia de usuario mejorada"]
        },
        {
            id: "12-apostles",
            title: "The 12 Apostles",
            description: "Sitio web para la empresa The 12 Apostles",
            image: "/portfolio_new_edition/images/12-apostles-project.png",
            stack: ["HTML", "JavaScript", "Scss"],
            demoUrl: "https://alexadictiva.github.io/gigenaLandingProject/",
            achievements: ["Diseño moderno", "Optimización de rendimiento", "Experiencia de usuario mejorada"]
        },
        {
            id: "coffee-app",
            title: "Aplicación de café",
            description: "Proyecto personal de PWA sobre una aplicación de café para practicar JavaScript, HTML y CSS",
            image: "/portfolio_new_edition/images/coffe-app-practice.png",
            stack: ["JavaScript", "Vue", "Bootstrap"],
            demoUrl: "https://coffeepwa-dd8f1.web.app/",
            repoUrl: "https://github.com/alexadictiva/coffeeapp",
            achievements: ["PWA certificada", "Funcionamiento sin conexión", "Interfaz intuitiva"]
        },
        {
            id: "todo-list",
            title: "Lista de tareas",
            description: "Proyecto personal de lista de tareas para practicar JavaScript, HTML y CSS",
            image: "/portfolio_new_edition/images/todo-list-practice.png",
            stack: ["JavaScript", "Vue", "HTML", "Bootstrap"],
            demoUrl: "https://alexadictiva.github.io/todolistvue/",
            repoUrl: "https://github.com/alexadictiva/todolistvue",
            achievements: ["Gestión de estado", "CRUD completo", "Diseño responsive"]
        }
    ]
};

