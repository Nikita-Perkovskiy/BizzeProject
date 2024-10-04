import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { ReactComponent as LogoGoldIcon } from "assets/svg/logo_main._gold.svg";
import { ReactComponent as FacebookLogoIcon } from "assets/svg/logo_faceBook.svg";
import { ReactComponent as InstagramLogoIcon } from "assets/svg/logo_Instagram.svg";
import React from "react";
import { styles } from "./FooterBlock.styled";
import { contactsLinks, documentationLinks, pagesLink } from "./constants";
import { NavLinksMenu } from "components/NavLinksMenu";
import { HoverableIcon } from "components/HoverableIcon/HoverableIcon";
import { colors } from "config/styles/themeColors";

export const FooterBlock = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <Box sx={styles.blockFon}>
      <Box sx={styles.blockWrapper(isLargeScreen)}>
        <Box sx={styles.mainBlock}>
          <Grid container gap={2} sx={styles.infoContainer}>
            <Grid item>
              <Grid container sx={styles.contentBoxLogo}>
                <Grid item>
                  <LogoGoldIcon />
                </Grid>
                <Grid item>
                  <Typography sx={styles.logoText}>
                    We value your time, so we strive to offer you only the
                    highest quality of services.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container sx={styles.mainInfoBox} gap={2}>
                <Grid item sx={styles.contentWrapper}>
                  <Grid container sx={styles.contentBox}>
                    {pagesLink.map((link) => (
                      <Grid item key={link.title}>
                        <Typography sx={styles.pageLink}>
                          {link.title}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container sx={styles.contactsWrapper} gap={2}>
                    <Grid item sx={styles.firstGridItem}>
                      <Grid container sx={styles.contentBoxItem}>
                        <Grid item>
                          <Typography sx={styles.contentItem}>
                            Documentation
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NavLinksMenu
                            menuItems={documentationLinks}
                            sx={styles.menus}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sx={styles.secondGridItem}>
                      <Grid container sx={styles.contentBoxItem} gap={2}>
                        <Grid item>
                          <Typography sx={styles.contentItem}>
                            Contacts
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NavLinksMenu
                            menuItems={contactsLinks}
                            sx={styles.menus}
                          />
                        </Grid>
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={styles.iconWrapper}
                            gap={1}
                          >
                            <Grid item sx={styles.icon}>
                              <HoverableIcon
                                Icon={FacebookLogoIcon}
                                primaryColor={colors.text.subContent}
                                hoverColor={colors.accents.main}
                              />
                            </Grid>
                            <Grid item sx={styles.icon}>
                              <HoverableIcon
                                Icon={InstagramLogoIcon}
                                primaryColor={colors.text.subContent}
                                hoverColor={colors.accents.main}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
