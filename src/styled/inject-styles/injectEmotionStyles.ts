import emotionStyled from "@emotion/styled";
import { mapObject } from "../utils";
import { InjectStylesFunctionGenerator } from "../types";
import { createVariantPropInterpolation } from "../createVariantPropInterpolation";

export const injectEmotionStylesGenerator: InjectStylesFunctionGenerator = ({
  media = {},
}) => {
  const prefixedMedia = mapObject(media, (key, value) => [
    `@${key}`,
    `@media ${value}`,
  ]);
  return (component, { variants = {}, defaultVariants, ...cssStyles }) => {
    const responsiveStyles = mapObject(
      cssStyles as Record<string, unknown>,
      (key, value) => [prefixedMedia?.[key] ?? key, value]
    );

    const interpolatedStyles = Object.entries(variants).map(
      ([variantName, config]) =>
        createVariantPropInterpolation(variantName, config, prefixedMedia)
    );

    return emotionStyled(component)(
      responsiveStyles as any,
      // TODO: emotion 타입으로 변환해주기
      ...(interpolatedStyles as any)
    );
  };
};
