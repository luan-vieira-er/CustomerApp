import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import AuthProvider from '../../context/AuthProvider';

import {
  ButtonSignOut,
  DivSignOut,
  StyledExitIcon,
  StyledTitle,
} from './styles';

export const SingOut: React.FC = () => {
  const { signOut } = React.useContext(AuthProvider);
  return (
    <DivSignOut>
      <ButtonSignOut data-testid='btnSignOut' onClick={signOut}>
        <StyledExitIcon icon={faArrowRightFromBracket} />
        <StyledTitle>Sair</StyledTitle>
      </ButtonSignOut>
    </DivSignOut>
  );
};
