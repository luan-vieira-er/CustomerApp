import React from 'react';

import {
  DivMenu,
  StyledTitle,
  ButtonMenu,
  MenuItem,
} from './styles';
import { Link } from 'react-router-dom';
import { HeaderMenuProps } from './types';

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ route, name, isActive }) => {
  return (
    <MenuItem to={route} active={isActive ? 'true' : 'false'}>
      {name}
    </MenuItem>
  );
};