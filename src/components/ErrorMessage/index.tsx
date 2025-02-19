import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { MessagesWrapper, Container, ErrorWrapper, StyledIcon } from './styles';

const ErrorMessage = () => {
  return (
    <Container data-testid='changePasswordError'>
      <ErrorWrapper>
        <StyledIcon color='#FB7185' className='fa-7x' icon={faCircleXmark} />
        <p className='error'>Erro</p>
      </ErrorWrapper>
      <MessagesWrapper>
        <div className='errorMessage'>
          <p>Algo deu errado, nós já estamos resolvendo!</p>
          <p>
            <b>Tente novamente mais tarde.</b>
          </p>
        </div>
      </MessagesWrapper>
    </Container>
  );
};

export default ErrorMessage;
