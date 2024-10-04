import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { styles } from "./CreateNewPasswordForm.styled";
import { AuthInput } from "../../../Layout/components/AuthInput";
import { useFormik } from "formik";
import { IFormValues } from "../../../Layout/components/AuthInput/types";
import { initialValues } from "./initialValues";
import { validationSchema } from "./validationSchema";
import { useTypedDispatch } from "store";
import {
  fulfilledAction,
  logOutThunk,
  pendingAction,
} from "features/auth/actions";
import { routes } from "config/routes";
import { changePassword } from "api/Authorization/changePassword";
import { SuccessMessage } from "../SuccessMessage";
import { setIsSuccess } from "features/auth/actions";
import { useSelector } from "react-redux";
import { selectIsSuccess, selectRole } from "features/selectors/authSelectors";
import { MAX_PASSWORD_LENGTH } from "../../constants";
import { useNotificationToast } from "hooks/useNotificationToast";

export const CreateNewPasswordForm: React.FC = () => {
  const dispatch = useTypedDispatch();
  const isSuccess = useSelector(selectIsSuccess);
  const userRole = useSelector(selectRole);
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    const handlePopState = () => {
      dispatch(logOutThunk());
    };

    window.addEventListener("popstate", handlePopState);
  }, []);

  const formik = useFormik<IFormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(pendingAction());
      try {
        const credentials = {
          password: values.password,
        };
        if (formik.values.password === formik.values.confirmPassword) {
          await changePassword(credentials as IFormValues);
          setRole(userRole);
          dispatch(logOutThunk());
          dispatch(setIsSuccess(true));
        } else {
          formik.setFieldError("confirmPassword", "Passwords do not match");
        }
      } catch (error) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    },
  });

  useEffect(() => {
    if (
      formik.values.confirmPassword !== formik.initialValues.confirmPassword
    ) {
      formik.setFieldError("confirmPassword", "");
    }
  }, [formik.values.confirmPassword, formik.initialValues.confirmPassword]);

  const { isValid, dirty } = formik;

  return (
    <Box>
      {isSuccess ? (
        <SuccessMessage
          successText="Your password has been successfully created"
          successButtonText="Sign in with new password"
          role={role}
        />
      ) : (
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
                <Box>
                  <AuthInput
                    formik={formik}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="New password"
                    label="New password"
                    password
                    maxLength={MAX_PASSWORD_LENGTH}
                    sx={styles.inputWrapperStyles}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box>
                  <AuthInput
                    formik={formik}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    label="Confirm password"
                    password
                    maxLength={MAX_PASSWORD_LENGTH}
                    sx={styles.inputWrapperStyles}
                  />
                </Box>
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
                  disabled={!(isValid && dirty)}
                >
                  Create
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Don`t have an account?&nbsp;
                  <Link
                    href={`${routes.auth.root}/${routes.auth.signup}`}
                    sx={styles.linkStyles}
                    style={styles.singUpLinkStyles}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Box>
  );
};
