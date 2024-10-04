import { Box, useMediaQuery } from "@mui/material";
import { Swiper as SwiperType } from "swiper";
import React, { FC, useEffect, useState } from "react";
import { styles } from "../ServiceGallary.styled";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";

export const SlideNextButtons = ({ swiperRef }: any) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const slidesToScroll = isLargeScreen ? 3 : 1;

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const updateButtonStates = () => {
        setCanScrollPrev(swiper.activeIndex >= slidesToScroll);
        setCanScrollNext(
          swiper.activeIndex + slidesToScroll < swiper.slides.length,
        );
      };

      updateButtonStates();
      swiper.on("slideChange", updateButtonStates);
      return () => {
        swiper.off("slideChange", updateButtonStates);
      };
    }
    return undefined;
  }, [swiperRef, slidesToScroll]);

  const handlePrev = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      if (swiper.activeIndex >= slidesToScroll) {
        swiper.slideTo(swiper.activeIndex - slidesToScroll);
      }
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      if (swiper.activeIndex + slidesToScroll < swiper.slides.length) {
        swiper.slideTo(swiper.activeIndex + slidesToScroll);
      }
    }
  };
  return (
    <Box sx={styles.wrapperButtons(isLargeScreen)}>
      <Box
        onClick={handlePrev}
        sx={[
          styles.chevronLeft,
          styles.wrapperButton,
          !canScrollPrev && styles.disabledButton,
        ]}
      >
        <Chevron />
      </Box>
      <Box
        onClick={handleNext}
        sx={[
          styles.chevronRight,
          styles.wrapperButton,
          !canScrollNext && styles.disabledButton,
        ]}
      >
        <Chevron />
      </Box>
    </Box>
  );
};
