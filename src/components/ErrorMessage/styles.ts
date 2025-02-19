import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
  height: 218.05px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .error {
    font-size: 24px;
    font-weight: 600;
    line-height: 29.05px;
    color: #fb7185;
  }

  .errorMessage {
    height: 48.87px;
    font-weight: 400;
    font-size: 16px;
    line-height: 15.38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({}));

export const ErrorWrapper = styled.div`
  text-align: center;
  height: 136.82px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 48.87px;
`;
