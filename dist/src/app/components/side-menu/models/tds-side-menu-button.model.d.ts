import { TDSSideMenuButtonColorType } from '../types/tds-side-menu-button-color.type';
export interface TDSSideMenuButton {
    children?: TDSSideMenuButton[];
    color: TDSSideMenuButtonColorType;
    displaySubMenu?: boolean;
    id: number;
    isActive: boolean;
    label: string;
    link: string;
}
