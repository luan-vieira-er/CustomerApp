import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export const ContainerModal = styled.div`
    background: ${({ theme }) => theme.colors.gray600};
    position: absolute;
    width: 325px;
    min-height: 156px;
    top: 50px;
    right: -14.5px;

    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 4px;

    ::after {
        content: '';
        background: #3f3f46;
        padding: 5px;

        box-shadow: -1px -1px 1px 10px #27272a inset;
        border: solid transparent;
        border-width: 1px 0 0 1px;

        position: absolute;
        top: -6px;
        right: 17.5px;
        z-index: -1;
        transform: rotate(45deg);
    }
`;

export const StyledHeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 16px 24px 16px;
`;

export const StyledModalTitle = styled.h3`
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.text.white};
`;

export const NotificationCleanButton = styled.button`
    font-weight: 400;
    font-size: 14px;
    color: #a1a1aa;
    background: transparent;
    outline: none;
    border: none;
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '#a1a1aa',
    width: 30,
    height: 24,
}));

export const StyledText = styled.span`
    color: #a1a1aa;
    font-size: 14px;
`;

export const ContainerContentModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;
