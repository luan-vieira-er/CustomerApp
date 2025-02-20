import React from 'react';
import {
  faBars,
  faBell,
  faCircleXmark as faCircleX,
} from '@fortawesome/free-solid-svg-icons';
import { faBell as faBellSolid } from '@fortawesome/free-solid-svg-icons';

import { useSideBar } from '../../../context/SideBar';

import { Notification } from './Notification';
import {
  ContainerButtonsMobile,
  MobileButtonWrapper,
  OpenMobileMenuText,
  StyledExitIcon,
  StyledIcon,
  StyledOverflow,
} from './styles';

export const MobileSideBar: React.FC = () => {
  const { open, setOpen } = useSideBar();

  const [notificationMenu, setNotificationMenu] =
    React.useState<boolean>(false);

  return (
    <>
      <ContainerButtonsMobile open={open}>
        <MobileButtonWrapper onClick={() => setOpen(!open)}>
          <StyledIcon icon={faBars} size='2x' />
          <OpenMobileMenuText>Menu</OpenMobileMenuText>
        </MobileButtonWrapper>
        <MobileButtonWrapper
          onClick={() => setNotificationMenu(!notificationMenu)}
        >
          <StyledIcon
            icon={notificationMenu ? faBellSolid : faBell}
            size='2x'
          />
          <OpenMobileMenuText>Notificações</OpenMobileMenuText>
        </MobileButtonWrapper>
      </ContainerButtonsMobile>
      <StyledOverflow open={open}>
        <StyledExitIcon icon={faCircleX} onClick={() => setOpen(false)} />
      </StyledOverflow>
      <Notification open={notificationMenu} />
    </>
  );
};
