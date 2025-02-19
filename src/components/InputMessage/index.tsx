import * as React from 'react';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'components/Icon';

import * as S from './index.styles';
import { InputMessageProps } from './index.types';

export const InputMessage: React.FC<InputMessageProps> = ({
  message,
  type,
}) => (
  <S.StyledMessageWrapper messageType={type}>
    <Icon icon={faAddressBook} /> {message}
  </S.StyledMessageWrapper>
);

export default InputMessage;
