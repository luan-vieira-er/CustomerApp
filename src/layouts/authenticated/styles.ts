import styled from 'styled-components';
import { LayoutProps } from 'types';
import {
  HEADER_HEIGTH_DEFAULT,
  NAV_BOTTOM_HEIGHT,
  NAV_WIDTH_DEFAULT,
} from 'utils/constants';

export const Layout = styled.div`
  width: 100%;
  display: flex;
`;

export const Main = styled.div<LayoutProps>`
  min-height: ${({ mobile }) =>
    mobile ? '100vh' : `calc(100vh - ${HEADER_HEIGTH_DEFAULT})`};
  width: ${({ mobile }) =>
    mobile ? '100vw' : `calc(100vw - ${NAV_WIDTH_DEFAULT})`};
  background-color: #fafafa;
  margin-left: ${({ mobile }) => !mobile && NAV_WIDTH_DEFAULT};
  margin-top: ${({ mobile }) => !mobile && HEADER_HEIGTH_DEFAULT};
  margin-bottom: ${({ mobile }) => mobile && NAV_BOTTOM_HEIGHT};
  padding: 24px;
`;
