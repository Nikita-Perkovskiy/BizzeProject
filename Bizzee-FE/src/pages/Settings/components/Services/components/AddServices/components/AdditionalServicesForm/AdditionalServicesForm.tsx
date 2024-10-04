import { Box, Grid } from "@mui/material";
import { AuthInput } from "pages/Layout/components/AuthInput";
import React, { useEffect } from "react";
import { ReactComponent as BasketIcon } from "assets/svg/basket_icon.svg";
import { IAdditionalServicesFormProps } from "./interface";
import { styles } from "./AdditionalServicesForm.styled";
import { SelectInput } from "pages/Layout/components/SelectInput/SelectInput";
import { useFormik } from "formik";
import { IAdditionalServiceDto } from "../../interface";
import { validationSchema } from "./validationSchema";
import { DEFAULT_CURRENCY } from "config/constants";

export const AdditionalServicesForm: React.FC<IAdditionalServicesFormProps> = ({
  addServiceFormik,
  initialValue,
  deleteFunction,
  isFormOpen,
}) => {
  const formik = useFormik<IAdditionalServiceDto>({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(`submit formik ${initialValue.id}`, formik.values);
    },
  });

  useEffect(() => {
    formik.setValues(initialValue);
  }, [isFormOpen]);

  useEffect(() => {
    const { id } = formik.values;
    const currentArray = addServiceFormik.values.additionalServiceDtos;
    const isItemInArray = currentArray.some((el) => el.id === id);
    const updatedServices = isItemInArray
      ? [...currentArray.filter((el) => el.id !== id), formik.values]
      : [...currentArray, formik.values];

    addServiceFormik.setFieldValue("additionalServiceDtos", updatedServices);
  }, [formik.values]);

  return (
    <Grid
      container
      alignItems="flex-end"
      sx={styles.additionalServicesFormWrapper}
    >
      <Grid item md={6} xs={12}>
        <AuthInput
          formik={formik}
          label="Option Title"
          sx={styles.optionInputWrapper}
          name="title"
          id="title"
          placeholder="Enter the additional service name"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <Grid
          container
          alignItems="flex-end"
          justifyContent="space-between"
          sx={styles.optionsWrapper}
        >
          <Grid item xs={5}>
            <AuthInput
              formik={formik}
              label="Price"
              sx={styles.optionInputWrapper}
              name="price"
              id="price"
            />
          </Grid>
          <Grid item xs={5}>
            <SelectInput
              formik={formik}
              name="currency"
              id="currency"
              label="Currency"
              placeholder={DEFAULT_CURRENCY}
              disabled={true}
            />
          </Grid>
          <Grid item xs={2}>
            <Grid container justifyContent="flex-end">
              <Box sx={styles.basketIconWrapper}>
                <Box
                  sx={styles.basketIcon}
                  onClick={() => deleteFunction(initialValue.id as string)}
                >
                  <BasketIcon />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
