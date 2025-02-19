import { IErrors, IUser } from '../../../../types';

export interface ILoginForm {
  name: string;
}

export interface IFormSign {
  onSubmit: (values: ILoginForm) => void;
}

export interface ILoginResponse {
  accessToken: string;
  firstName: string;
  errors: Array<any> | null;
}

export interface SignInContextData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  listErrors: IErrors[] | null;
  setListErrors: React.Dispatch<IErrors[] | null>;
}
