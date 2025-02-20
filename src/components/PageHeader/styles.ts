import styled from 'styled-components';
import { common, theme } from '../../styles/constants';

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 24px;
  height: 20px;
  border-left: 6px solid ${common.colors.orange};
  align-items: center;
  padding: 4px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${theme.Colors.Primary.grey50};
`;

export const HeaderElements = styled.div`
  display: flex;
  gap: 15px;
`;
