import React from 'react';

import AuthProvider from '../../context/AuthProvider';

import {
  ButtonSignOut,
  DivSignOut,
  StyledTitle,
} from './styles';

export const SignOut: React.FC = () => {
  const { signOut } = React.useContext(AuthProvider);
  return (
    <DivSignOut>
      <ButtonSignOut data-testid='btnSignOut' onClick={signOut}>
        <StyledTitle>Sair</StyledTitle>
      </ButtonSignOut>
    </DivSignOut>
  );
};
