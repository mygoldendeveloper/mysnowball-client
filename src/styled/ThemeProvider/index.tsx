import { ThemeProvider as StyledThemeProvider } from "@emotion/react";

import { Theme } from "../../foundations";

export interface ThemeProviderProps extends ChildrenProps {}

export interface ChildrenProps<Children = React.ReactNode> {
  children?: Children;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={Theme}>{children}</StyledThemeProvider>;
};
