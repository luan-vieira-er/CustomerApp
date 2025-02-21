import { AxiosResponse } from 'axios';

import api from '../../../../services/axios';
import { customersUrl } from '../../../../services/urls';
import { 
    IGetCustomersRequestData,
    IGetCustomersResponse,
    IInsertCustomersRequestForm,
    IUpdateCustomerRequestForm
} from '../types';
import { IErrors } from 'types';

interface IGetCustomers {
  getCustomersData: IGetCustomersRequestData;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setListErrors: React.Dispatch<IErrors[] | null>;
}

interface IInsertCustomers {
    insertCustomersRequestForm: IInsertCustomersRequestForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setListErrors: React.Dispatch<IErrors[] | null>;
}

export const getCustomersData = async ({
  getCustomersData: getCustomersData,
  setLoading,
  setListErrors,
}: IGetCustomers) => {
  setLoading(true);

  try {
    const params = {
      take: getCustomersData.take,
      skip: getCustomersData.skip,
      selected: getCustomersData.selected
    }
    const { data }: AxiosResponse<IGetCustomersResponse> = await api.get(
      customersUrl, { params }
    );

    if (data === null) {
        setListErrors([{ Key: '1', Message: 'Houve um erro ao buscar os clientes' }]);
    }
    
    const { data: customers, count } = data;

    return { customers, count };
  } catch (err: any) {
    setListErrors(err.response.data);
  } finally {
    setLoading(false);
  }
};

export const insertCustomer = async ({
    insertCustomersRequestForm: insertCustomersRequestData,
    setLoading,
    setListErrors,
  }: IInsertCustomers) => {
      setLoading(true);
console.log("🚀 ~ insertCustomersRequestForm:", insertCustomersRequestData)

  try {
    const { data }: AxiosResponse<IGetCustomersResponse> = await api.post(
      customersUrl, insertCustomersRequestData
    );

    if (data === null) {
        setListErrors([{ Key: '1', Message: 'Houve um erro ao buscar os clientes' }]);
    }
        
    return { customer: data};
  } catch (err: any) {
    setListErrors(err.response.data);
  } finally {
    setLoading(false);
  }
};

interface IUpdateCustomer {
    id: string,
    updateCustomerRequestForm: IUpdateCustomerRequestForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setListErrors: React.Dispatch<IErrors[] | null>;
}
export const updateCustomer = async ({
    id: idStr,
    updateCustomerRequestForm,
    setLoading,
    setListErrors,
  }: IUpdateCustomer) => {
      setLoading(true);
  try {
    const { data }: AxiosResponse<IGetCustomersResponse> = await api.patch(
      `${customersUrl}/${String(idStr)}`, updateCustomerRequestForm
    );

    if (data === null) {
        setListErrors([{ Key: '1', Message: 'Houve um erro ao buscar os clientes' }]);
    }
        
    return { customer: data};
  } catch (err: any) {
    setListErrors(err.response.data);
  } finally {
    setLoading(false);
  }
};

interface IDeleteCustomer {
    id: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setListErrors: React.Dispatch<IErrors[] | null>;
}

export const deleteCustomer = async ({
    id: idStr,
    setLoading,
    setListErrors,
  }: IDeleteCustomer) => {
      setLoading(true);
  try {
    const { data }: AxiosResponse<IGetCustomersResponse> = await api.delete(
      `${customersUrl}/${String(idStr)}`
    );

    if (data === null) {
        setListErrors([{ Key: '1', Message: 'Houve um erro ao deletar o cliente' }]);
    }
    console.log("🚀 ~ data:", data)
        
    return { customer: data};
  } catch (err: any) {
    setListErrors(err.response.data);
  } finally {
    setLoading(false);
  }
};
