# 🌟 Portfolio - David Caro

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> Portfolio profesional de David Caro, Fullstack Developer Junior especializado en React, Vue.js, PHP y WordPress.

## 🚀 Demo en Vivo

🔗 **[Ver Portfolio](https://davidcaro.me/)**

## 📋 Descripción

Este es mi portfolio personal desarrollado con tecnologías modernas, diseñado para mostrar mis habilidades, proyectos y experiencia profesional como desarrollador web. El sitio cuenta con un diseño responsive, modo oscuro/claro y está optimizado para SEO.

## ✨ Características

### 🎨 **Diseño y UX**
- ✅ Diseño moderno y minimalista
- ✅ Modo oscuro/claro con persistencia
- ✅ Completamente responsive
- ✅ Animaciones y transiciones suaves
- ✅ Efectos visuales con gradientes
- ✅ Tipografía personalizada (Inter + Fira Code)

### 🛠️ **Funcionalidades**
- ✅ Navegación con scroll spy
- ✅ Proyectos con filtros por categoría
- ✅ Timeline de experiencia profesional
- ✅ Skills organizadas por categorías
- ✅ Formulario de contacto funcional
- ✅ Descarga de CV en PDF
- ✅ Enlaces a redes sociales
- ✅ SEO optimizado

### 📱 **Responsive Design**
- ✅ Mobile First approach
- ✅ Tablet y desktop optimizado
- ✅ Menú hamburguesa en móviles
- ✅ Grids adaptativos

## 🏗️ Arquitectura del Proyecto

```
Portfolio/
├── public/                      # Archivos estáticos
│   ├── images/                  # Imágenes de proyectos
│   ├── Currículum - David Caro Morales.pdf
│   └── favicons/               # Iconos y manifest
├── src/
│   ├── components/
│   │   ├── common/             # Componentes reutilizables
│   │   │   └── Button.tsx      # Componente Button personalizado
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── Header.tsx      # Navegación principal
│   │   │   └── Footer.tsx      # Footer con enlaces
│   │   └── sections/           # Secciones del portfolio
│   │       ├── Hero.tsx        # Sección principal
│   │       ├── About.tsx       # Sobre mí
│   │       ├── Skills.tsx      # Habilidades técnicas
│   │       ├── Projects.tsx    # Proyectos destacados
│   │       ├── Experience.tsx  # Experiencia laboral
│   │       └── Contact.tsx     # Formulario de contacto
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Contexto para tema oscuro/claro
│   ├── data/
│   │   └── portfolio.ts        # Datos estáticos (proyectos, experiencia)
│   ├── hooks/
│   │   ├── useGitHub.ts        # Hook para API de GitHub
│   │   └── useScrollSpy.ts     # Hook para navegación activa
│   ├── types/
│   │   └── index.ts            # Tipos TypeScript
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── index.html                 # HTML principal con SEO
├── package.json               # Dependencias
├── tailwind.config.js         # Configuración de Tailwind
├── vite.config.ts            # Configuración de Vite
└── README.md                 # Este archivo
```

## 🛠️ Stack Tecnológico

### **Frontend**
- **React 18.3.1** - Biblioteca principal
- **TypeScript 5.5.3** - Tipado estático
- **Vite 5.4.2** - Build tool y dev server
- **TailwindCSS 3.4.1** - Framework CSS

### **Librerías y Herramientas**
- **Lucide React** - Iconos SVG
- **Formspree** - Servicio de formularios
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento CSS

### **APIs Integradas**
- **GitHub API** - Repositorios recientes
- **Formspree API** - Formulario de contacto

## 📊 Datos del Portfolio

### **Proyectos** 
- **4 Fullstack** - Aplicaciones completas con frontend y backend
- **6 Frontend** - Interfaces y aplicaciones client-side
- **3 Backend** - APIs y servicios del lado del servidor

### **Experiencia Profesional** 
- Freelance Developer (2022 - Presente)
- Gestor Integral de Soporte - CrediBanco (2025)
- Profesor de Programación - Alianza Francesa (2025)
- Administrador de Sistemas - Colegio Salesiano (2023-2024)
- Desarrollador Frontend Jr. - Digital Alliance (2021-2022)

### **Skills Técnicas** 
- **Frontend**: HTML5, CSS3, JavaScript, React, Vue.js, TypeScript
- **Backend**: PHP, MySQL, Laravel, Firebase
- **Herramientas**: Git, WordPress, Shopify, WooCommerce
- **Aprendiendo**: Node.js, MongoDB

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- Node.js (v18 o superior)
- npm o yarn

### **Instalación**

```bash
# Clonar el repositorio
git clone https://github.com/davidcaroo/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### **Scripts Disponibles**

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en http://localhost:5173

# Build de producción
npm run build        # Genera build optimizado en /dist

# Preview del build
npm run preview      # Previsualiza el build de producción

# Linting
npm run lint         # Ejecuta ESLint para verificar código
```

## ⚙️ Configuración

### **Variables de Entorno**
El proyecto utiliza configuraciones públicas y no requiere variables de entorno adicionales.

### **Formspree Setup**
Para el formulario de contacto, se utiliza Formspree con el endpoint configurado en `src/components/sections/Contact.tsx`:

```typescript
const [state, handleSubmit] = useForm("mrbleawe"); // Form ID de Formspree
```

### **Personalización del Tema**
Los colores y estilos se pueden personalizar en:
- `tailwind.config.js` - Configuración de TailwindCSS
- `src/index.css` - Variables CSS personalizadas

```css
:root {
  --color-primary: #0C0C0C;
  --color-light: #FCFCFC;
  --color-accent: #00FF7F;
}
```

## 📱 Responsive Design

El portfolio está optimizado para todos los dispositivos:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 SEO y Performance

### **SEO Optimizado**
- ✅ Meta tags completos
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ URLs semánticas
- ✅ Sitemap XML

### **Performance**
- ✅ Lazy loading de imágenes
- ✅ Optimización de bundles con Vite
- ✅ Compresión de assets
- ✅ Fuentes optimizadas
- ✅ Minificación CSS/JS

## 🔧 Desarrollo

### **Estructura de Componentes**
Los componentes siguen el patrón de composición de React:

```typescript
// Ejemplo de componente tipado
interface ProjectProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  // Lógica del componente
};
```

### **Manejo de Estado**
- **Context API** para tema global
- **useState/useEffect** para estado local
- **Custom hooks** para lógica reutilizable

### **Convenciones de Código**
- **PascalCase** para componentes
- **camelCase** para variables y funciones
- **kebab-case** para archivos CSS
- **TypeScript strict mode** habilitado

## 🚢 Deployment

### **Build de Producción**
```bash
npm run build
```

### **Plataformas Recomendadas**
- **Vercel** (Recomendada para React)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

### **Configuración de Deploy**
El proyecto está configurado para deployment estático. Asegúrate de:
- Configurar redirects para SPA
- Habilitar HTTPS
- Configurar dominio personalizado

## 📄 Licencia

Este proyecto es de uso personal y profesional para David Caro. El código está disponible para referencia y aprendizaje.

## 👨‍💻 Autor

**David Caro**
- 🌐 Website: [davidcaro.me](https://davidcaro.me/)
- 🐙 GitHub: [@davidcaroo](https://github.com/davidcaroo)
- 💼 LinkedIn: [ingdavid-caro](https://www.linkedin.com/in/ingdavid-caro/)
- 📧 Email: dacamo0502@gmail.com
- 📱 WhatsApp: [+57 323 223 1834](https://wa.me/573232231834)

---

## 🤝 Contribuciones

¿Encontraste algún bug o tienes sugerencias de mejora? ¡Abre un issue o envía un pull request!

## ⭐ ¿Te gustó el proyecto?

Si este portfolio te sirvió como inspiración o referencia, no olvides darle una ⭐ al repositorio.

---

<div align="center">
  <p>Hecho con ❤️ y mucho ☕ por David Caro</p>
  <p>© 2025 David Caro. Todos los derechos reservados.</p>
</div>
