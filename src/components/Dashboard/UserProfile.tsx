import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 space-y-2 border-b border-sidebar-foreground/20">
      <Avatar className="h-20 w-20 ring-2 ring-offset-4 ring-offset-sidebar ring-sidebar-foreground/50">
        <AvatarImage src="https://github.com/shadcn.png" alt="@johndon" />
        <AvatarFallback className="bg-sidebar-foreground/20 text-sidebar-foreground">JD</AvatarFallback>
      </Avatar>
      <h2 className="text-xl font-bold text-sidebar-foreground mt-4">JOHN DON</h2>
      <p className="text-sm text-sidebar-foreground/80">johndon@company.com</p>
    </div>
  );
};

export default UserProfile;
