import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface InputTextProps {
  id?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  background?: string;
  color?: string;
  fullWidth?: boolean;
  label?: string;
  icon?: IconProp;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  wrapperRef?: HTMLDivElement;
  inputRef?: HTMLElement;
  placeholderShown?: boolean;
  height?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export interface InputStyleProps {
  background: string;
  color: string;
  fullWidth?: boolean;
  placeholderShown?: boolean;
  height?: string;
  icon?: IconProp;
  [key: string]: any;
}
