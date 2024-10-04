import { USER_ROLES } from "pages/PageRoot/components/constants";
import { RemoveButton } from "./interface";
import { signUpBusinessUser } from "api/Authorization/userBusinessSignUp";
import { signUpClientUser } from "api/Authorization/userClientSignUp";

export const REMOVE_BTN: RemoveButton = {
  backspace: "Backspace",
  delete: "Delete",
};

export const signUpByRole = {
  [USER_ROLES.BUSINESS_OWNER]: signUpBusinessUser,
  [USER_ROLES.CLIENT]: signUpClientUser,
};
