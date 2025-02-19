import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '../../context/Theme';

import {
  StyledContainerIcon,
  StyledIcon,
  StyledSwitch,
  StyledToggle,
} from './styles';

export const ThemeSwitch: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <StyledSwitch onClick={changeTheme} isDark={theme.isLightMode}>
      <StyledToggle isDark={theme.isLightMode}>
        <StyledContainerIcon>
          <StyledIcon icon={theme.isLightMode ? faSun : faMoon} size='1x' />
        </StyledContainerIcon>
      </StyledToggle>
    </StyledSwitch>
  );
};
