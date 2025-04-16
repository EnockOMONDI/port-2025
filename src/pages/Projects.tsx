import React, { useState, useEffect } from 'react';
import { ProjectCategory } from '../types/Project';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image_url: string;
  results_achieved: string;
  github_url?: string;
  website_url?: string;
  completion_date: string;
}

const API_URL = import.meta.env.DEV 
  ? 'http://localhost:3000/api'
  : '/api';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/projects`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#970d0d' }}>
        <div className="text-white text-xl">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#970d0d' }}>
        <div className="text-white text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center py-16"
      style={{ backgroundColor: '#970d0d' }}
    >
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <div className="text-white text-xl mb-2">Project Portfolio</div>
          <h1 className="text-white font-extrabold text-6xl md:text-7xl leading-tight mb-8">
            HIGHLIGHTED<br />PROJECTS
          </h1>
        </div>
        <ul className="text-white text-3xl font-light list-disc ml-8">
          <li 
            className={`cursor-pointer ${selectedCategory === 'all' ? 'text-yellow-300' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Projects
          </li>
          <li 
            className={`cursor-pointer ${selectedCategory === 'Graphic Design' ? 'text-yellow-300' : ''}`}
            onClick={() => setSelectedCategory('Graphic Design')}
          >
            Graphic Design
          </li>
          <li 
            className={`cursor-pointer ${selectedCategory === 'Website Projects' ? 'text-yellow-300' : ''}`}
            onClick={() => setSelectedCategory('Website Projects')}
          >
            Website Projects
          </li>
          <li 
            className={`cursor-pointer ${selectedCategory === 'Digital Campaign' ? 'text-yellow-300' : ''}`}
            onClick={() => setSelectedCategory('Digital Campaign')}
          >
            Digital Campaign
          </li>
        </ul>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white bg-opacity-10 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <img 
              src={project.image_url} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-yellow-300 text-sm font-semibold mb-2">
                {project.category}
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-white text-opacity-80 mb-4">
                {project.description}
              </p>
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-4">
                {project.website_url && (
                  <a
                    href={project.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:text-yellow-400"
                  >
                    View Live
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:text-yellow-400"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <span
          className="flex justify-center items-center rounded-full cursor-pointer hover:scale-110 transition-transform"
          style={{
            backgroundColor: '#ffe23f',
            width: 48,
            height: 48,
          }}
        >
          <svg width="24" height="24" fill="none" stroke="#970d0d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v8M8 16l4 4 4-4" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Projects;