import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

import { ThemeSwitchProps } from './types';

export const StyledSwitch = styled.div<ThemeSwitchProps>`
    background: linear-gradient(
        114deg,
        rgba(139, 137, 137, 0.4) -6%,
        rgba(255, 255, 255, 0.05) 101%
    );
    cursor: pointer;
    width: 37px;
    height: 19px;
    border-radius: 36px;
    position: relative;
    display: flex;
    align-items: center;
`;

export const StyledToggle = styled.div<ThemeSwitchProps>`
    position: absolute;
    background: linear-gradient(
        114deg,
        rgba(139, 137, 137, 0.4) -6%,
        rgba(255, 255, 255, 0.05) 101%
    );
    border-radius: 50%;
    border: 0.6px solid rgba(255, 255, 255, 0.5);
    left: ${({ isDark }) => (isDark ? '4px' : '18px')};
    transition: left 300ms;
    width: 15px;
    height: 15px;
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({}));

export const StyledContainerIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
`;
