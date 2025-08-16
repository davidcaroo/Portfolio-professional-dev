import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-light mb-6">
              Mi <span className="text-accent">Experiencia</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              El camino profesional que me ha llevado hasta aquí
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-0.5"></div>

            {/* Experiencias */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                  {/* Indicador de timeline */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 z-10 shadow-lg">
                    <div className="w-6 h-6 bg-accent/20 rounded-full absolute -top-1.5 -left-1.5 animate-ping"></div>
                  </div>

                  {/* Contenido */}
                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Header de la experiencia */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 text-accent mb-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{experience.period}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-primary dark:text-light mb-2">
                          {experience.position}
                        </h3>

                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                      </div>

                      {/* Descripción */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {experience.description.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tecnologías */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary dark:text-light mb-4">
                ¿Quieres ser parte de mi próxima experiencia?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Estoy abierto a nuevas oportunidades y colaboraciones
              </p>
              <a
                href="https://wa.me/573232231834?text=Hola%20David%2C%20quiero%20hablar%20contigo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-accent text-dark font-medium px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors duration-300"
              >
                <span>Hablemos</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};