import { Svg } from "./Icon.style";
import icons from "./assets";
import { IconName } from "./assets";
import { Color, ColorKey } from "foundations";

interface StandardAttrProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export interface IconProps extends StandardAttrProps {
  name: IconName;
  size?: number;
  color?: ColorKey;
}

export const Icon = ({
  name,
  size = 24,
  color = "black",
  id,
  className,
  style,
  ...props
}: IconProps): React.ReactElement<SVGElement> => (
  <Svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    color={Color[color]}
    {...props}
  >
    {icons[name]}
  </Svg>
);
