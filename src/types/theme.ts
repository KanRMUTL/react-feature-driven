export interface Theme {
  colors: {
    primary: string;
    background: string;
    text: string;
    gray: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  fontSizes: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  radius: {
    sm: string;
    md: string;
  };
  shadow: {
    card: string;
  };
}