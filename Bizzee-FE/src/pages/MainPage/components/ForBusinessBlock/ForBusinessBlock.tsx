import React from "react";
import { styles } from "./ForBusinessBlock.styled";
import {
  Box,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Title } from "components/Title/Title";
import { ReactComponent as AccentEllipse } from "assets/svg/ellipse-accent-icon.svg";
import mainAppScreen from "./images/main-img.png";
import mainAppScreenTablet from "./images/main-img-tablet.png";
import {
  forBusinessListImages,
  forBusinessTextItems,
  listItemTitles,
} from "./constants";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import { Swiper, SwiperSlide } from "swiper/react";
import { ButtonAnimationArrow } from "../AnimatedTextBlock/components/ButtonAnimationArrow/ButtonAnimationArrow";

export const ForBusinessBlock = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isTabletScreen = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)",
  );
  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  const navigate = useNavigate();

  return (
    <Box sx={styles.blockFon}>
      <Box sx={styles.blockWrapper(isLargeScreen)}>
        <Title text="For Business" sx={styles.title(isLargeScreen)} />
        <Box sx={styles.mainContentWrap(isLargeScreen)}>
          <Box>
            <Typography sx={styles.text}>
              Automating tasks, refining recruitment and growing with scalable
              solutions, client services elevated through AI-driven
              personalization.
            </Typography>
            <Typography sx={styles.text}>
              Features include intuitive scheduling, financial analytics,
              inventory management, client relationship tools, marketing support
              and integrated payment processing.
            </Typography>
            <ButtonAnimationArrow
              className="primaryYellow"
              text="Sign Up"
              sx={styles.signUpButton}
              color={styles.signUpButton.color}
              onClick={() =>
                navigate(`${routes.auth.root}/${routes.auth.signup}/business`)
              }
            />
            <Box sx={styles.cardWrap}>
              <Typography component="h4" sx={styles.cardTitle}>
                Management of all work processes
              </Typography>
              <List sx={styles.cardList}>
                {listItemTitles.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemIcon>
                      <AccentEllipse />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box sx={styles.imageWrap(isLargeScreen)}>
            <CardMedia
              component="img"
              image={isTabletScreen ? mainAppScreenTablet : mainAppScreen}
              alt="Application screen"
            />
          </Box>
        </Box>
        <Box sx={styles.animationBlockWrap(isLargeScreen)}>
          <Box sx={styles.animationImgBlockWrap(isLargeScreen)}>
            <Swiper slidesPerView={1}>
              {forBusinessListImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <CardMedia
                    component="img"
                    image={image.img}
                    alt={image.alt}
                    sx={styles.forBusinessImg(isLargeScreen)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box sx={styles.animationTextBlockWrap(isLargeScreen)}>
            <Swiper spaceBetween={20} slidesPerView={isMobileScreen ? 1 : 3}>
              {forBusinessTextItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <ListItemText primary={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
            <ButtonAnimationArrow
              className="primaryYellow"
              text="Sign Up"
              sx={{
                ...styles.signUpButton,
                ...styles.signUpButtonHide(isMobileScreen),
              }}
              color={styles.signUpButton.color}
              onClick={() =>
                navigate(`${routes.auth.root}/${routes.auth.signup}/business`)
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
