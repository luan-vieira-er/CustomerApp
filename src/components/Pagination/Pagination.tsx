import * as React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';
import { IPaginationProps } from './types';

export const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  lastPage,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <S.StyledPagination>
      <S.StyledIcon icon={faChevronLeft} onClick={onPrevPage} />
      <S.StyledSelectedText>{currentPage}</S.StyledSelectedText>
      <S.StyledText>de {lastPage}</S.StyledText>
      <S.StyledIcon icon={faChevronRight} onClick={onNextPage} />
    </S.StyledPagination>
  );
};

export default Pagination;
