import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  IconComponent: React.ElementType;
  isPrimary?: boolean;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, IconComponent, isPrimary = false, className }) => {
  const iconColor = isPrimary ? 'text-primary-foreground/80' : 'text-accent';
  const iconFill = isPrimary ? 'fill-transparent' : 'fill-accent';

  return (
    <Card className={cn(
      'shadow-sm',
      isPrimary ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground',
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <IconComponent className={cn('h-5 w-5', iconColor, title === 'Rating' || title === 'Likes' ? iconFill : '')} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
