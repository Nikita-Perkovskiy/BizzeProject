import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styles } from "./AddServicesForm.styled";
import { useFormik } from "formik";
import {
  InitialValues,
  serviceLocationInitialOptions,
  priceTypeInitialOptions,
  servicesInitialData,
} from "./AddServicesForm.initialValues";
import { AuthInput } from "pages/Layout/components/AuthInput";
import {
  IAddServicesFormValues,
  IAdditionalServiceDto,
  IDataFromResponse,
  IserviceFormProps,
} from "./interface";
import { TextAreaInput } from "pages/Layout/components/TextAreaInput/TextAreaInput";
import { RadioButtonMenu } from "pages/Layout/components/RadioButtonMenu/RadioButtonMenu";
import { PriceForm } from "./components/PriceForm/PriceForm";
import { AdditionalServicesForm } from "./components/AdditionalServicesForm/AdditionalServicesForm";
import { CreateButton } from "components/CreateButton/CreateButton";
import { v4 as uuidv4 } from "uuid";
import { ADDITIONAL_SERVICE_DTOS_LENGTH } from "./constants";
import { validationSchema } from "./validationSchema";
import { createProcedures } from "api/Services/creatProcedures";
import { getProceduresDuration } from "api/Services/getProceduresDuration";
import { IUserProfile } from "api/constants";
import { customTextAreaStyles } from "./AddServicesFrom.customStyled";
import { MainModal } from "components/MainModal";
import { useNotificationToast } from "hooks/useNotificationToast";
import {
  arrayResponse,
  initialData,
} from "pages/Settings/components/StaffMembers/components/MasterForm/interface";
import { MultiselectAutocomplete } from "components/MultiselectAutocomplete/MultiselectAutocomplete";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";
import { getBusinessUnitsCategories } from "api/BusinessUnits/getBusinessUnitsCategories";
import { getServiceById } from "api/Services/getServiceById";
import { updateService } from "api/Services/updateService";

export const AddServicesForm: React.FC<IserviceFormProps> = ({
  handleForm,
  isFormOpen,
  isLeaveModalOpen,
  handleLeaveModal,
  procedureId = null,
}) => {
  const [isCleanData, setIisCleanData] = useState<boolean>(false);
  const [categoriesData, setCategoriesData] = useState<arrayResponse[]>([]);
  const [duration, setDuration] = useState<initialData[]>([]);
  const [additionalServiceDtos, setAdditionalServiceDtos] =
    useState<IAdditionalServiceDto[]>(servicesInitialData);
  const [additionalServicesData, setAdditionalServicesData] =
    useState<IAddServicesFormValues>(InitialValues);

  const dataTransformResponse = (
    value: IDataFromResponse,
  ): IAddServicesFormValues => ({
    category: value.category?.title || "",
    title: value.title || "",
    description: value.description || "",
    location: value.location?.value || "",
    priceType: value.priceType?.title || "",
    priceMin: value.priceMin || "",
    priceMax: value.priceMax || "",
    price: value.price?.toString() || "",
    currency: value.currency || "",
    duration: value.duration?.value || "",
    additionalServiceDtos:
      value.additionalServiceDtos.map((service) => ({
        title: service.optionTitle,
        price: service.price,
        id: uuidv4(),
      })) || [],
    businessUnitsId: value.businessUnitsId || [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getBusinessUnitsCategories();
        setCategoriesData(categoriesData);
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    };
    fetchData();
  }, []);

  const handelCleanData = () => {
    setIisCleanData((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const durationData = await getProceduresDuration();
        setDuration(durationData);
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    };
    fetchData();
  }, []);

  const dataTransformForRequest = (values: IAddServicesFormValues) => {
    const { additionalServiceDtos, category, priceType, ...addServiceData } =
      values;
    const cleanAdditionalServiceDtos = additionalServiceDtos.map((service) => ({
      optionTitle: service.title,
      price: service.price,
    }));
    const categoryRequestForm =
      typeof category === "string" ? category.toUpperCase() : category;
    const priceTypeRequestForm =
      typeof priceType === "string" ? priceType.toUpperCase() : priceType;
    const combinedRequestData = {
      ...addServiceData,
      category: categoryRequestForm,
      priceType: priceTypeRequestForm,
      additionalServiceDtos: cleanAdditionalServiceDtos,
    };
    return combinedRequestData;
  };

  const formik = useFormik<IAddServicesFormValues>({
    initialValues: additionalServicesData,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const requestData = dataTransformForRequest(values);
      try {
        procedureId
          ? await updateService(
              requestData as unknown as IUserProfile,
              procedureId,
            )
          : await createProcedures(requestData as unknown as IUserProfile);
        useNotificationToast({
          type: "success",
        });
        formik.resetForm();
        setAdditionalServiceDtos(servicesInitialData);
        handleForm();
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    },
  });

  useEffect(() => {
    formik.setValues(InitialValues);
  }, [isFormOpen]);

  useEffect(() => {
    if (procedureId) {
      const fetchData = async () => {
        try {
          const serviceData = await getServiceById(procedureId as number);
          const transformData = dataTransformResponse(serviceData);
          setAdditionalServicesData(transformData);
          setAdditionalServiceDtos(transformData.additionalServiceDtos);
        } catch (error) {
          useNotificationToast({ type: "error" });
        }
      };
      fetchData();
    }
  }, [procedureId]);

  const handleSetAdditionalServiceDto = () => {
    const newItem: IAdditionalServiceDto = {
      title: "",
      price: "",
      id: uuidv4(),
    };

    additionalServiceDtos.length < ADDITIONAL_SERVICE_DTOS_LENGTH
      ? setAdditionalServiceDtos((prevItems) => [...prevItems, newItem])
      : null;
  };

  const handleDeleteItem = (itemId: string) => {
    const updatedState = additionalServiceDtos.filter(
      (item) => item.id !== itemId,
    );
    setAdditionalServiceDtos(updatedState);
    const updatedFormikValue = formik.values.additionalServiceDtos.filter(
      (item) => item.id !== itemId,
    );
    formik.setFieldValue("additionalServiceDtos", updatedFormikValue);
  };

  const handleCombineCloseModals = () => {
    formik.resetForm();
    setAdditionalServiceDtos(servicesInitialData);
    handelCleanData();
    handleForm();
    handleLeaveModal();
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ ...styles.formWrapper }}>
          <Grid container sx={styles.contentWrapper}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={styles.serviceHeaderWrapper}
            >
              <Typography variant="h1" sx={styles.serviceHeader}>
                Add Services
              </Typography>
            </Grid>
            <Grid item xs={12} sx={styles.contentBlock}>
              <Grid container sx={styles.contentWrapper}>
                <Grid item xs={12}>
                  <Box sx={styles.headerContent}>
                    <Title text="General Information" />
                    <Subtitle text="Please enter information about your new service" />
                  </Box>
                </Grid>
                <Grid container>
                  <Grid item md={6} xs={12}>
                    <Grid container sx={styles.titleContainer}>
                      <Grid item md={12} sm={6} xs={12} sx={styles.titleItem}>
                        <AuthInput
                          formik={formik}
                          label="Service title*"
                          sx={styles.inputWrapper}
                          name="title"
                          id="title"
                          placeholder="Enter the Service title"
                        />
                      </Grid>
                      <Grid item md={12} sm={6} xs={12} sx={styles.titleItem}>
                        <MultiselectAutocomplete
                          formik={formik}
                          label="Category*"
                          name="category"
                          id="category"
                          placeholder="Please select the Category"
                          options={categoriesData}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextAreaInput
                      formik={formik}
                      name="description"
                      label="Description"
                      placeholder="Say something about your service..."
                      id="description"
                      customStyles={customTextAreaStyles}
                      maxCharacters={150}
                      isCleanCounter={isCleanData}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container sx={styles.priceBlockWrapper}>
              <Grid item md={6} xs={12} sx={styles.serviceWrapper}>
                <Box sx={styles.contentBlock}>
                  <Grid item xs={12}>
                    <Typography variant="h3" sx={styles.contentBlockHeader}>
                      Service Location
                    </Typography>
                    <Typography sx={styles.contentBlockTitle}>
                      Please choose location details
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <RadioButtonMenu
                      formik={formik}
                      name="location"
                      id="location"
                      options={serviceLocationInitialOptions}
                    />
                  </Grid>
                </Box>
              </Grid>
              <Grid item md={6} xs={12} sx={styles.priceWrapper}>
                <Box sx={styles.contentBlock}>
                  <Grid item xs={12}>
                    <Typography variant="h3" sx={styles.contentBlockHeader}>
                      Price
                    </Typography>
                    <Typography sx={styles.contentBlockTitle}>
                      Please enter price details
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceForm
                      formik={formik}
                      priceOptions={priceTypeInitialOptions}
                      timeOptions={duration}
                    />
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={styles.contentBlock}>
              <Grid container>
                <Grid item md={10} xs={12}>
                  <Typography variant="h3" sx={styles.contentBlockHeader}>
                    ADDITIONAL SERVICES
                  </Typography>
                  <Typography sx={styles.contentBlockTitle}>
                    Please enter information about your additoinal services
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={styles.createButtonTopWrapper}>
                  <CreateButton
                    toggleFunction={handleSetAdditionalServiceDto}
                  />
                </Grid>
              </Grid>
              {additionalServiceDtos.map((el) => (
                <Grid
                  item
                  xs={12}
                  key={el.id as string}
                  sx={styles.additionalServicesWrapper}
                >
                  <AdditionalServicesForm
                    addServiceFormik={formik}
                    initialValue={el}
                    deleteFunction={handleDeleteItem}
                    isFormOpen={isFormOpen}
                  />
                </Grid>
              ))}
              <Grid item xs={12} sx={styles.createButtonFooterWrapper}>
                <CreateButton toggleFunction={handleSetAdditionalServiceDto} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={styles.buttonBlockWrapper}>
            <Grid item sx={styles.buttonWrapper}>
              <Button
                disabled={false}
                sx={styles.cancelButton}
                onClick={handleLeaveModal}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item sx={styles.buttonWrapper}>
              <Button
                type="submit"
                className="primaryBlack"
                sx={styles.addButton}
                disabled={!formik.isValid || !formik.dirty}
              >
                {procedureId ? "Save" : "Add"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
      <MainModal
        openModal={isLeaveModalOpen}
        zIndex={1700}
        titleMessage={"are you sure?"}
        bodyMessage={"Do you really want to leave this page"}
        modalClose={handleLeaveModal}
        handleAction={handleCombineCloseModals}
        buttonMessage="Leave"
        secondBtnMessage="Cancel"
      />
    </>
  );
};
