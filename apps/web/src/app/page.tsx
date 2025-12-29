'use client';
import { useState } from 'react';
import { AppShell, MenuItem, Button } from '@andisds/ui';
import { Home, Beaker, LogOut } from 'lucide-react'; // Instale lucide-react no web se precisar dos icones aqui
// Ou use ícones passados como string/svg simples se não quiser instalar lucide no web

const menu: MenuItem[] = [
  { id: 'home', label: 'Início', icon: <Home size={20} /> },
  { 
    id: 'test', 
    label: 'Teste', 
    icon: <Beaker size={20} />, 
    children: [
       { id: 't1', label: 'Teste Unitário' },
       { id: 't2', label: 'Teste E2E' }
    ]
  },
  { id: 'config', label: 'Configurações', icon: <LogOut size={20} />, hiddenOnMobile: true }
];

export default function Page() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AppShell
      menuItems={menu}
      sidebarCollapsed={collapsed}
      onToggleSidebar={() => setCollapsed(!collapsed)}
      headerContent={<h3>Bem-vindo, Usuário</h3>}
      onNavigate={(item: any) => alert(`Navegando para: ${item.label}`)}
    >
      <div style={{ padding: '20px', background: 'white', borderRadius: '8px' }}>
        <h1>Dashboard Principal</h1>
        <p>Aqui renderiza o children do Next.js (page content).</p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant="primary" onClick={() => alert('Primary Clicked!')}>
          Botão Primário
        </Button>
        
        <Button variant="secondary">
          Botão Secundário
        </Button>

        <Button variant="outline">
          Botão Outline
        </Button>
      </div>
    </AppShell>
  );
}