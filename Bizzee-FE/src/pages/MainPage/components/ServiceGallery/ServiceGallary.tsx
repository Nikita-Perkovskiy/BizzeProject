import {
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styles } from "./ServiceGallary.styled";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper";
import { SlideNextButtons } from "./components/SwiperButtons";
import { servicesImageArray } from "./constants";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";

export const ServiceGallary = () => {
  const isTabletScreen = useMediaQuery("(min-width: 768px)");
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const swiperRef = useRef(null);

  return (
    <Container sx={styles.wrapperBlock}>
      <Box sx={styles.gallaryWrapper}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={15}
          slidesPerView="auto"
          centeredSlides
          initialSlide={isLargeScreen ? 2 : 1}
          allowTouchMove={!isTabletScreen}
        >
          {servicesImageArray.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <CardMedia
                component="img"
                image={item.image}
                sx={styles.slideWrapper}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide style={{ width: "400px" }}>
            <Box sx={styles.moreBlock}>
              <Typography sx={styles.seeMoreText}>
                Check out even more special offers
              </Typography>
              <Button sx={styles.seeMoreBtn} className="primaryBlack">
                See More
                <Box sx={styles.buttonShevron}>
                  <Chevron />
                </Box>
              </Button>
            </Box>
          </SwiperSlide>
          {isTabletScreen && <SlideNextButtons swiperRef={swiperRef} />}
        </Swiper>
      </Box>
    </Container>
  );
};
