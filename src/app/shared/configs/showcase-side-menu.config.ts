import { SideMenuButton } from 'src/app/components/side-menu/models/side-menu-button.model';

export const showcaseSideMenuConfig: SideMenuButton[] = [
  { color: 'primary', id: 1, isActive: false, label: 'Button', link: 'showcase/button' },
  { color: 'primary', id: 2, isActive: false, label: 'Card', link: 'showcase/card' },
  {
    color: 'primary',
    id: 3,
    isActive: false,
    label: 'Formfields',
    link: 'showcase/formfield/text',
    displaySubMenu: false,
    children: [
      { color: 'primary', id: 1, isActive: false, label: 'Text', link: 'showcase/formfield/text' },
      { color: 'primary', id: 2, isActive: false, label: 'Password', link: 'showcase/formfield/password' },
    ],
  },
  { color: 'primary', id: 4, isActive: false, label: 'Icon', link: 'showcase/icon' },
  { color: 'primary', id: 5, isActive: false, label: 'Navbar', link: 'showcase/navbar' },
  { color: 'primary', id: 6, isActive: false, label: 'Snackbar', link: 'showcase/snackbar' },
];
