import React, { createContext, useContext } from 'react';

import { TemplateContextData } from '../types';

interface Props {
  children: React.ReactElement;
}

const TemplateContext = createContext<TemplateContextData>(
  {} as TemplateContextData,
);

const TemplateProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <TemplateContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

function useTemplate(): TemplateContextData {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error('useTemplate must be used within an TemplateContext');
  }
  return context;
}

export { TemplateProvider, useTemplate };
