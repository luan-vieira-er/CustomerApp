import { Icon } from 'components/Icon';

import styled from 'styled-components';

export const SearchItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    gap: 8px;
    box-sizing: border-box;
    height: 30px;

    background: ${({ theme }) => theme.colors.gray600};
    border: 1px solid ${({ theme }) => theme.text.gray500};

    backdrop-filter: blur(15px);
    border-radius: 4px;
`;

export const SearchItemContent = styled.span`
    font-weight: 400;
    font-size: 12px;

    color: ${({ theme }) => theme.text.gray350};
`;

export const StyledIcon = styled(Icon)`
    cursor: pointer;
`;
