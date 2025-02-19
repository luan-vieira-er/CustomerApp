import { Player } from '@lottiefiles/react-lottie-player';
import { Icon } from 'components/Icon';

import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

export const StyledIcon = styled(Icon)`
    color: ${({ color }) => color};
`;

export const StyledPlayer = styled(Player)`
    height: 80px;
    width: 80px;
`;

export const FeedbackContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    padding: 72px 10px;
    background: ${({ theme }) => theme.colors.gray700};
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 4px;
`;

export const StyledTitle = styled.div`
    font-weight: 700;
    font-size: 18px;
    color: ${({ color }) => color};
    text-align: center;
`;

export const StyledTextContainer = styled.div<{ type: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ type }) => (type === 'error' ? '25px' : '4px')};
    flex-direction: ${({ type }) => (type === 'error' ? 'column' : 'row')};
    margin-top: 6px;

    ${media.max.phone` 
    flex-direction: column;
    ` as any}
`;

export const StyledSubTitle = styled.span`
    font-weight: 400;
    font-size: 14px;

    color: ${({ theme }) => theme.text.gray350};
`;

export const StyledInfoText = styled(StyledSubTitle)`
    font-weight: bold;
`;

export const StyledReload = styled.button`
    display: flex;
    gap: 8px;
    margin-top: 30px;
    font-weight: 300;
    font-size: 12px;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.green500};
`;

export const StyledReloadIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.green500};
`;
