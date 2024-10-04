import { fonts } from "config/styles/fonts";

export const styles = {
  datePicker: {
    "& .react-datepicker-wrapper": {
      width: "100%",
    },
    "& .react-datepicker__day.react-datepicker__day--today": {
      border: "1px solid",
      borderColor: "accents.main",
      borderRadius: "4px",
      fontWeight: 400,
    },
    "& .react-datepicker__input-container": {
      display: "flex",
      flexDirection: "row-reverse",
    },
    "& .react-datepicker__input-container > input": {
      width: "100%",
      p: "15px 15px",
      fontFamily: fonts.text,
      fontWeight: 400,
      fontSize: "16px",
      border: "1px solid",
      borderColor: "text.secondary",
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
      borderLeftColor: "text.secondary",
      "&.react-datepicker-ignore-onclickoutside": {
        borderLeftColor: "accents.main",
        "& .MuiBox-root > svg": {
          borderRadius: "50%",
          bgcolor: "accents.main",
        },
      },
    },
  },
  dateLabel: {
    marginBottom: "5px",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: "text.primary",
  },
};
