import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./SuccessMessage.styled";
import { ReactComponent as DoneIllustration } from "assets/svg/done_illustration.svg";
import { ISuccessMessageProps, startPageByRole } from "./constants";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setIsSuccess } from "features/auth/actions";
import { useTypedDispatch } from "store";

export const SuccessMessage: FC<ISuccessMessageProps> = ({
  successText,
  successButtonText,
  role,
}) => {
  const breakpoints = useTheme().breakpoints.values;
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md - 1}px)`);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setIsSuccess(false));
    navigate(startPageByRole[role as string] || "/");
  };

  return (
    <Box sx={styles.successContainer}>
      <Box sx={styles.successIcon}>
        <DoneIllustration
          width={isMobile ? "155px" : "200px"}
          height={isMobile ? "155px" : "200px"}
        />
      </Box>
      <Typography sx={styles.successTitle}>Success</Typography>
      <Typography sx={styles.successContent}>{successText}</Typography>
      <Button
        sx={styles.successButton}
        className="primaryYellow"
        onClick={handleClick}
      >
        {successButtonText}
      </Button>
    </Box>
  );
};
