import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
  height: 243.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .successMessage {
    font-size: 24px;
    font-weight: 600;
    line-height: 29.05px;
    color: #4ade80;
  }

  .changeMessage {
    font-weight: 400;
    font-size: 16px;
    line-height: 15.38px;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({}));

export const SuccessWrapper = styled.div`
  text-align: center;
  height: 127px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;
