import styled from 'styled-components';
import {
  NAV_WIDTH_DEFAULT,
  NAV_WIDTH_MOBILE_CLOSE,
  NAV_WIDTH_OPENED,
} from 'utils/constants';

import { SideBarProps } from './types';
import { common } from 'styles/constants';

const getSideBarWidth = ({ open, mobile }: SideBarProps) => {
  const NAV_WIDTH_CLOSE = mobile ? NAV_WIDTH_MOBILE_CLOSE : NAV_WIDTH_DEFAULT;
  return open ? NAV_WIDTH_OPENED : NAV_WIDTH_CLOSE;
};

export const Container = styled.div<SideBarProps>`
  position: fixed;
  z-index: 9998;
  height: 100vh;
  width: ${(props) => getSideBarWidth(props)};
  background-color: ${common.colors.orange};
  transition: 0.5s;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ::-webkit-scrollbar {
    display: none;
    appearance: none;
  }
`;

export const ContainerMenuList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerLogo = styled.div<SideBarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin-top: 30px;
  padding: 0px 25px 0px 24px;
  img {
    width: 30%;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 12px;
`;

export const ContainerMenu = styled.div<SideBarProps>`
  margin-top: 30vh;
`;

export const DivBottom = styled.div<SideBarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: ${(props) => (props.open ? NAV_WIDTH_OPENED : NAV_WIDTH_DEFAULT)};
`;

export const DivSignOut = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
  border-bottom: 0.5px solid white;
`;

export const ButtonSignOut = styled.button`
  border: none;
  background: none;
`;

export const StyledTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.text.gray350};
`;

export const StyledSubtitle = styled.span`
  ${StyledTitle}
  font-size: 11px;
`;

export const DivUser = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 24px;
`;

export const ContainerSignOut = styled.div`
  margin: 20px 0 20px 20px;
`;
