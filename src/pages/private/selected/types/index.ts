import { IErrors } from "types";

export interface DashboardContextData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  listErrors: IErrors[] | null;
  setListErrors: React.Dispatch<IErrors[] | null>;
}

export interface IGetCustomersRequestData {
  take: number;
  skip: number;
  selected: boolean | undefined;
}

export interface IGetCustomersData {
  id: string;
  fullname: string;
  salary: number;
  company_value: number;
  selected: boolean;
  created_at: string;
  updated_at: string;
}

export interface IGetCustomersResponse {
  data: IGetCustomersData[];
  count: number;
}

export interface IInsertCustomersRequestForm {
  fullname: string;
  salary: number | null;
  company_value: number | null;
}

export interface IUpdateCustomerRequestForm {
  fullname: string;
  salary: number | null;
  company_value: number | null;
}

export interface IUpdateCustomerRequestFormId {
  id: string;
  fullname: string;
  salary: number | null;
  company_value: number | null;
}