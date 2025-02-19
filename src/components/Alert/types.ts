import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AlertProps } from '@mui/material';

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface IAlertProps {
  open: boolean;
  type: AlertType;
  title?: string;
  text: string;
  showCloseButton?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
  autoClose?: boolean;
  autoCloseTimeout?: number;
  closeOnClickOutside?: boolean;
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right' | 'center';
}

export interface IThemeColors {
  Color: string;
  Background: string;
  IconColor: string;
  Icon: IconProp;
}

export interface IStyledAlertProps extends AlertProps {
  height: string;
  width?: string;
  backgroundcolor: string;
  textcolor: string;
}
