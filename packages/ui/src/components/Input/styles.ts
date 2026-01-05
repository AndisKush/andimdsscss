import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.gray[500]};
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme, $hasError }) => 
      $hasError ? 'rgba(255,0,0,0.1)' : 'rgba(0,112,243,0.1)'};
  }
`;