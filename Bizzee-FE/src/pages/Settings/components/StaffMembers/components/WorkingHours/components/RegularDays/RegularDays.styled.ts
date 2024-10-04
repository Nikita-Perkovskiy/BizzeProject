import { fontSize, fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";
import { hexToRgba } from "utils/hexToRgba";

export const styles = {
  datePicker: (isDisabled?: boolean) => ({
    "& .react-datepicker": {
      fontFamily: fonts.text,
      fontWeight: 400,
      border: "none",
    },
    "& .react-datepicker-wrapper": {
      width: "100%",
    },
    "& .react-datepicker__input-container": {
      display: "flex",
      flexDirection: "row-reverse",
    },
    "& .react-datepicker__input-container > input": {
      width: "100%",
      p: "15px 15px",
      fontFamily: fonts.text,
      fontWeight: 300,
      fontSize: fontSize.m,
      border: "1px solid",
      borderColor: `${isDisabled ? "text.primary" : "gray.disabled"}`,
      borderRadius: "4px",
      "&.react-datepicker-ignore-onclickoutside": {
        border: "1px solid",
        borderColor: "accents.main",
        borderRadius: "4px",
        outline: "1px solid",
        outlineColor: "accents.main",
      },
      "&:focus-visible": {
        border: "1px solid",
        borderColor: "accents.main",
        borderRadius: "4px",
        outline: "1px solid",
        outlineColor: "accents.main",
      },
    },
    "& .react-datepicker__input-container:focus-within > .react-datepicker__calendar-icon":
      {
        p: "20px 17px 15px",
        borderLeftColor: "accents.main",
      },
    "& .react-datepicker__calendar-icon": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "23px",
      p: "20px 17px 15px",
      borderRadius: "0 4px 4px 0",
      borderLeft: "1px solid",
      borderLeftColor: `${isDisabled ? "text.secondary" : "gray.disabled"}`,
      "&.react-datepicker-ignore-onclickoutside": {
        borderLeft: "2px solid",
        borderLeftColor: "accents.main",
        "& .MuiBox-root > svg": {
          borderRadius: "50%",
          bgcolor: "accents.main",
        },
      },
    },
    "& .react-datepicker__input-container>input": {
      borderColor: "text.secondary",
    },
    "& .react-datepicker__input-container>input:disabled": {
      borderColor: "gray.disabled",
      color: "gray.disabled",
      cursor: "not-allowed",
      backgroundColor: hexToRgba(colors.gray.disabled, 0),
    },
  }),
  pickerIcon: (isDisabled: boolean) => ({
    color: isDisabled ? "gray.disabled" : "text.primary",
  }),
  dateLabel: (isDisabled: boolean) => ({
    marginBottom: "5px",
    fontWeight: "400",
    fontSize: fontSize.s,
    lineHeight: "20px",
    color: `${isDisabled ? "text.primary" : "gray.disabled"}`,
  }),
};
