import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface TopHeaderProps {
  onMenuClick?: () => void; 
}

const TopHeader: React.FC<TopHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex h-16 items-center justify-between px-6 bg-background border-b">
      <h1 className="text-xl font-semibold text-foreground">Dashboard User</h1>
      <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <Button variant="ghost" size="icon" className="hidden md:flex">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </Button>
    </header>
  );
};

export default TopHeader;
