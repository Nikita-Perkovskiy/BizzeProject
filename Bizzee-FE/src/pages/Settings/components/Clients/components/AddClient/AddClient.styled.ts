import { colors } from "config/styles/themeColors";

export const addClientStyles = {
  pageWrap: {
    pt: {
      xs: "0px",
    },
  },
  formsWrapper: {
    height: "calc(100% - 40px)",
  },
  addInfoWrap: (isLargeScreen: boolean) => ({
    "&.MuiGrid-item": {
      pt: {
        xs: "0px",
        md: isLargeScreen ? "32px" : "0px",
      },
    },
  }),
  helpText: {
    mt: "5px",
  },
  formTitle: {
    mb: {
      xs: "20px",
      md: "30px",
    },
  },
  authInput: {
    mb: {
      xs: "0px",
    },
    width: {
      xs: "100%",
      lg: "300px",
    },
  },
  inputWrap: {
    "&.MuiGrid-root.MuiGrid-item ": {
      pt: {
        xs: "10px",
        md: "20px",
      },
    },
  },
  phoneWrapper: {
    mb: {
      xs: "0px",
      lg: "20px",
    },
    width: {
      xs: "100%",
      lg: "300px",
    },
    "& .MuiFormHelperText-root": {
      ml: "-110px",
    },
  },
  emailCityWrap: {
    mt: {
      xs: "0px",
      md: "20px",
      lg: "0px",
    },
  },
  emailWrap: {
    "&.MuiGrid-root.MuiGrid-item ": {
      pt: {
        xs: "10px",
        md: "0px",
      },
    },
  },
  emailInput: {
    mb: {
      xs: "10px",
      md: "20px",
    },
    width: {
      xs: "100%",
      lg: "300px",
    },
  },
  cityInputWrap: {
    "&.MuiGrid-root.MuiGrid-item ": {
      pt: {
        xs: "0px",
      },
    },
  },
  cityWrap: {
    width: {
      xs: "100%",
      lg: "300px",
    },
  },
  datePicker: {
    "& .react-datepicker__tab-loop > .react-datepicker-popper > div > .react-datepicker.datepicker-container > .react-datepicker__month-container > .react-datepicker__month > .react-datepicker__week > .past-day":
      {
        color: "text.primary",
      },
    "& .react-datepicker__day--disabled": {
      color: `${colors.gray.disabled} !important`,
      "&:hover": {
        backgroundColor: `${colors.background.default} !important`,
      },
    },
    "& .react-datepicker__month-container > .react-datepicker__header > div.react-datepicker__header__dropdown > .react-datepicker__month-dropdown-container--select > select, .react-datepicker__month-container > .react-datepicker__header > div.react-datepicker__header__dropdown > .react-datepicker__year-dropdown-container--select > select":
      {
        backgroundColor: "background.default",
        color: "text.primary",
      },
    mb: {
      xs: "10px",
      md: "20px",
    },
    width: {
      lg: "300px",
    },
  },
  textAreaInput: {
    width: {
      lg: "300px",
    },
    "& textarea": {
      height: {
        xs: "200px !important",
        md: "130px !important",
        lg: "240px !important",
      },
    },
  },
  radioGroup: (
    isTabletScreen: boolean,
    isLargeScreen: boolean,
    isXlScreen: boolean,
  ) => ({
    p: "0 0 0 20px",
    "& > fieldset > div > div": {
      mb: "10px",
      "& > label": {
        height: "40px",
      },
    },
    "& .MuiFormControlLabel-root": {
      mr: "5px",
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiFormGroup-root": {
      display: "block",
      columns: isXlScreen
        ? "5 auto"
        : isLargeScreen
        ? "3 auto"
        : isTabletScreen
        ? "2 auto"
        : "1 auto",
    },
  }),
  generalBtn: {
    width: {
      xs: "100%",
      md: "130px",
    },
  },
};
