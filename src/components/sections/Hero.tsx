import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-light via-gray-50 to-gray-100 dark:from-dark dark:via-gray-900 dark:to-gray-800"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <br></br>
          <br></br>
          {/* Saludo */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
              👋 ¡Hola! Soy
            </span>
          </div>

          {/* Nombre principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-light mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              David Caro
            </span>
          </h1>

          {/* Título profesional */}
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-accent font-semibold">Fullstack Developer</span> Junior
            <br />
            <span className="text-lg">Especializado en React, Vue.js y PHP</span>
          </h2>

          {/* Descripción */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Desarrollador web apasionado con experiencia en tecnologías modernas.
            Me especializo en crear aplicaciones web eficientes, escalables y con
            excelente experiencia de usuario.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              icon={ExternalLink}
            >
              Ver mis proyectos
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              icon={Mail}
            >
              Contactar
            </Button>
          </div>

          {/* Enlaces sociales */}
          <div className="flex justify-center space-x-6 mb-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/davidcaroo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de GitHub de David Caro"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-light hover:bg-accent hover:text-dark transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://linkedin.com/in/ingdavid-caro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de LinkedIn de David Caro"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-light hover:bg-accent hover:text-dark transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:dacamo0502@gmail.com"
              aria-label="Enviar correo electrónico a David Caro"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-light hover:bg-accent hover:text-dark transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <br />
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            aria-label="Desplazarse hacia la sección Sobre mí"
            className="p-2 rounded-full bg-accent/20 text-accent hover:bg-accent hover:text-dark transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};