import React from 'react';

import { useMobile } from '../../context/Mobile';
import { useSideBar } from '../../context/SideBar';

import logoMenuOpened from '../../assets/react.svg';
import { MenuSection } from '../MenuSection';

import { privateMenu } from './constants';
import { MobileSideBar } from './MobileSideBar';
import {
  Container,
  ContainerMenu,
  ContainerMenuList,
} from './styles';

import { privateRole } from '../../routes/constants';
import { IMenu } from './types';
import { useLocalStorage } from '../../hooks/AuthLocal';

export const SideBar: React.FC = () => {
  const { open } = useSideBar();
  const { mobile } = useMobile();
  const { user } = useLocalStorage();

  const renderMenuList = (): React.ReactNode => {
    const menuList: IMenu[] = [];

    if (user?.user.profiles.includes(privateRole)) {
      for (const item of privateMenu) {
        menuList.push(item);
      }
    }

    return (
      <>
        {menuList.map((item, index) => (
          <MenuSection
            key={index}
            icon={item.icon}
            text={item.text}
            route={item.route}
            mobile={mobile}
            subMenu={item.subMenu}
            dataTestId={item.dataTestId}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <Container open={open} mobile={mobile}>
        <ContainerMenuList>
          <ContainerMenu open={open}>{renderMenuList()}</ContainerMenu>
        </ContainerMenuList>
      </Container>
      {mobile && <MobileSideBar />}
    </>
  );
};
