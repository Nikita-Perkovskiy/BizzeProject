import { Grid, Button, Box, Typography, Chip } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { initialValues, rolesData } from "./initialValues";
import {
  editMasterValidationSchema,
  validationSchema,
} from "./validationSchema";
import { TextAreaInput } from "pages/Layout/components/TextAreaInput/TextAreaInput";
import { masterLanguages } from "api/StaffMembers/getMasterLanguages";
import { masterExperiences } from "api/StaffMembers/getMasterExperiences";
import {
  InitialValue,
  ResponseData,
  arrayResponse,
  initialData,
} from "./interface";
import { createMaster } from "api/StaffMembers/createMaster";
import { useSelector } from "react-redux";
import { selectId } from "features/selectors/authSelectors";
import { getMaster } from "api/StaffMembers/getMasterData";
import { updateMaster } from "api/StaffMembers/updateMaster";
import { LeaveBlockModal } from "components/LeaveBlockModal";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "config/routes";
import { useNotificationToast } from "hooks/useNotificationToast";
import { Title } from "components/Title/Title";
import { styles } from "./MasterForm.styled";
import { AddPhotoInput } from "components/AddPhotoInput/AddPhotoInput";
import { MasterFormInput } from "./components/MasterFormInput/MasterFormInput";
import {
  MAX_FULL_NAME,
  PHONE_NUMBER_NUMBER_REGEX,
  REMOVE_BTN,
} from "./constants";
import { SelectInput } from "pages/Layout/components/SelectInput/SelectInput";
import { MAX_PHONE_LENGTH } from "config/constants";
import { MasterFormCountryCodeSelect } from "./components/MasterFormCountryCodeSelect/MasterFormCountryCodeSelect";
import { textAreaStyles } from "./EducationTextArea.styled";
import { deleteMasterImages } from "api/StaffMembers/deleteMasterImages";
import { CustomAutocompleteInput } from "./components/CustomAutocompleteInput/CustomAutocompleteInput";
import { getMasterCategoriesByID } from "api/StaffMembers/getMasterCategoriesByID";

export const MasterForm: React.FC = () => {
  const userInfo = useSelector(selectId);
  const [masterInitialValue, setMasterInitialValue] =
    useState<InitialValue>(initialValues);
  const [masterID, setMasterID] = useState<number | null>(null);
  const [isImageDelete, setIsImageDelete] = useState<boolean>(false);
  const [isMasterLogoDelete, setIsMasterLogoDelete] = useState<boolean>(false);
  const [masterCategories, setMasterCategories] = useState<initialData[]>([]);
  const { masterId } = useParams();

  const dataTransformForCreateMaster = (
    values: InitialValue,
    id: number | null,
  ) => {
    const formData = new FormData();
    const { image, masterLogo, imageLink, role, ...requestValues } = values;
    const data = JSON.stringify({ ...requestValues, businessUserId: id });
    formData.append("master", new Blob([data], { type: "application/json" }));
    image ? formData.append("image", image) : formData.append("image", "");
    masterLogo
      ? formData.append("masterLogo", masterLogo)
      : formData.append("masterLogo", "");
    return formData;
  };

  const dataTransformFromResponse = (values: ResponseData) =>
    ({
      description: values.description || "",
      fullName: values.fullName || "",
      experience: (values.experience as arrayResponse)
        ? (values.experience as arrayResponse).value
        : "",
      language: values.language.map((el) => el.value) || [],
      education: values.education || "",
      countryCode: values.countryCode || "",
      phoneNumber: values.phoneNumber || "",
      email: values.email || "",
      role: values.role || "",
      image: null,
      masterLogo: null,
      imageLink: values.image || "",
      masterLogoLink: values.masterLogo || "",
    } as InitialValue);

  const [languagesData, setLanguagesData] = useState<initialData[]>([]);
  const [experiencesData, setExperiencesData] = useState<initialData[]>([]);
  const [userLanguages, setUserLanguages] = useState<initialData[]>([]);
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !PHONE_NUMBER_NUMBER_REGEX.test(e.key) &&
      e.key !== REMOVE_BTN.backspace &&
      e.key !== REMOVE_BTN.delete
    ) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const languagesData = await masterLanguages();
        setLanguagesData(languagesData);
        const experiencesData = await masterExperiences();
        setExperiencesData(experiencesData);
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMasterID(masterId ? +masterId : null);
    const fetchData = async () => {
      try {
        if (masterID) {
          const masterData = await getMaster(masterID);
          setUserLanguages(masterData.language);
          const dataTransform = dataTransformFromResponse(masterData);
          setMasterInitialValue(dataTransform);
          const masterCategoriesList = await getMasterCategoriesByID(masterID);
          setMasterCategories(masterCategoriesList);
        }
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    };

    fetchData();
  }, [masterID]);

  const navigate = useNavigate();
  const unitRoutes = routes.settings;
  const handleNavigate = (): void => {
    navigate(`${unitRoutes.root}/${unitRoutes.staff.root}`);
  };
  const handleImageDelete = (imageStatus: boolean): void => {
    setIsImageDelete(imageStatus);
  };
  const handleMasterLogoDelete = (imageStatus: boolean): void => {
    setIsMasterLogoDelete(imageStatus);
  };

  const formik = useFormik<InitialValue>({
    initialValues: masterInitialValue,
    enableReinitialize: true,
    validationSchema: masterID ? editMasterValidationSchema : validationSchema,
    onSubmit: async (values) => {
      const requestData = dataTransformForCreateMaster(values, userInfo);
      try {
        masterID
          ? (await updateMaster(requestData, masterID),
            isImageDelete && deleteMasterImages(masterID, "image"),
            isMasterLogoDelete && deleteMasterImages(masterID, "masterLogo"))
          : await createMaster(requestData);
        useNotificationToast({
          type: "success",
        });
        handleNavigate();
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    },
  });

  return (
    <Box sx={styles.formWrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.photoBlockWrapper}>
          <AddPhotoInput
            formik={formik}
            link={formik.initialValues.imageLink}
            id={"image"}
            name={"image"}
            isDelete={handleImageDelete}
          />
          <AddPhotoInput
            formik={formik}
            link={formik.initialValues.masterLogoLink}
            id={"masterLogo"}
            name={"masterLogo"}
            isDelete={handleMasterLogoDelete}
          />
        </Box>
        <Box sx={styles.generalInfoWrapper}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={styles.generalInfoBox}
          >
            <Grid lg={6.5} md={12} xs={12} item sx={styles.contentItem}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Title text="General information" />
                </Grid>
                <Grid item>
                  <Typography sx={styles.userStatus} variant="h5">
                    Master
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={styles.fieldBox}
              >
                <Grid md={5.5} xs={12} item sx={styles.fieldItem}>
                  <Box sx={styles.fieldWrapper}>
                    <MasterFormInput
                      formik={formik}
                      id="fullName"
                      name="fullName"
                      type="fullName"
                      placeholder="Marianna Pshuk"
                      label="Full name*"
                      sx={styles.masterInpup}
                      maxLength={MAX_FULL_NAME}
                    />
                  </Box>
                </Grid>
                <Grid md={5.5} xs={12} item sx={styles.fieldItem}>
                  <Box sx={styles.fieldWrapper}>
                    <SelectInput
                      formik={formik}
                      id="experience"
                      name="experience"
                      label="Experience*"
                      selectValues={experiencesData}
                      placeholder="Select experience"
                    />
                  </Box>
                </Grid>
                <Grid md={12} xs={12} item sx={styles.fieldItem}>
                  <CustomAutocompleteInput
                    formik={formik}
                    options={languagesData}
                    id="language"
                    name="language"
                    placeholder="Select languages"
                    label="Languages"
                    userOptions={userLanguages}
                    maxOptions={10}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid lg={5} md={12} xs={12} item sx={styles.contentItem}>
              <Title text="contact information" />
              <Grid container justifyContent="space-between" gap={3}>
                <Grid
                  item
                  xs={12}
                  md={5.5}
                  lg={12}
                  sx={styles.inputWrapperStyles}
                >
                  <Box sx={styles.phoneWrapper}>
                    <MasterFormInput
                      name="phoneNumber"
                      label="Phone number*"
                      placeholder="___ ___ ___"
                      formik={formik}
                      sx={styles.phoneInput}
                      onKeyDown={onKeyDownHandler}
                      maxLength={MAX_PHONE_LENGTH}
                    />
                    <MasterFormCountryCodeSelect
                      formik={formik}
                      sx={styles.countrySelect}
                      wrapperStyle={styles.countrySelectWrapper}
                      disabled
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5.5}
                  lg={12}
                  sx={styles.inputWrapperStyles}
                >
                  <MasterFormInput
                    id="email"
                    name="email"
                    label="Email*"
                    placeholder="example@domain.com"
                    formik={formik}
                    sx={styles.inputWrapper}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5.5}
                  lg={12}
                  sx={styles.inputWrapperStyles}
                >
                  <Box sx={styles.inputStyles}>
                    <SelectInput
                      formik={formik}
                      id="location"
                      name="location"
                      label="Location*"
                      disabled={true}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={styles.descriptionBox}
        >
          <Grid item lg={4.5} md={12} xs={12}>
            <Grid container sx={styles.descriptionItem}>
              <Grid item xs={12} sx={styles.titelWrapper}>
                <Title text="MY Categories" />
              </Grid>
              <Grid item xs={12} sx={styles.categoriesBlock}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  sx={styles.categoriesItemWrapper}
                >
                  {!!masterCategories.length &&
                    masterCategories.map((e) => (
                      <Grid item key={e.title}>
                        <Chip label={e.value} sx={styles.categoriesItem} />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6.5} md={12} xs={12}>
            <Grid container sx={styles.descriptionItem}>
              <Grid item xs={12}>
                <Title text="About me" />
              </Grid>
              <Grid item xs={12}>
                <TextAreaInput
                  formik={formik}
                  maxCharacters={280}
                  id="description"
                  placeholder="Enter a description..."
                  name="description"
                  label="Description"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={styles.contentItem}>
          <Grid item xs={12}>
            <Title text="Education" />
          </Grid>
          <Grid item xs={12}>
            <TextAreaInput
              formik={formik}
              maxCharacters={1000}
              id="education"
              placeholder="Enter a description..."
              name="education"
              label="Description"
              customStyles={textAreaStyles}
            />
          </Grid>
        </Grid>
        <Grid container sx={styles.masterFormButtonWrapper}>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <Button
                type="submit"
                className="primaryBlack"
                disabled={false}
                sx={styles.masterFormButton}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      {<LeaveBlockModal isBlocked={false} />}
    </Box>
  );
};
