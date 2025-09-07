import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";

function Layout() {
    const [activeTab, setActiveTab] = useState("home");
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

    const renderContent = () => {
        switch (activeTab) {
            case "home":
                return <HomePage isDarkMode={isDarkMode} />;
            case "about":
                return <div className="p-8"><h2 className="text-3xl font-bold">About Me</h2><p className="mt-4">About section coming soon...</p></div>;
            case "projects":
                return <div className="p-8"><h2 className="text-3xl font-bold">Projects</h2><p className="mt-4">Projects section coming soon...</p></div>;
            case "contact":
                return <div className="p-8"><h2 className="text-3xl font-bold">Contact</h2><p className="mt-4">Contact section coming soon...</p></div>;
            default:
                return <HomePage isDarkMode={isDarkMode} />;
        }
    }

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          <Header 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <main className="flex-1">
            {renderContent()}
          </main>
          <Footer isDarkMode={isDarkMode} />
        </div>
    );
}

export default Layout;