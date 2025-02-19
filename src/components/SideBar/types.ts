import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SideBarProps {
  open: boolean;
  mobile?: boolean;
}

export interface IMenu {
  icon?: IconProp;
  text: string;
  route?: string;
  mobile?: boolean;
  subMenu?: Array<IMenu>;
  dataTestId: string;
}
