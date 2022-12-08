import { IconProps } from "..";

export interface SvgProps extends Omit<IconProps, "name"> {}

export interface StyledSvgProps
  extends Omit<React.SVGProps<SVGSVGElement>, "color"> {
  color?: string | "currentColor";
}
