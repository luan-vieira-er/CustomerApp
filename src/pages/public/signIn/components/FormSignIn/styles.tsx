import { Link } from 'react-router-dom';

import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { theme } from 'styles/constants';

export const StyledForm = styled.form`
  z-index: 2;
  width: 475px;
  ${media.max.md`
    width: 100%;
  `}
`;

export const Container = styled.div`
  .textTitle {
    margin-bottom: 20px;
  }

  .input {
    margin-bottom: 16px;
  }

  .label {
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.gray200};
  }

  .centerText {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 25px;
    color: rgb(0,0,0);
    margin-bottom: 20px;
  }

  .containerButton {
    margin-top: 23px;
    width: 100%;
    justify-content: center;
  }

  .button {
    background-color: ${theme.Colors.Primary.primaryOrange};
    width: 100%;
    border-radius: 4px;
    font-weight: 400;
    font-size: 24px;
  }
`;

export const StyledH3 = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20.25px;
  line-height: 25px;
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.gray200};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-size: 12px;
  line-height: 16px;
`;

export const DivRecovery = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 8px;
  a {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    color: ${theme.Colors.Primary.primaryOrange};
  }
`;

export const DivRegisterLink = styled(Link)`
  margin-top: 60px;
  display: flex;
  justify-content: left;
  font-family: 'Inter';
  font-size: 25px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray100};
  b {
    font-weight: 400;
    margin-left: 2px;
    color: ${(props) => props.theme.colors.blue500};
  }
`;
