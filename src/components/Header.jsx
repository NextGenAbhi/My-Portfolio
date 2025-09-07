function Header({ activeTab, setActiveTab, isDarkMode, setIsDarkMode }) {
    const tabs = [
        {id: "home", label: "Home"},
        {id: "about", label: "About"},
        {id: "projects", label: "Projects"},
        {id: "contact", label: "Contact"}
    ];

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
            isDarkMode 
                ? 'bg-gray-900/90 border-gray-700 shadow-lg shadow-blue-500/10' 
                : 'bg-white/90 border-gray-200 shadow-lg shadow-gray-500/10'
        }`}>
            <div className="px-6 py-4">
                <nav className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo with glow effect */}
                    <h1 className={`text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                        NextGenAbhi
                    </h1>
                    
                    {/* Navigation with digital effects */}
                    <div className="flex-1 flex justify-center">
                        <ul className="flex space-x-2 bg-opacity-20 backdrop-blur-sm rounded-full p-2 border border-opacity-20 border-gray-300">
                            {
                                tabs.map(tab => (
                                    <li key={tab.id}>
                                        <button 
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`
                                                relative px-6 py-3 rounded-full font-medium transition-all duration-300 
                                                group overflow-hidden
                                                ${activeTab === tab.id 
                                                    ? `${isDarkMode 
                                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50' 
                                                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-400/50'
                                                      } scale-105` 
                                                    : `${isDarkMode 
                                                        ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                                                      } hover:scale-105`
                                                }
                                                before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300
                                                ${activeTab !== tab.id ? 'hover:before:bg-gradient-to-r hover:before:from-blue-600/20 hover:before:to-purple-600/20' : ''}
                                            `}
                                        >
                                            {/* Glowing border effect */}
                                            <span className={`
                                                absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100
                                                ${isDarkMode 
                                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
                                                    : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
                                                }
                                                blur-sm
                                            `}></span>
                                            
                                            {/* Text with subtle glow */}
                                            <span className="relative z-10 group-hover:drop-shadow-lg">
                                                {tab.label}
                                            </span>
                                            
                                            {/* Digital scan line effect */}
                                            <div className={`
                                                absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent
                                                transition-all duration-500 group-hover:w-full w-0
                                            `}></div>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    
                    {/* Futuristic Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className={`
                            relative p-3 rounded-full transition-all duration-500 transform hover:scale-110 group
                            ${isDarkMode 
                                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/70' 
                                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70'
                            }
                            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r
                            ${isDarkMode 
                                ? 'before:from-yellow-300 before:to-orange-400' 
                                : 'before:from-indigo-500 before:to-purple-500'
                            }
                            before:opacity-0 hover:before:opacity-30 before:transition-opacity before:duration-300
                            before:blur-md before:-z-10
                        `}
                        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        <div className="relative z-10 transition-transform duration-300 group-hover:rotate-180">
                            {isDarkMode ? (
                                // Sun Icon (Light Mode) - More detailed
                                <svg 
                                    className="w-6 h-6" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                </svg>
                            ) : (
                                // Moon Icon (Dark Mode) - More detailed
                                <svg 
                                    className="w-6 h-6" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                        
                        {/* Pulse effect */}
                        <div className={`
                            absolute inset-0 rounded-full animate-ping opacity-20
                            ${isDarkMode ? 'bg-yellow-400' : 'bg-indigo-500'}
                        `}></div>
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;