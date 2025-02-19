import React from 'react';

import { useMobile } from 'context/Mobile';

import { ContainerTemplate } from './styles';

export interface PageTemplate {
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplate> = ({ children }) => {
  const { mobile } = useMobile();

  return <ContainerTemplate mobile={mobile}>{children}</ContainerTemplate>;
};
