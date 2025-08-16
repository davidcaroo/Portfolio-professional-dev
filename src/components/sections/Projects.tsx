import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { Project } from '../../types';
import { Button } from '../common/Button';

const categories = [
  { key: 'all', label: 'Todos' },
  { key: 'fullstack', label: 'Fullstack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' }
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-light mb-6">
              Mis <span className="text-accent">Proyectos</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades y experiencia
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.key
                    ? 'bg-accent text-dark shadow-lg'
                    : 'bg-light dark:bg-dark text-primary dark:text-light hover:bg-accent/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grid de proyectos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Botón para mostrar más */}
          {filteredProjects.length > 6 && (
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                icon={Filter}
              >
                {showAll ? 'Mostrar menos' : `Ver ${filteredProjects.length - 6} proyectos más`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-light dark:bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Imagen del proyecto */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-accent text-dark text-xs font-bold rounded-full">
              Destacado
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            project.category === 'fullstack' ? 'bg-blue-100 text-blue-800' :
            project.category === 'frontend' ? 'bg-green-100 text-green-800' :
            'bg-purple-100 text-purple-800'
          }`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary dark:text-light mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-primary dark:text-light text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-primary dark:text-light text-xs font-medium rounded-full">
              +{project.technologies.length - 4} más
            </span>
          )}
        </div>

        {/* Enlaces */}
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors duration-300"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">Código</span>
            </a>
          )}
          
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors duration-300"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};