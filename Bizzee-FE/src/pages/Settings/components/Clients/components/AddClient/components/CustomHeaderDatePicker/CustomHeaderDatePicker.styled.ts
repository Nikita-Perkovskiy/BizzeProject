import { fonts } from "config/styles/fonts";
import { shadows } from "config/styles/shadows";

export const customHeaderStyles = {
  headerWrapper: {
    margin: "0px 10px 10px",
    display: "flex",
    justifyContent: "space-between",
  },
  selectWrapper: {
    width: "125px",
  },
  select: {
    height: "47px",
    border: "1px solid",
    borderColor: "text.secondary",
    borderRadius: "4px",
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  selectValue: {
    fontWeight: 300,
    fontFamily: fonts.text,
    lineHeight: "20px",
  },
  iconWrapper: {
    padding: 0,
    borderLeft: "none",
    mt: "2px",
  },
  datepickerPopper: {
    position: "absolute",
    left: "10px",
    top: "56px",
    zIndex: 1,
    boxShadow: shadows.dropdown,
    borderRadius: "4px",
    bgcolor: "background.default",
    color: "text.primary",
    fontFamily: fonts.text,
    fontWeight: 300,
    lineHeight: "20px",
  },
  datepickerContainer: {
    borderLeft: "none",
    width: "260px",
    height: "256px",
    overflow: "scroll",
    float: "right",
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "text.secondary",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "background.default",
    },
  },
  datepickerListItem: {
    cursor: "pointer",
    p: "8px 12px",
    height: "48px",
    "&:hover": {
      bgcolor: "accents.hover",
    },
  },
  customHeaderPickerDays: {
    "& .react-datepicker__day--keyboard-selected, .react-datepicker__day--selected, .react-datepicker__day--in-range":
      {
        position: "relative",
        backgroundColor: "accents.main",
        color: "background.default",
        outline: "none",
      },
  },
};
