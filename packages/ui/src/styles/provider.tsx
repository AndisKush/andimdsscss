'use client'; // Necessário pois ThemeProvider usa Context API

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './tokens';
import { GlobalStyle } from './global';

interface OrionProviderProps {
  children: React.ReactNode;
}

export function OrionProvider({ children }: OrionProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme}/>
      {children}
    </ThemeProvider>
  );
}