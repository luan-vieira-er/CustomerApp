import React from 'react';

import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import { BreadCrumbProps } from './types';
import { StyledBreadCrumb, StyledBreadCrumbItem, StyledIcon } from './styles';

export const BreadCrumb: React.FC<BreadCrumbProps> = ({
  children,
  iconSize = 'xs',
  color = '#FFFFFF',
  textSize = '14px',
}) => {
  const getItemList = () => {
    return React.Children.toArray(children).flatMap((child, index) => (
      <StyledBreadCrumbItem
        key={index.toString()}
        color={color}
        textSize={textSize}
      >
        {child}
        <StyledIcon icon={faChevronCircleRight} size={iconSize} />
      </StyledBreadCrumbItem>
    ));
  };

  return <StyledBreadCrumb>{getItemList()}</StyledBreadCrumb>;
};

export default BreadCrumb;
