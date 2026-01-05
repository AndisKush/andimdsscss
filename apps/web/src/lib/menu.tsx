import { MenuItem } from '@andisds/ui';
import { Home, Settings, UserPlus, Users } from 'lucide-react';

export const APP_MENU: MenuItem[] = [
  { 
    id: 'home', 
    label: 'Início', 
    href: '/home', 
    icon: <Home size={20} /> 
  },
  { 
    id: 'cadastro', 
    label: 'Cadastros', 
    icon: <UserPlus size={20} />, 
    children: [
      { 
        id: 'users', 
        label: 'Usuários', 
        href: '/users',
        icon: <Users size={20} /> 
      },
      { 
        id: 'users2', 
        label: 'Usuários2', 
        href: '/users',
        icon: <Users size={20} />,
        hiddenOnMobile: true 
      },
    ]
  },
  { 
    id: 'config', 
    label: 'Configurações', 
    href: '/config', 
    icon: <Settings size={20} />, 
    hiddenOnMobile: true 
  }
];