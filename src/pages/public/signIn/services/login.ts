import { AxiosResponse } from 'axios';
import { IUpdateData } from '../../../../context/AuthProvider';

import api from '../../../../services/axios';
import { customersUrl } from '../../../../services/urls';
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
    // const { accessToken } = data; //Substituir se necessitar login real
    const accessToken = "FakeJWT";

    const user: IUser = {
      name: loginForm.name,
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
