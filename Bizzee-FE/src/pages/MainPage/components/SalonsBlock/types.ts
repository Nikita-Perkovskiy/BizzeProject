interface Procedure {
  id: number;
  title: string;
}

export interface Tag {
  id: number;
  tag: string;
}

export interface IUnitData {
  id: number;
  name: string;
  logoLink: string;
  imageLink: string;
  country: string;
  city: string;
  address: string;
  tags: Tag[];
  procedures: Procedure[];
}

export interface ISalonsBlockProps {
  activeCategory: string | null;
}
