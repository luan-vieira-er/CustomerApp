import React from 'react';

import { DashboardProvider } from './context';

export const PageComponent: React.FC = () => {
  return <div>Dashboard</div>;
};

export const Dashboard: React.FC = () => {
  return (
    <DashboardProvider>
      <PageComponent />
    </DashboardProvider>
  );
};
