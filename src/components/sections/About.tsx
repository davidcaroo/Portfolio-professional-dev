import React from 'react';
import { Code, Rocket, Target, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-light mb-6">
              Sobre <span className="text-accent">mí</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Desarrollador apasionado por crear soluciones digitales innovadoras
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido principal */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Soy un <strong className="text-accent">desarrollador fullstack</strong> con 
                  más de 2 años de experiencia creando aplicaciones web modernas y eficientes. 
                  Mi viaje en el desarrollo web comenzó con una curiosidad natural por 
                  entender cómo funcionan las cosas detrás de una pantalla.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Me especializo en el <strong>frontend</strong> con React y Vue.js, y en el 
                  <strong> backend</strong> con PHP y MySQL. Actualmente estoy expandiendo 
                  mis habilidades aprendiendo Node.js y MongoDB para complementar mi stack tecnológico.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Mi objetivo es seguir creciendo profesionalmente en equipos dinámicos donde 
                  pueda aportar valor mientras continúo aprendiendo nuevas tecnologías y 
                  mejores prácticas de desarrollo.
                </p>
              </div>
            </div>

            {/* Valores y características */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-light dark:bg-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-light mb-2">
                  Código Limpio
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Escribo código mantenible, escalable y bien documentado siguiendo las mejores prácticas.
                </p>
              </div>

              <div className="p-6 bg-light dark:bg-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-light mb-2">
                  Innovación
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Siempre busco nuevas tecnologías y enfoques para mejorar la eficiencia y calidad.
                </p>
              </div>

              <div className="p-6 bg-light dark:bg-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-light mb-2">
                  Orientado a Resultados
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Me enfoco en entregar soluciones que generen valor real para los usuarios y el negocio.
                </p>
              </div>

              <div className="p-6 bg-light dark:bg-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-light mb-2">
                  Pasión por Aprender
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Constantemente me actualizo con las últimas tendencias y tecnologías del desarrollo web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};