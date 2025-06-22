import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'JAN', '2019': 1800, '2020': 3800 },
  { name: 'FEB', '2019': 2800, '2020': 4300 },
  { name: 'MAR', '2019': 1200, '2020': 3200 },
  { name: 'APR', '2019': 2400, '2020': 500 },
  { name: 'MAY', '2019': 3500, '2020': 2000 },
  { name: 'JUN', '2019': 2100, '2020': 4700 },
  { name: 'JUL', '2019': 3300, '2020': 1200 },
  { name: 'AUG', '2019': 1800, '2020': 2300 },
  { name: 'SEP', '2019': 2900, '2020': 3500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col space-y-1">
            <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
            <span className="font-bold text-muted-foreground">
              {`2019: ${payload[0].value}`}
            </span>
            <span className="font-bold text-foreground">
              {`2020: ${payload[1].value}`}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const BarChart: React.FC = () => {
  return (
    <Card className="col-span-2 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Result</CardTitle>
          <CardDescription>Performance comparison for 2019 vs 2020</CardDescription>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Check Now</Button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsBarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<CustomTooltip />} />
            <Legend iconType="circle" iconSize={8} />
            <Bar dataKey="2019" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="2020" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChart;
