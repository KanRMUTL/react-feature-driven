export interface Theme {
  colors: {
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
    };
    background: {
      main: string;
      surface: string;
      hover: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      white: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  typography: {
    h1: {
      size: string;
      weight: string;
      lineHeight: string;
    };
    h2: {
      size: string;
      weight: string;
      lineHeight: string;
    };
    body: {
      size: string;
      weight: string;
      lineHeight: string;
    };
    small: {
      size: string;
      weight: string;
      lineHeight: string;
    };
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
  transitions: {
    default: string;
    fast: string;
    slow: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };
  zIndex: {
    base: number;
    dropdown: number;
    modal: number;
    toast: number;
  };
}
