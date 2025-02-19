import React, { createContext, useContext } from 'react';

import { IErrors } from '../../../../types';
import { SignInContextData } from '../types';

interface Props {
  children: React.ReactElement;
}

const SignContext = createContext<SignInContextData>({} as SignInContextData);

const SignInProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [listErrors, setListErrors] = React.useState<IErrors[] | null>(null);

  return (
    <SignContext.Provider
      value={{
        loading,
        setLoading,
        listErrors,
        setListErrors,
      }}
    >
      {children}
    </SignContext.Provider>
  );
};

function useSignIn(): SignInContextData {
  const context = useContext(SignContext);

  if (!context) {
    throw new Error('useSignIn must be used within an SignInContext');
  }
  return context;
}

export { SignInProvider, useSignIn };
