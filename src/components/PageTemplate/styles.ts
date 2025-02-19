import styled from 'styled-components';

interface PageTemplateTypes {
    mobile: boolean;
}

export const ContainerTemplate = styled.div<PageTemplateTypes>`
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    padding: 18px 32px ${({ mobile }) => (mobile ? '76px' : '0px')} 32px;
`;
