import React, { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { routes } from "config/routes";
import { RestrictedRoute } from "../RestrictedRoute";
import { SignUpMain } from "pages/AuthPage/components/SignUpMain";
import { FormLayout } from "pages/AuthPage/components/FormLayout";
import { SignUpForm } from "pages/AuthPage/components/SignUpForm";
import { LogInForm } from "pages/AuthPage/components/LogInForm/LogInForm";
import { CreateNewPasswordForm } from "pages/AuthPage/components/CreateNewPasswordForm/CreateNewPasswordForm";

const AuthPage = lazy(() => import("pages/AuthPage"));

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}>
        <Route index element={<SignUpMain />} />
        <Route path={routes.auth.signup} element={<Outlet />}>
          <Route index element={<SignUpMain />} />
          <Route
            path={routes.auth.business}
            element={
              <FormLayout
                formTitle="Create Account"
                formTitleMobile="Create business profile"
                formComponent={
                  <SignUpForm
                    successText="Your profile has been successfully created"
                    successButtonText="Start Trial"
                  />
                }
              />
            }
          />
          <Route
            path={routes.auth.client}
            element={
              <FormLayout
                formTitle="Create Account"
                formTitleMobile="Create client profile"
                formComponent={
                  <SignUpForm
                    successText="Your profile has been successfully created"
                    successButtonText="Go to Catalog"
                  />
                }
              />
            }
          />
        </Route>
        <Route
          path={routes.auth.signin}
          element={
            <FormLayout
              formTitle="Sign in"
              formTitleMobile="Sign in"
              formComponent={
                <RestrictedRoute>
                  <LogInForm />
                </RestrictedRoute>
              }
            />
          }
        />
        <Route
          path=":createNewPassword"
          element={
            <FormLayout
              formTitle="Create new password"
              formTitleMobile="Create new password"
              formComponent={<CreateNewPasswordForm />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
