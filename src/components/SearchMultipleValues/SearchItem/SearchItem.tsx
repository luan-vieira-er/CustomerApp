import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { SearchItemContainer, SearchItemContent, StyledIcon } from './style';
import { SearchItemTypes } from './types';

export const SearchItem: React.FC<SearchItemTypes> = ({ value, close }) => {
  return (
    <SearchItemContainer>
      <SearchItemContent>{value}</SearchItemContent>
      <StyledIcon icon={faXmark} onClick={() => close(value)} />
    </SearchItemContainer>
  );
};
