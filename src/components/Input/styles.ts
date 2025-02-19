import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

export const StyledWrapper = styled.div`
  position: relative;
  border-radius: 2px;
  i {
    transition: all 300ms ease-in-out;
    user-select: none;
    cursor: pointer;
    position: absolute;
    display: block;
    right: 12px;
    top: 24px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  color: #ffffff;
  background: transparent;
  border: 0.6px solid #ffffff;
  border-radius: 4px;
  width: 475px;
  height: 51px;
  padding: 10px;
  font-family: 'Inter',
  font-style: normal;
  font-weight: 400;
  font-size: 12.64px;
  line-height: 16px;
  margin-top: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.gray100};
  }
  ${media.max.md`
    width: 100%;
  `}
`;
