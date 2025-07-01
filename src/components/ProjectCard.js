import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleProjectInfo = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="project-card bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 sm:h-56 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{project.title}</h3>
        
        {/* Description with a fixed min-height and line-clamp for visual balance */}
        <p className="text-gray-600 text-sm mb-4 min-h-[72px] line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool, index) => (
            <span 
              key={index} 
              className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          {project.website && (
            <a 
              href={project.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 text-xs sm:text-sm transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" />
              Website
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 text-xs sm:text-sm transition-colors"
            >
              <FaGithub className="mr-2" />
              Source
            </a>
          )}
        </div>

        {/* Pushes the button to the bottom */}
        <div className="mt-auto">
          <button 
            onClick={handleProjectInfo} 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded text-sm sm:text-base font-semibold transition-colors"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;