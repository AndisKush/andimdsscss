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

export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  md: '1rem',       // 16px
  lg: '1.125rem',   // 18px
  xl: '1.5rem',     // 24px
  '2xl': '2rem',    // 32px
  '3xl': '2.5rem',  // 40px
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export const lineHeights = {
  tight: 1.25,
  normal: 1.5,
  loose: 1.75,
} as const;

export const theme = {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  lineHeights,
};

// Tipo inferido do tema para uso no styled-components
export type ThemeType = typeof theme;