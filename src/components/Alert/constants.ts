import { AlertType, IThemeColors } from './types';
import {
  faCircleCheck,
  faCircleInfo,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { theme } from 'styles/constants';

export const getThemeColorFromAlertType = (alertType: AlertType) => {
  switch (alertType) {
    case 'success':
      return SUCCESS;
    case 'info':
      return INFO;
    case 'warning':
      return WARNING;
    case 'error':
      return ERROR;
    default:
      return SUCCESS;
  }
};

export const SUCCESS: IThemeColors = {
  Color: theme.Alert.Success.Color,
  Background: theme.Alert.Success.Background,
  IconColor: theme.Alert.Success.Icon,
  Icon: faCircleCheck,
};

export const INFO: IThemeColors = {
  Color: theme.Alert.Info.Color,
  Background: theme.Alert.Info.Background,
  IconColor: theme.Alert.Info.Icon,
  Icon: faCircleInfo,
};

export const WARNING: IThemeColors = {
  Color: theme.Alert.Warning.Color,
  Background: theme.Alert.Warning.Background,
  IconColor: theme.Alert.Warning.Icon,
  Icon: faCircleExclamation,
};

export const ERROR: IThemeColors = {
  Color: theme.Alert.Error.Color,
  Background: theme.Alert.Error.Background,
  IconColor: theme.Alert.Error.Icon,
  Icon: faCircleExclamation,
};
