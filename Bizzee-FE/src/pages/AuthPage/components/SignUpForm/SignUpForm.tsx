import React, { FC, useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import {
  fulfilledAction,
  pendingAction,
  rejectedAction,
  signInThunk,
} from "features/auth/actions";
import { styles } from "./SignUpForm.styled";
import { validationSchema } from "./validationSchema";
import { CountryCodeSelect } from "pages/Layout/components/CountryCodeSelect";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { routes } from "config/routes";
import { addRole } from "./addRole";
import { SuccessMessage } from "../SuccessMessage";
import { useSelector } from "react-redux";
import { selectError } from "features/selectors/authSelectors";
import { ISignUpFormProps } from "./SignUpFormTypes";
import { signUpByRole } from "./сonstants";
import { useTypedDispatch } from "store";
import {
  MAX_FULLNAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MAX_PHONE_LENGTH,
} from "pages/AuthPage/constants";
import { IFormValues } from "pages/Layout/components/AuthInput/types";
import { IUserSignUp } from "api/constants";
import { AuthInput } from "pages/Layout/components/AuthInput";
import { onKeyPressHandler } from "utils/phoneValidation";
import { DEFAULT_COUNTRY_CODE } from "config/constants";
import { useNotificationToast } from "hooks/useNotificationToast";

export const SignUpForm: FC<ISignUpFormProps> = ({
  successText,
  successButtonText,
}) => {
  const dispatch = useTypedDispatch();
  const location = useLocation();
  const ROLE = addRole(location.pathname);
  const error = useSelector(selectError);

  const formik = useFormik<IFormValues>({
    initialValues: {
      name: "",
      countryCode: DEFAULT_COUNTRY_CODE,
      phoneNumber: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(pendingAction());
      dispatch(
        rejectedAction({
          general: "",
          response: "",
        }),
      );
      try {
        await signUpByRole[values.role](values as IUserSignUp);

        setIsSuccessful(true);
        dispatch(
          signInThunk({
            email: values.email,
            password: values.password,
          }),
        );
      } catch (error) {
        dispatch(
          rejectedAction({
            general: error.message,
            response: error.response.data.message,
          }),
        );
        formik.setFieldError("error", error.response.data.message);
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    },
  });

  const [isSuccessful, setIsSuccessful] = useState(false);

  useEffect(() => {
    formik.setValues((prevValues) => ({
      ...prevValues,
      role: ROLE || "",
    }));
  }, []);

  useEffect(() => {
    dispatch(
      rejectedAction({
        general: "",
        response: "",
      }),
    );
  }, []);

  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const handlePolicyCheck = () => {
    setIsPolicyChecked((checked) => !checked);
  };

  const isNotAbleToCreateProfile = !isPolicyChecked || !formik.isValid;

  return (
    <>
      {isSuccessful ? (
        <SuccessMessage
          successText={successText}
          successButtonText={successButtonText}
        />
      ) : (
        <Box sx={styles.formWrapper}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={styles.inputsWrapper}>
              <Box sx={styles.inputsTabletWrapper}>
                <AuthInput
                  name="name"
                  label="Full Name*"
                  placeholder="Name"
                  maxLength={MAX_FULLNAME_LENGTH}
                  formik={formik}
                  sx={styles.authInput}
                />
                <Box sx={styles.phoneWrapper}>
                  <AuthInput
                    type="text"
                    name="phoneNumber"
                    label="Phone number*"
                    placeholder="___ ___ ___"
                    formik={formik}
                    sx={styles.phoneInput}
                    maxLength={MAX_PHONE_LENGTH}
                    onKeyPress={onKeyPressHandler}
                  />
                  <CountryCodeSelect
                    formik={formik}
                    sx={styles.countrySelect}
                    wrapperStyle={styles.countrySelectWrapper}
                  />
                </Box>
              </Box>
              <Box sx={styles.inputsTabletWrapper}>
                <AuthInput
                  name="email"
                  label="Email*"
                  placeholder="example@domain.com"
                  formik={formik}
                  sx={styles.authInput}
                  error={error.response}
                />
                <AuthInput
                  name="password"
                  type="password"
                  label="Password*"
                  maxLength={MAX_PASSWORD_LENGTH}
                  formik={formik}
                  password
                  sx={styles.authInput}
                />
              </Box>
            </Box>
            <Box sx={styles.bottomWrapper}>
              <FormControlLabel
                checked={isPolicyChecked}
                onChange={handlePolicyCheck}
                control={<Checkbox />}
                label="I agree to the Privacy Policy"
              />
              <Button
                type="submit"
                className="primaryYellow"
                sx={styles.submitBtn}
                disabled={isNotAbleToCreateProfile}
              >
                Create Profile
              </Button>
            </Box>
          </form>
          <Typography sx={styles.linkText}>
            Already have a profile?{" "}
            <Link
              component={RouterLink}
              sx={styles.linkBtn}
              to={`${routes.auth.root}/${routes.auth.signin}`}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      )}
    </>
  );
};
