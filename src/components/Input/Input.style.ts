import { css } from "@emotion/react";

import styled from "@emotion/styled";
import { Text } from "components/Text";
import { Color } from "foundations";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
`;

interface Props {
  disabled?: boolean;
  isRequired?: boolean;
}

export const InputBox = styled.div<Props>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 36px;
  padding: 0 16px;

  border-radius: 8px;
  background-color: ${Color["white"]};
  font-size: 12px;
  color: black;

  transition: 0.3s;

  svg {
    height: 18px;
    width: 18px;
  }

  :hover {
    border: 1px solid ${Color["gray200"]};
    box-shadow: inset 0 0 0 1px ${Color["gray200"]};
    background-color: ${Color["white"]};
  }
  :focus-within {
    box-shadow: inset 0 0 0 1px ${Color["gray200"]};
    background-color: ${Color["white"]};
  }
  :focus-within:hover {
    border: 1px solid ${Color["gray200"]};
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${Color["gray200"]};
      pointer-events: none;
      input {
        color: transparent;
      }
    `}
`;

export const InputText = styled.input`
  width: 100%;

  border: none;
  background: transparent;
  font-size: 14px;
  font-weight: 400;
  color: ${Color["black"]}
  transition: 0.3s;

  ::placeholder {
    color: gray;
    font-size: 14px;
  }
  :focus {
    outline: none;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: black !important;
  }
`;

export const Label = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: black;
`;

export const Message = styled(Text)`
  font-size: 12px
  font-weight: 300;
  color: red;
`;
