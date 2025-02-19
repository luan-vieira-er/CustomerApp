import React from 'react';
import { ContainerExtraLarge, ContainerLarge, ContainerMedium } from './styles';
import { ContainerProps } from './types';

export const Container: React.FC<ContainerProps> = ({
  type = 'md',
  children,
}) => {
  if (type === 'md') {
    return <ContainerMedium>{children}</ContainerMedium>;
  }
  if (type === 'lg') {
    return <ContainerLarge>{children}</ContainerLarge>;
  }
  if (type === 'xl') {
    return <ContainerExtraLarge>{children}</ContainerExtraLarge>;
  }
  return null;
};
