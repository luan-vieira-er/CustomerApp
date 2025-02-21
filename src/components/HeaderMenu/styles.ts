import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { common } from '../../styles/constants';

export const DivMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonSignOut = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
`;

export const ButtonMenu = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
`;

export const StyledExitIcon = styled(FontAwesomeIcon)(() => ({
  backgroundColor: 'transparent',
  fontSize: 14,
  color: 'white',
  marginRight: 8,
}));

export const StyledTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: black;
  height: 11.5px;
`;

export const ContainerLink = styled.div`
  display: flex;
`;

interface MenuItemProps {
  active: string;
}

export const MenuItem = styled(Link)<MenuItemProps>`
  color: ${({ active }) => (active === 'true' ? common.colors.orange : 'inherit')};
  /* demais estilos */
`;