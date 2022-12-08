import { forwardRef, HTMLAttributes, Ref } from "react";

import * as S from "./Button.style";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export const Button = forwardRef(function Badge(
  props: ButtonProps,
  forwardedRef: Ref<HTMLDivElement>
) {
  const { children, ...rest } = props;
  return (
    <S.Layout ref={forwardedRef} {...rest}>
      {children}
    </S.Layout>
  );
});

Button.displayName = "Button";
