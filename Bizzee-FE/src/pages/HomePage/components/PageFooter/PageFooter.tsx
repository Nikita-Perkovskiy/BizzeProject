import React, { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "./PageFooter.styled";
import { ReactComponent as MobileRectangleSvg } from "assets/svg/footer-mobile-rectangles.svg";
import { ReactComponent as TabletRectangleSvg } from "assets/svg/footer-tablet-rectangles.svg";
import { Logo } from "pages/Layout/components/Logo";
import { NavLinksMenu } from "components/NavLinksMenu";
import {
  footerMenuItems,
  footerSupportMenuItems,
} from "pages/Layout/constants";

export const PageFooter: FC = () => {
  return (
    <Box sx={styles.contentWrapperStyles} component="footer">
      <MobileRectangleSvg className="rectangle" />
      <TabletRectangleSvg className="tablet-rectangle" />
      <Container>
        <Box sx={styles.footerSectionStyles}>
          <Box sx={styles.footerWrapper}>
            <Box sx={styles.textContainer}>
              <Box sx={styles.logoWrapper}>
                <Logo sx={styles.logo} />
              </Box>
              <Typography sx={styles.mainText}>
                We value your time, so we strive to offer you only the highest
                quality of services
              </Typography>
            </Box>
            <NavLinksMenu menuItems={footerMenuItems} sx={styles.menu} />
          </Box>
          <NavLinksMenu
            menuItems={footerSupportMenuItems}
            sx={styles.supportMenu}
          />
        </Box>
      </Container>
    </Box>
  );
};
