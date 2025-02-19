import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { Oval } from 'react-loader-spinner';
import { StyledIcon, StyledTimerSpan } from './styles';

export const renderLoadingTextOrNewCode = (sending: boolean, time: number) => {
  if (sending) {
    return (
      <>
        <Oval height={12} width={12} />
        <span>ENVIANDO CÓDIGO...</span>
      </>
    );
  }

  if (time) {
    return (
      <>
        <StyledIcon icon={faArrowRotateRight} />
        <span>REENVIAR CÓDIGO.</span>
        <StyledTimerSpan>(Aguarde {time} segundos)</StyledTimerSpan>
      </>
    );
  }

  return (
    <>
      <StyledIcon icon={faArrowRotateRight} />
      <span>REENVIAR CÓDIGO.</span>
    </>
  );
};
