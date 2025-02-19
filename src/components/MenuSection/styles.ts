import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { NAV_WIDTH_OPENED } from '../../utils/constants';
import { MenuItemProps, MenuSectionProps, SubMenuProps } from './types';

export const Container = styled.div<MenuSectionProps>`
  display: flex;
  flex-direction: ${(props) => (props.menuOpen ? 'row' : 'column')};
  align-items: center;
  margin-bottom: ${(props) => (props.menuOpen ? '16px' : '32.5px')};
`;

export const ContainerMenu = styled.div<MenuSectionProps>``;

export const BottomDivider = styled.div`
  margin-top: 16px;
  height: 0.5px;
  width: ${NAV_WIDTH_OPENED};
  background-color: #3f3f46;
`;

export const ContainerItem = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${(props) => props.menuOpen && 'padding: 0px 0px 0px 32px'};
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${(props) => (props.isSelected ? '700' : '400')};
  font-size: 16px;
  color: white;
  &:hover {
    color: #01e5ff;
  }
`;

export const ContainerLink = styled.div`
  display: flex;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
`;

export const ContainerText = styled.div`
  display: flex;
`;

export const StyledText = styled.div`
  padding-left: 25px;
  width: 130px;
`;

export const ContainerIconSubMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
`;

export const ContainerSubMenu = styled.div`
  padding: 16px 0px 0px 59px;
  cursor: pointer;
  width: 100%;
`;

export const StyledTextSubMenu = styled.div<SubMenuProps>`
  margin-bottom: 8px;
  color: white;
  font-size: 14px;
  &:hover {
    color: #01e5ff;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({
  backgroundColor: 'transparent',
  fontSize: 16,
}));
