import ProjectCard from './ProjectCard';

function HomePage({ isDarkMode }) {
    const projects = [
        {
            name: 'SuperOne',
            description: 'A real-time game quiz platform engineered for high-throughput, low-latency play.',
            technologies: ['Node.Js','Sails/Express', 'Redis', 'SQS', 'MySQL/Neo4j', 'WebSockets'],
            link: 'https://play.google.com/store/apps/details?id=com.superone&hl=en_IN&pli=1',
        },
        {
            name: 'RuvAI',
            description: 'Deployable AI agents with vector search and decentralized inference via Bittensor.',
            technologies: ['Python','FastAPI', 'Bittensor', 'Vector Search', 'RAG'],
            // link: '',
        },
        {
            name: 'UbiquitousInfluence',
            description: 'Automated influencer payouts to close the loop from engagement to payment.',
            technologies: ['Node.Js','GraphQL/AppSync', 'Lambda', 'MongoDB', 'Stripe'],
            link:'https://www.ubiquitousinfluence.com/'
        }
    ];

    const skills = {
        'Web Development': ['JavaScript', 'React', 'Node.js', 'GraphQL', 'WebSockets'],
        'AI & Machine Learning': ['Python', 'FastAPI', 'Bittensor', 'Vector Search', 'LLM', 'RAG', 'OpenAI'],
        'Database & Storage': ['MongoDB', 'SQL', 'PostgreSQL', 'Neo4j', 'Qdrant'],
        'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Git']
    };

    const getSkillColor = (skill) => {
        const skillLower = skill.toLowerCase();
        if (skillLower.includes('javascript') || skillLower.includes('react') || skillLower.includes('node')) {
            return isDarkMode 
                ? 'bg-yellow-900/40 border border-yellow-500/50 text-yellow-300 shadow-sm shadow-yellow-500/20' 
                : 'bg-yellow-100 border border-yellow-400 text-yellow-700 shadow-sm shadow-yellow-400/20';
        }
        if (skillLower.includes('python') || skillLower.includes('fastapi') || skillLower.includes('bittensor')) {
            return isDarkMode 
                ? 'bg-blue-900/40 border border-blue-500/50 text-blue-300 shadow-sm shadow-blue-500/20' 
                : 'bg-blue-100 border border-blue-400 text-blue-700 shadow-sm shadow-blue-400/20';
        }
        if (skillLower.includes('aws') || skillLower.includes('docker') || skillLower.includes('kubernetes')) {
            return isDarkMode 
                ? 'bg-orange-900/40 border border-orange-500/50 text-orange-300 shadow-sm shadow-orange-500/20' 
                : 'bg-orange-100 border border-orange-400 text-orange-700 shadow-sm shadow-orange-400/20';
        }
        if (skillLower.includes('mongodb') || skillLower.includes('sql') || skillLower.includes('graphql')) {
            return isDarkMode 
                ? 'bg-green-900/40 border border-green-500/50 text-green-300 shadow-sm shadow-green-500/20' 
                : 'bg-green-100 border border-green-400 text-green-700 shadow-sm shadow-green-400/20';
        }
        return isDarkMode 
            ? 'bg-purple-900/40 border border-purple-500/50 text-purple-300 shadow-sm shadow-purple-500/20' 
            : 'bg-purple-100 border border-purple-400 text-purple-700 shadow-sm shadow-purple-400/20';
    };

    return (
        <div className={`min-h-screen flex items-center justify-center px-6 py-12 ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}>
            <div className="max-w-5xl mx-auto text-center">
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <div className="text-2xl animate-wave">
                            👋
                        </div>
                        <h2 className={`text-lg font-medium mr-3 ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                            Hello, I'm
                        </h2>
                    </div>
                                        
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                        Abhishek Anand
                    </h1>

                    <h3 className={`text-2xl md:text-3xl font-semibold mb-8 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Building systems that scale beyond imagination
                        <span className="inline-block ml-2 animate-bounce">⚡</span>
                    </h3>

                    <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-300'
                    }`}>
                        I'm a Software engineer who treats latency like a bug and scale like a design constraint. I craft event-driven, real-time systems in <span className="font-semibold text-green-400">Node.js</span> and <span className="font-semibold text-yellow-400">Python</span>, stitch microservices together with queues and streams, and tune them until they sing.
                    </p>

                    <style jsx>{`
                        @keyframes wave {
                            0% { transform: rotate(0deg) translateX(0px); }
                            10% { transform: rotate(14deg) translateX(2px); }
                            20% { transform: rotate(-8deg) translateX(-2px); }
                            30% { transform: rotate(14deg) translateX(2px); }
                            40% { transform: rotate(-4deg) translateX(-1px); }
                            50% { transform: rotate(10deg) translateX(1px); }
                            60% { transform: rotate(0deg) translateX(0px); }
                            100% { transform: rotate(0deg) translateX(0px); }
                        }
                        
                        .animate-wave {
                            animation: wave 2s ease-in-out infinite;
                            transform-origin: 70% 70%;
                            display: inline-block;
                        }
                    `}</style>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    <h4 className={`text-3xl font-bold mb-8 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Skills
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <div key={index} className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                    ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-blue-500/20' 
                                    : 'bg-white/80 border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/20'
                            }`}>
                                <h5 className={`text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                                    {category}
                                </h5>
                                <div className="flex flex-wrap gap-3">
                                    {skillList.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 ${getSkillColor(skill)}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expertise Areas Section */}
                <div className="mb-16">
                    <h4 className={`text-3xl font-bold mb-8 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Areas of Expertise
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Web Application Development */}
                        <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            isDarkMode 
                                ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-green-500/20' 
                                : 'bg-white/80 border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-green-500/20'
                        }`}>
                            <div className="text-4xl mb-4 text-center">🌐</div>
                            <h5 className={`text-xl font-bold mb-3 text-center ${
                                isDarkMode ? 'text-green-400' : 'text-green-600'
                            }`}>
                                Web Application Development
                            </h5>
                            <p className={`text-sm leading-relaxed text-center ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                Building scalable, high-performance web applications with modern frameworks and real-time capabilities.
                            </p>
                        </div>

                        {/* AI Agents */}
                        <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            isDarkMode 
                                ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-purple-500/20' 
                                : 'bg-white/80 border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-purple-500/20'
                        }`}>
                            <div className="text-4xl mb-4 text-center">🤖</div>
                            <h5 className={`text-xl font-bold mb-3 text-center ${
                                isDarkMode ? 'text-purple-400' : 'text-purple-600'
                            }`}>
                                AI Agents
                            </h5>
                            <p className={`text-sm leading-relaxed text-center ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                Developing intelligent AI agents with vector search, decentralized inference, and autonomous decision-making capabilities.
                            </p>
                        </div>

                        {/* AI Integration */}
                        <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            isDarkMode 
                                ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/20' 
                                : 'bg-white/80 border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-cyan-500/20'
                        }`}>
                            <div className="text-4xl mb-4 text-center">⚡</div>
                            <h5 className={`text-xl font-bold mb-3 text-center ${
                                isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
                            }`}>
                                AI Integration in Web Apps
                            </h5>
                            <p className={`text-sm leading-relaxed text-center ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                Seamlessly integrating AI agents into web applications for intelligent, context-aware user experiences.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mb-16">
                    <h4 className={`text-3xl font-bold mb-8 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Signature Works:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} isDarkMode={isDarkMode} />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <button className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50' 
                            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50'
                    }`}>
                        Get In Touch
                    </button>
                    
                    <button className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                            ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50' 
                            : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                    }`}>
                        View My Resume
                    </button>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 animate-pulse ${
                        isDarkMode ? 'bg-blue-600' : 'bg-blue-300'
                    } blur-3xl`}></div>
                    <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 animate-pulse ${
                        isDarkMode ? 'bg-purple-600' : 'bg-purple-300'
                    } blur-3xl`} style={{animationDelay: '1s'}}></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
