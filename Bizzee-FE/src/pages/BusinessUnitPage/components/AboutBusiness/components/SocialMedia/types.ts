import { services } from "../../constants";

export type LogoTypes = {
  [ArrayElementServices in (typeof services)[number]]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
};

export interface Links {
  facebook: string;
  instagram: string;
  website: string;
}

export interface ISocialMediaProps {
  links?: Links;
}
