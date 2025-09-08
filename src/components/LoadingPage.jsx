import React, { useState, useEffect } from 'react';

function LoadingPage({ isDarkMode, onLoadComplete }) {
    const [progress, setProgress] = useState(0);
    const [displayText, setDisplayText] = useState('Initializing...');

    useEffect(() => {
        const loadingTexts = [
            'Initializing...',
            'Loading projects...',
            'Connecting to servers...',
            'Optimizing performance...',
            'Crafting experience...',
            'Almost ready...',
            'Welcome!'
        ];

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random() * 3 + 1; // Random increment between 1-4
                
                // Update loading text based on progress
                const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1));
                setDisplayText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
                
                if (newProgress >= 100) {
                    clearInterval(progressInterval);
                    // Wait a moment before redirecting
                    setTimeout(() => {
                        onLoadComplete();
                    }, 800);
                    return 100;
                }
                return newProgress;
            });
        }, 50); // Update every 50ms for smooth animation

        return () => clearInterval(progressInterval);
    }, [onLoadComplete]);

    return (
        <div className={`min-h-screen flex items-center justify-center px-6 ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
            <div className="max-w-md w-full text-center">
                {/* Logo/Name Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                        Loading you to the world of NextGenAbhi...
                    </h1>
                    <p className={`text-lg font-medium ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Software Engineer
                    </p>
                </div>

                {/* Loading Animation */}
                <div className="mb-8">
                    {/* Progress Bar Container */}
                    <div className={`w-full h-3 rounded-full border-2 overflow-hidden ${
                        isDarkMode 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-gray-100 border-gray-200'
                    }`}>
                        {/* Progress Bar Fill */}
                        <div 
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-150 ease-out relative overflow-hidden"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                    </div>
                    
                    {/* Progress Percentage */}
                    <div className="flex justify-between items-center mt-4">
                        <span className={`text-sm font-medium ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            {displayText}
                        </span>
                        <span className={`text-sm font-bold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                            {Math.round(progress)}%
                        </span>
                    </div>
                </div>

                {/* Loading Dots Animation */}
                <div className="flex justify-center space-x-2">
                    <div className={`w-2 h-2 rounded-full animate-bounce ${
                        isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                    }`} style={{animationDelay: '0ms'}}></div>
                    <div className={`w-2 h-2 rounded-full animate-bounce ${
                        isDarkMode ? 'bg-purple-400' : 'bg-purple-500'
                    }`} style={{animationDelay: '150ms'}}></div>
                    <div className={`w-2 h-2 rounded-full animate-bounce ${
                        isDarkMode ? 'bg-cyan-400' : 'bg-cyan-500'
                    }`} style={{animationDelay: '300ms'}}></div>
                </div>

                {/* Floating Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-1/4 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse ${
                        isDarkMode ? 'bg-blue-600' : 'bg-blue-300'
                    } blur-2xl`}></div>
                    <div className={`absolute bottom-1/4 right-10 w-40 h-40 rounded-full opacity-10 animate-pulse ${
                        isDarkMode ? 'bg-purple-600' : 'bg-purple-300'
                    } blur-2xl`} style={{animationDelay: '1s'}}></div>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-10 animate-pulse ${
                        isDarkMode ? 'bg-cyan-600' : 'bg-cyan-300'
                    } blur-2xl`} style={{animationDelay: '2s'}}></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;
