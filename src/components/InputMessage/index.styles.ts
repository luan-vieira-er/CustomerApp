import styled from 'styled-components';

import { MessageType } from './index.types';

const getMessageColors = (messageType: MessageType): 'warning500' | 'alert700' => {
    if (messageType === 'warning') return 'warning500';
    return 'alert700';
};

export const StyledMessageWrapper = styled.div<{ messageType: MessageType }>`
    display: flex;
    gap: 5px;
    font-size: 12px;
    margin-top: 2px;
    color: ${({ theme, messageType }) => theme.colors[getMessageColors(messageType)]};
`;
