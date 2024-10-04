import React, { FC } from "react";
import { Box, Card, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import {
  IScreensSliderProps,
  defaultAutoplay,
  defaultBreakpoints,
  defaultCoverflowEffect,
  defaultSpeed,
} from "./constants";

export const ScreensSlider: FC<IScreensSliderProps> = ({
  sliderStyles,
  slidesConfig,
  className,
  dir,
  spaceBetween,
  speed = defaultSpeed,
  autoplay = defaultAutoplay,
  coverflowEffect = defaultCoverflowEffect,
  breakpoints = defaultBreakpoints,
}) => {
  return (
    <Box sx={sliderStyles.sliderContainer}>
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        slidesPerView="auto"
        loop
        allowTouchMove={false}
        className={className}
        spaceBetween={spaceBetween}
        dir={dir}
        coverflowEffect={coverflowEffect}
        speed={speed}
        autoplay={autoplay}
        breakpoints={breakpoints}
      >
        {slidesConfig.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Card sx={sliderStyles.photoCard}>
              <CardMedia
                component="img"
                image={slide.image}
                sx={{ height: "100%" }}
                title={slide.title}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
