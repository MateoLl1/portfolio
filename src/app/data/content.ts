import { Lang } from '../core/language.service';

export interface NavItem {
  id: string;
  label: string;
}

export interface JobEntry {
  company: string;
  role: string;
  date: string;
  bullets: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface FeaturedProject {
  name: string;
  description: string;
  tech: string[];
  link?: ProjectLink;
  image?: string;
}

export interface GridProject {
  name: string;
  description: string;
  tech: string[];
  link?: ProjectLink;
  image?: string;
}

export interface PortfolioContent {
  nav: { items: NavItem[]; resumeLabel: string };
  sidebar: { name: string; role: string; tagline: string };
  hero: {
    greeting: string;
    name: string;
    subheading: string;
    description: string;
    cta: string;
  };
  about: {
    paragraphs: string[];
    skillsIntro: string;
    skills: string[];
  };
  experience: {
    heading: string;
    jobs: JobEntry[];
  };
  projects: {
    featuredOverline: string;
    otherHeading: string;
    other: GridProject[];
    featured: FeaturedProject[];
    showMore: string;
    showLess: string;
  };
  contact: {
    overline: string;
    heading: string;
    description: string;
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      requiredNotice: string;
      or: string;
    };
  };
  footer: { credit: string };
}

export const SOCIAL_LINKS = {
  github: 'https://github.com/mateoll1',
  linkedin: 'https://linkedin.com/in/mateo-llerena-dev',
  whatsapp: 'https://wa.me/593998315812',
  email: 'mateollerena40@gmail.com',
};

export const SECTION_IDS = ['about', 'experience', 'projects', 'contact'];

/** FormSubmit.co endpoint — free, backend-less form handler, works on static GitHub Pages hosting. */
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${SOCIAL_LINKS.email}`;

/** Set to a real URL (e.g. '/resume.pdf' after dropping the file in `public/`) to show the Resume button. */
export const RESUME_URL: string | null = null;

const es: PortfolioContent = {
  nav: {
    resumeLabel: 'Currículum',
    items: [
      { id: 'about', label: 'Sobre mí' },
      { id: 'experience', label: 'Experiencia' },
      { id: 'projects', label: 'Proyectos' },
      { id: 'contact', label: 'Contacto' },
    ],
  },
  sidebar: {
    name: 'Mateo Llerena',
    role: 'Tech Lead & Full Stack Developer',
    tagline: 'Construyo productos full-stack potenciados por automatización e IA.',
  },
  hero: {
    greeting: 'Hola, mi nombre es',
    name: 'Mateo Llerena.',
    subheading: 'Construyo productos full-stack impulsados por automatización.',
    description:
      'Soy un desarrollador Tech Lead enfocado en crear sistemas web y móviles robustos — CRMs multitenant, ERPs y automatizaciones con IA — combinando Angular, Node/Laravel/.NET y flujos de n8n para conectar procesos de negocio con WhatsApp Business y otros canales.',
    cta: 'Ver mis proyectos',
  },
  about: {
    paragraphs: [
      'Soy Tech Lead y desarrollador Full Stack con experiencia liderando equipos y construyendo sistemas empresariales de punta a punta: CRMs y ERPs multitenant, plataformas web y móviles, e infraestructura cloud desde cero.',
      'Actualmente trabajo como Analista de Sistemas en Automotores Continental (Chevrolet), donde mantengo sistemas ERP/CRM propios en .NET y SQL Server, y lidero la migración de un sistema legado en Visual Basic 6 hacia una plataforma web moderna.',
      'Me apasiona conectar el desarrollo de software con la automatización aplicada: flujos avanzados en n8n, integraciones con WhatsApp Business API y agentes conversacionales con IA que resuelven problemas reales de atención al cliente y operación.',
    ],
    skillsIntro: 'Estas son algunas de las tecnologías con las que trabajo:',
    skills: [
      'Angular',
      'TypeScript',
      'Node.js / NestJS',
      'Laravel',
      'C# / .NET Core',
      'Flutter',
      'SQL Server',
      'PostgreSQL',
      'Docker',
      'Azure DevOps',
      'Google Cloud Platform',
      'n8n',
      'WhatsApp Business API',
      'Nginx / Cloudflare',
    ],
  },
  experience: {
    heading: 'Dónde he trabajado',
    jobs: [
      {
        company: 'Automotores Continental (Chevrolet)',
        role: 'Analista de Sistemas',
        date: 'Diciembre 2025 — Actualidad',
        bullets: [
          'Administro y doy mantenimiento a los sistemas ERP y CRM propios de la compañía, garantizando disponibilidad para las áreas comercial y administrativa.',
          'Trabajo con C# (ASP.NET clásico y .NET Core) y SQL Server avanzado (stored procedures, optimización de queries) en la evolución de sistemas internos.',
          'Lideré la migración de un sistema crítico de turnos desarrollado en Visual Basic 6 hacia una plataforma web moderna, con app en Flutter para kiosco y pantalla central.',
          'Administro el portafolio de Meta Business y la API de WhatsApp Business, incluyendo configuración de webhooks e integración con sistemas internos.',
          'Diseño flujos avanzados en n8n para mensajería masiva y automatización de procesos internos, y gestiono pipelines en Azure DevOps.',
        ],
      },
      {
        company: 'NBC Soluciones Empresariales',
        role: 'Tech Lead & Desarrollador Full Stack',
        date: 'Agosto 2025 — Octubre 2025',
        bullets: [
          'Lideré un equipo de 4 desarrolladores en el diseño e implementación de un CRM multitenant con arquitectura por schemas de PostgreSQL para Avicar USA Electronics.',
          'Definí el stack Angular 18.2 + Laravel 12 + PostgreSQL con aprovisionamiento automático de schemas y migraciones segregadas.',
          'Establecí flujos SCRUM (DoR/DoD, PRs pequeños, cobertura de tests 70%+) y métricas de calidad del equipo.',
          'Implementé mensajería omnicanal con WhatsApp Business (Evolution API), incluyendo sincronización de conversaciones y descifrado de multimedia.',
          'Reforcé seguridad y compliance ISO 9001: Laravel Sanctum, 2FA, roles/permisos granulares y auditoría.',
        ],
      },
      {
        company: 'Alfa Business Apps',
        role: 'Desarrollador Full Stack Web & Automatización IA',
        date: 'Noviembre 2024 — Julio 2025',
        bullets: [
          'Administré infraestructura VPS completa (dominios, DNS, SSL, despliegues) para más de 10 clientes empresariales.',
          'Desarrollé agentes conversacionales con IA integrados a CRM/ERP para automatizar atención al cliente, aumentando la conversión en un 35%.',
          'Construí un plugin propietario de WordPress/WooCommerce con autenticación por tokens para sincronización segura con sistemas externos.',
          'Gestioné contenedores Docker, firewalls y hardening de servidores vía SSH.',
          'Configuré un servidor TURN para transmisiones WebRTC en vivo, soportando más de 500 usuarios concurrentes.',
        ],
      },
      {
        company: 'Centro de Convenciones Metropolitano de Quito (CCMQ)',
        role: 'Desarrollador Web & Automatización IA',
        date: 'Noviembre 2024 — Enero 2025',
        bullets: [
          'Desarrollé el sitio institucional en WordPress del CCMQ con temas personalizados y estructura modular.',
          'Creé un plugin propio de agente conversacional con IA conectado a CRM y WhatsApp Business.',
          'Automaticé respuestas a más de 200 consultas frecuentes, reduciendo el tiempo de respuesta al usuario en un 60%.',
          'Coordiné con el equipo de comunicación para mantener coherencia entre el contenido web y la experiencia conversacional.',
        ],
      },
      {
        company: 'Optimsoft',
        role: 'Desarrollador Full Stack Web & Mobile',
        date: 'Julio 2023 — Julio 2025',
        bullets: [
          'Desarrollé la plataforma copciecuador.com (Angular + Java/Spring Boot + MySQL) para digitalizar el COPCI de Ecuador.',
          'Construí la app móvil multiplataforma en Flutter (iOS/Android/Web), reduciendo el tiempo de búsqueda legal en un 40%.',
          'Monté desde cero infraestructura en Hetzner VPS, orquestando más de 7 servicios con Docker (n8n, Evolution API, Chatwoot, Typebot, MinIO).',
          'Configuré pipelines CI/CD, redes Docker privadas y gestión DNS con Cloudflare (15+ subdominios con SSL automatizado).',
          'Implementé almacenamiento distribuido con MinIO y administración centralizada de PostgreSQL con respaldos automáticos.',
        ],
      },
    ],
  },
  projects: {
    featuredOverline: 'Proyecto Insignia',
    otherHeading: 'Otros Proyectos Destacados',
    showMore: 'Mostrar más',
    showLess: 'Mostrar menos',
    featured: [
      {
        name: 'COPCI Ecuador',
        description:
          'Plataforma web y móvil (copciecuador.com) para consultar el Código Orgánico de la Producción, Comercio e Inversión de Ecuador. Lideré el proyecto de punta a punta: frontend Angular y app Flutter multiplataforma, backend Java + Spring Boot + MySQL, lectura correlacionada entre artículos y reglamentos (–40% en tiempo de búsqueda), narración de contenido por IA (text-to-speech) y un flujo completo de suscripciones pagas integrado con la pasarela de pagos Payphone.',
        tech: ['Angular', 'Flutter', 'Java', 'Spring Boot', 'MySQL', 'Payphone'],
        link: { label: 'copciecuador.com', url: 'https://copciecuador.com/' },
        image: 'projects/copci.jpg',
      },
      {
        name: 'SmartView CRM',
        description:
          'CRM multitenant inspirado en la filosofía de Kommo, que centraliza contactos, oportunidades, cotizaciones y postventa. Diseñé la arquitectura multitenant por esquema, reforcé la seguridad y protección de rutas, optimicé tiempos de carga y respuesta, agregué soporte multilenguaje e integración con WhatsApp para seguimiento comercial, y lideré el despliegue end-to-end (configuración, hardening, releases y monitoreo).',
        tech: ['Multitenant', 'Angular', 'WhatsApp API', 'Seguridad', 'DevOps'],
        link: { label: 'app.ecu-smartview.com', url: 'https://app.ecu-smartview.com/auth/login' },
        image: 'projects/smartview.jpg',
      },
      {
        name: 'Kiosco Digital Híbrido SIAC',
        description:
          'Sistema de turnos híbrido (app móvil de guardia + kiosco de autoservicio + pantalla central interactiva) desplegado en agencias de Costa y Sierra para Automotores Continental. Rescaté y modernicé la lógica de un sistema legado en Visual Basic 6, reconstruyéndola sobre .NET Core + SQL Server, con una sola base de código Flutter corriendo en tres formatos de hardware y un motor de priorización automática de colas en tiempo real.',
        tech: ['.NET Core', 'SQL Server', 'Flutter', 'MinIO', 'Multi-agencia'],
      },
      {
        name: 'WA-Sync',
        description:
          'Motor open-source dockerizado que vincula números de WhatsApp Business por código QR, escucha conversaciones en tiempo real vía webhooks y las persiste de forma estructurada (texto + multimedia), listo para integrarse con cualquier CRM/ERP vía API. Diseño y desarrollo en solitario: backend NestJS, integración con Evolution API, persistencia en PostgreSQL + MinIO (S3) y despliegue 100% con Docker Compose.',
        tech: ['NestJS', 'PostgreSQL', 'MinIO', 'Evolution API', 'Docker'],
      },
    ],
    other: [
      {
        name: 'FeetMedic',
        description:
          'Asistente conversacional embebido que responde dudas frecuentes y agenda citas automáticamente, sincronizado con calendario y notificaciones por correo para paciente, especialista y administración.',
        tech: ['Chatbot', 'Google Calendar', 'Automatización'],
        link: { label: 'feetmedic.com', url: 'https://feetmedic.com/' },
        image: 'projects/feetmedic.jpg',
      },
      {
        name: 'Jaime Lozada',
        description:
          'Portal clínico integrado con backend propio para gestión de citas, historiales y seguimiento, con bot de respuestas que guía la reserva y valida datos básicos.',
        tech: ['Portal Web', 'Bot de Atención', 'Backend Propio'],
        link: { label: 'jaimelozada.com', url: 'http://jaimelozada.com/' },
        image: 'projects/jaime-lozada.jpg',
      },
      {
        name: 'Todo Comercio Exterior Ecuador',
        description:
          'Web corporativa con arquitectura editorial clara para difundir contenidos de comercio exterior, con bot asesor para consultas frecuentes que deriva a equipo comercial cuando aplica.',
        tech: ['CMS', 'Bot Asesor', 'SEO'],
        link: { label: 'todocomercioexterior.com.ec', url: 'https://todocomercioexterior.com.ec/' },
        image: 'projects/comercio-exterior.jpg',
      },
      {
        name: 'Laboratorio de Dexter',
        description:
          'E-commerce de insumos de laboratorio desarrollado de extremo a extremo (DNS, hosting, web e inventario en tiempo real), con asistente de ventas en web y WhatsApp.',
        tech: ['E-commerce', 'Inventario en tiempo real', 'WhatsApp'],
        link: { label: 'laboratoriodedexter.com', url: 'https://laboratoriodedexter.com/' },
        image: 'projects/laboratorio-dexter.jpg',
      },
      {
        name: 'BlueMagic',
        description:
          'Optimización de un e-commerce existente: catálogo por categorías, variantes e inventario visibles, y asistente de ventas en web/WhatsApp que guía el proceso de compra.',
        tech: ['E-commerce', 'Asistente de Ventas', 'WhatsApp'],
        link: { label: 'bluemagic.ec', url: 'https://bluemagic.ec/' },
        image: 'projects/bluemagic.jpg',
      },
      {
        name: 'Zuitch',
        description:
          'Red social web con perfiles, publicaciones, mensajería directa, llamadas y transmisiones en vivo para eventos y charlas. Puse en marcha toda la plataforma.',
        tech: ['Red Social', 'WebRTC', 'Mensajería en tiempo real'],
        link: { label: 'zuitch.com', url: 'https://zuitch.com/' },
        image: 'projects/zuitch.jpg',
      },
      {
        name: 'Alfa Business Apps (CRM WhatsApp)',
        description:
          'Evolución de un CRM centrado en WhatsApp hacia un esquema multicanal: mejoré el agente de IA, amplié integraciones de canal y di soporte en DevOps y base de datos.',
        tech: ['CRM', 'IA', 'DevOps'],
        link: { label: 'crm.alfabusiness.app', url: 'https://crm.alfabusiness.app/' },
        image: 'projects/alfa-business.jpg',
      },
      {
        name: '6ZIX',
        description:
          'Plataforma de presencia de marca orientada a conversión, con bot/asesor para cualificar leads y canalizarlos. Desarrollo completo del proyecto.',
        tech: ['Landing Page', 'Bot/Asesor'],
        link: { label: '6zix.com', url: 'https://6zix.com/' },
        image: 'projects/6zix.jpg',
      },
      {
        name: 'Delinear Design',
        description:
          'Portafolio de estudio de diseño implementado de extremo a extremo (frontend, backend, inventario y DevOps) con foco en performance y detalle visual.',
        tech: ['Frontend', 'Backend', 'DevOps'],
        link: { label: 'delinear.design', url: 'https://delinear.design/' },
      },
      {
        name: 'Rick & Morty App',
        description:
          'Explorador de personajes, ubicaciones y episodios conectado a una API pública, con buscador, filtros y paginación.',
        tech: ['API pública', 'Paginación', 'Frontend'],
      },
      {
        name: 'Delivery App',
        description:
          'Flujo completo de reparto: catálogo, carrito, direcciones, método de pago y tracking del pedido con notificaciones en tiempo real.',
        tech: ['Checkout', 'Tracking en tiempo real', 'Backend'],
      },
      {
        name: 'Clon Spotify',
        description:
          'Experiencia de streaming con playlists, artistas, álbumes, búsqueda, favoritos y reproductor completo con cola, repetir y aleatorio.',
        tech: ['Streaming', 'Reproductor', 'Backend'],
      },
      {
        name: 'Cinema App',
        description:
          'Listados de estrenos y populares, fichas con sinopsis y reparto, tráilers embebidos y listas de "ver más tarde" con persistencia local.',
        tech: ['API pública', 'Watchlist', 'Persistencia local'],
      },
    ],
  },
  contact: {
    overline: '¿Qué sigue?',
    heading: 'Ponte en contacto',
    description:
      'Estoy abierto a nuevos proyectos, colaboraciones o simplemente conversar sobre automatización, IA y desarrollo full-stack. Escríbeme y te responderé lo antes posible.',
    form: {
      name: 'Tu nombre',
      email: 'Tu correo electrónico',
      phone: 'Tu teléfono (opcional)',
      subject: 'Asunto',
      message: 'Tu mensaje aquí',
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '¡Gracias! Tu mensaje fue enviado.',
      error: 'Hubo un problema al enviar. Intenta de nuevo.',
      requiredNotice: 'Completa los campos requeridos.',
      or: 'o escríbeme directo a',
    },
  },
  footer: {
    credit: 'Diseñado y construido por Mateo Llerena con Angular.',
  },
};

const en: PortfolioContent = {
  nav: {
    resumeLabel: 'Resume',
    items: [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
  },
  sidebar: {
    name: 'Mateo Llerena',
    role: 'Tech Lead & Full Stack Developer',
    tagline: 'I build automation and AI-powered full-stack products.',
  },
  hero: {
    greeting: "Hi, my name is",
    name: 'Mateo Llerena.',
    subheading: 'I build automation-driven full-stack products.',
    description:
      "I'm a Tech Lead focused on building robust web and mobile systems — multitenant CRMs, ERPs and AI-driven automations — combining Angular, Node/Laravel/.NET and n8n workflows to connect business processes with WhatsApp Business and other channels.",
    cta: 'Check out my work',
  },
  about: {
    paragraphs: [
      "I'm a Tech Lead and Full Stack developer with experience leading teams and building enterprise systems end-to-end: multitenant CRMs and ERPs, web and mobile platforms, and cloud infrastructure from the ground up.",
      "I currently work as a Systems Analyst at Automotores Continental (Chevrolet), where I maintain in-house ERP/CRM systems built in .NET and SQL Server, and lead the migration of a legacy Visual Basic 6 system to a modern web platform.",
      "I'm passionate about connecting software development with applied automation: advanced n8n workflows, WhatsApp Business API integrations, and AI conversational agents that solve real customer service and operations problems.",
    ],
    skillsIntro: "Here are a few technologies I've been working with:",
    skills: [
      'Angular',
      'TypeScript',
      'Node.js / NestJS',
      'Laravel',
      'C# / .NET Core',
      'Flutter',
      'SQL Server',
      'PostgreSQL',
      'Docker',
      'Azure DevOps',
      'Google Cloud Platform',
      'n8n',
      'WhatsApp Business API',
      'Nginx / Cloudflare',
    ],
  },
  experience: {
    heading: "Where I've Worked",
    jobs: [
      {
        company: 'Automotores Continental (Chevrolet)',
        role: 'Systems Analyst',
        date: 'December 2025 — Present',
        bullets: [
          "Administer and maintain the company's in-house ERP and CRM systems, ensuring availability for the sales and administrative areas.",
          'Work with C# (classic ASP.NET and .NET Core) and advanced SQL Server (stored procedures, query optimization) to evolve internal systems.',
          'Led the migration of a critical queue-management system from Visual Basic 6 to a modern web platform, with a Flutter app for kiosk and lobby display.',
          'Administer the Meta Business portfolio and WhatsApp Business API, including webhook configuration and integration with internal systems.',
          'Design advanced n8n workflows for bulk messaging and internal process automation, and manage Azure DevOps pipelines.',
        ],
      },
      {
        company: 'NBC Soluciones Empresariales',
        role: 'Tech Lead & Full Stack Developer',
        date: 'August 2025 — October 2025',
        bullets: [
          'Led a team of 4 developers designing and building a multitenant CRM with a PostgreSQL schema-per-tenant architecture for Avicar USA Electronics.',
          'Defined the Angular 18.2 + Laravel 12 + PostgreSQL stack with automatic schema provisioning and segregated migrations.',
          'Established SCRUM workflows (DoR/DoD, small PRs, 70%+ test coverage) and team quality metrics.',
          'Implemented omnichannel WhatsApp Business messaging (Evolution API), including conversation sync and media decryption.',
          'Strengthened ISO 9001 security and compliance: Laravel Sanctum auth, 2FA, granular roles/permissions and audit logs.',
        ],
      },
      {
        company: 'Alfa Business Apps',
        role: 'Full Stack Web Developer & AI Automation',
        date: 'November 2024 — July 2025',
        bullets: [
          'Fully administered VPS infrastructure (domains, DNS, SSL, deployments) for more than 10 enterprise clients.',
          'Built AI conversational agents integrated with CRM/ERP to automate customer service and order processing, increasing conversion by 35%.',
          'Built a proprietary WordPress/WooCommerce plugin with token-based authentication for secure syncing with external systems.',
          'Managed Docker containers, firewalls and server hardening via SSH.',
          'Set up a TURN server for live WebRTC streaming, supporting 500+ concurrent users.',
        ],
      },
      {
        company: 'Metropolitan Convention Center of Quito (CCMQ)',
        role: 'Web Developer & AI Automation',
        date: 'November 2024 — January 2025',
        bullets: [
          "Built CCMQ's institutional WordPress site with custom themes and a modular structure.",
          'Created a custom AI conversational agent plugin connected to CRM and WhatsApp Business.',
          'Automated responses to 200+ frequent inquiries, cutting user response time by 60%.',
          'Coordinated with the communications team to keep web content and conversational experience consistent.',
        ],
      },
      {
        company: 'Optimsoft',
        role: 'Full Stack Web & Mobile Developer',
        date: 'July 2023 — July 2025',
        bullets: [
          "Built the copciecuador.com platform (Angular + Java/Spring Boot + MySQL) to digitize Ecuador's foreign trade code (COPCI).",
          'Built a cross-platform Flutter app (iOS/Android/Web), cutting legal search time by 40%.',
          'Set up Hetzner VPS infrastructure from scratch, orchestrating 7+ Dockerized services (n8n, Evolution API, Chatwoot, Typebot, MinIO).',
          'Configured CI/CD pipelines, private Docker networks and Cloudflare DNS management (15+ subdomains with automated SSL).',
          'Implemented distributed storage with MinIO and centralized PostgreSQL administration with automated backups.',
        ],
      },
    ],
  },
  projects: {
    featuredOverline: 'Featured Project',
    otherHeading: 'Other Noteworthy Projects',
    showMore: 'Show More',
    showLess: 'Show Less',
    featured: [
      {
        name: 'COPCI Ecuador',
        description:
          "Web and mobile platform (copciecuador.com) for browsing Ecuador's foreign trade code (COPCI). I led the project end-to-end: Angular frontend and cross-platform Flutter app, Java + Spring Boot + MySQL backend, cross-referenced article/regulation reading (–40% search time), AI narration (text-to-speech), and a full paid-subscription flow integrated with the Payphone payment gateway.",
        tech: ['Angular', 'Flutter', 'Java', 'Spring Boot', 'MySQL', 'Payphone'],
        link: { label: 'copciecuador.com', url: 'https://copciecuador.com/' },
        image: 'projects/copci.jpg',
      },
      {
        name: 'SmartView CRM',
        description:
          'A multitenant CRM inspired by the Kommo philosophy, centralizing contacts, deals, quotes and after-sales. I designed the schema-per-tenant architecture, hardened route security, optimized load and response times, added multi-language support and WhatsApp integration for sales follow-up, and led the end-to-end deployment (configuration, hardening, releases and monitoring).',
        tech: ['Multitenant', 'Angular', 'WhatsApp API', 'Security', 'DevOps'],
        link: { label: 'app.ecu-smartview.com', url: 'https://app.ecu-smartview.com/auth/login' },
        image: 'projects/smartview.jpg',
      },
      {
        name: 'SIAC Hybrid Digital Kiosk',
        description:
          'A hybrid queue-management system (guard mobile app + self-service kiosk + interactive lobby screen) deployed across dealerships nationwide for Automotores Continental. I rescued and modernized the logic of a legacy Visual Basic 6 system, rebuilding it on .NET Core + SQL Server, with a single Flutter codebase running on three hardware formats and a real-time automatic queue-priority engine.',
        tech: ['.NET Core', 'SQL Server', 'Flutter', 'MinIO', 'Multi-site'],
      },
      {
        name: 'WA-Sync',
        description:
          'An open-source, dockerized engine that links WhatsApp Business numbers via QR code, listens to conversations in real time through webhooks, and persists them in a structured way (text + media), ready to plug into any CRM/ERP via API. Solo end-to-end design and development: NestJS backend, Evolution API integration, PostgreSQL + MinIO (S3) persistence, and fully Dockerized deployment.',
        tech: ['NestJS', 'PostgreSQL', 'MinIO', 'Evolution API', 'Docker'],
      },
    ],
    other: [
      {
        name: 'FeetMedic',
        description:
          "An embedded conversational assistant that answers FAQs and books appointments automatically, synced with the calendar and email notifications for patient, specialist and administration.",
        tech: ['Chatbot', 'Google Calendar', 'Automation'],
        link: { label: 'feetmedic.com', url: 'https://feetmedic.com/' },
        image: 'projects/feetmedic.jpg',
      },
      {
        name: 'Jaime Lozada',
        description:
          "A clinic portal integrated with the clinic's own backend for appointments, records and follow-up, with a response bot that guides booking and validates basic data.",
        tech: ['Web Portal', 'Support Bot', 'Custom Backend'],
        link: { label: 'jaimelozada.com', url: 'http://jaimelozada.com/' },
        image: 'projects/jaime-lozada.jpg',
      },
      {
        name: 'Todo Comercio Exterior Ecuador',
        description:
          'A corporate site with a clear editorial architecture for foreign-trade content, with an advisor bot for FAQs that hands off to the sales team when needed.',
        tech: ['CMS', 'Advisor Bot', 'SEO'],
        link: { label: 'todocomercioexterior.com.ec', url: 'https://todocomercioexterior.com.ec/' },
        image: 'projects/comercio-exterior.jpg',
      },
      {
        name: 'Laboratorio de Dexter',
        description:
          'An e-commerce site for lab supplies built end-to-end (DNS, hosting, web and real-time inventory), with a sales assistant on the web and WhatsApp.',
        tech: ['E-commerce', 'Real-time inventory', 'WhatsApp'],
        link: { label: 'laboratoriodedexter.com', url: 'https://laboratoriodedexter.com/' },
        image: 'projects/laboratorio-dexter.jpg',
      },
      {
        name: 'BlueMagic',
        description:
          'Optimization of an existing e-commerce store: categorized catalog, visible variants and inventory, and a web/WhatsApp sales assistant guiding the purchase flow.',
        tech: ['E-commerce', 'Sales Assistant', 'WhatsApp'],
        link: { label: 'bluemagic.ec', url: 'https://bluemagic.ec/' },
        image: 'projects/bluemagic.jpg',
      },
      {
        name: 'Zuitch',
        description:
          'A social network with profiles, posts, direct messaging, calls and live streaming for events and talks. I set up the entire platform.',
        tech: ['Social Network', 'WebRTC', 'Real-time messaging'],
        link: { label: 'zuitch.com', url: 'https://zuitch.com/' },
        image: 'projects/zuitch.jpg',
      },
      {
        name: 'Alfa Business Apps (WhatsApp CRM)',
        description:
          'Evolution of a WhatsApp-centric CRM into a multichannel platform: improved the AI agent, added more channel integrations, and supported DevOps and database work.',
        tech: ['CRM', 'AI', 'DevOps'],
        link: { label: 'crm.alfabusiness.app', url: 'https://crm.alfabusiness.app/' },
        image: 'projects/alfa-business.jpg',
      },
      {
        name: '6ZIX',
        description:
          'A conversion-focused brand presence platform with a bot/advisor to qualify and route leads. Full end-to-end project development.',
        tech: ['Landing Page', 'Bot/Advisor'],
        link: { label: '6zix.com', url: 'https://6zix.com/' },
        image: 'projects/6zix.jpg',
      },
      {
        name: 'Delinear Design',
        description:
          'A design studio portfolio implemented end-to-end (frontend, backend, inventory and DevOps) with a focus on performance and visual detail.',
        tech: ['Frontend', 'Backend', 'DevOps'],
        link: { label: 'delinear.design', url: 'https://delinear.design/' },
      },
      {
        name: 'Rick & Morty App',
        description:
          'A character, location and episode explorer connected to a public API, with search, filters and pagination.',
        tech: ['Public API', 'Pagination', 'Frontend'],
      },
      {
        name: 'Delivery App',
        description:
          'A full delivery flow: catalog, cart, addresses, payment method and order tracking with real-time notifications.',
        tech: ['Checkout', 'Real-time tracking', 'Backend'],
      },
      {
        name: 'Spotify Clone',
        description:
          'A streaming experience with playlists, artists, albums, search, favorites and a full player with queue, repeat and shuffle.',
        tech: ['Streaming', 'Player', 'Backend'],
      },
      {
        name: 'Cinema App',
        description:
          'Now-playing and popular listings, detail pages with synopsis and cast, embedded trailers, and "watch later" lists with local persistence.',
        tech: ['Public API', 'Watchlist', 'Local persistence'],
      },
    ],
  },
  contact: {
    overline: "What's Next?",
    heading: 'Get In Touch',
    description:
      "I'm open to new projects, collaborations, or just chatting about automation, AI and full-stack development. Reach out and I'll get back to you as soon as I can.",
    form: {
      name: 'Your name',
      email: 'Your email',
      phone: 'Your phone (optional)',
      subject: 'Subject',
      message: 'Your message here',
      submit: 'Send message',
      sending: 'Sending...',
      success: "Thanks! Your message has been sent.",
      error: 'Something went wrong. Please try again.',
      requiredNotice: 'Please fill in the required fields.',
      or: 'or email me directly at',
    },
  },
  footer: {
    credit: 'Designed and built by Mateo Llerena with Angular.',
  },
};

export const CONTENT: Record<Lang, PortfolioContent> = { es, en };
