export interface MenuSectionProps {
  menuOpen: boolean;
}

export interface MenuItemProps extends MenuSectionProps {
  isSelected: boolean;
}
export interface SubMenuProps {
  isSelected: boolean;
}
