import { ButtonHTMLAttributes } from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  typeStyle?: 'primary' | 'secondary' | 'third' | 'cancel' | 'outlined';
  text?: string;
  disabled?: boolean;
  width?: number;
  loading?: boolean;
  color?: string;
  icon?: IconProp;
  iconSize?: SizeProp;
}
