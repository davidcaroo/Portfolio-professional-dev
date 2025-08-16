import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const navigationItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Contacto', href: '#contact' }
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'projects', 'experience', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Currículum - David Caro Morales.pdf';
    link.download = 'Currículum - David Caro Morales.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-light/95 dark:bg-dark/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary dark:text-light">
            <span className="text-accent">&lt;</span>
            DevPortfolio
            <span className="text-accent">/&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative py-2 px-4 text-sm font-medium transition-colors duration-300 hover:text-accent ${activeSection === item.href.slice(1)
                  ? 'text-accent'
                  : 'text-primary dark:text-light'
                  }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary dark:text-light hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={theme === 'light' ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <button
              onClick={downloadCV}
              className="inline-flex items-center px-4 py-2 bg-accent text-dark font-medium rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Descargar CV
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="md:hidden p-2 rounded-lg text-primary dark:text-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-2 px-4 text-sm font-medium transition-colors duration-300 hover:text-accent ${activeSection === item.href.slice(1)
                    ? 'text-accent'
                    : 'text-primary dark:text-light'
                    }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 py-2 px-4 text-sm font-medium text-primary dark:text-light hover:text-accent transition-colors duration-300"
                >
                  {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span>{theme === 'light' ? 'Modo oscuro' : 'Modo claro'}</span>
                </button>

                <button
                  onClick={downloadCV}
                  className="flex items-center space-x-2 py-2 px-4 bg-accent text-dark font-medium rounded-lg hover:bg-accent/90 transition-colors duration-300"
                >
                  <Download className="h-4 w-4" />
                  <span>CV</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>

  );
};