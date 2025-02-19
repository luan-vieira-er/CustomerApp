import React from 'react';

export const getCepFromViaCep = async (
  cep: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<any> => {
  setLoading(true);
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(url);
  const json = await response.json();

  setLoading(false);
  if (json.erro) {
    return null;
  } else {
    return json;
  }
};
