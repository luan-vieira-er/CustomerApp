import { Icon } from 'components/Icon';

import styled, { css } from 'styled-components';

const openProps = css`
    padding: 16px 32px;
    transition: font-size 0.4s, margin 0.4s, padding 0.4s, line-height 0.4s, opacity 0.6s 0.1s;
`;

const baseCloseProps = css`
    font-size: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    line-height: 0;
    height: 0;
    gap: 0;
    transition: font-size 0.4s, margin 0.4s, padding 0.4s, line-height 0.4s, opacity 0.05s;
`;

const closeProps = css`
    ${baseCloseProps};
    p,
    h2,
    h3,
    h4,
    h5,
    h6,
    div,
    span,
    && input {
        ${baseCloseProps};
    }
`;

export const StyledWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.gray700};
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 16px;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.text.white};
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.text.white};
`;

export const StyledIcon = styled(Icon)<{ open: boolean }>`
    padding: 0;

    font-size: 14px;
    color: ${({ theme }) => theme.text.white};

    transition: transform 0.4s ease;
    ${({ open }) => !open && 'transform: rotate(180deg)'};
`;

export const StyledContent = styled.div<{ open: boolean }>`
    ${({ open }) => (open ? openProps : closeProps)}
`;

export const StyledTopWrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 16px 32px;
    cursor: pointer;
    > div {
        &:last-child {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 10%;
            align-content: center;
            text-align: right;
        }
    }
`;

export const StyledTopInfoWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
