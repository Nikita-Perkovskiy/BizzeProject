import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useTypedDispatch } from "store";
import { getUserInfoThunk } from "features/auth/actions";
import { selectToken } from "features/selectors/authSelectors";
import { IPrivateRouteProps } from "./constants";
import { routes } from "config/routes";

export const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const dispatch = useTypedDispatch();
  const isLoggedIn = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, []);

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={`${routes.auth.root}/${routes.auth.signin}`} replace />
  );
};
