import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';

export const Icon: React.FC<any> = ({
  icon,
  marginLeft,
  marginRight,
  ...otherProps
}) => {
  return (
    <S.Icon marginLeft={marginLeft} marginRight={marginRight}>
      <FontAwesomeIcon icon={icon} {...otherProps} />
    </S.Icon>
  );
};
