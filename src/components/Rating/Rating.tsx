import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

import * as S from './styles';
import { IRatingProps } from './types';

export const Rating: React.FC<IRatingProps> = ({
  averageNote,
  maxNote,
  votes,
  maxVotes = 99,
  votesTextPlural = 'Avaliações',
  votesTextSingular = 'Avaliação',
}) => {
  const getVotes = () => {
    const hasExceededMaxVotes = votes > maxVotes;
    const votesText = votes === 1 ? votesTextSingular : votesTextPlural;
    return hasExceededMaxVotes
      ? `${maxVotes}+ ${votesText}`
      : `${votes} ${votesText}`;
  };

  const getAverage = () => (
    <>
      {averageNote} / {maxNote}{' '}
      <Icon icon={faStar} style={{ color: '#e5c334' }} />
    </>
  );

  return (
    <S.StyledText>
      {getVotes()} {!!votes && getAverage()}
    </S.StyledText>
  );
};
