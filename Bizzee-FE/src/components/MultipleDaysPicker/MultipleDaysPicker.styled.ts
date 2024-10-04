import { colors } from "config/styles/themeColors";

export const styles = {
  multipleDaysPicker: {
    "& .react-datepicker__day--keyboard-selected, .react-datepicker__day--selected":
      {
        position: "relative",
        backgroundColor: "accents.main",
        color: "background.default",
        outline: "none",
      },
    "& .chosen-date.chosen-weekend": {
      backgroundColor: "inherit",
      fontWeight: 400,
    },
    "& .chosen-date.chosen-weekend.react-datepicker__day--selected": {
      backgroundColor: `${colors.accents.main} !important`,
    },
  },
};
