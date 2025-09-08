import React from 'react';

function ProjectCard({ project, isDarkMode }) {
    // Define tech stack colors and icons
    const getTechStyle = (tech) => {
        const techLower = tech.toLowerCase();
        if (techLower.includes('node') || techLower.includes('express') || techLower.includes('sails')) {
            return isDarkMode 
                ? 'bg-green-900/40 border border-green-500/50 text-green-300 shadow-sm shadow-green-500/20' 
                : 'bg-green-100 border border-green-400 text-green-700 shadow-sm shadow-green-400/20';
        }
        if (techLower.includes('python') || techLower.includes('fastapi')) {
            return isDarkMode 
                ? 'bg-yellow-900/40 border border-yellow-500/50 text-yellow-300 shadow-sm shadow-yellow-500/20' 
                : 'bg-yellow-100 border border-yellow-400 text-yellow-700 shadow-sm shadow-yellow-400/20';
        }
        if (techLower.includes('redis') || techLower.includes('sqs')) {
            return isDarkMode 
                ? 'bg-red-900/40 border border-red-500/50 text-red-300 shadow-sm shadow-red-500/20' 
                : 'bg-red-100 border border-red-400 text-red-700 shadow-sm shadow-red-400/20';
        }
        if (techLower.includes('graphql') || techLower.includes('lambda') || techLower.includes('appSync')) {
            return isDarkMode 
                ? 'bg-purple-900/40 border border-purple-500/50 text-purple-300 shadow-sm shadow-purple-500/20' 
                : 'bg-purple-100 border border-purple-400 text-purple-700 shadow-sm shadow-purple-400/20';
        }
        if (techLower.includes('mysql') || techLower.includes('mongodb') || techLower.includes('neo4j')) {
            return isDarkMode 
                ? 'bg-blue-900/40 border border-blue-500/50 text-blue-300 shadow-sm shadow-blue-500/20' 
                : 'bg-blue-100 border border-blue-400 text-blue-700 shadow-sm shadow-blue-400/20';
        }
        if (techLower.includes('websocket') || techLower.includes('bittensor') || techLower.includes('vector')) {
            return isDarkMode 
                ? 'bg-cyan-900/40 border border-cyan-500/50 text-cyan-300 shadow-sm shadow-cyan-500/20' 
                : 'bg-cyan-100 border border-cyan-400 text-cyan-700 shadow-sm shadow-cyan-400/20';
        }
        return isDarkMode 
            ? 'bg-gray-700/40 border border-gray-500/50 text-gray-300' 
            : 'bg-gray-200 border border-gray-400 text-gray-700';
    };

    // Project-specific gradients and icons
    const getProjectGradient = (name) => {
        switch (name) {
            case 'SuperOne':
                return 'from-green-400 via-blue-500 to-purple-600';
            case 'RuvAI':
                return 'from-yellow-400 via-orange-500 to-red-600';
            case 'UbiquitousInfluence':
                return 'from-purple-400 via-pink-500 to-red-600';
            default:
                return 'from-blue-400 via-purple-500 to-cyan-600';
        }
    };

    const getProjectIcon = (name) => {
        switch (name) {
            case 'SuperOne':
                return '🎮';
            case 'RuvAI':
                return '🤖';
            case 'UbiquitousInfluence':
                return '📈';
            default:
                return '💻';
        }
    };

    return (
        <div className={`relative overflow-hidden rounded-xl border-2 transition-all duration-500 hover:scale-105 w-full max-w-md mx-auto group ${
            isDarkMode 
                ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-blue-500/30' 
                : 'bg-white/80 border-gray-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/20'
        }`}>
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getProjectGradient(project.name)} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Project Icon/Image Area */}
            <div className="relative p-6 pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${getProjectGradient(project.name)} flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {getProjectIcon(project.name)}
                </div>
                
                <h3 className={`text-2xl font-bold mb-3 text-center bg-gradient-to-r ${getProjectGradient(project.name)} bg-clip-text text-transparent`}>
                    {project.name}
                </h3>
                
                <p className={`text-base leading-relaxed mb-6 text-center ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                    {project.description}
                </p>
            </div>

            {/* Tech Stack Section */}
            <div className="px-6 pb-4">
                <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wider ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                    Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span 
                            key={index} 
                            className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 ${getTechStyle(tech)}`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Link Section */}
            {project.link && (
                <div className="px-6 pb-6">
                    <button 
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Button clicked, opening:', project.link);
                            window.open(project.link, '_blank', 'noopener,noreferrer');
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 cursor-pointer relative z-10 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50' 
                                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50'
                        }`}
                        aria-label={`View ${project.name} project`}
                    >
                        <span className="mr-2">🚀</span>
                        View Project
                    </button>
                </div>
            )}

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                isDarkMode ? 'border-blue-400/50' : 'border-blue-500/50'
            }`}></div>
        </div>
    );
}

export default ProjectCard;
