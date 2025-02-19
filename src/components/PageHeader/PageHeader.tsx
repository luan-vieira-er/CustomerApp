import React from 'react';

import { Container, HeaderElements, Title } from './styles';
import { PageHeaderProps } from './types';

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
      </div>
      <HeaderElements>{children}</HeaderElements>
    </Container>
  );
};
