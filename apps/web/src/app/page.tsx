'use client'; // Necessário pois o botão tem interatividade (onClick/Styles)

import { Button } from '@andisds/ui';
import styled from 'styled-components';

// Exemplo de como o app consumidor pode estender estilos locais
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 20px;
`;

export default function Home() {
  return (
    <Main>
      <h1>Orion Design System</h1>
      <p>Teste de integração do Monorepo</p>
      
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
    </Main>
  );
}