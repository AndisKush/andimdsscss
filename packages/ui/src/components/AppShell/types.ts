import { ReactNode } from 'react';

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  /** Se true, esconde este item no mobile */
  hiddenOnMobile?: boolean;
  /** Submenus */
  children?: MenuItem[];
}

export interface AppShellProps {
  children: ReactNode;
  menuItems: MenuItem[];
  /** Controle de estado do menu lateral (desktop) */
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
  /** Título ou componente para o Header */
  headerContent?: ReactNode;
  /** Função callback de navegação */
  onNavigate?: (item: MenuItem) => void;
}