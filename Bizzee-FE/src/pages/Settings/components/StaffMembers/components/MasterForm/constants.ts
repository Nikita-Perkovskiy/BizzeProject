import { RemoveButton } from "./interface";
export const FULL_NAME_REGEX = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s,'-]+$/;
export const PHONE_NUMBER_NUMBER_REGEX = /^\d+$/;
export const PHONE_NUMBER_NO_SPACES_REGEX = /^\d+$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const DESCRIPTION_REGEX = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\s.,-]+$/;
export const MAX_FILE_SIZE = 5242880;
export const MAX_FULL_NAME = 64;
export const SUPPORTED_FILE_FORMATS = [
  "image/png",
  "image/jpeg",
  "image/svg+xml",
  "image/heic",
];

export const REMOVE_BTN: RemoveButton = {
  backspace: "Backspace",
  delete: "Delete",
};
export const SUCCESS_MESSAGE_SHOW_TIME = 10000;
