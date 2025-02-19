import React from 'react';
import { useMobile } from 'context/Mobile';
import { useSideBar } from 'context/SideBar';
import * as S from './styles';
import { NotificationModal } from './NotificationModal';
import { faBell, faBell as faBells }  from '@fortawesome/free-solid-svg-icons';
import { UserProfile } from './UserProfile';
import { common } from 'styles/constants';

export const MenuBar: React.FC = () => {
  const { open } = useSideBar();
  const { mobile } = useMobile();

  const [hasNotification, setHasNotification] = React.useState<boolean>(false);

  const handleNotification = () => {
    setHasNotification(!hasNotification);
  };

  return (
    <S.Container menuOpen={open} mobile={mobile}>
      <S.RightDiv>
        <S.NotificationDiv>
          <S.StyledBadge>
            <S.StyledIcon
              onClick={handleNotification}
              icon={hasNotification ? faBells : faBell}
              color={common.colors.orange}
            />
            {!!hasNotification && <NotificationModal />}
          </S.StyledBadge>
        </S.NotificationDiv>
        <S.ContainerUserProfile>
          <UserProfile isMobile={mobile} />
        </S.ContainerUserProfile>
      </S.RightDiv>
    </S.Container>
  );
};
