import { Grid } from "@mui/material";
import { AuthInput } from "pages/Layout/components/AuthInput";
import React, { useEffect, useState } from "react";
import { styles } from "./PriceForm.styled";
import { IPriceFormProps } from "./interface";
import { SelectInput } from "pages/Layout/components/SelectInput/SelectInput";
import { DEFAULT_CURRENCY } from "config/constants";

export const PriceForm: React.FC<IPriceFormProps> = ({
  formik,
  priceOptions,
  timeOptions,
}) => {
  const [priceType, setPriceType] = useState<string>("");

  useEffect(() => {
    if (typeof formik.values.priceType === "string") {
      const currentType = formik.values.priceType?.toUpperCase();
      setPriceType(currentType);
    }
  }, [formik.values.priceType]);

  useEffect(() => {
    if (priceType !== "FROM") {
      formik.setFieldValue("priceMax", "");
      formik.setFieldValue("priceMin", "");
    } else if (priceType === "FROM") {
      formik.setFieldValue("price", "");
    }
  }, [priceType]);

  return (
    <Grid container sx={styles.priceFormWrapper}>
      <Grid item md={7} xs={7} sx={styles.itemLeftWrapper}>
        <SelectInput
          formik={formik}
          name="priceType"
          id="priceType"
          label="Price type"
          placeholder="Fixed"
          selectValues={priceOptions}
        />
      </Grid>
      <Grid item md={4} xs={5} sx={styles.itemRightWrapper}>
        <SelectInput
          formik={formik}
          name="priceCurrency"
          id="priceCurrency"
          label="Currency"
          placeholder={DEFAULT_CURRENCY}
          disabled={true}
        />
      </Grid>

      {priceType !== "FROM" ? (
        <Grid item md={12} xs={12}>
          <AuthInput
            formik={formik}
            name="price"
            id="price"
            label="Price"
            placeholder="Enter price"
            sx={styles.inputWrapper}
          />
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Grid container>
            <Grid item md={6} xs={6} sx={styles.itemLeftWrapper}>
              <AuthInput
                formik={formik}
                name="priceMin"
                id="priceMin"
                label="Price (min)"
                placeholder="45"
              />
            </Grid>
            <Grid item md={6} xs={6} sx={styles.itemRightWrapper}>
              <AuthInput
                formik={formik}
                name="priceMax"
                id="priceMax"
                label="Price (max)"
                placeholder="90"
              />
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item xs={12}>
        <SelectInput
          formik={formik}
          name="duration"
          id="duration"
          label="Duration"
          placeholder="Please select the duration"
          selectValues={timeOptions}
        />
      </Grid>
    </Grid>
  );
};
