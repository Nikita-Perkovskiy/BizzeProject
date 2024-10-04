interface ITabLink {
  name: string;
  to: string;
}

export interface ITabMenuProps {
  tabsConfig: ITabLink[];
}
