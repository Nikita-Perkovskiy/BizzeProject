import { IImages } from "pages/Settings/components/StaffPortfolioEdit/types";

export interface IPickedPhotos {
  order: number;
  img: string;
}

export interface IImgPickerCardProps {
  initialOrder: number;
  maxImages: number;
  onOrderChange: (newOrder: number) => void;
  setImgFiles: (
    value: (File | null)[] | ((prevVar: (File | null)[]) => (File | null)[]),
  ) => void;
  setImgUrls: (
    value:
      | (string | null)[]
      | ((prevVar: (string | null)[]) => (string | null)[]),
  ) => void;
  file: File | null;
  imgUrl: string | null;
  onDeleteImg: (index: number) => void;
  savedLink?: IImages | null;
  setSavedLinks: (
    value:
      | (IImages | null)[]
      | ((prevVar: (IImages | null)[]) => (IImages | null)[]),
  ) => void;
}
