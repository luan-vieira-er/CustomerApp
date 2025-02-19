import { Button } from 'components';
import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    gap: 12px;
`;

export const SearchItemsWrapper = styled.div`
    display: flex;
    gap: 12px;
`;

export const StyledButton = styled(Button)`
    padding: 7px 10px !important;
    width: 36px;
    height: 30px;

    &:hover {
        border-color: ${({ theme }) => theme.text.red} !important;
        color: ${({ theme }) => theme.text.red} !important;
    }

    > svg {
        width: 14px;
        height: 16px;
    }
`;

export const StyledTooltip = {
    sx: {
        '& .MuiTooltip-tooltip': {
            backgroundColor: '#52525B',
            backdropFilter: 'blur(15px)',
            border: '0.5px solid #3F3F46',
            borderRadius: '4px',
            padding: '7px 10px',
        },
        '& .MuiTooltip-arrow': {
            color: '#52525B',
            backdropFilter: 'blur(15px)',
        },
    },
};
