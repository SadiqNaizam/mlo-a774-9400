import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Active Users', value: 45 },
  { name: 'Inactive Users', value: 55 },
];

const COLORS = ['hsl(var(--accent))', 'hsl(var(--primary))'];

const legendData = [
  'Lorem ipsum dolor sit.',
  'Consectetur adipiscing elit.',
  'Sed do eiusmod tempor.',
  'Incididunt ut labore.',
];

const PieChartCard: React.FC = () => {
  return (
    <Card className="col-span-2 lg:col-span-1 shadow-sm flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col justify-between">
        <div className="relative h-48 w-48 mx-auto mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Tooltip
                cursor={{ fill: 'transparent' }}
                contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
              />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">{data[0].value}%</span>
          </div>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground mb-6">
          {legendData.map((item, index) => (
            <p key={index} className="truncate">
              Lorem ipsum
            </p>
          ))}
        </div>
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Check Now</Button>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
