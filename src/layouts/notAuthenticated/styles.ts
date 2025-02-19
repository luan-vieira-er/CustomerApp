import styled from 'styled-components';
import { LayoutProps } from 'types';
export const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color:rgb(255, 255, 255);
`;

export const ContentLayout = styled.div<LayoutProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;