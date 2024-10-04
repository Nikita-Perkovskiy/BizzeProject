export interface IImages {
  id: number;
  imageLink: string;
}

export interface ICategory {
  title: string;
  value: string;
}

export interface ITag {
  id: number;
  tag: string;
}

export interface IPortfolio {
  id: number;
  masterId: number;
  images: IImages[];
  category: ICategory;
  tags: ITag[];
  description: string;
}
