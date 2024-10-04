import React from "react";
import { ReactComponent as AlertIcon } from "assets/svg/icon_error.svg";
import { ReactComponent as CheckIcon } from "assets/svg/icon_check-square.svg";
import { colors } from "config/styles/themeColors";

export const messageConfig = {
  success: {
    message: "All entered changes were successfully saved",
    icon: <CheckIcon color={colors.success.main} />,
    title: "SUCCESS!",
    color: colors.success.main,
  },
  error: {
    message: "Something went wrong, please try again later",
    icon: <AlertIcon color={colors.error.main} />,
    title: "ERROR!",
    color: colors.error.main,
  },
  delete: {
    message: "The service was successfully deleted",
    icon: <CheckIcon color={colors.success.main} />,
    title: "SUCCESS!",
    color: colors.success.main,
  },
};
