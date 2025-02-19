import styled from 'styled-components';

export const StyledPasswordTip = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const StyledRules = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const StyledRule = styled.div<{ hasPassedRule: boolean | null }>`
    display: flex;
    gap: 8px;
    justify-content: start;
    align-items: start;

    color: #71717a;

    ${props => (props.hasPassedRule === true ? `color: ${props.theme.colors.green500};` : '')}
    ${props => (props.hasPassedRule === false ? `color: ${props.theme.colors.red800};` : '')}
`;
