import styled, { css } from 'styled-components';

// Definimos interface apenas para as props visuais (style-only)
interface ContainerProps {
  $variant: 'primary' | 'secondary' | 'outline';
}

export const Container = styled.button<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  /* Reset básico de borda para tratar nos variantes */
  border: 1px solid transparent;

  /* Variantes de Estilo */
  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: #fff;
          &:hover { filter: brightness(0.9); }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
          &:hover { background-color: ${theme.colors.gray[100]}; }
        `;
      case 'primary':
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: #fff;
          &:hover { filter: brightness(0.9); }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;