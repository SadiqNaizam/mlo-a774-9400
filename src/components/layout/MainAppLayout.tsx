import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * The main application layout component that orchestrates the sidebar, header, and main content area.
 * It implements a responsive design where the sidebar is fixed on desktop and a slide-in overlay on mobile.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* --- Desktop Sidebar (Visible on md screens and up) --- */}
      <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <Sidebar />
      </aside>

      {/* --- Mobile Sidebar (Overlay, toggled by state) --- */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          {/* Overlay to close sidebar on click */}
          <div 
            className="fixed inset-0 bg-black/60" 
            aria-hidden="true"
            onClick={toggleSidebar}
          ></div>
          
          {/* Sidebar panel with slide-in animation */}
          <div className="fixed inset-y-0 left-0 z-50 flex w-64 animate-in slide-in-from-left duration-300">
            <Sidebar />
          </div>
        </div>
      )}
      
      {/* --- Main Content & Header Area --- */}
      <div className="flex flex-col md:pl-64">
        <Header onMenuClick={toggleSidebar} />
        <main className="flex flex-1 flex-col p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;