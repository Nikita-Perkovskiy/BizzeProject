import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./FormLayout.styled";
import { FormBanner } from "pages/AuthPage/components/FormBanner/FormBanner";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IFormLayoutProps } from "./FormLayoutTypes";
import { TabletBanner } from "pages/AuthPage/components/TabletBanner/TabletBanner";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsSuccess } from "../../../../features/selectors/authSelectors";

export const FormLayout: FC<IFormLayoutProps> = ({
  formTitle,
  formTitleMobile,
  formComponent,
}) => {
  const breakpoints = useTheme().breakpoints.values;
  const isSuccess = useSelector(selectIsSuccess);

  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg}px)`);
  const isLargeScreen = useMediaQuery(`(min-width: ${breakpoints.md}px)`);
  const isMediumScreen = useMediaQuery(
    `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  );

  return (
    <Box sx={styles.formLayoutContainer}>
      {isDesktop && (
        <Box sx={styles.banner}>
          <FormBanner />
        </Box>
      )}
      {isMediumScreen && (
        <Box>
          <TabletBanner />
        </Box>
      )}
      <Box sx={styles.formContainer}>
        {isLargeScreen ? (
          <Box sx={styles.formTitleContainer}>
            <Typography sx={styles.formTitle}>{formTitle}</Typography>
          </Box>
        ) : (
          <Typography
            sx={
              isSuccess
                ? styles.formTitleMobileInvisible
                : styles.formTitleMobile
            }
          >
            {formTitleMobile}
          </Typography>
        )}
        <Box sx={styles.formBody}>{formComponent}</Box>
      </Box>
    </Box>
  );
};
