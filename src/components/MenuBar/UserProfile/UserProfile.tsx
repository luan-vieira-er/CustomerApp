import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import AuthProvider from 'context/AuthProvider';
import { useSideBar } from 'context/SideBar';

import {
  ContainerProfile,
  ContainerUserProfile,
  StyledIcon,
  StyledName,
} from './styles';
import { UserProfileProps } from './types';
import { common } from 'styles/constants';
import { routes } from 'routes/constants';

export const UserProfile: React.FC<UserProfileProps> = ({ isMobile }) => {
  const { data } = useContext(AuthProvider);
  const { setOpen, open } = useSideBar();
  const { pathname } = useLocation();
  const username = data?.user.name.split(' ')[0];
  const isSelected = routes.commom.profile === pathname;

  const handleMobileSelected = () => {
    if (isMobile) return setOpen(false);
  };

  return (
    <Link to={routes.commom.profile} onClick={handleMobileSelected}>
      <div>
        <ContainerUserProfile isSelected={isSelected} open={open}>
          <StyledIcon
            icon={faUserCircle}
            color={common.colors.orange}
            size='3x'
          />
          {!!open && (
            <ContainerProfile>
              <StyledName>{username}</StyledName>
            </ContainerProfile>
          )}
        </ContainerUserProfile>
      </div>
    </Link>
  );
};
