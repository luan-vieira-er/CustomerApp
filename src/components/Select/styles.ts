import { StylesConfig } from 'react-select';
import styled, { css, DefaultTheme } from 'styled-components';
import { common } from 'styles/constants';

interface IWrapperProps {
  isErrored: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  div.label {
    margin-bottom: 4px;
    span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 15px;
      color: ${(props) => props.theme.colors.gray900};
      ${(props) =>
        props.isErrored &&
        css`
          color: ${props.theme.colors.red800};
        `}
    }
  }
`;

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  svg {
    color: ${(props) => props.theme.colors.red800};
  }
  span {
    color: ${(props) => props.theme.colors.red800};
    margin-left: 4px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }
`;

export const customStyles = (
  theme: DefaultTheme,
  typeWeight: 'sm' | 'md',
  isErrored: boolean,
): StylesConfig => ({
  option: (provided: Record<string, unknown>, state: any) => ({
    ...provided,
    color: `${theme.colors.gray900}`,
    backgroundColor: state.isSelected ? '#abdcbc' : '',
    '&:hover': {
      backgroundColor: '#ffba48',
    },
  }),
  control: (provided: Record<string, unknown>, state: any) => ({
    ...provided,
    height: typeWeight === 'sm' ? 32 : 50,
    minHeight: typeWeight === 'sm' ? 32 : 50,
    alignContent: 'center',
    padding: '0px',
    borderRadius: '4px',
    fontFamily: 'Inter',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: state.isSelected
      ? `1.5px solid ${common.colors.error}`
      : `1.5px solid ${common.colors.primary}`,
    '&': {
      border: isErrored
        ? `1.5px solid ${common.colors.error}`
        : `1.5px solid ${common.colors.primary}`,
      boxShadow: 'none',
    },
    '&:hover': {
      border: isErrored
        ? `1.5px solid ${common.colors.error}`
        : `1.5px solid ${common.colors.primary}`,

      boxShadow: 'none',
      color: state.isSelected
        ? `1.5px solid ${common.colors.error}`
        : `1.5px solid ${common.colors.primary}`,
    },
    '&:focus': {
      border: isErrored
        ? `1.5px solid ${common.colors.error}`
        : `1.5px solid ${common.colors.primary}`,

      boxShadow: 'none',
    },
    '&:active': {
      border: isErrored
        ? `1.5px solid ${common.colors.error}`
        : `1.5px solid ${common.colors.primary}`,

      boxShadow: 'none',
      color: state.isSelected
        ? `1.5px solid ${common.colors.error}`
        : `1.5px solid ${common.colors.primary}`,
    },
  }),
});
