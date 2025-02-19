import React from 'react';
import ReactCodeInput from 'react-code-input';

import {
  StyledTokenDiv,
  DivResendCodeQuestion,
  StyledResendCodeButton,
  DivResendCode,
  ResendCodeContainer,
} from './styles';
import { type TokenType } from '../../pages/public/recoveryPassword/types';

import { renderLoadingTextOrNewCode } from './MessageDisplay';

import {
  COMPLETE_TOKEN_LENGTH,
  DEFAULT_CODE_LENGHT,
  DEFAULT_CODE_TIMER,
} from '../../utils/constants';
import { IVerificationCodeProps } from './types';

export const VerificationCode: React.FC<IVerificationCodeProps> = ({
  onClick,
  value,
  lenght = DEFAULT_CODE_LENGHT,
  timer = DEFAULT_CODE_TIMER,
  loading,
  handleSetToken,
}) => {
  const [tokenType, setTokenType] = React.useState<TokenType>('normal');
  const [counter, setCounter] = React.useState<number>(timer);

  const handleChangeToken = (value: string): void => {
    const tokenIsComplete = value.toString().length === COMPLETE_TOKEN_LENGTH;
    setTokenType(tokenIsComplete ? 'complete' : 'normal');
    handleSetToken(value);
  };

  React.useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => setCounter(counter - 1), 1000)
        : undefined;
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <StyledTokenDiv tokenType={tokenType} data-testid='inputToken'>
        <ReactCodeInput
          name='token'
          type='number'
          inputMode='numeric'
          fields={lenght}
          value={value}
          onChange={handleChangeToken}
        />
      </StyledTokenDiv>
      <ResendCodeContainer>
        <DivResendCodeQuestion>
          AINDA NÃO RECEBEU O CÓDIGO?
        </DivResendCodeQuestion>
        <DivResendCode>
          <StyledResendCodeButton
            disabled={counter > 0}
            data-testid='btnResendCode'
            onClick={onClick}
          >
            {renderLoadingTextOrNewCode(loading, counter)}
          </StyledResendCodeButton>
        </DivResendCode>
      </ResendCodeContainer>
    </>
  );
};
