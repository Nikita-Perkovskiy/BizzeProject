import { CSSProperties } from "react";

export interface IHoverableIconProps {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  primaryColor?: string;
  hoverColor?: string;
  style?: CSSProperties | undefined;
}
