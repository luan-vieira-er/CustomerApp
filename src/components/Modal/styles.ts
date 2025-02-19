import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { ModalWrapperProps } from './types';

export const ModalWrapper = styled.div<ModalWrapperProps>`
    background: rgba(39, 39, 42, 0.3);
    mix-blend-mode: normal;
    backdrop-filter: blur(5px);

    width: calc(100% + 80px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    transition: all 100ms 100ms ease-in-out;
    visibility: ${({ open }) => (open ? 'normal' : 'hidden')};
    opacity: ${({ open }) => (open ? '1' : '0')};

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    ${media.max.tablet` 
        width: 100%;
        padding-bottom: 71px;
    ` as any}
`;

export const ModalContainer = styled.div`
    min-width: 480px;
    min-height: 325px;
    height: auto;

    background: ${({ theme }) => theme.colors.grayCard};
    border: 1px solid #3f3f46;
    border-radius: 16px;
    padding: 32px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;

    ${media.max.phone` 
        max-width: 80%;
    `}
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({
    alignSelf: 'flex-end',
    color: '#E4E4E7',
    cursor: 'pointer',
}));

export const StyledTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.text.white};
    align-self: center;
    margin-top: 10px;
`;

export const StyledText = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.text.gray350};
    margin: 23px 0 16px 0;
`;

export const ContentWrapper = styled.div`
    width: 100%;
`;
