import {
  faChartColumn,
  faHome as Dashboard,
} from '@fortawesome/free-solid-svg-icons';
import { IMenu } from './types';
import { routes } from 'routes/constants';

const subMenu: Array<IMenu> = [
  {
    text: 'Dashboard',
    route: routes.private.dashboard,
    dataTestId: 'Dashboard',
  },
];

export const privateMenu: Array<IMenu> = [
  {
    text: 'Dashboard',
    icon: Dashboard,
    route: routes.private.dashboard,
    dataTestId: 'Dashboard',
  },
  {
    text: 'Exemplo Sub Menu',
    icon: faChartColumn,
    dataTestId: 'MenuRegister',
    subMenu: subMenu,
  },
];