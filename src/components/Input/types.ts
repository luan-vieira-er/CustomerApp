export interface InputProps {
  register?: any;
  defaultValue?: string;
  value?: string;
  placeholder: string;
  name: string;
  'data-testid': string;
  maxLength?: number;
  type: string;
  icon?: any;
  error?: any;
  errorMessage?: string | undefined;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}
