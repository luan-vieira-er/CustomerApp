export interface OptionsProps {
  value: string | number;
  label: string;
}

export interface SelectProps {
  name: string;
  typeStyle?: 'primary' | 'secondary';
  typeWeight?: 'sm' | 'md';
  label?: string;
  onChange?: (value: any) => void;
  value?: string | number;
  options?: OptionsProps[] | undefined;
  placeholder?: string;
  action?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  error?: boolean;
  messageError?: string;
}
