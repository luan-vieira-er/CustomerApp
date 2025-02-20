import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

import { SideBarProps } from './types';
import { common, theme } from '../../../styles/constants';

export const ContainerUserProfile = styled.div<SideBarProps>`
  display: flex;
  gap: 8px;
  transition: padding-left 300ms;
  padding: 26px 0;
  padding-left: ${({ open }) => (open ? '18px' : '22px')};
  * {
    color: ${({ isSelected }) =>
      isSelected && theme.Colors.Primary.primaryGreen} !important;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({}));

export const StyledUserContent = styled.span`
  font-weight: 400;
  width: 145px;
`;

export const StyledName = styled(StyledUserContent)`
  margin-top: 10px;
  font-size: 12px;
  color: ${common.colors.orange};
`;

export const StyledProfile = styled(StyledUserContent)`
  font-size: 11px;
  color: ${common.colors.orange};
`;
