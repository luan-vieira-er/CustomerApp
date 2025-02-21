import React from 'react';
import { useMobile } from '../../context/Mobile';
import { useSideBar } from '../../context/SideBar';
import * as S from './styles';
import { UserProfile } from './UserProfile';
import { SignOut } from '../../components/SignOut';
import { HeaderMenu } from '../../components/HeaderMenu';
import { 
  ContainerHeader,
  ContainerLogo,
  StyledIcon,
  HeaderButtonWrapper
 } from './styles';
 import { useLocation } from 'react-router-dom';
import logoMenuOpened from '../../assets/menu-logo.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const MenuBar: React.FC = () => {
  const { open, setOpen } = useSideBar();
  const { mobile } = useMobile();
  const location = useLocation();

  return (
    <S.Container menuOpen={open} mobile={mobile}>
      <S.LeftDiv>
        <HeaderButtonWrapper onClick={() => setOpen(!open)}>
          <StyledIcon icon={faBars} size='2x' />
        </HeaderButtonWrapper>
        <ContainerLogo open={open}>
          <img src={logoMenuOpened} alt='Logo Menu Opened' />
        </ContainerLogo>
      </S.LeftDiv>
      <S.CenterDiv>
        <ContainerHeader>
          <HeaderMenu
            route="/dashboard"
            name="Clientes"
            isActive={location.pathname === "/dashboard"}
          />
        </ContainerHeader>
        <ContainerHeader>
          <HeaderMenu
            route="/selected"
            name="Clientes selecionados"
            isActive={location.pathname === "/selected"}
          />
        </ContainerHeader>
        <ContainerHeader>
          <SignOut />
        </ContainerHeader>
      </S.CenterDiv>
      <S.RightDiv>
        <S.ContainerUserProfile>
          <UserProfile isMobile={mobile} />
        </S.ContainerUserProfile>
      </S.RightDiv>
    </S.Container>
  );
};
