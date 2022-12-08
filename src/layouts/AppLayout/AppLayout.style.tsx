import styled from "@emotion/styled";
import { Theme } from "foundations";

export const App = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: #f9fafb;
`;

export const Layout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  max-width: 600px;
  background: ${Theme.color.gray100};
`;
