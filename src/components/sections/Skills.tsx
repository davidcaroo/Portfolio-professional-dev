import React from 'react';
import { skills } from '../../data/portfolio';

// Etiquetas legibles por categoría
const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Herramientas',
  learning: 'Aprendiendo',
} as const;

// Colores del punto de la cabecera por categoría
const categoryColors = {
  frontend: 'bg-blue-500',
  backend: 'bg-green-500',
  tools: 'bg-purple-500',
  learning: 'bg-orange-500',
} as const;

type CategoryKey = keyof typeof categoryLabels;

export const Skills: React.FC = () => {
  // Agrupar skills por categoría (sin depender de "level")
  const groupedSkills = skills.reduce<Record<CategoryKey, typeof skills>>((acc, skill) => {
    const key = skill.category as CategoryKey;
    if (!acc[key]) acc[key] = [];
    acc[key].push(skill);
    return acc;
  }, { frontend: [], backend: [], tools: [], learning: [] });

  return (
    <section id="skills" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-light mb-6">
              Mis <span className="text-accent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tecnologías y herramientas que utilizo y continúo aprendiendo.
              Sin porcentajes: prefiero que mi trabajo hable por mí.
            </p>
          </div>

          {/* Skills por categoría */}
          <div className="grid lg:grid-cols-2 gap-12">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      categoryColors[category as CategoryKey]
                    }`}
                  />
                  <h3 className="text-2xl font-bold text-primary dark:text-light">
                    {categoryLabels[category as CategoryKey]}
                  </h3>
                </div>

                {/* Lista de chips */}
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <span
                      key={`${category}-${skill.name}`}
                      className="inline-flex items-center px-3 py-1 rounded-full
                                 bg-gray-100 dark:bg-gray-800
                                 text-sm text-primary dark:text-light
                                 border border-gray-200 dark:border-gray-700
                                 hover:border-accent/60 hover:bg-accent/5 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Resumen (opcional) */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-300">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">8+</div>
              <div className="text-gray-600 dark:text-gray-300">Tecnologías</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">12+</div>
              <div className="text-gray-600 dark:text-gray-300">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-300">Ganas de aprender</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
