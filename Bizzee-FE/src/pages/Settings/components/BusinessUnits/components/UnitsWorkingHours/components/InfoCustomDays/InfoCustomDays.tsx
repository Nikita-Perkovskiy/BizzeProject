import React, { FC, useState } from "react";
import { ReactComponent as InfoIcon } from "assets/svg/about-app__desktop.svg";
import { Box } from "@mui/material";
import { styles } from "./InfoCustomDays.styled";
import { TypeOfDays } from "./components/TypeOfDays";

export const InfoCustomDays: FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Box
      sx={styles.wrapperInfo}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <InfoIcon />
      {showInfo && (
        <Box sx={styles.infoBox}>
          <TypeOfDays />
        </Box>
      )}
    </Box>
  );
};
