import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

const data = [
  { name: 'Jan', lorem: 4000, dolor: 2400 },
  { name: 'Feb', lorem: 3000, dolor: 1398 },
  { name: 'Mar', lorem: 2000, dolor: 9800 },
  { name: 'Apr', lorem: 2780, dolor: 3908 },
  { name: 'May', lorem: 1890, dolor: 4800 },
  { name: 'Jun', lorem: 2390, dolor: 3800 },
  { name: 'Jul', lorem: 3490, dolor: 4300 },
  { name: 'Aug', lorem: 2800, dolor: 3200 },
  { name: 'Sep', lorem: 4100, dolor: 2500 },
  { name: 'Oct', lorem: 3100, dolor: 5200 },
  { name: 'Nov', lorem: 2500, dolor: 6500 },
  { name: 'Dec', lorem: 3800, dolor: 4800 },
];

const LineGraph: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date('2024-06-25'));

  return (
    <Card className="col-span-2 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle>Lorem Ipsum</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent"></span>Lorem Ipsum</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary"></span>Dolor Amet</div>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorLorem" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorDolor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
              <Area type="monotone" dataKey="lorem" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorLorem)" strokeWidth={2}/>
              <Area type="monotone" dataKey="dolor" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorDolor)" strokeWidth={2}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LineGraph;
