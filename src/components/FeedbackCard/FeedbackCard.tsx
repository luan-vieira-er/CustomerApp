import React from 'react';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

import { getTypeFeedback } from './constant';
import {
  FeedbackContainer,
  StyledInfoText,
  StyledPlayer,
  StyledReload,
  StyledReloadIcon,
  StyledSubTitle,
  StyledTextContainer,
  StyledTitle,
} from './styles';
import { FeedbackCardProps } from './types';

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  type,
  loading = false,
  reload,
}) => {
  const feedbackInfo = getTypeFeedback(type);

  return (
    <FeedbackContainer>
      <StyledPlayer keepLastFrame autoplay src={feedbackInfo.animation} />
      <StyledTitle color={feedbackInfo.color}>{feedbackInfo.title}</StyledTitle>
      <StyledTextContainer type={type}>
        <StyledSubTitle>{feedbackInfo.subtitle}</StyledSubTitle>
        <StyledInfoText>{feedbackInfo.infoText}</StyledInfoText>
      </StyledTextContainer>
      <StyledReload onClick={() => reload()}>
        {feedbackInfo.button}
        <StyledReloadIcon icon={faRefresh} spin={loading} />
      </StyledReload>
    </FeedbackContainer>
  );
};
