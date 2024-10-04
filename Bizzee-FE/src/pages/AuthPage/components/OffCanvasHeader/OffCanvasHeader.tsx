import React, { FC } from "react";
import { Box } from "@mui/material";
import { styles } from "./OffCanvasHeader.styled";
import { IOffCanvasHeaderProps } from "./OffCanvasHeaderTypes";
import { ReactComponent as Close } from "assets/svg/close-icon.svg";
import { ReactComponent as ChevronLeft } from "assets/svg/icon_chevron.svg";
import { Logo } from "../../../Layout/components/Logo";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import { selectIsSuccess } from "../../../../features/selectors/authSelectors";

export const OffCanvasHeader: FC<IOffCanvasHeaderProps> = ({
  handleDrawerClose,
  handleDrawerBack,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isSuccess = useSelector(selectIsSuccess);

  return (
    <Box sx={styles.drawerHeader}>
      <Box sx={isSuccess ? styles.closeIconInvisible : styles.closeIcon}>
        {isMobile ? (
          <ChevronLeft
            style={{ transform: "rotate(90deg)" }}
            onClick={handleDrawerBack}
          />
        ) : (
          <Close onClick={handleDrawerClose} />
        )}
      </Box>
      {isLargeScreen && (
        <Box sx={styles.drawerLogo}>
          <Logo />
        </Box>
      )}
    </Box>
  );
};
