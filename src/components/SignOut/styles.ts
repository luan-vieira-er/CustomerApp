import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export const DivSignOut = styled.div`
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
  color: white;
  height: 11.5px;
`;
