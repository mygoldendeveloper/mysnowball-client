/* eslint-disable react/display-name */
import { ReactNode, ReactElement, ElementType, forwardRef } from "react";
import { PolymorphicComponentProps, PolymorphicRef } from "styled";

import { Color, ColorKey, TextType } from "foundations";

export interface _TextProps {
  type: TextType;
  color?: ColorKey;
  children: ReactNode;
}

export type TextProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  _TextProps
>;

type TextComponent = <T extends ElementType = "span">(
  props: TextProps<T>
) => ReactElement | null;

export const Text: TextComponent = forwardRef(
  <T extends ElementType = "span">(
    { as, type, color, style, ...props }: TextProps<T>,
    ref: PolymorphicRef<T>["ref"]
  ) => {
    const Element = as || "span";
    const [size, fontWeight] = type.split("-");
    const hexColor = Color[color || "black"];
    return (
      <Element
        ref={ref}
        {...props}
        style={{ fontSize: `${size}px`, color: hexColor, fontWeight, ...style }}
      />
    );
  }
);
