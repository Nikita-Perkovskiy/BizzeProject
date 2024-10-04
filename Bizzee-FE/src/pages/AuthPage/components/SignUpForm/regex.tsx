export const NAME_REGEX = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s'.-]+$/;
export const PHONE_REGEX = /^[0-9]*$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"'@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~])[\S]+$/;
