import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const ErrorDisplay = styled.div`
  color: rgb(221, 88, 83);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  text-align: left;
  margin-top: 10px;

  span {
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
    margin-left: 3px;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({
  backgroundColor: 'transparent',
  marginRight: 8,
}));

export const StyledTimerSpan = styled.span`
  margin-left: 3px;
  color: #ffffff;
`;
