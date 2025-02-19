import React from 'react';

import { TemplateProvider } from './context';

export const PageComponent: React.FC = () => {
  return <div>Template</div>;
};

export const Template: React.FC = () => {
  return (
    <TemplateProvider>
      <PageComponent />
    </TemplateProvider>
  );
};
