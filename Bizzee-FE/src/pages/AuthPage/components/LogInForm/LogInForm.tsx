import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { styles } from "./LogInForm.styled";
import { useFormik } from "formik";
import { initialValues } from "./initialValues";
import { AuthInput } from "pages/Layout/components/AuthInput";
import { IFormValues } from "pages/Layout/components/AuthInput/types";
import { useTypedDispatch } from "store";
import {
  fulfilledAction,
  pendingAction,
  rejectedAction,
  signInThunk,
} from "features/auth/actions";
import { IUserLogIn } from "api/constants";
import { useSelector } from "react-redux";
import { selectError } from "features/selectors/authSelectors";
import { Link } from "react-router-dom";
import { routes } from "config/routes";
import { logInUser } from "api/Authorization/userLogIn";
import { MAX_PASSWORD_LENGTH } from "../../constants";
import {
  deactivatedStatusErrorMessage,
  incorrectPasswordMessage,
} from "config/constants";
import { useNotificationToast } from "hooks/useNotificationToast";

export const LogInForm: React.FC = () => {
  const dispatch = useTypedDispatch();
  const error = useSelector(selectError);

  const formik = useFormik<IFormValues>({
    initialValues,
    onSubmit: async (values) => {
      dispatch(pendingAction());
      try {
        await logInUser(values as IUserLogIn);
        dispatch(
          signInThunk({
            email: values.email,
            password: values.password,
          }),
        );
      } catch (error) {
        dispatch(
          rejectedAction({
            general: error.response.data.message,
            response: error.response.status,
          }),
        );
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    },
  });

  const { email, password } = formik.values;
  const passwordError =
    error.general === incorrectPasswordMessage && "Incorrect Email or Password";

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={styles.formWrapperStyles}
        >
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={styles.inputPartWrapperStyles}
          >
            <Grid item>
              <Box sx={styles.inputWrapperStyles}>
                <AuthInput
                  formik={formik}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@gmail.com"
                  label="Email"
                  sx={styles.inputWrapperStyles}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={styles.inputWrapperStyles}>
                <AuthInput
                  formik={formik}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
                  password
                  maxLength={MAX_PASSWORD_LENGTH}
                  sx={styles.inputWrapperStyles}
                />
                <Box sx={styles.notificationWrapper}>
                  <Typography sx={styles.notificationText}>
                    {error.general === deactivatedStatusErrorMessage
                      ? "Your account was deactivated. Please contact the organization administrator"
                      : passwordError}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sx={styles.linkWrapperStyles}>
              <Typography>Forgot password?</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={styles.buttonBlockWrapperStyles}
          >
            <Grid item sx={styles.buttonWrapperStyles}>
              <Button
                sx={styles.submitBtn}
                type="submit"
                className="primaryYellow"
                disabled={!email || !password}
              >
                Sign in
              </Button>
            </Grid>
            <Grid item>
              <Typography sx={styles.singUpStyles} variant="body1">
                Don&apos;t have an account?&nbsp;
                <Link to={`${routes.auth.root}/${routes.auth.signup}`}>
                  Sign up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
