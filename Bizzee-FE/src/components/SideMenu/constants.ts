export interface INavLink {
  name?: string;
  to?: string;
  sliderPosition?: number;
  icon?: JSX.Element;
  first?: boolean;
}

export interface ISideMenuProps {
  menuConfig: INavLink[];
  onClick?: () => void;
}
