import { BASE_CONTAINER } from 'components/constants';
import styled from 'styled-components';

export const ContainerLarge = styled.div`
  ${BASE_CONTAINER}
  height: calc(100vh - 200px);
  border-radius: 16px;
`;

export const ContainerMedium = styled.div`
  ${BASE_CONTAINER}
  border-radius: 16px;
`;

export const ContainerExtraLarge = styled.div`
  ${BASE_CONTAINER}
  max-width: 785px;
`;
