import React from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ButtonWrapper, Container, SuccessWrapper, StyledIcon } from './styles';
import { Button } from '../../components';
import { SuccessMessageProps } from './types';

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title,
  message,
  width = 300,
  showButton = false,
  buttonText,
  onClick,
}) => {
  return (
    <Container data-testid='changePasswordSuccess'>
      <SuccessWrapper>
        <StyledIcon color='#4ADE80' className='fa-7x' icon={faCircleCheck} />
        <p className='successMessage'>{title}</p>
      </SuccessWrapper>
      {message && <p className='changeMessage'>{message}</p>}
      <ButtonWrapper>
        {showButton && (
          <Button
            type='button'
            text={buttonText}
            width={width}
            onClick={onClick}
          />
        )}
      </ButtonWrapper>
    </Container>
  );
};
