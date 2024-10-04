import React from "react";
import { IPrivateRouteProps, USER_ROLES, USER_STATUS } from "./constants";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import {
  selectRole,
  selectStatus,
  selectToken,
} from "features/selectors/authSelectors";
import { routes } from "config/routes";
import MainPage from "pages/MainPage";

export const RestrictedRoute = ({ children }: IPrivateRouteProps) => {
  const isLoggedIn = useSelector(selectToken);
  const userRole = useSelector(selectRole);
  const userStatus = useSelector(selectStatus);

  const defineHomePageByRole = (role: string): JSX.Element => {
    switch (role) {
      case USER_ROLES.BUSINESS_OWNER:
        return <Navigate to={routes.settings.root} replace />;
      case USER_ROLES.CLIENT:
        return <Navigate to={routes.calendar} replace />;
      case USER_ROLES.MASTER: {
        if (userStatus === USER_STATUS.VERIFY) {
          return (
            <Navigate
              to={`${routes.auth.root}/${routes.auth.createNewPassword}`}
            />
          );
        }
        return <Navigate to={routes.settings.root} replace />;
      }
      default:
        return <MainPage />;
    }
  };

  const homePage = defineHomePageByRole(userRole);

  return isLoggedIn ? homePage : children;
};
