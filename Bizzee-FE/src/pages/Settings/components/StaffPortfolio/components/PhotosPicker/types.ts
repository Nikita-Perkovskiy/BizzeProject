import { FormikProps } from "formik";
import { IInitialValues } from "../CreatePortfolio/types";
import { IImages } from "pages/Settings/components/StaffPortfolioEdit/types";

export interface IPhotosPickerProps {
  formik: FormikProps<IInitialValues>;
  initialLinks?: IImages[];
}

export type SetStateFunc<T> = React.Dispatch<React.SetStateAction<T>>;
export type imgFilesType = (File | null)[];
export type imgUrlsType = (string | null)[];
export type savedLinksType = (IImages | null)[];

export type InitialStates = {
  imgFiles: [imgFilesType, SetStateFunc<imgFilesType>];
  imgUrls: [imgUrlsType, SetStateFunc<imgUrlsType>];
  savedLinks: [savedLinksType, SetStateFunc<savedLinksType>];
};
