"use client"
import React, { useState, useEffect } from 'react'; 
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { AppShellProps, MenuItem } from './types';
import * as S from './styles';
import { Button } from '../Button';

export const AppShell = ({
  children,
  menuItems,
  sidebarCollapsed = false,
  onToggleSidebar,
  headerContent,
  onNavigate,
}: AppShellProps) => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSubmenu = (id: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.children) {
      // No desktop: toggle normal
      toggleSubmenu(item.id);
      
      // No mobile: abre/fecha o drawer e garante que fecha os outros
      setMobileMenuOpen(prev => prev === item.id ? null : item.id);
    } else {
      onNavigate?.(item);
      setMobileMenuOpen(null); // Fecha o drawer ao navegar
    }
  };

  // --- Renderizadores ---

  const renderDesktopMenu = (items: MenuItem[]) => (
    items.map((item) => (
      <React.Fragment key={item.id}>
        <S.DesktopMenuItem onClick={() => handleItemClick(item)}>
          {item.icon}
          {!sidebarCollapsed && (
            <>
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.children && (
                openSubmenus[item.id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />
              )}
            </>
          )}
        </S.DesktopMenuItem>
        
        {!sidebarCollapsed && item.children && openSubmenus[item.id] && (
          <S.SubMenuContainer>
            {renderDesktopMenu(item.children)}
          </S.SubMenuContainer>
        )}
      </React.Fragment>
    ))
  );

  const renderMobileMenu = (items: MenuItem[]) => (
    items.filter(i => !i.hiddenOnMobile).map((item) => {
      const isActive = mobileMenuOpen === item.id;
      return (
        <S.MobileNavItem 
          key={item.id} 
          onClick={() => handleItemClick(item)} 
          $active={isActive} // Passa prop visual de ativo se o drawer dele estiver aberto
        >
          {/* Se estiver aberto e tiver filhos, mostra seta pra baixo (indicando fechar) */}
          {isActive && item.children ? <ChevronDown size={20} /> : item.icon}
          <span>{item.label}</span>
        </S.MobileNavItem>
      );
    })
  );

  return (
    <S.ShellContainer>
      {/* DESKTOP SIDEBAR */}
      <S.Sidebar $collapsed={sidebarCollapsed}>
        <div style={{ padding: '16px', display: 'flex', justifyContent: sidebarCollapsed ? 'center' : 'space-between', alignItems: 'center' }}>
          {!sidebarCollapsed && <strong>Orion</strong>}
          <Button variant="outline" onClick={onToggleSidebar} style={{ padding: '4px' }}>
            {sidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
          </Button>
        </div>
        <nav style={{ flex: 1, overflowY: 'auto' }}>
          {renderDesktopMenu(menuItems)}
        </nav>
      </S.Sidebar>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        <S.Header>
           <div>{headerContent || 'Dashboard'}</div>
        </S.Header>

        <S.MainContent>
          {children}
        </S.MainContent>
      </div>

      {/* MOBILE BOTTOM NAV */}
      <S.BottomNav>
        {renderMobileMenu(menuItems)}
      </S.BottomNav>

      {/* MOBILE SUBMENU DRAWER (Agora com Styled Component seguro) */}
      {mobileMenuOpen && (
        <S.MobileMenuDrawer>
           <S.DrawerHeader>
             <span>{menuItems.find(i => i.id === mobileMenuOpen)?.label}</span>
             <X size={20} onClick={() => setMobileMenuOpen(null)} style={{ cursor: 'pointer' }} />
           </S.DrawerHeader>
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {menuItems.find(i => i.id === mobileMenuOpen)?.children?.map(sub => (
                  <Button 
                    key={sub.id} 
                    variant="secondary" 
                    onClick={() => {
                      onNavigate?.(sub);
                      setMobileMenuOpen(null); // Fecha ao clicar na opção
                    }}
                    style={{ width: '100%', justifyContent: 'flex-start' }}
                  >
                    {sub.label}
                  </Button>
              ))}
           </div>
        </S.MobileMenuDrawer>
      )}

    </S.ShellContainer>
  );
};