import { AxiosResponse } from 'axios';
import { IUpdateData } from 'context/AuthProvider';

import api from 'services/axios';
import { loginUrl } from 'services/urls';
import { IErrors, IUser } from 'types';
import { ILoginResponse, ILoginForm } from '../types';

interface ILogin {
  loginForm: ILoginForm;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setListErrors: React.Dispatch<IErrors[] | null>;
  updateData: ({ user, token }: IUpdateData) => void;
}

export const login = async ({
  loginForm,
  setLoading,
  setListErrors,
  updateData,
}: ILogin) => {
  setLoading(true);

  try {
    const { data }: AxiosResponse<ILoginResponse> = await api.post(
      loginUrl,
      loginForm,
    );

    if (data === null) {
      setListErrors([{ Key: '1', Message: 'Houve um erro no login' }]);
    }

    const { accessToken } = data;

    const user: IUser = {
      name: data.firstName,
      profiles: ['admin']
    };
    
    const mockedUpdateData: IUpdateData = {
      token: {
        accessToken: accessToken,
        expiresIn: 3000
      },
      user: user
    };
    
    const token = mockedUpdateData.token;

    if (user && accessToken) {
      updateData({
        user,
        token,
      });
      setListErrors(null);
      setLoading(false);
    } else {
      setLoading(false);
      throw new Error();
    }
  } catch (err: any) {
    setListErrors(err.response.data);
  } finally {
    setLoading(false);
  }
};
