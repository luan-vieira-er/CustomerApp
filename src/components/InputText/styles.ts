import styled from 'styled-components';

import { Icon } from '../Icon';
import { InputStyleProps } from './types';

const FocusLabel = () => `
    top: -3px;
    transform: translateY(-50%);
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    `;

const FocusedStyledInput = () => `
    opacity: 1;
`;

export const StyledInput = styled.input<InputStyleProps>`
  box-sizing: border-box;
  outline: none;
  border: none;
  width: 100%;
  appearance: none;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  font-size: 12.64px;
  font-weight: 400px;
  padding: 5px ${({ icon }) => (icon ? '30px' : '10px')} 5px 10px;
  opacity: ${({ placeholderShown }) => (!placeholderShown ? 1 : 0)};
  transition: all 300ms ease-in-out 0s;
  border-radius: 4px;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const StyledLabel = styled.label<InputStyleProps>`
  transition: 300ms ease-in-out;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 5px;
  color: ${({ color }) => color};
  background: transparent;
  padding: 0 5px;
  z-index: 10;
  font-size: 12px;

  ${({ placeholderShown }) => !placeholderShown && FocusLabel()};

  &::before {
    content: '';
    height: 5px;
    background: ${({ background }) => background};
    position: absolute;
    left: 0;
    top: 7px;
    width: 100%;
    z-index: -1;
  }

  &:hover,
  ${StyledInput}:focus + &,
  ${StyledInput}:hover + &,
  ${StyledInput}:-webkit-autofill + &,
  ${StyledInput}:-webkit-autofill:hover + &,
  ${StyledInput}:-webkit-autofill:focus + &,
  ${StyledInput}:-webkit-autofill:active + & {
    ${FocusLabel()}
  }
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${({ color }) => color};
  transition: 300ms ease-in-out 0s;
`;

export const StyledInputWrapper = styled.div<InputStyleProps>`
  display: flex;
  box-sizing: border-box;
  background: ${({ background }) => background};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '190px')};
  height: ${({ height }) => height};
  position: relative;
  transition: all 300ms ease-in-out 0s;
  border-radius: 4px;
  box-shadow: ${({ color }) => color} 0px 0px 0px 1px;

  ${({ placeholderShown }) => !placeholderShown && FocusedStyledInput()}

  &:hover {
    box-shadow: #005354 0px 0px 0px 2px;

    ${StyledIcon},
    ${StyledLabel} {
      color: #005354;
    }
  }

  &:has(input:focus) {
    box-shadow: #00b376 0px 0px 0px 2px;

    ${StyledIcon},
    ${StyledLabel} {
      color: #00b376;
    }
  }
`;
