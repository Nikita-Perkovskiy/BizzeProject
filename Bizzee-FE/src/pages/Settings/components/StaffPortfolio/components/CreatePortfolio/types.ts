import {
  IImages,
  IPortfolio,
  ITag,
} from "pages/Settings/components/StaffPortfolioEdit/types";

export interface ICreatePortfolioProps {
  isOpen: boolean;
  toggleOpen: () => void;
  portfolioId?: number | null;
  setCurrentPortfolioId?: (
    value: number | null | ((prevVar: number | null) => number | null),
  ) => void;
  setPortfolios?: (
    value: IPortfolio[] | ((prevVar: IPortfolio[]) => IPortfolio[]),
  ) => void;
}

export interface IInitialValues {
  files: File[];
  category: string;
  tags: ITag[];
  description: string;
  images?: IImages[];
}
