export interface ICustomTheme {
  common: {
    colors: {
      primary50: string;
      primary100: string;
      primary200: string;
      primary300: string;
      primary400: string;
      primary500: string;
      primary600: string;
      primary700: string;
      primary800: string;
    };
  };
  component: {
    table: {
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        colors: {
          primary: string;
          secondary: string;
        };
      };
      row: {
        borderColor: string;
      };
    };
  };
}
