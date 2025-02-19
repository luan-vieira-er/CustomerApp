import * as React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';
import { IAccordeonProps } from './types';

export const Accordeon: React.FC<IAccordeonProps> = ({
  children,
  title,
  description,
  openCallBack,
}) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (openCallBack) openCallBack(open);
  }, [open]);

  return (
    <S.StyledWrapper>
      <S.StyledTopWrapper onClick={() => setOpen(!open)}>
        <S.StyledTopInfoWrapper>
          <S.Title type='h3'>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.StyledTopInfoWrapper>
        <div>
          <S.StyledIcon icon={faChevronUp} open={open} />
        </div>
      </S.StyledTopWrapper>
      <S.StyledContent open={open}>{children}</S.StyledContent>
    </S.StyledWrapper>
  );
};
