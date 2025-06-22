import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import BarChart from '@/components/Dashboard/BarChart';
import LineGraph from '@/components/Dashboard/LineGraph';
import PieChartCard from '@/components/Dashboard/PieChartCard';

/**
 * The main dashboard page for the User Dashboard Clone application.
 * This page assembles all the major data visualization components
 * within the main application layout.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        {/* Section 1: Key Performance Indicator Stats */}
        <StatsCardGrid />

        {/* 
          Section 2: Bar Chart. 
          Wrapped in a grid to respect its internal `col-span-2` class, 
          ensuring it renders as a full-width element. 
        */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <BarChart />
        </div>

        {/* 
          Section 3: Line Graph and Pie Chart.
          This grid is specifically a 3-column layout on large screens to accommodate
          the `LineGraph` (which takes 2 columns) and `PieChartCard` (which takes 1 column),
          placing them side-by-side as shown in the design.
        */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          <LineGraph />
          <PieChartCard />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
