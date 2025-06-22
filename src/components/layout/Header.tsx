import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  onMenuClick: () => void;
  className?: string;
}

/**
 * Layout component for the application header.
 * It handles layout-specific concerns like positioning (sticky) and acts as a wrapper
 * for the more specific TopHeader organism, passing down necessary props.
 */
const Header: React.FC<HeaderProps> = ({ onMenuClick, className }) => {
  return (
    <div className={cn('sticky top-0 z-40', className)}>
      <TopHeader onMenuClick={onMenuClick} />
    </div>
  );
};

export default Header;