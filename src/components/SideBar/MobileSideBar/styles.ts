import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import { NAV_WIDTH_OPENED } from 'utils/constants';

import { HIDE_DEFAULT_SIDE_BAR, SHOW_DEFAULT_SIDE_BAR } from './constants';
import { MobileSideBarProps } from './types';

export const ContainerButtonsMobile = styled.div<MobileSideBarProps>`
  display: flex;
  position: fixed;
  left: 0;
  bottom: ${({ open }) =>
    open ? HIDE_DEFAULT_SIDE_BAR : SHOW_DEFAULT_SIDE_BAR};
  z-index: 100000;
  transition: bottom 300ms;
  width: 100vw;
  height: 71px;
  background: ${({ theme }) => theme.colors.sideBar};
  box-shadow: 2px -5px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px 4px 0px 0px;
`;

export const MobileButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledOverflow = styled.div<MobileSideBarProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: ${({ open }) => (open ? NAV_WIDTH_OPENED : '100vw')};
  z-index: 800;
  background: rgba(39, 39, 42, 0.3);
  backdrop-filter: blur(2px);
  height: 100vh;
  transition: opacity ${({ open }) => open && '350ms 350ms'};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

export const StyledExitIcon = styled(FontAwesomeIcon)(() => ({
  marginTop: 24,
  marginLeft: 24,
  fontSize: 35,
}));

export const OpenMobileMenuText = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.text.gray350};
`;
export const StyledIcon = styled(FontAwesomeIcon)(() => ({}));
