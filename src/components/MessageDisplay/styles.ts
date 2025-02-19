import styled from 'styled-components';

export const ErrorDisplay = styled.div`
  color: #fb7185;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  margin-top: 10px;
`;

export const DivRenderError = styled.div`
  font-family: 'Inter',
  font-style: normal;
  font-weight: 600;
  font-size: 14.22px;
  margin-left: 10px;
`;

export const SuccessDisplay = styled.div`
  color: #167c2f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  text-align: left;
  margin-top: 10px;

  span {
    text-decoration: none;
    font-size: 12px;
    font-weight: 300;
    margin-left: 3px;
  }
`;

export const DivRenderSuccess = styled.div`
  font-family: 'Inter',
  font-style: normal;
  font-weight: 600;
  font-size: 14.22px;
  margin-left: 10px;
`;
