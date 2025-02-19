import styled from 'styled-components';
import { TokenInputProps } from './types';

const media1050 = '@media(max-width: 1050px)';
const media400 = '@media(max-width: 400px)';

const getTokenColorByType = (type: any) => {
  switch (type) {
    case 'complete':
      return '#16A34A';

    case 'error':
      return '#BE123C';

    default:
      return '#A1A1AA';
  }
};

export const StyledTokenDiv = styled.div<TokenInputProps>`
  margin-top: 12px;
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input {
    padding: 0 8px !important;
    font-weight: 700 !important;
    font-size: 20px !important;
    background-color: transparent !important;
    color: #ffffff !important;
    width: calc(100% / 6) !important;
    height: 68px !important;
    text-align: center;
    outline: none;
    ${media1050} {
      padding: 0 5px !important;
    }
    ${media400} {
      height: 60px !important;
      padding: 0 4px !important;
    }
    border: 2px solid ${({ tokenType }) => getTokenColorByType(tokenType)} !important;
  }
  > div {
    display: flex !important;
  }
`;

export const ResendCodeContainer = styled.div`
  margin-bottom: 32px;
`;

export const DivResendCodeQuestion = styled.div`
  margin-top: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12.64px;
  line-height: 14px;
  text-align: center;
`;

export const DivResendCode = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 9px;
  align-items: center;
`;

export const StyledResendCodeButton = styled.button`
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12.64px;
  line-height: 14px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00b376;
  :disabled {
    color: rgb(188, 199, 196);
  }
`;
