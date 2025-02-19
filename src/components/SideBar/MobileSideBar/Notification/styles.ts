import styled from 'styled-components';

import { NotificationMobile } from './type';

export const ContainerNotification = styled.div<NotificationMobile>`
    width: 100vw;
    height: ${({ open }) => (open ? '100vh' : 0)};

    background: ${({ theme }) => theme.colors.sideBar};
    color: ${({ theme }) => theme.text.gray400};
    box-sizing: border-box;
    padding-bottom: ${({ open }) => (open ? '71px' : 0)};

    position: fixed;
    bottom: 0;
    z-index: 700;
    transition: 500ms;
    overflow: hidden;
`;

export const StyledLogo = styled.img`
    margin: 12px 0 0 20px;
`;

export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
`;

export const StyledText = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text.gray400};
`;
