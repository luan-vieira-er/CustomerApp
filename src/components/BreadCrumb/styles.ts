import styled from 'styled-components';

import { Icon } from '../Icon';
import { BreadCrumbItemListProp } from './types';

export const StyledBreadCrumb = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 5px;
`;

export const StyledIcon = styled(Icon)`
  background-color: transparent;
  cursor: pointer;
`;

export const StyledBreadCrumbItem = styled.li<BreadCrumbItemListProp>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${({ textSize }) => textSize};
  color: ${({ color }) => color};
  height: 100%;
  font-family: 'Inter',
  font-weight: 400;

  &:nth-last-child(2) {
    ${StyledIcon} {
      color: white;
    }
  }

  &:last-child {
    color: white;

    ${StyledIcon} {
      display: none;
    }
  }
`;
