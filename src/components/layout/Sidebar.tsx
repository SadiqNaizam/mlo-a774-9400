import React from 'react';
import { cn } from '@/lib/utils';
import UserProfile from '../Dashboard/UserProfile';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

/**
 * Sidebar component that serves as a container for user profile and navigation.
 * It uses a distinct background color defined in the theme.
 */
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        'flex h-full flex-col bg-sidebar text-sidebar-foreground',
        className
      )}
    >
      <UserProfile />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;