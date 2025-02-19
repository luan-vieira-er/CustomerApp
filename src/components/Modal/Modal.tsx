import { faXmark } from '@fortawesome/free-solid-svg-icons';

import {
  ContentWrapper,
  ModalContainer,
  ModalWrapper,
  StyledIcon,
  StyledText,
  StyledTitle,
} from './styles';
import { ModalProps } from './types';

export const Modal = ({
  open,
  close,
  title,
  describe,
  children,
}: ModalProps) => (
  <ModalWrapper open={open}>
    <ModalContainer>
      <StyledIcon icon={faXmark} size='2x' onClick={close} />
      {!!title && <StyledTitle>{title}</StyledTitle>}
      {!!describe && <StyledText>{describe}</StyledText>}
      <ContentWrapper>{children}</ContentWrapper>
    </ModalContainer>
  </ModalWrapper>
);
