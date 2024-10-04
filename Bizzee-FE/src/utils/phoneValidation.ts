import React from "react";

export const PHONE_DIGIT_REGEX = /^\d$/;

export interface RemoveButton {
  backspace: string;
  delete: string;
}
export const REMOVE_BTN: RemoveButton = {
  backspace: "Backspace",
  delete: "Delete",
};
export const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.ctrlKey) {
    e.preventDefault();
  } else if (
    !PHONE_DIGIT_REGEX.test(e.key) &&
    e.key !== REMOVE_BTN.backspace &&
    e.key !== REMOVE_BTN.delete
  ) {
    e.preventDefault();
  }
};
