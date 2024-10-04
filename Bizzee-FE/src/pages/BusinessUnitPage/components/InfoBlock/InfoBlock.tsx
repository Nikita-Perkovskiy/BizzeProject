import React, { useEffect, useState } from "react";
import imageMap from "assets/images/ContactBlock/map-contact-info.jpg";
import { styles } from "./InfoBlock.styled";
import { ContactBlock } from "./components/ContactBlock";
import { Avatar, Box } from "@mui/material";
import { WorkingHoursBlock } from "./components/WorkingHoursBlock";
import { SocialMedia } from "../AboutBusiness/components/SocialMedia";
import { useParams } from "react-router-dom";
import { getBusinessUnit } from "api/BusinessUnits/getBusinessUnit";
import { setCategoryAction } from "features/businessUnit/actions";
import { useNotificationToast } from "hooks/useNotificationToast";
import { useTypedDispatch } from "store";
import { IBusinessInfoSectionTypes } from "../AboutBusiness/types";

export const InfoBlock = () => {
  const [businessInfoData, setBusinessInfoData] =
    useState<IBusinessInfoSectionTypes | null>(null);
  const unitId = useParams();
  const dispatch = useTypedDispatch();

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
    <Box sx={styles.wrapperBlock}>
      <Box sx={styles.imageBlock}>
        <Avatar src={imageMap} alt="image-map" sx={styles.imageMap} />
      </Box>
      <Box sx={styles.infoWrapper}>
        <Box sx={styles.workingWrapper}>
          <WorkingHoursBlock />
        </Box>
        <Box sx={styles.contactWrapper}>
          <ContactBlock contactInfo={businessInfoData} />
          <SocialMedia />
        </Box>
      </Box>
    </Box>
  );
};
