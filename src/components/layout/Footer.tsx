import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-gray-900 text-light relative">

      {/* Botón de scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent text-dark rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors duration-300 shadow-lg"
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Información personal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-accent">&lt;</span>
                David Caro
                <span className="text-accent">/&gt;</span>
              </h3>
              <p className="text-gray-300">
                Fullstack Developer especializado en crear experiencias web
                excepcionales con tecnologías modernas.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/davidcaro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil de GitHub de David Caro"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent hover:text-dark transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/davidcaro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil de LinkedIn de David Caro"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent hover:text-dark transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dacamo0502@gmail.com"
                aria-label="Enviar correo electrónico a David Caro"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent hover:text-dark transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Enlaces rápidos</h4>
            <nav className="space-y-3">
              {[
                { name: 'Sobre mí', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Proyectos', href: '#projects' },
                { name: 'Experiencia', href: '#experience' },
                { name: 'Contacto', href: '#contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Desarrollo Frontend</li>
              <li>Desarrollo Backend</li>
              <li>Desarrollo Fullstack</li>
              <li>WordPress & WooCommerce</li>
              <li>Shopify Development</li>
              <li>Consultoría Web</li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>&copy; {currentYear} David Caro. Todos los derechos reservados.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-300">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>y mucho café!</span>
              <Coffee className="h-4 w-4 text-yellow-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/3 rounded-full blur-3xl"></div>
    </footer>
  );
};