import { IInitialValues } from "./types";
import { colors } from "config/styles/themeColors";

export const initialValues: IInitialValues = {
  workingDays: [],
  customDatesDTO: [],
};

export const START_TIME_DATE = "00:00";

export const TYPE_WORKING_DAYS = [
  {
    type: "Selected",
    backgroundColor: colors.accents.main,
    color: colors.text.white,
  },
  {
    type: "Customized",
    backgroundColor: colors.accents.hover,
    color: colors.text.primary,
  },
  {
    type: "Working",
    backgroundColor: colors.gray.tagDisabled,
    color: colors.text.primary,
  },
  {
    type: "Customized day-off",
    backgroundColor: colors.background.default,
    color: colors.text.primary,
  },
  {
    type: "Business unit day-off",
    backgroundColor: colors.background.default,
    color: colors.gray.disabled,
  },
];
