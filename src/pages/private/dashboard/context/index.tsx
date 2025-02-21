import React, { createContext, useContext } from 'react';

import { DashboardContextData } from '../types';
import { IErrors } from 'types';

interface Props {
  children: React.ReactElement;
}

const DashboardContext = createContext<DashboardContextData>(
  {} as DashboardContextData,
);

const DashboardProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading ] = React.useState<boolean>(false);
  const [listErrors, setListErrors] = React.useState<IErrors[] | null>(null);

  return (
    <DashboardContext.Provider
      value={{
        loading,
        setLoading,
        listErrors,
        setListErrors
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
