import { FormikProps } from "formik";
import { IInitialValues } from "../CreatePortfolio/types";
import { ITag } from "pages/Settings/components/StaffPortfolioEdit/types";

export interface IPortfolioTagsProps {
  formik: FormikProps<IInitialValues>;
  initialValues?: ITag[];
  hasTagError: boolean;
  setHasTagError: (value: boolean | ((prevValue: boolean) => boolean)) => void;
}
