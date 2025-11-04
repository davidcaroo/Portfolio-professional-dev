import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
  id: '0',
  title: 'Bahari Aqua SAS — E-commerce Havaianas',
  description:
    'Tienda online para Bahari Aqua SAS, distribuidor oficial de Havaianas en Colombia. E-commerce completo desarrollado en Shopify con catálogo de productos, carrito de compras, pasarela de pagos integrada y diseño responsive. Optimizado para conversión y experiencia de usuario.',
  image: '/baharia.webp',
  technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'HTML'],
  demoUrl: 'https://bahariaqua.com/',
  githubUrl: '#',
  category: 'fullstack',
  featured: true
},
  {
  id: '1',
  title: 'Programming Ephemeris Terminal',
  description:
    'Terminal retro que muestra efemérides de programación e historia tech. Sistema híbrido: eventos verificados + generación automática con IA (GPT-4o vía OpenRouter), base de datos en Supabase y cron jobs diarios. Proyecto hecho con enfoque “vibe coding”.',
  image: '/ephemeris.webp',
  technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'OpenRouter', 'GPT-4o', 'Supabase', 'Vercel'],
  demoUrl: 'https://programming-ephemeris-terminal.vercel.app/',
  githubUrl: 'https://github.com/davidcaroo/programming-ephemeris-terminal',
  category: 'fullstack',
  featured: false
},
  {
    id: '2',
    title: 'ASILEGAL — Firma de Servicios Legales',
    description:
      'Sitio corporativo para firma legal especializada en tránsito: eliminación/impugnación de comparendos, acuerdos de pago y asesorías. Arquitectura clara por servicios, sección de contacto con formularios, copy SEO y performance básica optimizada.',
    image:
      '/asilegal-sas.webp',
    technologies: ['WordPress', 'PHP', 'CSS', 'Gutenberg', 'SEO', 'Javascript'],
    demoUrl: 'https://deepskyblue-grouse-516030.hostingersite.com/',
    githubUrl: '#',
    category: 'fullstack',
    featured: true
  },
  {
    id: '3',
    title: 'Sistema de Reservas para Restaurante — Frontend',
    description:
      'Aplicación web desarrollada en React para gestionar reservas de mesas en un restaurante. Incluye selección visual de mesas, validación de disponibilidad, y un diseño responsive con experiencia de usuario optimizada.',
    image:
      '/restaurante-frontend.webp',
    technologies: ['React', 'Vite', 'TailwindCSS', 'Axios'],
    demoUrl: 'https://restaurante-frontend-5x3un3xsz-caromoralesdavids-projects.vercel.app/',
    githubUrl: 'https://github.com/davidcaroo/restaurante-frontend',
    category: 'frontend',
    featured: false
  },
  {
    id: '4',
    title: 'Sistema de Reservas para Restaurante — Backend',
    description:
      'API REST desarrollada en PHP para gestionar reservas, disponibilidad de mesas y autenticación de usuarios. Conexión a base de datos MySQL, endpoints protegidos y validación de datos.',
    image:
      '/restaurante-backend.webp',
    technologies: ['PHP', 'MySQL', 'JWT', 'REST API'],
    demoUrl: 'https://github.com/davidcaroo/restaurante-backend',
    githubUrl: 'https://github.com/davidcaroo/restaurante-backend',
    category: 'backend',
    featured: false
  },
  {
    id: '5',
    title: 'Sistema de Reservas para Hotel — Frontend',
    description:
      'Aplicación web desarrollada en React para gestionar reservas de habitaciones de hotel. Incluye búsqueda de disponibilidad, selección de habitaciones, integración con pasarela de pagos y diseño responsive.',
    image: '/hotel-frontend.webp',
    technologies: ['React', 'Vite', 'TailwindCSS', 'Axios'],
    demoUrl: 'https://hotel-frontend-teal.vercel.app/',
    githubUrl: 'https://github.com/davidcaroo/hotel-frontend',
    category: 'frontend',
    featured: false
  },
  {
    id: '6',
    title: 'Sistema de Reservas para Hotel — Backend',
    description:
      'API REST desarrollada en PHP para gestionar reservas, disponibilidad de habitaciones, pagos y autenticación de usuarios. Conexión a MySQL, endpoints seguros y validación de datos.',
    image: '/hotel-backend.webp',
    technologies: ['PHP', 'MySQL', 'JWT', 'REST API'],
    demoUrl: 'https://github.com/davidcaroo/hotel-api-backend',
    githubUrl: 'https://github.com/davidcaroo/hotel-api-backend',
    category: 'backend',
    featured: false
  },
  {
    id: '7',
    title: 'Sistema de Gestión de Salón de Eventos — Frontend',
    description:
      'Aplicación web desarrollada en React para la gestión de reservas de eventos, visualización de disponibilidad y administración de clientes.',
    image: '/salon-eventos.webp',
    technologies: ['React', 'Vite', 'TailwindCSS', 'Axios'],
    demoUrl: 'https://salon-eventos.vercel.app/',
    githubUrl: 'https://github.com/davidcaroo/salon-eventos',
    category: 'frontend',
    featured: false
  },
  {
    id: '8',
    title: 'Sistema de Gestión de Salón de Eventos — Backend',
    description:
      'API REST en PHP para la gestión de reservas de eventos, disponibilidad, pagos y administración de clientes.',
    image: '/salon-eventos-backend.webp',
    technologies: ['PHP', 'MySQL', 'JWT', 'REST API'],
    demoUrl: 'https://github.com/davidcaroo/backend-salon',
    githubUrl: 'https://github.com/davidcaroo/backend-salon',
    category: 'backend',
    featured: false
  },
  {
    id: '9',
    title: 'Website Corporativo Agencia de Marketing',
    description: 'Sitio web corporativo responsive con CMS personalizado, optimización SEO y integración con redes sociales para una agencia de marketing digital.',
    image: 'https://leadzen.innovacode.tech/wp-content/uploads/2025/04/pexels-designecologist-1779487-scaled.webp',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    demoUrl: 'https://leadzen.innovacode.tech/',
    category: 'frontend',
    featured: false
  },
  {
    id: '10',
    title: 'Panel Administrativo — ReporTrash',
    description:
      'Dashboard web para gestionar los reportes de focos de basura enviados desde una app móvil en Flutter. Permite visualizar incidencias en tiempo real, filtrar por estado/fecha/ubicación, actualizar estados (Pendiente, En proceso, Resuelto) y operar sobre un mapa interactivo.',
    image: '/panel-reportrash.webp',
    technologies: ['React', 'Vite', 'TailwindCSS', 'Axios', 'PHP', 'MySQL', 'JWT', 'Leaflet/Maps'],
    demoUrl: 'https://github.com/davidcaroo/panel-administrativo',
    githubUrl: 'https://github.com/davidcaroo/panel-administrativo',
    category: 'fullstack',
    featured: false
  },
  {
    id: '11',
    title: 'Landing Page — ReporTrash',
    description:
      'Página web oficial para la descarga de la app ReporTrash, desarrollada como parte de mi proyecto de grado en Ingeniería Informática. La landing presenta la misión del proyecto, características principales, capturas de pantalla, enlaces de descarga y formulario de contacto.',
    image: '/reportrash-web.webp',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SEO'],
    demoUrl: 'https://reportrash.tech/',
    githubUrl: 'https://github.com/davidcaroo/reportrash.tech.co',
    category: 'frontend',
    featured: false
  },
  {
    id: '12',
    title: 'Shopify Store',
    description: 'Tienda online personalizada en Shopify para una tienda de ropa urbana, con tema custom, integración de apps y optimización de conversión.',
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    demoUrl: 'https://www.districolombia.shop/',
    category: 'frontend',
    featured: false
  },
  {
    id: '13',
    title: 'Portfolio Web — Primera Versión',
    description:
      'Primera versión de mi portfolio web como desarrollador, creada para poner en práctica conocimientos en HTML, CSS y JavaScript. Presenta una introducción personal, habilidades, proyectos y un formulario de contacto básico.',
    image: '/primer-portafolio-dev.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://davidcaroo.github.io/Portfolio-dev/',
    githubUrl: 'https://github.com/davidcaroo/Portfolio-dev',
    category: 'frontend',
    featured: false
  },
  {
    id: '14',
    title: 'Generador de Contraseñas Seguras',
    description:
      'Proyecto de prácticas para generar contraseñas seguras de manera aleatoria usando JavaScript. Las contraseñas no se almacenan y cuenta con una función para copiarlas al portapapeles de forma rápida.',
    image: '/generador-contraseñas.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://davidcaroo.github.io/genpasswords/',
    githubUrl: 'https://github.com/davidcaroo/genpasswords',
    category: 'frontend',
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Bahari Aqua SAS',
    position: 'Líder de Estrategias Digitales y Desarrollo',
    period: 'Septiembre 2025 - Presente',
    description: [
      'Liderazgo en estrategia digital y desarrollo del e-commerce (Shopify)',
      'Gestión y optimización del sitio web como distribuidor oficial de Havaianas en Colombia',
      'Implementación de estrategias de marketing digital y SEO',
      'Análisis de métricas y optimización de conversión',
      'Coordinación con equipos de ventas y logística para integración digital',
      'Desarrollo de campañas digitales y gestión de redes sociales'
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'HTML', 'SEO', 'Google Analytics', 'Marketing Digital']
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Experiencia actualizada
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: '2',
    company: 'CrediBanco CO. · Seccional Cartagena',
    position: 'Gestor Integral de Soporte',
    period: 'Mayo 2025 – Agosto 2025',
    description: [
      'Instalación, mantenimiento preventivo/correctivo y retiro de datáfonos en comercios',
      'Diagnóstico y solución de fallas técnicas asegurando operación continua',
      'Planificación y ejecución de rutas y visitas técnicas dentro de los SLA',
      'Configuración de red y conectividad de equipos con enfoque en seguridad',
      'Gestión de inventario de dispositivos y repuestos',
      'Atención al cliente y reporte oportuno a áreas administrativas'
    ],
    technologies: ['POS/Datáfonos', 'Redes', 'TCP/IP', 'Herramientas de diagnóstico', 'Excel', 'Gestión de inventario']
  },
  {
    id: '3',
    company: 'Alianza Francesa de Barranquilla (Remoto)',
    position: 'Profesor de Programación de Software · Jornada Parcial',
    period: 'Junio 2025 – Julio 2025',
    description: [
      'Docencia en programación fullstack en el bootcamp Numéricas',
      'Diseño y dictado de clases con buenas prácticas de desarrollo',
      'Acompañamiento a proyectos reales y mentoría técnica',
      'Fortalecimiento de habilidades para inserción laboral en tecnología'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git', 'GitHub', 'Buenas prácticas']
  },
  {
    id: '4',
    company: 'Colegio Salesiano San Pedro Claver · Cartagena',
    position: 'Administrador de Sistemas',
    period: 'Sep 2023 – Dic 2024',
    description: [
      'Gestión de proyectos y recursos tecnológicos (hardware, software y presupuesto)',
      'Optimización de procesos administrativos y académicos',
      'Mantenimiento de redes locales y equipos de cómputo',
      'Soporte técnico presencial y remoto a +500 usuarios',
      'Capacitaciones básicas a docentes y administrativos',
      'Mantenimiento y optimización SEO del sitio institucional en WordPress'
    ],
    technologies: ['Redes', 'Soporte técnico', 'WordPress', 'PHP', 'MySQL', 'JavaScript', 'SEO', 'Herramientas de monitoreo']
  },
  {
    id: '4',
    company: 'Colegio Salesiano San Pedro Claver · Cartagena',
    position: 'Auxiliar de Sistemas',
    period: 'Enero 2023 – Sep 2023',
    description: [
      'Gestión de proyectos y recursos tecnológicos (hardware, software y presupuesto)',
      'Optimización de procesos administrativos y académicos',
      'Mantenimiento de redes locales y equipos de cómputo',
      'Soporte técnico presencial y remoto a +500 usuarios',
      'Capacitaciones básicas a docentes y administrativos',
      'Mantenimiento y optimización SEO del sitio institucional en WordPress'
    ],
    technologies: ['Redes', 'Soporte técnico', 'WordPress', 'PHP', 'MySQL', 'JavaScript', 'SEO', 'Herramientas de monitoreo']
  },
  {
    id: '5',
    company: 'Digital Alliance · Cartagena',
    position: 'Desarrollador Web Jr. (Frontend)',
    period: 'Feb 2021 – Jul 2022',
    description: [
      'Desarrollo e implementación de interfaces con HTML, CSS, JavaScript y Vue.js',
      'Integración con APIs y optimización de la experiencia de usuario',
      'Colaboración con backend para entregar soluciones end-to-end'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'REST APIs', 'Git']
  }
];


export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },

  // Backend
  { name: 'PHP', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Firebase', category: 'backend' },

  // Herramientas
  { name: 'Git & GitHub', category: 'tools' },
  { name: 'WordPress', category: 'tools' },
  { name: 'Shopify', category: 'tools' },
  { name: 'WooCommerce', category: 'tools' },

  // Aprendiendo
  { name: 'Node.js', category: 'learning' },
  { name: 'MongoDB', category: 'learning' }
];
