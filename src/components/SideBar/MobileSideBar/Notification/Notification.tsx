import React from 'react';
import { faBell as faBells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoMenuOpened from '../../../../assets/react.svg';

import {
  ContainerNotification,
  StyledLogo,
  StyledText,
  WrapperContent,
} from './styles';
import { NotificationMobile } from './type';

export const Notification: React.FC<NotificationMobile> = ({ open }) => {
  return (
    <ContainerNotification open={open}>
      <StyledLogo src={logoMenuOpened} alt='Logo' />
      <WrapperContent>
        <FontAwesomeIcon icon={faBells} size='4x' />
        <StyledText>Você não possui nenhuma notificação</StyledText>
      </WrapperContent>
    </ContainerNotification>
  );
};
