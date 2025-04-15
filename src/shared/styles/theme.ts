export const theme = {
  colors: {
    primary: {
      main: '#1a1a1a',
      light: '#4a4a4a',
      dark: '#000000',
    },
    secondary: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    background: {
      main: '#ffffff',
      surface: '#f8f9fa',
      hover: '#e9ecef',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
      disabled: '#9ca3af',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    h1: {
      size: '2.5rem',
      weight: '700',
      lineHeight: '1.2',
    },
    h2: {
      size: '1.5rem',
      weight: '600',
      lineHeight: '1.3',
    },
    body: {
      size: '1rem',
      weight: '400',
      lineHeight: '1.6',
    },
    small: {
      size: '0.875rem',
      weight: '400',
      lineHeight: '1.5',
    },
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
  transitions: {
    default: '0.2s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '0.3s ease-in-out',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  zIndex: {
    base: 1,
    dropdown: 1000,
    modal: 1100,
    toast: 1200,
  },
};