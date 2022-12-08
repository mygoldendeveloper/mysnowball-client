import { Text } from "components/Text";
import { Color, ColorKey } from "foundations";
import { forwardRef, HTMLAttributes, Ref } from "react";

import * as S from "./Button.style";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: ColorKey;
}

export const Button = forwardRef(function Badge(
  props: ButtonProps,
  forwardedRef: Ref<HTMLButtonElement>
) {
  const { children, ...rest } = props;

  return (
    <S.Layout ref={forwardedRef} {...rest}>
      <Text type="16-600" color="white">
        {children}
      </Text>
    </S.Layout>
  );
});

Button.displayName = "Button";
