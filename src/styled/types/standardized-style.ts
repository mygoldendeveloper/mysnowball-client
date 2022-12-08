import { CSSObject } from "./css-properties";
import { VariantConfig } from "./variant";

export type StandardizedStylePrimitive = CSSObject | VariantConfig<string>;

export type StandardizedStyle =
  | StandardizedStylePrimitive
  | StandardizedStyle[];

export type StandardizedStyleWithVariantsAndMedia<
  Variants,
  DefaultVariants extends Variants,
  Media extends string
> = StandardizedStyle & { [key in Media as `@${key}`]?: StandardizedStyle } & {
  variants?: {
    [variantName in keyof Variants]: VariantConfig<keyof Variants[variantName]>;
  };
  defaultVariants?: {
    [k in keyof DefaultVariants]?: keyof DefaultVariants[k];
  };
};
