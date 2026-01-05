import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SelectButton = styled.button<{ $hasError?: boolean }>`
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.gray[500]};
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;
  margin-top: 4px;
  max-height: 250px;
  overflow-y: auto;
  z-index: 50;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  outline: none;
  font-size: 0.875rem;
`;

export const Option = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;