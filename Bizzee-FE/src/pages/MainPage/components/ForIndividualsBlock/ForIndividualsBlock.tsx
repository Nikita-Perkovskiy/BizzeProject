import React from "react";
import { styles } from "./ForIndividualsBlock.styled";
import { Box, CardMedia, ListItemText, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Title } from "components/Title/Title";
import mainAppScreen from "./images/main-img.png";
import mainAppScreenTablet from "./images/main-img-tablet.png";
import { forIndividualsListImages, forIndividualsTextItems } from "./constants";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import { Swiper, SwiperSlide } from "swiper/react";
import { ButtonAnimationArrow } from "../AnimatedTextBlock/components/ButtonAnimationArrow/ButtonAnimationArrow";

export const ForIndividualsBlock = () => {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isDesktopScreen = useMediaQuery("(min-width: 1920px)");

  const navigate = useNavigate();

  return (
    <Box sx={styles.blockFon}>
      <Box sx={styles.blockWrapper(isLargeScreen)}>
        <Title text="For Individuals" sx={styles.title(isLargeScreen)} />
        <Box sx={styles.mainContentWrap(isLargeScreen)}>
          <Box>
            <Typography sx={styles.text}>
              Discovering, comparing and booking personalized services
              effortlessly on a user-friendly platform. Experiences are tailored
              to individual preferences with intuitive recommendations.
            </Typography>
            <Typography sx={styles.text}>
              Engaging with an easy, quick booking system via mobile/web, an
              interactive interface, digital loyalty rewards, and flexible
              payment methods.
            </Typography>
            <ButtonAnimationArrow
              className="primaryBlack"
              text="Sign Up"
              sx={styles.signUpButton}
              color={styles.signUpButton.color}
              onClick={() =>
                navigate(`${routes.auth.root}/${routes.auth.signup}/client`)
              }
            />
          </Box>
          <Box sx={styles.imageWrap(isLargeScreen)}>
            <CardMedia
              component="img"
              image={
                isDesktopScreen || isMobileScreen
                  ? mainAppScreen
                  : mainAppScreenTablet
              }
              alt="Application screen"
            />
          </Box>
        </Box>
        <Box sx={styles.animationBlockWrap(isLargeScreen)}>
          <Box sx={styles.animationImgBlockWrap(isLargeScreen)}>
            <Swiper slidesPerView={1}>
              {forIndividualsListImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <CardMedia
                    component="img"
                    image={image.img(isDesktopScreen)}
                    alt={image.alt}
                    sx={styles.forBusinessImg(isLargeScreen)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box sx={styles.animationTextBlockWrap(isLargeScreen)}>
            <Swiper spaceBetween={20} slidesPerView={isMobileScreen ? 1 : 3}>
              {forIndividualsTextItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <ListItemText primary={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
            <ButtonAnimationArrow
              className="primaryBlack"
              text="Sign Up"
              sx={{
                ...styles.signUpButton,
                ...styles.signUpButtonHide(isMobileScreen),
              }}
              color={styles.signUpButton.color}
              onClick={() =>
                navigate(`${routes.auth.root}/${routes.auth.signup}/client`)
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
