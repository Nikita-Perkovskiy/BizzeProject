import { Dispatch, SetStateAction } from "react";

export interface IShowPasswordBtnProps {
  onShow: Dispatch<SetStateAction<boolean>>;
  isShown: boolean;
  disabled: boolean;
}
