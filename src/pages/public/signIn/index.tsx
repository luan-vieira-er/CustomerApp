import React, { useContext } from 'react';
import AuthProvider from '../../../context/AuthProvider';

import { FormSignIn } from './components/FormSignIn';
import { login } from './services/login';
import { SignInProvider, useSignIn } from './context';
import { Container } from './styles';

export const PageComponent: React.FC = () => {
  const { setLoading, setListErrors } = useSignIn();
  const { updateData } = useContext(AuthProvider);

  return (
    <Container>
      <FormSignIn
        onSubmit={(values) =>
          login({
            loginForm: values,
            setLoading,
            setListErrors,
            updateData,
          })
        }
      />
    </Container>
  );
};

export const SignIn: React.FC = () => {
  return (
    <SignInProvider>
      <PageComponent />
    </SignInProvider>
  );
};
