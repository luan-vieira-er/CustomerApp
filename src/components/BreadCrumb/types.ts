import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface BreadCrumbProps {
  children: React.ReactNode;
  iconSize?: SizeProp | undefined;
  color?: string;
  textSize?: string;
}

export interface BreadCrumbItemListProp {
  color: string;
  textSize: string;
}
