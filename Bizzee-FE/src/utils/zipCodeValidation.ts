import React from "react";
import { MAX_ZIP_CODE_LENGTH } from "../pages/Settings/components/BusinessUnits/components/GeneralUnitInfo/constants";
import { PHONE_DIGIT_REGEX, REMOVE_BTN } from "./phoneValidation";

const DASH_POSITION = 2;

export const onKeyPressZipHandler = (
  e: React.KeyboardEvent<HTMLInputElement>,
) => {
  const isValidInput = PHONE_DIGIT_REGEX.test(e.key);
  const isDashPosition = e.currentTarget.selectionStart === DASH_POSITION;
  if (
    !isValidInput ||
    (e.currentTarget.value.length >= MAX_ZIP_CODE_LENGTH &&
      e.key !== REMOVE_BTN.backspace)
  ) {
    e.preventDefault();
  } else if (isValidInput && isDashPosition) {
    e.currentTarget.value += "-";
  }
};
