export interface ISearchForm {
  search: string;
}

export interface SearchInputFieldProps {
  background?: string;
  textcolor?: string;
  placeholder?: string;
  height?: number;
  width?: number;
}

export interface SearchInputProps extends SearchInputFieldProps {
  onSubmit: (values: string) => void;
  handleClear: () => void;
  searched: boolean;
}
