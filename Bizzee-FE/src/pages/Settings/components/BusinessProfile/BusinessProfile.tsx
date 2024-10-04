import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Box, Button, Paper } from "@mui/material";
import { AuthInput } from "pages/Layout/components/AuthInput";
import { IFormValues } from "pages/Layout/components/AuthInput/types";
import { CountryCodeSelect } from "pages/Layout/components/CountryCodeSelect";
import { styles } from "./BusinessProfile.styled";
import { validationSchema } from "./validationSchema";
import { useSelector } from "react-redux";
import { selectUserAuthInfo } from "features/selectors/authSelectors";
import { GoogleAutocomplete } from "../GoogleAutocomplete";
import { defaultFormValues } from "./constants";
import { updateBusinessProfile } from "api/BusinessProfile/updateBusinessProfile";
import { IBusinessUpdate } from "api/constants";
import { getBusinessInfoThunk } from "features/auth/actions";
import { LeaveBlockModal } from "components/LeaveBlockModal";
import {
  MAX_FULLNAME_LENGTH,
  MAX_PHONE_LENGTH,
} from "pages/AuthPage/constants";
import { useTypedDispatch } from "store";
import { onKeyPressHandler } from "utils/phoneValidation";
import { DEFAULT_COUNTRY } from "config/constants";
import { useNotificationToast } from "hooks/useNotificationToast";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";

export const BusinessProfile = () => {
  const dispatch = useTypedDispatch();

  const userInfo = useSelector(selectUserAuthInfo);

  const { name, countryCode, phoneNumber, email, city, address, zipCode } =
    userInfo;

  const initialValues = {
    name,
    countryCode,
    phoneNumber,
    email,
    country: defaultFormValues.country,
    city,
    address,
    zipCode,
  };

  useEffect(() => {
    dispatch(getBusinessInfoThunk());
  }, []);

  const formik = useFormik<IFormValues>({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await updateBusinessProfile({
          ...values,
          userId: userInfo.id,
          name: values.name.trim(),
          email: values.email.trim().toLowerCase(),
          city: values.city.trim(),
          address: values.address.trim(),
          zipCode: values.zipCode.trim(),
        } as IBusinessUpdate);

        useNotificationToast({ type: "success" });
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    },
  });

  const keysToCheck = Object.keys(initialValues);

  const isNavigatingAwayBlocked =
    keysToCheck.some(
      (key) =>
        formik.values[key] !== initialValues[key as keyof typeof initialValues],
    ) && Boolean(!formik.submitCount);

  return (
    <Box sx={styles.pageContainer}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.formsContainer}>
          <Paper sx={styles.formWrapper}>
            <Box sx={styles.titleContainer}>
              <Title text="General information" />
            </Box>
            <Box sx={styles.generalInfoWrapper}>
              <AuthInput
                name="name"
                label="Business name*"
                placeholder="Business name"
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
                  disabled
                />
              </Box>
              <Box>
                <AuthInput
                  name="email"
                  label="Email*"
                  placeholder="example@domain.com"
                  formik={formik}
                  sx={styles.authInput}
                  disabled
                />
              </Box>
            </Box>
          </Paper>
          <Paper sx={styles.formWrapper}>
            <Box sx={styles.titleContainer}>
              <Title text="Location" />
              <Subtitle text="Enter your registered address" />
            </Box>
            <Box sx={styles.locationWrapper}>
              <Box sx={styles.locationInputsWrapper}>
                <GoogleAutocomplete
                  label="Country"
                  formik={formik}
                  name="country"
                  placeholder={DEFAULT_COUNTRY}
                  disabled
                />
                <GoogleAutocomplete
                  requestConfig={{
                    componentRestrictions: {
                      country: "pl",
                    },
                    types: ["(cities)"],
                  }}
                  label="City"
                  formik={formik}
                  name="city"
                  placeholder="City"
                />
              </Box>
              <Box sx={styles.locationInputsWrapper}>
                <GoogleAutocomplete
                  requestConfig={{
                    componentRestrictions: {
                      country: "pl",
                    },
                    types: ["address"],
                  }}
                  city={formik.values.city}
                  label="Address"
                  formik={formik}
                  name="address"
                  isAddress
                  placeholder="Street"
                />
                <AuthInput
                  name="zipCode"
                  label="ZIP/Postal code"
                  placeholder="00-000"
                  formik={formik}
                  sx={styles.authInput}
                />
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box sx={styles.buttonWrapper}>
          <Button
            type="submit"
            className="primaryBlack"
            sx={styles.submitBtn}
            disabled={false}
          >
            Save
          </Button>
        </Box>
      </form>
      <LeaveBlockModal isBlocked={isNavigatingAwayBlocked} />
    </Box>
  );
};
