import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { styles } from "./OurAdvantages.styled";
import calendar from "assets/images/MainPage/Advantages/calendar.jpg";
import telephone from "assets/images/MainPage/Advantages/telephone.jpg";
import base from "assets/images/MainPage/Advantages/base.jpg";
export const OurAdvantages = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <Box sx={styles.blockWrapper(isLargeScreen)}>
      <Typography variant={"h3"} sx={styles.blockTitle}>
        Our Advantages
      </Typography>
      <Box>
        <Grid
          container
          columnSpacing={{ md: "16px", lg: "20px" }}
          rowSpacing={{ xs: "20px" }}
        >
          <Grid item xs={12} md={4} sx={styles.gridWrapper}>
            <Box sx={styles.blockCard}>
              <Box className="blockImages" sx={styles.blockImages}>
                <Box className="containerImage" sx={styles.containerImage}>
                  <Box
                    component="img"
                    className="imageCalendar"
                    sx={styles.imageCalendar}
                    src={calendar}
                  />
                  <Box
                    component="img"
                    className="imagePhone"
                    sx={styles.imagePhone}
                    src={telephone}
                  />
                </Box>
              </Box>

              <Box sx={styles.blockText}>
                <Box className="textTitle" sx={styles.textTitle}>
                  Convient Calendar
                </Box>
                <Typography sx={styles.textDescription}>
                  From now on, your entire schedule with information about
                  services, masters, and clients is in one place!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={styles.gridWrapper}>
            <Box sx={styles.blockCard}>
              <Box className="blockImages" sx={styles.blockImages}>
                <Box className="containerImage" sx={styles.containerImage}>
                  <Box
                    component="img"
                    className="imageBase"
                    sx={styles.imageBase}
                    src={base}
                  />
                </Box>
              </Box>

              <Box sx={styles.blockText}>
                <Box className="textTitle" sx={styles.textTitle}>
                  Customer Base
                </Box>
                <Typography sx={styles.textDescription}>
                  From now on, your entire schedule with information about
                  services, masters, and clients is in one place!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={styles.gridWrapper}>
            <Box sx={styles.blockCard}>
              <Box className="blockImages" sx={styles.blockImages}>
                <Box className="containerImage" sx={styles.containerImage}>
                  <Box sx={styles.containterPhones}>
                    <Box
                      component="img"
                      className="imagePhonesFirst"
                      sx={styles.imagePhonesFirst}
                      src={telephone}
                    />
                    <Box
                      component="img"
                      className="imagePhonesSecond"
                      sx={styles.imagePhonesSecond}
                      src={telephone}
                    />
                  </Box>
                </Box>
              </Box>

              <Box sx={styles.blockText}>
                <Box className="textTitle" sx={styles.textTitle}>
                  User-Friendly App
                </Box>
                <Typography sx={styles.textDescription}>
                  From now on, your entire schedule with information about
                  services, masters, and clients is in one place!
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
