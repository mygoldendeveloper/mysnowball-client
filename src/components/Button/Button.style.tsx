import styled from "@emotion/styled";

import { ButtonProps } from ".";
import { Theme } from "foundations";

export const Layout = styled.div<ButtonProps>`
  display: flex;

  width: 100%;
  align-items: center;

  padding: 12px 32px;
  height: 20px;

  background: ${({ color }) => color || Theme.color.green600};
  border-radius: 8px;

  white-space: nowrap;
`;
