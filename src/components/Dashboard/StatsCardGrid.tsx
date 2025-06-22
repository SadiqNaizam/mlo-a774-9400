import React from 'react';
import StatCard from './StatCard';
import { DollarSign, Share2, ThumbsUp, Star } from 'lucide-react';

const statsData = [
  {
    title: 'Earning',
    value: '$ 628',
    IconComponent: DollarSign,
    isPrimary: true,
  },
  {
    title: 'Share',
    value: '2434',
    IconComponent: Share2,
    isPrimary: false,
  },
  {
    title: 'Likes',
    value: '1259',
    IconComponent: ThumbsUp,
    isPrimary: false,
  },
  {
    title: 'Rating',
    value: '8,5',
    IconComponent: Star,
    isPrimary: false,
  },
];

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          IconComponent={stat.IconComponent}
          isPrimary={stat.isPrimary}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
