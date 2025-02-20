import React from 'react';
import * as S from './styles';
import { type InputProps } from './types';
import { renderErrors } from '../../components/MessageDisplay';
import { StyledWrapper } from './styles';

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ type, error, errorMessage, icon, ...otherProps }, ref) => {
  return (
    <StyledWrapper>
      <S.Input ref={ref} type={type} {...otherProps} />
      {error &&
        errorMessage &&
        renderErrors([
          {
            Key: 'Error',
            Message: errorMessage,
          },
        ])}
      {icon}
    </StyledWrapper>
  );
});

Input.displayName = 'Input';
