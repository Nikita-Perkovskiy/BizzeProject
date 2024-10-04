import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useNotificationToast } from "hooks/useNotificationToast";
import { IBusinessInfoSectionTypes } from "./types";
import { BusinessInfoSection } from "./components/BusinessInfoSection";
import { styles } from "./AboutBusiness.styled";
import { getBusinessUnit } from "api/BusinessUnits/getBusinessUnit";
import { setCategoryAction } from "features/businessUnit/actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const AboutBusiness = () => {
  const [businessInfoData, setBusinessInfoData] =
    useState<IBusinessInfoSectionTypes | null>(null);
  const dispatch = useDispatch();
  const unitId = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getBusinessUnit(Number(unitId.unitId));
        dispatch(setCategoryAction(data.category));
        setBusinessInfoData(data);
      } catch (e) {
        useNotificationToast({ type: "error" });
      }
    })();
  }, []);

  return (
    <Box sx={styles.aboutBusinessWrapper}>
      <BusinessInfoSection businessInfoData={businessInfoData} />
    </Box>
  );
};
