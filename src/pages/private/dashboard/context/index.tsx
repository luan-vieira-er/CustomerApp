import React, { createContext, useContext } from 'react';

import { DashboardContextData } from '../types';

interface Props {
  children: React.ReactElement;
}

const DashboardContext = createContext<DashboardContextData>(
  {} as DashboardContextData,
);

const DashboardProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <DashboardContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

function useDashboard(): DashboardContextData {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error('useDashboard must be used within an DashboardContext');
  }
  return context;
}

export { DashboardProvider, useDashboard };
