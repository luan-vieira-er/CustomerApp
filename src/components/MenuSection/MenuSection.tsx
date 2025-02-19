import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMenu } from '../SideBar/types';
import {
  Container,
  ContainerIcon,
  ContainerIconSubMenu,
  ContainerItem,
  ContainerLink,
  ContainerMenu,
  ContainerSubMenu,
  ContainerText,
  StyledIcon,
  StyledText,
  StyledTextSubMenu,
} from './styles';
import { faCircleDown, faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { useSideBar } from '../../context/SideBar';

export const MenuSection: React.FC<IMenu> = ({
  icon,
  text,
  route,
  subMenu,
  dataTestId,
}) => {
  const { open, setOpen } = useSideBar();
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const handleOpenSidebar = () => {
    if (!open) {
      setOpen(true);
      setOpenMenu(true);
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const renderMenuItem = (
    <>
      {icon && (
        <ContainerIcon>
          <StyledIcon icon={icon} />
        </ContainerIcon>
      )}
      {open && (
        <ContainerText>
          <StyledText>{text}</StyledText>
        </ContainerText>
      )}
    </>
  );

  return (
    <Container menuOpen={open}>
      <ContainerMenu menuOpen={open}>
        <ContainerItem
          menuOpen={open}
          data-testid={dataTestId}
          isSelected={
            route === pathname ||
            !!subMenu?.find((item: IMenu) => item.route === pathname)
          }
        >
          {route ? (
            <Link to={route}>
              <ContainerLink>{renderMenuItem}</ContainerLink>
            </Link>
          ) : (
            <ContainerLink
              onClick={() => {
                handleOpenMenu();
                handleOpenSidebar();
              }}
            >
              {renderMenuItem}
            </ContainerLink>
          )}
          {open && subMenu && (
            <ContainerIconSubMenu onClick={handleOpenMenu}>
              <StyledIcon icon={openMenu ? faCircleUp : faCircleDown} />
            </ContainerIconSubMenu>
          )}
        </ContainerItem>
        {open && openMenu && subMenu && (
          <ContainerSubMenu>
            {subMenu.map((item, index) => (
              <Link key={index} to={item.route}>
                <ContainerLink>
                  <StyledTextSubMenu isSelected={item.route === pathname}>
                    {item.text}
                  </StyledTextSubMenu>
                </ContainerLink>
              </Link>
            ))}
          </ContainerSubMenu>
        )}
      </ContainerMenu>
    </Container>
  );
};
