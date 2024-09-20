import { SideMenuButtonColorType } from '../types/side-menu-button-color.type';

export interface SideMenuButton {
  children?: SideMenuButton[];
  color: SideMenuButtonColorType;
  displaySubMenu?: boolean;
  id: number;
  isActive: boolean;
  label: string;
  link: string;
}
