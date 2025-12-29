export const colors = {
  primary: '#0070f3',
  secondary: '#ff4081',
  background: '#ffffff',
  text: '#111111',
  gray: {
    100: '#f5f5f5',
    200: '#eeeeee',
    500: '#999999',
    900: '#333333',
  },
  error: '#e00',
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
} as const;

export const theme = {
  colors,
  spacing,
};

// Tipo inferido do tema para uso no styled-components
export type ThemeType = typeof theme;