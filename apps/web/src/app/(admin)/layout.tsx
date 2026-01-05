'use client';

import { useState } from 'react';
import { AppShell } from '@andisds/ui';
import { useRouter } from 'next/navigation';
import { APP_MENU } from '@/lib/menu';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AppShell
      menuItems={APP_MENU}
      sidebarCollapsed={collapsed}
      onToggleSidebar={() => setCollapsed(!collapsed)}
      headerContent={<strong>Painel Administrativo</strong>}
      onNavigate={(item) => item.href && router.push(item.href)}
    >
      {children}
    </AppShell>
  );
}