import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'es' | 'en';

const uiTranslations = {
    'nav.home': { es: 'Inicio', en: 'Home' },
    'nav.about': { es: 'Sobre mí', en: 'About me' },
    'nav.skills': { es: 'Habilidades', en: 'Skills' },
    'nav.education': { es: 'Educación', en: 'Education' },
    'nav.certificates': { es: 'Certificados', en: 'Certificates' },
    'nav.projects': { es: 'Proyectos', en: 'Projects' },
    'nav.contact': { es: 'Contacto', en: 'Contact' },
    'nav.openMenu': { es: 'Abrir menú de navegación', en: 'Open navigation menu' },
    'theme.switchDark': { es: 'Cambiar a tema oscuro', en: 'Switch to dark theme' },
    'theme.switchLight': { es: 'Cambiar a tema claro', en: 'Switch to light theme' },
    'language.switchEnglish': { es: 'Cambiar a inglés', en: 'Switch to English' },
    'language.switchSpanish': { es: 'Cambiar a español', en: 'Switch to Spanish' },
    'home.greeting': { es: 'Hola, soy', en: "Hi, I'm" },
    'home.viewProjects': { es: 'Ver proyectos', en: 'View projects' },
    'home.openLinkedIn': { es: 'Abrir LinkedIn', en: 'Open LinkedIn' },
    'about.born': {
        es: 'Nací y crecí en Caracas, Venezuela, donde cursé mis estudios secundarios y posteriormente inicié la carrera de Administración de Empresas. En 2017 emigré a Argentina, estableciéndome en la ciudad de Buenos Aires, donde trabajé en el área de atención al cliente mientras comenzaba a capacitarme en desarrollo web.',
        en: 'I was born and raised in Caracas, Venezuela, where I completed high school and later began studying Business Administration. In 2017, I moved to Argentina and settled in Buenos Aires, where I worked in customer service while beginning my training in web development.'
    },
    'about.origin': {
        es: 'Mi interés por la programación surgió en 2015, cuando desarrollé un sistema de mensajería interna para facilitar la comunicación entre trabajadores y supervisores dentro de la empresa en la que me desempeñaba. A partir de allí decidí enfocar mi carrera en el mundo del desarrollo web sin dejar de lado mi formación en administración.',
        en: 'My interest in programming began in 2015, when I developed an internal messaging system to improve communication between employees and supervisors at the company where I worked. From that point on, I decided to focus my career on web development while building on my background in administration.'
    },
    'about.training': {
        es: 'Desde entonces he complementado mi formación con múltiples cursos en plataformas como Platzi, EDTeam y Udemy, y en 2020 comencé la carrera técnica de Programación y Diseño Web en el Instituto ALPI. Paralelamente he adquirido experiencia práctica construyendo aplicaciones SaaS orientadas al e-commerce y trabajando con integraciones a plataformas como Mercado Libre, Tiendanube, Empretienda, WooCommerce, entre otras.',
        en: 'Since then, I have expanded my training through courses on platforms such as Platzi, EDTeam and Udemy. In 2020, I began a technical degree in Web Programming and Design at Instituto ALPI. At the same time, I gained hands-on experience building e-commerce SaaS applications and working with integrations for platforms such as Mercado Libre, Tiendanube, Empretienda and WooCommerce.'
    },
    'about.toolsIntro': { es: 'Manejo herramientas y tecnologías como:', en: 'I work with tools and technologies such as:' },
    'about.html': { es: 'para la maquetación y los estilos.', en: 'for layout and styling.' },
    'about.javascript': { es: 'para la lógica de interacción y el comportamiento dinámico.', en: 'for interaction logic and dynamic behavior.' },
    'about.react': { es: 'conocimientos básicos aplicados al desarrollo de interfaces.', en: 'basic knowledge applied to interface development.' },
    'about.php': { es: 'en entornos con plantillas y backends personalizados.', en: 'in template-based environments and custom backends.' },
    'about.git': { es: 'para control de versiones, tanto desde la terminal como desde interfaces gráficas.', en: 'for version control from both the command line and graphical interfaces.' },
    'about.figma': { es: 'en modo desarrollador para trasladar diseños a código con precisión.', en: 'in Dev Mode to translate designs accurately into code.' },
    'about.ai': {
        es: 'Actualmente estoy aprendiendo backend con Node.js en Talento Tech y reforzando conocimientos básicos de SQLite y Supabase. Integro Cursor, ChatGPT y agentes de IA en proyectos y flujos de trabajo reales para analizar requerimientos, desarrollar funcionalidades, resolver errores, refactorizar y documentar código. También he aplicado estas herramientas en la creación de soluciones propias, como un asistente de cursos, manteniendo siempre la revisión y validación del resultado.',
        en: 'I am currently learning backend development with Node.js at Talento Tech and strengthening my basic knowledge of SQLite and Supabase. I integrate Cursor, ChatGPT and AI agents into real projects and workflows to analyze requirements, develop features, solve issues, refactor and document code. I have also applied these tools to build my own solutions, such as a course assistant, while always reviewing and validating the results.'
    },
    'about.personality': {
        es: 'Me considero una persona autodidacta, detallista y orientada a soluciones, con la capacidad de crear aplicaciones y páginas web que aporten valor real a las empresas, optimizando procesos y generando impacto positivo en sus ingresos.',
        en: 'I consider myself a self-taught, detail-oriented and solution-focused professional, capable of creating applications and websites that deliver real value to businesses by optimizing processes and contributing to positive results.'
    },
    'about.goal': {
        es: 'Mi objetivo es seguir consolidando mis conocimientos en el ecosistema frontend, explorar librerías y frameworks modernos y continuar desarrollando proyectos que combinen tecnología, diseño y funcionalidad para resolver necesidades del mundo real.',
        en: 'My goal is to keep strengthening my knowledge of the frontend ecosystem, explore modern libraries and frameworks, and continue building projects that combine technology, design and functionality to solve real-world needs.'
    },
    'about.experience': { es: 'Experiencia', en: 'Experience' },
    'about.experienceValue': { es: '+4 años desarrollando aplicaciones web modernas', en: '4+ years building modern web applications' },
    'about.specialization': { es: 'Especialización', en: 'Specialization' },
    'about.specializationValue': { es: 'CSS, JavaScript, React y diseño responsive', en: 'CSS, JavaScript, React and responsive design' },
    'skills.all': { es: 'Todas', en: 'All' },
    'skills.frontend': { es: 'Desarrollo frontend', en: 'Frontend' },
    'skills.backend': { es: 'Desarrollo backend', en: 'Backend' },
    'skills.tools': { es: 'Herramientas', en: 'Tools' },
    'skills.competencies': { es: 'Competencias frontend', en: 'Frontend competencies' },
    'skills.level.basic': { es: 'Básico', en: 'Basic' },
    'skills.level.learning': { es: 'En formación', en: 'In training' },
    'skills.level.basicLearning': { es: 'Básico/en formación', en: 'Basic/in training' },
    'skills.level.basicIntermediate': { es: 'Básico/intermedio', en: 'Basic/intermediate' },
    'skills.level.intermediate': { es: 'Intermedio', en: 'Intermediate' },
    'skills.level.intermediateAdvanced': { es: 'Intermedio/avanzado', en: 'Intermediate/advanced' },
    'skills.level.advanced': { es: 'Avanzado', en: 'Advanced' },
    'skills.frontendCount': { es: 'Habilidades frontend', en: 'Frontend skills' },
    'skills.backendCount': { es: 'Backend y datos', en: 'Backend and data' },
    'skills.total': { es: 'Tecnologías totales', en: 'Total technologies' },
    'education.continuous': { es: 'Formación continua', en: 'Continuous learning' },
    'education.description': {
        es: 'Me mantengo constantemente actualizada con las últimas tecnologías y mejores prácticas del desarrollo web mediante cursos online, conferencias y participación en comunidades de desarrollo.',
        en: 'I continuously keep up with the latest technologies and web development best practices through online courses, conferences and participation in developer communities.'
    },
    'education.courses': { es: 'Cursos completados', en: 'Completed courses' },
    'education.hours': { es: 'Horas de estudio', en: 'Study hours' },
    'education.certifications': { es: 'Certificaciones', en: 'Certifications' },
    'certificates.view': { es: 'Ver certificado', en: 'View certificate' },
    'certificates.commitment': { es: 'Compromiso con la excelencia', en: 'Commitment to excellence' },
    'certificates.description': {
        es: 'Estos certificados representan mi dedicación al aprendizaje continuo y mi compromiso con las mejores prácticas del desarrollo de software. Cada uno ha contribuido a ampliar mis habilidades y conocimientos técnicos.',
        en: 'These certificates represent my dedication to continuous learning and my commitment to software development best practices. Each one has helped me expand my skills and technical knowledge.'
    },
    'projects.achievements': { es: 'Logros:', en: 'Highlights:' },
    'projects.demo': { es: 'Ver sitio', en: 'Live demo' },
    'projects.repository': { es: 'Repositorio', en: 'Repository' },
    'projects.like': { es: '¿Te gusta lo que ves?', en: 'Like what you see?' },
    'projects.description': {
        es: 'Estos son algunos de los proyectos en los que he trabajado. Cada uno representa un desafío diferente y una oportunidad de aprendizaje.',
        en: 'These are some of the projects I have worked on. Each one represents a different challenge and a learning opportunity.'
    },
    'projects.moreGithub': { es: 'Ver más en GitHub', en: 'See more on GitHub' },
    'contact.professionalProfile': { es: 'Perfil profesional', en: 'Professional profile' },
    'contact.repositories': { es: 'Repositorios', en: 'Repositories' },
    'contact.workTogether': { es: '¡Trabajemos juntos!', en: "Let's work together!" },
    'contact.intro': {
        es: '¿Tienes un proyecto en mente? ¿Te gustaría colaborar o simplemente conversar sobre tecnología? No dudes en contactarme. Siempre estoy atenta a nuevas oportunidades y conversaciones interesantes.',
        en: 'Do you have a project in mind? Would you like to collaborate or simply talk about technology? Feel free to contact me. I am always open to new opportunities and interesting conversations.'
    },
    'contact.sendEmail': { es: 'Enviar email', en: 'Send email' },
    'contact.open': { es: 'Abrir', en: 'Open' },
    'contact.ready': { es: '¿Lista para empezar?', en: 'Ready to get started?' },
    'contact.readyDescription': {
        es: 'Si tienes un proyecto que te gustaría conversar o simplemente quieres conectar, estaré encantada de escucharte.',
        en: "If you have a project you'd like to discuss or simply want to connect, I'd be happy to hear from you."
    },
    'contact.writeMe': { es: 'Escríbeme', en: 'Write to me' },
    'contact.subject': { es: 'Hola Alex, me gustaría hablar sobre un proyecto', en: "Hi Alex, I'd like to discuss a project" },
} as const;

export type TranslationKey = keyof typeof uiTranslations;

const contentTranslations: Record<string, string> = {
    'Desarrolladora frontend': 'Frontend Developer',
    'Soy desarrolladora frontend con más de 4 años de experiencia en aplicaciones SaaS, apasionada por crear interfaces limpias, escalables y centradas en la experiencia de usuario.': 'I am a frontend developer with more than four years of experience working on SaaS applications. I am passionate about creating clean, scalable interfaces centered on the user experience.',
    'Figma (modo desarrollador)': 'Figma (Dev Mode)',
    'Diseño responsivo': 'Responsive design',
    'Componentes reutilizables': 'Reusable components',
    'Integración de APIs': 'API integration',
    'Migración de aplicaciones heredadas': 'Legacy application migration',
    'Depuración': 'Debugging',
    'Accesibilidad web': 'Web accessibility',
    'Rendimiento web': 'Web performance',
    'Compatibilidad entre navegadores': 'Cross-browser compatibility',
    'Validación funcional y trabajo con QA': 'Functional validation and collaboration with QA',
    'Scrum / metodologías ágiles': 'Scrum / Agile',
    'Curso de Backend con Node.js': 'Backend Development with Node.js Course',
    'Talento Tech - Ciudad de Buenos Aires': 'Talento Tech - City of Buenos Aires',
    '2026 - En curso': '2026 - In progress',
    'Formación en Node.js y Express.js, APIs REST, protocolo HTTP, JSON, Postman, Firebase, autenticación con JWT, middlewares y manejo de errores.': 'Training in Node.js and Express.js, REST APIs, HTTP, JSON, Postman, Firebase, JWT authentication, middleware and error handling.',
    'Técnico en Programación y Desarrollo Web': 'Technical Degree in Web Programming and Development',
    'Instituto Metropolitano de Altos Estudios ALPI (EMAE)': 'ALPI Metropolitan Institute of Higher Studies (EMAE)',
    'Formación técnica especializada en desarrollo web y programación': 'Specialized technical training in web development and programming',
    'Técnico Superior Administrativo': 'Higher Technical Degree in Administration',
    'Instituto Universitario de Tecnología y Administración': 'University Institute of Technology and Administration',
    'Fundamentos de administración y gestión contable': 'Fundamentals of administration and accounting management',
    'Aprende SQL desde cero — Curso completo': 'Learn SQL from Scratch — Complete Course',
    'Curso de Supabase': 'Supabase Course',
    'Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo': 'Logical Thinking: Algorithms and Flowcharts Course',
    'Curso de Inglés Práctico sobre los Miembros de la Familia': 'Practical English: Family Members Course',
    'Curso de Inglés Práctico sobre Elementos de Trabajo': 'Practical English: Workplace Items Course',
    'Curso de Inglés Básico para Principiantes - (2022)': 'Basic English for Beginners Course (2022)',
    'Curso de Gestión de Dependencias y Paquetes con NPM': 'Dependency and Package Management with NPM Course',
    'Curso de closures y ámbito en JavaScript 2020': 'JavaScript Closures and Scope Course (2020)',
    'Curso de CSS Grid Básico': 'Basic CSS Grid Course',
    'Curso de Desarrollo Frontend': 'Frontend Developer Course',
    'Curso Práctico de Desarrollo Frontend': 'Practical Frontend Developer Course',
    'Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples': 'Basic English A1: Dates, Times and Simple Expressions Course',
    'Curso de Inglés Básico A1: Presente Simple y Vocabulario Común (2021)': 'Basic English A1: Simple Present and Common Vocabulary Course (2021)',
    'Curso de aplicaciones de una sola página con JavaScript Vanilla': 'Single Page Applications with Vanilla JavaScript Course',
    'Curso Práctico de Maquetación en CSS': 'Practical CSS Layout Course',
    'Curso de HTML y CSS 2019': 'HTML and CSS Course (2019)',
    'Curso Práctico de JavaScript': 'Practical JavaScript Course',
    'Curso Práctico de Maquetación y Animaciones con CSS': 'Practical CSS Layout and Animation Course',
    'Curso de Inglés Básico: Conversación 2018': 'Basic English: Conversation Course (2018)',
    'Curso de Inglés Básico: Gramática 2018': 'Basic English: Grammar Course (2018)',
    'Curso Intermedio de Gramática en Inglés (2020)': 'Intermediate English Grammar Course (2020)',
    'Curso de Inglés Práctico para Descripciones Personales (2020)': 'Practical English for Personal Descriptions Course (2020)',
    'Curso de Inglés Práctico: Pronunciación 2020': 'Practical English: Pronunciation Course (2020)',
    'Curso de Inglés Práctico: Gramática 2019': 'Practical English: Grammar Course (2019)',
    'Curso de Inglés Práctico: Conversación 2019': 'Practical English: Conversation Course (2019)',
    'Curso de Inglés Básico A2: Descripciones y Comparaciones': 'Basic English A2: Descriptions and Comparisons Course',
    'Curso de Inglés Práctico: Fundamentos 2019': 'Practical English: Fundamentals Course (2019)',
    'Curso de Figma - 2020': 'Figma Course (2020)',
    'Curso de diseño responsivo: maquetación priorizando dispositivos móviles': 'Responsive Design: Mobile-First Layout Course',
    'Curso de preparación: configuración del entorno de desarrollo en Windows': 'Prework: Setting Up a Development Environment on Windows Course',
    'Curso Práctico de HTML y CSS': 'Practical HTML and CSS Course',
    'Curso Definitivo de HTML y CSS': 'Complete HTML and CSS Course',
    'Curso Profesional de Git y GitHub': 'Professional Git and GitHub Course',
    'Curso de Asincronismo con JavaScript 2019': 'Asynchronous JavaScript Course (2019)',
    'Curso de ECMAScript 6+': 'ECMAScript 6+ Course',
    'Fundamentos de JavaScript 2018': 'JavaScript Fundamentals (2018)',
    'Curso de Bootstrap 4': 'Bootstrap 4 Course',
    'Audiocurso de Desarrollo de Creatividad para tu Vida Profesional': 'Creativity Development for Your Professional Life Audio Course',
    'Curso Básico de JavaScript': 'Basic JavaScript Course',
    'Curso de Desarrollo Frontend 2019': 'Frontend Developer Course (2019)',
    'Curso de preparación: buenas prácticas y entorno de desarrollo en macOS 2019': 'Prework: Best Practices and Development Environment on macOS Course (2019)',
    'Curso de Inglés Básico: Fundamentos 2018': 'Basic English: Fundamentals Course (2018)',
    'Curso de Inglés Básico A1: Conversaciones Cortas y Habituales (2020)': 'Basic English A1: Short Everyday Conversations Course (2020)',
    'Curso de Estrategias para Aprender Inglés Online 2020': 'Strategies for Learning English Online Course (2020)',
    'Curso Básico de Programación': 'Basic Programming Course',
    'Página de presentación de Facturación para Tiendanube': 'Tiendanube Invoicing App Store Landing Page',
    'Página informativa para la aplicación de facturación en Tiendanube': 'Informational landing page for the Ecomm-App invoicing app on Tiendanube',
    'Integración con Tiendanube': 'Tiendanube integration',
    'Diseño responsive': 'Responsive design',
    'Optimización SEO': 'SEO optimization',
    'Página de presentación del libro digital': 'E-book landing page',
    'Página informativa para el lanzamiento del libro digital de Ecomm-App': 'Informational landing page for the launch of Ecomm-App’s e-book',
    'Página de presentación de Wetrex con Google Sheets': 'Wetrex landing page with Google Sheets',
    'Página de pauta comercial para Wetrex con un formulario conectado a Google Sheets como base de datos': 'Advertising landing page for Wetrex with a form connected to Google Sheets as its data store',
    'Integración con Google Sheets': 'Google Sheets integration',
    'Formularios dinámicos': 'Dynamic forms',
    'Sitio web de Ecomm-App': 'Ecomm-App website',
    'Sitio web principal de Ecomm-App con accesos al registro y al inicio de sesión': 'Ecomm-App’s main website with access to registration and sign-in',
    'Sistema de autenticación': 'Authentication system',
    'Diseño corporativo': 'Corporate design',
    'Navegación intuitiva': 'Intuitive navigation',
    'Página de presentación de Gigena': 'Gigena landing page',
    'Página de presentación para la empresa Gigena': 'Landing page for Gigena',
    'Diseño moderno': 'Modern design',
    'Optimización de rendimiento': 'Performance optimization',
    'Experiencia de usuario mejorada': 'Improved user experience',
    'Sitio web para la empresa The 12 Apostles': 'Website for The 12 Apostles',
    'Aplicación de café': 'Coffee app',
    'Proyecto personal de PWA sobre una aplicación de café para practicar JavaScript, HTML y CSS': 'Personal coffee PWA built to practice JavaScript, HTML and CSS',
    'PWA certificada': 'Certified PWA',
    'Funcionamiento sin conexión': 'Offline functionality',
    'Interfaz intuitiva': 'Intuitive interface',
    'Lista de tareas': 'To-do list',
    'Proyecto personal de lista de tareas para practicar JavaScript, HTML y CSS': 'Personal to-do list project built to practice JavaScript, HTML and CSS',
    'Gestión de estado': 'State management',
    'CRUD completo': 'Complete CRUD',
};

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: TranslationKey) => string;
    translateContent: (value: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem('portfolio-language');
        return savedLanguage === 'en' ? 'en' : 'es';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-language', language);
        document.documentElement.lang = language;
        document.title = language === 'es'
            ? 'Alex Developer - Desarrolladora frontend'
            : 'Alex Developer - Frontend Developer';

        const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (description) {
            description.content = language === 'es'
                ? 'Portfolio profesional de desarrollo frontend: React, TypeScript y Tailwind CSS.'
                : 'Professional frontend development portfolio: React, TypeScript and Tailwind CSS.';
        }
    }, [language]);

    const value = useMemo<LanguageContextType>(() => ({
        language,
        toggleLanguage: () => setLanguage(current => current === 'es' ? 'en' : 'es'),
        t: key => uiTranslations[key][language],
        translateContent: valueToTranslate => language === 'es'
            ? valueToTranslate
            : contentTranslations[valueToTranslate] ?? valueToTranslate,
    }), [language]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
