import React from 'react';
import { faBell as faBells } from '@fortawesome/free-solid-svg-icons';

import {
    ContainerContentModal,
    ContainerModal,
    NotificationCleanButton,
    StyledHeaderModal,
    StyledIcon,
    StyledModalTitle,
    StyledText,
} from './styles';

export const NotificationModal: React.FC = () => {
    return (
        <ContainerModal>
            <StyledHeaderModal>
                <StyledModalTitle>Notificações</StyledModalTitle>
                <NotificationCleanButton>Limpar tudo</NotificationCleanButton>
            </StyledHeaderModal>
            <ContainerContentModal>
                <StyledIcon icon={faBells} />
                <StyledText>Você não possui nenhuma notificação</StyledText>
            </ContainerContentModal>
        </ContainerModal>
    );
};
