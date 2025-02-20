import React from 'react';

import { MenuBar } from '../../components/MenuBar';
import { SideBar } from '../../components/SideBar';
import { useMobile } from '../../context/Mobile';
import { SideBarProvider } from '../../context/SideBar';

import { Layout, Main } from './styles';

interface Props {
  children: React.ReactElement;
}

const Authenticated: React.FC<Props> = ({ children }) => {
  const { mobile } = useMobile();

  return (
    <SideBarProvider>
      <Layout>
        <SideBar />
        <MenuBar />
        <Main mobile={mobile}>{children}</Main>
      </Layout>
    </SideBarProvider>
  );
};
export default Authenticated;
