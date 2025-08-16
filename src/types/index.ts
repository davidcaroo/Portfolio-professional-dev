// Tipos TypeScript para el portfolio
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'learning';

export interface Skill {
  name: string;
  category: SkillCategory;
  /** opcional: lo dejamos por compatibilidad, pero la UI ya no lo usa */
  level?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export type Theme = 'light' | 'dark';
