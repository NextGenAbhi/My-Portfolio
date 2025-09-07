import React from 'react';

function ProjectCard({ project, isDarkMode }) {
    return (
        <div className={`p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 w-full max-w-md mx-auto ${
            isDarkMode 
                ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-blue-500/20' 
                : 'bg-white border-gray-200 hover:bg-gray-50 hover:shadow-lg hover:shadow-blue-500/20'
        }`}>
            <h3 className={`text-2xl font-bold mb-3 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
                {project.name}
            </h3>
            <p className={`text-lg mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        isDarkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                    }`}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
