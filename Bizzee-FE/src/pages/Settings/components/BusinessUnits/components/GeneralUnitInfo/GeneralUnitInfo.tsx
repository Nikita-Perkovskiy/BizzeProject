import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  MenuItem,
  InputLabel,
  List,
} from "@mui/material";
import { useFormik } from "formik";
import { initialValues } from "./initialValues";
import { styles } from "./GeneralUnitInfo.styled";
import { IFormValues } from "./GeneralUnitInfoTypes";
import { validationSchema } from "./validationSchema";
import { AddPhotoInput } from "components/AddPhotoInput/AddPhotoInput";
import { AuthInput } from "pages/Layout/components/AuthInput";
import {
  MAX_NAME_LENGTH,
  MAX_DESC_LENGTH,
  MAX_PHONE_LENGTH,
  MAX_INPUT_LENGTH,
  socialMediaLinks,
  MAX_ZIP_CODE_LENGTH,
} from "./constants";
import { TextAreaInput } from "pages/Layout/components/TextAreaInput/TextAreaInput";
import { getBusinessUnitsCategories } from "api/BusinessUnits/getBusinessUnitsCategories";
import { AutocompleteInput } from "./AutocompleteInput";
import { initialData } from "./AutocompleteInput/AutocompleteInputTypes";
import { addBusinessUnit } from "api/BusinessUnits/addBusinessUnit";
import { useTypedDispatch } from "store";
import { rejectedAction } from "features/auth/actions";
import { CountryCodeSelect } from "pages/Layout/components/CountryCodeSelect";
import { GoogleAutocomplete } from "pages/Settings/components/GoogleAutocomplete";
import { useSelector } from "react-redux";
import { selectError } from "features/selectors/authSelectors";
import { DEFAULT_COUNTRY, serverError400 } from "config/constants";
import { onKeyPressHandler } from "utils/phoneValidation";
import { onKeyPressZipHandler } from "utils/zipCodeValidation";
import { getBusinessUnitsTags } from "api/BusinessUnits/getBusinessUnitsTags";
import { TagsInput } from "./TagsInput";
import { AddServicesInput } from "./AddServicesInput";
import { temporarySocialMedias } from "./constants";
import { MainInputSelect } from "components/MainInputSelect";
import { v4 as uuidv4 } from "uuid";
import Divider from "@mui/material/Divider";
import { LinkItem } from "./LinkItem";
import { LeaveBlockModal } from "components/LeaveBlockModal";
import { useNotificationToast } from "hooks/useNotificationToast";
import { Title } from "components/Title/Title";

export const GeneralUnitInfo = () => {
  const [categoriesData, setCategoriesData] = useState<initialData[]>([]);
  const [tagsData, setTagsData] = useState<initialData[]>([]);
  const [userData, setUserData] = useState<IFormValues>(initialValues);
  const dispatch = useTypedDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getBusinessUnitsCategories();
        setCategoriesData(categoriesData);
        const tagsData = await getBusinessUnitsTags();
        setTagsData(tagsData);
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
      const formData = new FormData();
      formData.append("image", values.image || "");
      formData.append("logo", values.logo || "");
      const businessUnit = {
        name: values.name.trim(),
        description: values.description.trim(),
        countryCode: values.countryCode,
        phoneNumber: values.phoneNumber,
        email: values.email.toLowerCase(),
        category: values.category,
        country: values.country,
        city: values.city,
        address: values.address,
        zipCode: values.zipCode,
        links: {
          facebook: values.facebook,
          instagram: values.instagram,
          website: values.website,
        },
        additionalServices: values.additionalServices,
        tags: values.tags,
      };
      const json = JSON.stringify(businessUnit);
      const blob = new Blob([json], {
        type: "application/json",
      });

      formData.append("businessUnit", blob);
      try {
        await addBusinessUnit(formData);
        useNotificationToast({
          type: "success",
        });
      } catch (error) {
        dispatch(
          rejectedAction({
            general: error.response.data.message,
            response: error.response.status,
          }),
        );
        useNotificationToast({ type: "error" });
      }
    },
  });

  const changeUserData = () => {
    setUserData(formik.values);
  };

  const keysToCheck = Object.keys(userData);

  const isNavigatingAwayBlocked =
    keysToCheck.some(
      (key) =>
        formik.values[key] !== userData[key as keyof typeof userData] &&
        !Array.isArray(formik.values[key]),
    ) ||
    (keysToCheck.some((key) => {
      const value = formik.values[key];
      return Array.isArray(value) && !!value.length;
    }) &&
      Boolean(!formik.submitCount));

  const error400 = error.response === serverError400;

  return (
    <Box sx={styles.pageContainer}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.photoBlockWrapper}>
          <AddPhotoInput formik={formik} id={"image"} name={"image"} />
          <AddPhotoInput formik={formik} id={"logo"} name={"logo"} />
        </Box>
        <Box sx={styles.formsWrapper}>
          <Box sx={styles.titleContainerGeneral}>
            <Title text="General information" />
            <Box>
              <AuthInput
                name="name"
                label="Unit name*"
                maxLength={MAX_NAME_LENGTH}
                formik={formik}
                sx={styles.authInput}
              />
            </Box>
            <Box sx={styles.textAreaInput}>
              <TextAreaInput
                maxCharacters={MAX_DESC_LENGTH}
                name="description"
                id="description"
                placeholder="Enter a description..."
                label="Description"
                formik={formik}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.formsWrapper}>
          <Box sx={styles.titleContainer}>
            <Typography sx={styles.formTitle} component="h2">
              Business Category
              <Typography sx={styles.helpText}>
                Please select the Business Category
              </Typography>
            </Typography>
          </Box>
          <Box sx={styles.autocompleteInput}>
            <AutocompleteInput
              label="Business Category*"
              name="category"
              id="category"
              placeholder="Beauty salon"
              options={categoriesData}
              formik={formik}
            />
          </Box>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={4.5}>
            <Paper sx={styles.formsWrapper}>
              <Box sx={styles.titleContainer}>
                <Typography sx={styles.formTitle} component="h2">
                  Contact information
                  <Typography sx={styles.helpText}>
                    Enter your contact information
                  </Typography>
                </Typography>
              </Box>
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
                  sx={error400 ? styles.authInputError : styles.authInput}
                />
                {error400 && (
                  <Box sx={styles.notificationWrapper}>
                    <Typography sx={styles.notificationText}>
                      Profile with this email already exists
                    </Typography>
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            lg={7.5}
            style={{ paddingTop: 0 }}
            sx={styles.gridItem}
          >
            <Paper sx={styles.formsWrapper}>
              <Box sx={styles.titleContainer}>
                <Typography sx={styles.formTitle} component="h2">
                  Location
                  <Typography sx={styles.helpText}>
                    Enter your registered address
                  </Typography>
                </Typography>
              </Box>
              <Box sx={styles.locationWrapper}>
                <Box sx={styles.locationInputsWrapper}>
                  <Box sx={styles.locationInputWrapper}>
                    <GoogleAutocomplete
                      label="Country*"
                      formik={formik}
                      name="country"
                      placeholder={DEFAULT_COUNTRY}
                      disabled
                    />
                  </Box>
                  <Box sx={styles.locationInputWrapper}>
                    <GoogleAutocomplete
                      requestConfig={{
                        componentRestrictions: {
                          country: "pl",
                        },
                        types: ["(cities)"],
                      }}
                      label="City*"
                      formik={formik}
                      name="city"
                      placeholder="City"
                      helperText="Please choose a city"
                    />
                  </Box>
                </Box>
                <Box sx={styles.locationInputsWrapper}>
                  <Box sx={styles.locationInputWrapper}>
                    <GoogleAutocomplete
                      requestConfig={{
                        componentRestrictions: {
                          country: "pl",
                        },
                        types: ["address"],
                      }}
                      city={formik.values.city}
                      label="Address*"
                      formik={formik}
                      name="address"
                      isAddress
                      placeholder="Street"
                      helperText="Please choose an address"
                    />
                  </Box>
                  <Box sx={styles.locationInputWrapper}>
                    <AuthInput
                      name="zipCode"
                      label="ZIP/Postal code*"
                      placeholder="00-000"
                      formik={formik}
                      sx={styles.zipInput}
                      maxLength={MAX_ZIP_CODE_LENGTH}
                      onKeyPress={onKeyPressZipHandler}
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={styles.formsWrapper}>
          <Box sx={styles.titleContainer}>
            <Typography sx={styles.formTitle} component="h2">
              Social media
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={4}>
              <Box sx={styles.autocompleteInput}>
                <InputLabel sx={styles.autocompleteLabel}>
                  Add Social media links
                </InputLabel>
                <MainInputSelect
                  name="links"
                  value="Social media"
                  onChange={() => null}
                  disabled
                  sx={styles.select}
                  wrapperStyle={styles.selectWrapper}
                >
                  {temporarySocialMedias.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </MainInputSelect>
              </Box>
            </Grid>
            <Grid item xs={12} lg={8} sx={styles.socialListWrap}>
              <List disablePadding sx={styles.socialList}>
                {socialMediaLinks.map((item) => (
                  <div key={uuidv4()}>
                    <LinkItem
                      icon={<item.icon />}
                      title={item.title}
                      name={item.name}
                      placeholder={item.placeholder}
                      formik={formik}
                    />
                    <Divider component="li" sx={styles.socialDivider} />
                  </div>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box sx={styles.formsWrapper}>
          <Box sx={styles.titleContainer}>
            <Typography sx={styles.formTitle} component="h2">
              Additional Services
              <Typography sx={styles.helpText}>
                Please select your additional services
              </Typography>
            </Typography>
          </Box>
          <Box sx={styles.autocompleteInput}>
            <AddServicesInput
              formik={formik}
              id="additionalServices"
              name="additionalServices"
              label="Additional services"
              placeholder="Free coffee"
              maxLength={MAX_INPUT_LENGTH}
            ></AddServicesInput>
          </Box>
        </Box>
        <Box sx={styles.formsWrapper}>
          <Box sx={styles.titleContainer}>
            <Typography sx={styles.formTitle} component="h2">
              Tags
              <Typography sx={styles.helpText}>Please select tags</Typography>
            </Typography>
          </Box>
          <Box sx={styles.autocompleteInput}>
            <TagsInput
              label="Tags"
              name="tags"
              id="tags"
              placeholder="Salon"
              options={tagsData}
              formik={formik}
            />
          </Box>
        </Box>
        <Box sx={styles.buttonWrapper}>
          <Button
            type="submit"
            className="primaryBlack"
            sx={styles.submitBtn}
            disabled={!formik.isValid}
            onClick={changeUserData}
          >
            Save
          </Button>
        </Box>
      </form>
      <LeaveBlockModal isBlocked={isNavigatingAwayBlocked} />
    </Box>
  );
};
