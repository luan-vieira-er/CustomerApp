import { Icon } from 'components/Icon';

import styled from 'styled-components';

export const StyledPagination = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-left: auto;
    margin-bottom: 32px;
    user-select: none;
`;

export const StyledIcon = styled(Icon)`
    cursor: pointer;
`;

export const StyledText = styled.h4`
    color: #c4c4c4;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
`;

export const StyledSelectedText = styled(StyledText)`
    color: ${({ theme }) => theme.text.white};
    background: green;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    line-height: 23px;
    text-align: center;
`;
