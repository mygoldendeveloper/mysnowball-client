import React, { forwardRef } from "react";
import { PolymorphicComponentProps, PolymorphicRef } from "styled";
import { Color } from "foundations";

import * as S from "./Input.style";

export interface InputBaseProps {
  /** Input 컴포넌트 왼쪽 영역에 Label 요소가 추가됩니다. */
  label?: string;

  /** Input 컴포넌트 왼쪽 영역에 Icon 요소가 추가됩니다. */
  icon?: React.ReactNode;

  /** input을 감싸는 요소에 속성을 전달합니다. */
  wrapperProps?: React.ComponentPropsWithoutRef<"div"> & { [key: string]: any };

  /** required 상태가 됩니다. */
  required?: boolean;

  /**
   * invalid 상태가 됩니다.
   * 테두리와 텍스트 색상이 red로 변경됩니다.
   */
  invalid?: boolean;

  /** disabled 상태가 됩니다. */
  disabled?: boolean;
}

interface _InputProps extends InputBaseProps {}

export type InputProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _InputProps
>;

type InputComponent = <C extends React.ElementType = "input">(
  // eslint-disable-next-line no-unused-vars
  props: InputProps<C>
) => React.ReactElement | null;

const Input: InputComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = "input">(
    { label = "", placeholder, wrapperProps, ...props }: InputProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    return (
      <S.Layout {...wrapperProps}>
        {label && (
          <S.Label type="14-400" color="gray800">
            {label}
          </S.Label>
        )}
        <S.InputBox {...props} ref={ref}>
          <S.InputText
            placeholder={placeholder}
            type={props.number ? "number" : "text"}
            autocomplete="off"
            {...props}
          />
        </S.InputBox>
      </S.Layout>
    );
  }
);

Input.displayName = "Input Component";

export default Input;
