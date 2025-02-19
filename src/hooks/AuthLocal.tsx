import dark from '../styles/dark';
import { IDataLocalStorage } from '../types';

const keyLocal = `${import.meta.env.VITE_APP_NAME}`;

const initialValue: IDataLocalStorage = {
  theme: dark,
  user: null,
};

export const setLocalStorage = (key: string, value: any) => {
  try {
    const item = window.localStorage.getItem(keyLocal);

    if (item)
      return localStorage.setItem(
        keyLocal,
        JSON.stringify({
          ...JSON.parse(item),
          [key]: value,
        }),
      );
  } catch (error) {
    console.error('Não foi possivel salvar os dados');
  }
};

export const useLocalStorage = (): IDataLocalStorage => {
  try {
    const item = window.localStorage.getItem(keyLocal);
    // Parse stored json or if none return initialValue
    if (item) return JSON.parse(item);

    localStorage.setItem(keyLocal, JSON.stringify(initialValue));
    return initialValue;
  } catch (error) {
    return initialValue;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem(keyLocal);
};
