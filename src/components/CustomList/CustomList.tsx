import React from 'react';
import * as S from './styles';
import { useMobile } from 'context/Mobile';
import { ICustomList } from './types';

export const CustomList: React.FC<ICustomList> = ({ title, content }) => {
  const { mobile } = useMobile();

  return (
    <div>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.StyledStack spacing={3} mobile={mobile ? 1 : 0}>
        {content.map((item, index) => (
          <S.DivContent key={index}>
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.description}</S.Description>
            <S.Subtitle>{item.subtitle}</S.Subtitle>
          </S.DivContent>
        ))}
      </S.StyledStack>
    </div>
  );
};
