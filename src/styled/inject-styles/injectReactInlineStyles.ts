/* eslint-disable react/display-name */
import React from "react";
import type { InjectStylesFunctionGenerator } from "../types";
import { createVariantPropInterpolation } from "../createVariantPropInterpolation";

export const injectReactInlineStylesGenerator: InjectStylesFunctionGenerator =
  ({ media = {} }) =>
  (component, { variants, defaultVariants, ...cssStyles }) =>
  (props) => {
    const interpolatedStyles = Object.entries(variants ?? {})
      .map(([variantName, config]) =>
        createVariantPropInterpolation(variantName, config, media)(props)
      )
      .reduce(
        (accStyle, currentStyle) => ({ ...accStyle, ...currentStyle }),
        {}
      );

    return React.createElement(component, {
      ...props,
      style: {
        ...cssStyles,
        ...interpolatedStyles,
        ...props.style,
      },
    });
  };
