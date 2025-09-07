import ProjectCard from './ProjectCard';

function HomePage({ isDarkMode }) {
    const projects = [
        {
            name: 'SuperOne',
            description: 'A real-time game quiz platform engineered for high-throughput, low-latency play.',
            technologies: ['Node.Js','Sails/Express', 'Redis', 'SQS', 'MySQL/Neo4j', 'WebSockets'],
        },
        {
            name: 'RuvAI',
            description: 'Deployable AI agents with vector search and decentralized inference via Bittensor.',
            technologies: ['Python','FastAPI', 'Bittensor', 'Vector Search'],
        },
        {
            name: 'UbiquitousInfluence',
            description: 'Automated influencer payouts to close the loop from engagement to payment.',
            technologies: ['Node.Js','GraphQL/AppSync', 'Lambda', 'MongoDB', 'Stripe'],
        },
    ];

    return (
        <div className={`min-h-screen flex items-center justify-center px-6 py-12 ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}>
            <div className="max-w-5xl mx-auto text-center">
                {/* Hero Section */}
                <div className="mb-16">
                    {/* Greeting */}
                    <h2 className={`text-lg font-medium mb-4 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                        Hello, I'm
                    </h2>
                                        
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                        Abhishek Anand
                    </h1>

                    <h3 className={`text-2xl md:text-3xl font-semibold mb-8 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Software Engineer &mdash; Projects that don't blink 
                        <span className="inline-block ml-2 animate-bounce">🤖</span>
                    </h3>

                    {/* Experience Description */}
                    <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-300'
                    }`}>
                        I’m a backend engineer who treats latency like a bug and scale like a design constraint. I craft event-driven, real-time systems in <span className="font-semibold text-green-400">Node.js</span> and <span className="font-semibold text-yellow-400">Python</span>, stitch microservices together with queues and streams, and tune them until they sing.
                    </p>
                </div>

                {/* Projects Section */}
                <div className="mb-16">
                    <h4 className={`text-3xl font-bold mb-8 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Things I’m Proud Of
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
