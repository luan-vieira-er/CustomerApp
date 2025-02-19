import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonProps {
  typeStyle?: 'primary' | 'secondary' | 'third' | 'cancel' | 'outlined';
  disabled?: boolean;
  width?: number;
  loading?: boolean;
}

const buttonTypeVariations = {
  primary: css`
    padding: 8.5px 12px;

    background: ${(props) => props.theme.button.primary.backgroundColor};
    color: ${(props) => props.theme.button.primary.color};
    border: 1px solid ${(props) => props.theme.button.primary.border};

    &:hover {
      border: 1px solid
        ${(props) => shade(0.2, `${props.theme.button.primary.hover}`)};
      background: ${(props) =>
        shade(0.2, `${props.theme.button.primary.hover}`)};
    }

    &:active {
      transition: none;
      background: ${(props) =>
        shade(0.2, `${props.theme.button.primary.click}`)};
    }
  `,
  secondary: css`
    padding: 8.5px 12px;

    background: ${(props) => props.theme.button.secondary.backgroundColor};
    color: ${(props) => props.theme.button.secondary.color};
    border: 1px solid ${(props) => props.theme.button.secondary.border};

    &:hover {
      color: #000;
      background: ${(props) =>
        shade(0.2, `${props.theme.button.secondary.hover}`)};
    }
  `,
  third: css`
    padding: 8.5px 12px;

    background: ${(props) => props.theme.button.third.backgroundColor};
    color: ${(props) => props.theme.button.third.color};
    border: 1px solid ${(props) => props.theme.button.third.border};

    &:hover {
      color: ${(props) => shade(0.2, `${props.theme.button.third.hover}`)};
      border: 1px solid
        ${(props) => shade(0.2, `${props.theme.button.third.hover}`)};
    }
  `,
  outlined: css`
    padding: 8.5px 12px;

    background: ${(props) => props.theme.button.outlined.backgroundColor};
    color: ${(props) => props.theme.button.outlined.color};
    border: 1px solid ${(props) => props.theme.button.outlined.border};
  `,
  loading: css`
    padding: 8.5px 12px;
    pointer-events: none;

    background: ${(props) => props.theme.button.loading.backgroundColor};
    color: ${(props) => props.theme.button.loading.color};
    border: 1px solid ${(props) => props.theme.button.loading.border};
  `,
  cancel: css`
    background: ${(props) => props.theme.button.cancel.backgroundColor};
    color: ${(props) => props.theme.button.cancel.color};
    border: 1px solid ${(props) => props.theme.button.cancel.border};

    &:hover {
      background: ${(props) =>
        shade(0.2, `${props.theme.button.secondary.hover}`)};
    }
  `,
};

export const Container = styled.div<ButtonProps>`
  button {
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    color: ${(props) => props.color} !important;

    ${({ loading, typeStyle }) =>
      buttonTypeVariations[
        (loading && 'loading') || typeStyle || 'primary'
      ]} strong {
      font-family: 'Inter',
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
    }
  }

  ${(props) =>
    props.disabled &&
    css`
      button {
        background: ${props.theme.button.disabled.backgroundColor} !important;
        border: 0px;
        color: #ccc !important;
        pointer-events: none;

        &:hover {
          background: ${props.theme.button.disabled.backgroundColor};
          color: #ccc;
          cursor: default;
        }
      }
    `}
`;

export const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 47px;
  border: 0;
  border-radius: 24px;
  padding: 12px;
  font-weight: 400;
  text-align: center;

  transition: all 300ms ease-in-out 0s;
`;

export const WrapperLoad = styled.div`
  width: 23px !important;
`;
