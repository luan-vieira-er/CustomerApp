import {
  faHome as Dashboard,
  faUser as User,
  faList as List,
} from '@fortawesome/free-solid-svg-icons';
import { IMenu } from './types';
import { routes } from '../../routes/constants';

export const privateMenu: Array<IMenu> = [
  {
    text: 'Home',
    icon: Dashboard,
    route: routes.private.dashboard,
    dataTestId: 'Dashboard',
  },
  {
    text: 'Clientes',
    icon: User,
    route: routes.private.dashboard,
    dataTestId: 'Dashboard',
  },
  {
    text: 'Produtos',
    icon: List,
    dataTestId: 'Dashboard',
  },
];