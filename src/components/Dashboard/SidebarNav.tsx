import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, FolderKanban, MessageSquare, Bell, MapPin, AreaChart } from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'home', icon: Home, href: '#' },
  { name: 'file', icon: FolderKanban, href: '#' },
  { name: 'messages', icon: MessageSquare, href: '#' },
  { name: 'notification', icon: Bell, href: '#' },
  { name: 'location', icon: MapPin, href: '#' },
  { name: 'graph', icon: AreaChart, href: '#' },
];

const SidebarNav: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>('home');

  return (
    <nav className="flex-1 px-4 py-6">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Button
              variant="ghost"
              onClick={() => setActiveItem(item.name)}
              className={cn(
                'w-full justify-start text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-foreground/10',
                'transition-colors duration-200',
                activeItem === item.name && 'bg-sidebar-foreground/10 text-sidebar-foreground'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              <span className="capitalize">{item.name}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
