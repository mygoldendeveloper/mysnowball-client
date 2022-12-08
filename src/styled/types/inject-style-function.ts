import type { StandardizedStyleWithVariantsAndMedia } from "./standardized-style";

interface InjectStylesFunctionOptions {
  media?: Record<string, string>;
}

export type InjectStylesFunction = (
  component: React.ComponentType<any>,
  styles: StandardizedStyleWithVariantsAndMedia<any, any, any>
) => React.ComponentType<any>;

export type InjectStylesFunctionGenerator = (
  options: InjectStylesFunctionOptions
) => InjectStylesFunction;
