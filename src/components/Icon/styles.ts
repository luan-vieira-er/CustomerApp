import styled from 'styled-components';

export const Icon = styled.i<any>`
  ${(props: any) => `
        & > svg {
            margin-left: ${props.marginLeft || '0'};
            margin-right: ${props.marginRigth || '0'};
        }
    `};
`;
