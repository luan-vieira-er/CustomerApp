import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, BadgeProps } from '@mui/material';

import styled from 'styled-components';
import { HEADER_HEIGTH_DEFAULT, NAV_WIDTH_DEFAULT } from 'utils/constants';

import { ContainerProps } from './types';
import { common } from 'styles/constants';

export const Container = styled.div<ContainerProps>`
  position: fixed;
  width: calc(100vw - ${NAV_WIDTH_DEFAULT});
  background-color: white;
  height: ${HEADER_HEIGTH_DEFAULT};
  margin-left: ${NAV_WIDTH_DEFAULT};
  display: ${(props) => (props.mobile ? 'none' : 'flex')};
  justify-content: right;
  z-index: 1000;
`;

export const CenterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  padding: 7px 0px 7px 16px;
  width: 550px;
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({
  backgroundColor: 'transparent',
  fontSize: 18,
  cursor: 'pointer',
}));

export const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  position: 'relative',
  '& .MuiBadge-badge': {
    right: 3,
    top: 3,
    padding: '0 4px',
    backgroundColor: '#00B376',
  },
}));

export const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  margin-right: 40px;
`;

export const NotificationDiv = styled.div`
  width: 14.5%;
  text-align: center;
`;

export const ContainerUserProfile = styled.div``;
