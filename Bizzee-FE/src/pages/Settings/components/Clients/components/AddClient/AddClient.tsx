import React, { useEffect, useState } from "react";
import { styles } from "pages/Settings/components/Appointments/components/ScheduleAppointment/ScheduleAppointment.styled";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useFormik } from "formik";
import { IFormValues } from "pages/Settings/components/Appointments/components/ScheduleAppointment/ScheduleAppointmentTypes";
import {
  initialValues,
  MAX_ALLOWED_PAST_DATE,
  MIN_ALLOWED_PAST_DATE,
} from "./constants";
import { validationSchema } from "./validationSchema";
import { useNotificationToast } from "hooks/useNotificationToast";
import { AuthInput } from "pages/Layout/components/AuthInput";
import { MAX_FULLNAME_LENGTH } from "pages/AuthPage/constants";
import { colors } from "config/styles/themeColors";
import { CountryCodeSelect } from "pages/Layout/components/CountryCodeSelect";
import { MAX_PHONE_LENGTH, dateMaskRegex } from "config/constants";
import { onKeyPressHandler } from "utils";
import { GoogleAutocomplete } from "pages/Settings/components/GoogleAutocomplete";
import { addClientStyles } from "./AddClient.styled";
import { MainRadioGroup } from "components/MainRadioGroup";
import { getClientsStatus } from "api/Clients/getClientsStatus";
import { ISelectOptions } from "components/MainRadioGroup/MainRadioGroupTypes";
import { TextAreaInput } from "pages/Layout/components/TextAreaInput/TextAreaInput";
import { MAX_DESC_LENGTH } from "pages/Settings/components/Appointments/components/ScheduleAppointment/constants";
import { styles as datePickerStyles } from "pages/Settings/components/Appointments/components/ScheduleAppointment/AppointmentDateInput/AppointmentDateInput.styled";
import { subYears } from "date-fns";
import { ReactComponent as CalendarIcon } from "assets/svg/icon-calendar.svg";
import { LeaveBlockModal } from "components/LeaveBlockModal";
import { addClient } from "api/Clients/addClient";
import { formatClientDate } from "utils/formatDate";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import MaskedInput from "react-text-mask";
import { CustomHeaderDatePicker } from "./components/CustomHeaderDatePicker";
import { getBusinessOwnersClients } from "api/Clients/getBusinessOwnersClients";

export const AddClient = () => {
  const isTabletScreen = useMediaQuery("(min-width: 768px)");
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isXlScreen = useMediaQuery("(min-width: 1920px)");
  const [clientsStatus, setClientsStatus] = useState<ISelectOptions[]>([]);
  const [clientData, setClientData] = useState<IFormValues>(initialValues);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statusData = await getClientsStatus();
        setClientsStatus(statusData);
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    };
    fetchData();
  }, []);

  const formik = useFormik<IFormValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await addClient(values);
        navigate(`${routes.settings.root}/${routes.settings.clients.root}`);
        useNotificationToast({
          type: "success",
          message: "All entered changes were successfully saved",
        });
        await getBusinessOwnersClients("sortColumn", true);
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    },
  });

  const handleDateChange = (date: Date) => {
    const formattedDate = formatClientDate(date);
    formik.setFieldValue("dateOfBirth", formattedDate);
  };

  const handleSubmit = () => {
    setClientData(formik.values);
  };

  const keysToCheck = Object.keys(clientData);

  const isNavigatingAwayBlocked =
    keysToCheck.some(
      (key) =>
        formik.values[key] !== initialValues[key as keyof typeof initialValues],
    ) && Boolean(!formik.submitCount);

  return (
    <>
      <Box
        sx={{
          ...styles.drawerContent,
          ...addClientStyles.pageWrap,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid spacing={4} container>
            <Grid item sm={12} md={isLargeScreen ? 6 : 12} lg={6}>
              <Paper sx={styles.formsWrapper}>
                <Box sx={styles.titleContainer}>
                  <Typography
                    sx={{
                      ...styles.formTitle,
                      ...addClientStyles.formTitle,
                    }}
                    component="h2"
                  >
                    General Information
                    <Typography
                      sx={{
                        ...styles.helpText,
                        ...addClientStyles.helpText,
                      }}
                    >
                      Please enter information about client
                    </Typography>
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={isLargeScreen ? 12 : 6}
                    lg={12}
                    sx={addClientStyles.inputWrap}
                  >
                    <AuthInput
                      name="name"
                      label="Client Name*"
                      placeholder="Marina Proskura"
                      formik={formik}
                      maxLength={MAX_FULLNAME_LENGTH}
                      sx={{
                        ...styles.authInput,
                        ...addClientStyles.authInput,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={isLargeScreen ? 12 : 6}
                    lg={12}
                    sx={addClientStyles.inputWrap}
                  >
                    <Box
                      sx={{
                        ...styles.phoneWrapper,
                        ...styles.phoneLabelWrapper,
                      }}
                    >
                      <InputLabel
                        sx={styles.phoneLabel}
                        style={{
                          color:
                            formik.touched.phoneNumber &&
                            Boolean(formik.errors.phoneNumber)
                              ? colors.error.main
                              : "inherit",
                        }}
                      >
                        Phone number*
                      </InputLabel>
                    </Box>
                    <Box
                      sx={{
                        ...styles.phoneWrapper,
                        ...addClientStyles.phoneWrapper,
                      }}
                    >
                      <CountryCodeSelect
                        formik={formik}
                        sx={styles.countrySelect}
                        disabled
                      />
                      <AuthInput
                        name="phoneNumber"
                        placeholder="___ ___ ___"
                        formik={formik}
                        onKeyPress={onKeyPressHandler}
                        maxLength={MAX_PHONE_LENGTH}
                        sx={styles.phoneInput}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={addClientStyles.emailCityWrap}>
                  <Grid
                    item
                    xs={12}
                    md={isLargeScreen ? 12 : 6}
                    lg={12}
                    sx={{
                      ...addClientStyles.inputWrap,
                      ...addClientStyles.emailWrap,
                    }}
                  >
                    <AuthInput
                      name="email"
                      label="Email"
                      placeholder="example@domain.com"
                      formik={formik}
                      sx={{
                        ...styles.authInput,
                        ...addClientStyles.emailInput,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={isLargeScreen ? 12 : 6}
                    lg={12}
                    sx={addClientStyles.cityInputWrap}
                  >
                    <Box sx={addClientStyles.cityWrap}>
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
                        placeholder="Select a city"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid
              item
              sm={12}
              md={isLargeScreen ? 6 : 12}
              lg={6}
              sx={addClientStyles.addInfoWrap(isLargeScreen)}
            >
              <Paper
                sx={{
                  ...styles.formsWrapper,
                  ...addClientStyles.formsWrapper,
                }}
              >
                <Box sx={styles.titleContainer}>
                  <Typography
                    sx={{
                      ...styles.formTitle,
                      ...addClientStyles.formTitle,
                    }}
                    component="h2"
                  >
                    Addition information
                  </Typography>
                </Box>
                <Box
                  sx={{
                    ...datePickerStyles.datePicker,
                    ...addClientStyles.datePicker,
                  }}
                >
                  <InputLabel sx={datePickerStyles.dateLabel}>
                    Date of birth
                  </InputLabel>
                  <CustomHeaderDatePicker
                    dateFormat="dd/MM/yyyy"
                    showIcon
                    toggleCalendarOnIconClick
                    handleSelectDate={handleDateChange}
                    shouldCloseOnSelect
                    maxDate={subYears(new Date(), MAX_ALLOWED_PAST_DATE)}
                    minDate={subYears(new Date(), MIN_ALLOWED_PAST_DATE)}
                    disabledKeyboardNavigation
                    icon={
                      <Box>
                        <CalendarIcon />
                      </Box>
                    }
                    placeholder="dd/mm/yyyy"
                    showMonthDropdown={true}
                    showYearDropdown={true}
                    dropdownMode="select"
                    customInput={<MaskedInput mask={dateMaskRegex} />}
                  />
                </Box>
                <Box
                  sx={{
                    ...styles.textAreaInput,
                    ...addClientStyles.textAreaInput,
                  }}
                >
                  <TextAreaInput
                    maxCharacters={MAX_DESC_LENGTH}
                    name="notes"
                    id="notes"
                    placeholder="Any specific preferences, allergies, or notes relevant to the services client receive"
                    label="Client notes"
                    formik={formik}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper sx={styles.formsWrapper}>
            <Box sx={styles.titleContainer}>
              <Typography
                sx={{
                  ...styles.formTitle,
                  ...addClientStyles.formTitle,
                }}
                component="h2"
              >
                Client status
              </Typography>
              <MainRadioGroup
                id="radio-buttons-group"
                name="radio-buttons-group"
                defaultValue="NEW"
                options={clientsStatus}
                sx={addClientStyles.radioGroup(
                  isTabletScreen,
                  isLargeScreen,
                  isXlScreen,
                )}
                tooltip={true}
                tooltipTitle="Here is some helpful explainer text to assist the user in understanding how a certain feature works."
                tooltipPlacement="top"
                tooltipArrow={true}
                disabled={true}
              />
            </Box>
          </Paper>
          <Box sx={styles.buttonsWrapper}>
            <Button
              type="submit"
              className="primaryBlack"
              sx={{
                ...styles.generalBtn,
                ...addClientStyles.generalBtn,
              }}
              disabled={!formik.isValid}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
      <LeaveBlockModal isBlocked={isNavigatingAwayBlocked} />
    </>
  );
};
