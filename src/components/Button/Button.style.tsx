import styled from "@emotion/styled";

import { ButtonProps } from ".";
import { Color, Theme } from "foundations";

export const Layout = styled.button<ButtonProps>`
  display: flex;

  width: 100%;
  justify-content: center;
  align-items: center;

  padding: 12px 32px;
  height: 54px;

  background: ${({ color }) => Color[color || "green600"]};
  border-radius: 8px;

  white-space: nowrap;
`;
